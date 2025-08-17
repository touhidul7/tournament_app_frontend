/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useOutletContext } from "react-router";

const AddMoney = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [paymentMethodes, setPaymentMethodes] = useState([]);
  const [userDeposits, setUserDeposits] = useState([]);
  const [promoCodes, setPromoCodes] = useState([]); // ✅ promo code list

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { updateData, CheckUser } = useOutletContext();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  /* Fetch payment methods */
  const loadPaymentMethod = () => {
    fetch(`${VITE_API_BASE_URL}/payments`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentMethodes(data);
        if (data.length > 0) setActiveTab(data[0].payment_method);
      })
      .catch((error) => {
        console.error("Error Payment Methods", error);
      });
  };

  /* Fetch User Deposits*/
  const loadUserDeposits = () => {
    fetch(`${VITE_API_BASE_URL}/deposites/user/${user.user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDeposits(data);
        if (data.length > 0) setActiveTab(data[0].payment_method);
      })
      .catch((error) => {
        console.error("Error fetching deposits", error);
      });
  };

  console.log(userDeposits);

  /* ✅ Fetch promo codes */
  const loadPromoCodes = () => {
    fetch(`${VITE_API_BASE_URL}/promo-codes`)
      .then((res) => res.json())
      .then((data) => setPromoCodes(data))
      .catch((error) => console.error("Error Promo Codes", error));
  };

  useEffect(() => {
    loadUserDeposits();
    loadPaymentMethod();
    loadPromoCodes();
  }, []);

  /* Copy function */
  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    toast.success(`Copied ${number}`);
  };

  /* Data Post */
  const onSubmit = (data) => {
  CheckUser();

  let finalAmount = parseFloat(data.amount);
  let appliedPromo = null;

  if(!activeTab) {
    toast.error("Please select a payment method");
    return;
  }

  if (data.promo_code) {
    const enteredCode = data.promo_code.trim().toLowerCase();

    // Check if promo code exists in system
    const promo = promoCodes.find(
      (p) => p.code_name.trim().toLowerCase() === enteredCode
    );

    if (!promo) {
      toast.error("Wrong promo code");
      return;
    }

    // Check if promo code is expired
    const today = new Date().toISOString().split("T")[0];
    if (promo.valid_until < today) {
      toast.error("⚠️ Promo code expired");
      return;
    }

    // Check if user has already used this promo code
    const hasUsedPromo = userDeposits.deposits.some(
      (deposit) => 
        deposit.ex2 && 
        deposit.ex2.trim().toLowerCase() === enteredCode
    );

    if (hasUsedPromo) {
      toast.error("⚠️ You have already used this promo code");
      return;
    }

    // ✅ valid promo, add bonus
    finalAmount += parseFloat(promo.offer_amount);
    appliedPromo = promo.code_name;
    toast.success(`🎉 Promo applied! +${promo.offer_amount}`);
  }

  const depositPayload = {
    user_id: user.user.uid,
    ex1: user.user.displayName,
    ex2: appliedPromo || null,
    transaction_id: data.transaction_id,
    payment_phone_number: data?.payment_phone_number,
    amount: finalAmount, // ✅ updated amount
    status: 0,
    payment_method: activeTab,
  };

  const request = axios.post(
    `${VITE_API_BASE_URL}/add/deposite`,
    depositPayload
  );

  toast.promise(request, {
    loading: "Saving project...",
    success: "Project saved!",
    error: "Something went wrong!",
  });

  request.then((response) => {
    if (response.status === 201) {
      updateData();
      reset();
      navigate("/thankyou");
    }
  });
};
  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex justify-between mb-6">
        {paymentMethodes.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.payment_method)}
            className={`w-full text-center py-2 font-semibold border ${
              activeTab === tab.payment_method
                ? "bg-purple-100 text-purple-700 border-purple-400"
                : "bg-gray-100 text-gray-600 border-gray-300"
            }`}
          >
            {tab.payment_method}
          </button>
        ))}
      </div>

      {/* Transaction Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Transaction ID */}
        <div className="mb-4">
          <label htmlFor="transaction_id" className="block font-bold mb-1">
            ট্রানজেকশন আইডি দিন
          </label>
          <input
            type="text"
            id="transaction_id"
            {...register("transaction_id", { required: true })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2"
            placeholder="ট্রানজেকশন আইডি দিন"
          />
        </div>

        {/* Phone number */}
        <div className="mb-4">
          <label
            htmlFor="payment_phone_number"
            className="block font-bold mb-1"
          >
            ফোন নাম্বার দিন
          </label>
          <input
            type="number"
            id="payment_phone_number"
            {...register("payment_phone_number", { required: true })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2"
            placeholder="ফোন নম্বর দিন"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block font-bold mb-1">
            পরিমাণ
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: true })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2"
            placeholder="পরিমাণ দিন"
          />
        </div>

        {/* Promo Code */}
        <div className="mb-4">
          <label htmlFor="promo_code" className="block font-bold mb-1">
            প্রমো কোড
          </label>
          <input
            type="text"
            id="promo_code"
            {...register("promo_code")}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2"
            placeholder="প্রমো কোড দিন"
          />
        </div>

        {/* Instructions */}
        <div className="text-sm space-y-2 text-gray-700 bg-pink-50 p-4 rounded-md border border-pink-200">
          <p>
            ◉ *247# ডায়াল করে আপনার {activeTab} মোবাইল মেনুতে যান অথবা অ্যাপে
            যান।
          </p>
          <p>
            ◉ <span className="text-green-600 font-semibold">Send Money</span> -
            এ ক্লিক করুন।
          </p>
          <p>◉ প্রাপক নম্বর হিসেবে নিচের এই নম্বরটি লিখুন</p>

          {/* Dynamic numbers with copy */}
          <div className="space-y-2">
            {paymentMethodes
              .filter((m) => m.payment_method === activeTab)
              .flatMap((m) => m.payment_number.split(","))
              .map((num, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="font-bold text-yellow-700">
                    {num.trim()}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(num.trim())}
                    className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Copy
                  </button>
                </div>
              ))}
          </div>

          <p>◉ নিশ্চিত করতে এখন আপনার {activeTab} মোবাইল মেনু পিন লিখুন।</p>
          <p>
            ◉ এরপর উপরের বক্সে আপনার Transaction ID এবং Amount দিন আর নিচের
            VERIFY বাটনে ক্লিক করুন।
          </p>
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-purple-600 text-white py-2 rounded font-bold mb-16 hover:bg-purple-700"
        >
          VERIFY
        </button>
      </form>
    </div>
  );
};

export default AddMoney;
