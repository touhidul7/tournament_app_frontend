import React, { useEffect, useState } from "react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("deposits");
  const [depositData, setDepositData] = useState({ deposits: [], total_deposit: 0 });
  const [withdrawData, setWithdrawData] = useState({ withdraw_requests: [] });
  const [isLoading, setIsLoading] = useState({ deposits: false, withdraw: false });
  const [error, setError] = useState({ deposits: null, withdraw: null });
  
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const tabs = [
    { name: "Deposits", value: "deposits" },
    { name: "Withdraw", value: "withdraw" },
  ];
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* Fetch User Deposits */
  const loadUserDeposits = async () => {
    setIsLoading(prev => ({ ...prev, deposits: true }));
    setError(prev => ({ ...prev, deposits: null }));
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/deposites/user/${user.user.uid}`);
      const data = await response.json();
      setDepositData(data);
    } catch (error) {
      console.error("Error fetching deposits", error);
      setError(prev => ({ ...prev, deposits: "Failed to load deposit history" }));
    } finally {
      setIsLoading(prev => ({ ...prev, deposits: false }));
    }
  };

  /* Fetch User Withdrawals */
  const loadWithdrawals = async () => {
    setIsLoading(prev => ({ ...prev, withdraw: true }));
    setError(prev => ({ ...prev, withdraw: null }));
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/withdraw-request/user/${user.user.uid}`);
      const data = await response.json();
      setWithdrawData(data);
    } catch (error) {
      console.error("Error fetching withdrawals", error);
      setError(prev => ({ ...prev, withdraw: "Failed to load withdrawal history" }));
    } finally {
      setIsLoading(prev => ({ ...prev, withdraw: false }));
    }
  };

  useEffect(() => {
    loadUserDeposits();
    loadWithdrawals();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case "0": return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span>;
      case "1": return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Approved</span>;
      case "2": return <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Rejected</span>;
      default: return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Unknown</span>;
    }
  };

  const calculateTotalWithdraw = () => {
    return withdrawData.withdraw_requests?.reduce((total, req) => {
      return total + parseFloat(req.amount || 0);
    }, 0);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex justify-between mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab.value)}
            className={`w-full text-center py-2 font-semibold border cursor-pointer transition-colors ${
              activeTab === tab.value
                ? "bg-purple-100 text-purple-700 border-purple-400"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Loading States */}
      {isLoading.deposits && activeTab === "deposits" && (
        <div className="text-center py-4">Loading deposit history...</div>
      )}
      {isLoading.withdraw && activeTab === "withdraw" && (
        <div className="text-center py-4">Loading withdrawal history...</div>
      )}

      {/* Error States */}
      {error.deposits && activeTab === "deposits" && (
        <div className="text-red-500 text-center py-4">{error.deposits}</div>
      )}
      {error.withdraw && activeTab === "withdraw" && (
        <div className="text-red-500 text-center py-4">{error.withdraw}</div>
      )}

      {/* Transaction History */}
      <div className="space-y-4">
        {activeTab === "deposits" && !isLoading.deposits && !error.deposits && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Deposit History</h2>
              <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded">
                Total: ৳{depositData.total_deposit || 0}
              </div>
            </div>
            
            {depositData.deposits?.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No deposit history found</p>
            ) : (
              <ul className="space-y-3">
                {depositData.deposits?.map((deposit) => (
                  <li
                    key={deposit.id}
                    className="bg-white shadow p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-800">
                          {deposit.payment_method} 
                          <span className="ml-2">{getStatusBadge(deposit.status)}</span>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(deposit.created_at)}
                        </p>
                        {deposit.transaction_id && (
                          <p className="text-sm text-gray-600 mt-1">
                            TXN ID: {deposit.transaction_id}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-green-600">
                          +৳{deposit.amount}
                        </p>
                        {deposit.ex2 && (
                          <p className="text-xs text-purple-600 mt-1">
                            Promo: {deposit.ex2}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === "withdraw" && !isLoading.withdraw && !error.withdraw && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Withdraw History</h2>
              <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded">
                Total: ৳{calculateTotalWithdraw()}
              </div>
            </div>
            
            {withdrawData.withdraw_requests?.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No withdrawal history found</p>
            ) : (
              <ul className="space-y-3">
                {withdrawData.withdraw_requests?.map((withdrawal) => (
                  <li
                    key={withdrawal.id}
                    className="bg-white shadow p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-800">
                          {withdrawal.payment_method} 
                          <span className="ml-2">{getStatusBadge(withdrawal.status)}</span>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(withdrawal.created_at)}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Account: {withdrawal.payment_phone_number}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-red-600">
                          -৳{withdrawal.amount}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {withdrawal.user_name}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;