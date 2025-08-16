import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';
import toast, { Toaster } from 'react-hot-toast';
import MainHeader from '../components/MainHeader';
import { useCallback, useEffect, useState } from 'react';
import PushNotification from '../components/PushNotification';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { Check } from 'lucide-react';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MainLayout = () => {
    const [deposite, setDeposite] = useState(0);
    const [totalPay, setTotalPay] = useState(0);
    const [result, setResult] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);
    const [withdrawRequest, setWithdrawRequest] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [noticeLoading, setNoticeLoading] = useState(false);
    const [settings, setSettings] = useState([]);

    // reload site if notice loading
    useEffect(() => {
        if (noticeLoading) {
            setTimeout(() => {
                // window.location.reload();
                updateData();
            }, 2000);
        }
        setNoticeLoading(false)
    }, [noticeLoading]);

    //  if (noticeLoading) {
    //         setTimeout(() => {
    //             window.location.reload();
    //             console.log("Reloading site due to notice loading state");

    //         }, 2000);
    //     }



    const user = JSON.parse(localStorage.getItem("user")) || {};

    const CheckUser = async () => {
        try {
            // Force refresh token before request
            await auth.currentUser.getIdToken(true);
        } catch (error) {
            if (error.code === "auth/user-disabled") {
                toast.error("Your account has been disabled.");
                await signOut(auth);
                localStorage.removeItem("user");
                window.location.href = "/login";
                return;
            } else {
                console.error("Token refresh error:", error);
                toast.error("Something went wrong. Please try again.");
                return;
            }
        }
    }

    const updateData = useCallback(async () => {
        setIsLoading(true); // Start loading
        try {
            const [depositeRes, payRes, resultRes, topPlayerRes, withdrawRes, settingsRes] = await Promise.all([
                fetch(`${BASE_URL}/deposites/user/${user?.user?.uid}`),
                fetch(`${BASE_URL}/game-entry/sum-pay/${user?.user?.uid}`),
                fetch(`${BASE_URL}/player-result/${user?.user?.uid}`),
                fetch(`${BASE_URL}/top-players`),
                fetch(`${BASE_URL}/settings`),
                fetch(`${BASE_URL}/withdraw-request/sum/${user?.user?.uid}`)
            ]);

            const [depositeData, payData, resultData, topPlayerData, withdrawData, settingsData] = await Promise.all([
                depositeRes.json(),
                payRes.json(),
                resultRes.json(),
                topPlayerRes.json(),
                withdrawRes.json(),
                settingsRes.json()
            ]);

            setDeposite(depositeData.total_deposit);
            setTotalPay(payData.total_pay);
            setResult(resultData);
            setTopPlayer(topPlayerData.top_players);
            setWithdrawRequest(withdrawData.total_withdraw);
            setSettings(settingsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Stop loading regardless of success/error
        }
    }, [user?.user?.uid]);

    useEffect(() => {
        updateData();
    }, [updateData]);

    // total income
    const {
        total_prize = 0,
        total_win_price = 0,
        total_second_prize = 0,
        total_third_prize = 0,
        total_fourth_prize = 0,
        total_fifth_prize = 0,
        total_income_deposit = 0,
    } = result || {};

    const prizeSum = total_prize + total_win_price + total_second_prize + total_third_prize + total_fourth_prize + total_fifth_prize;

    const totalIncome = prizeSum > 0 ? prizeSum - total_income_deposit : 0;


    // Custom Loader Component
    const Loader = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                <p className="text-white text-lg font-semibold">Loading your data...</p>
                <p className="text-gray-300 text-sm">Please wait a moment</p>
            </div>
        </div>
    );

    return (
        <div className='max-w-md mx-auto relative'>
            {/* Show loader when data is loading */}
            {isLoading && <Loader />}

            {/* Main content with opacity control when loading */}
            <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                <MainHeader balance={(parseInt(deposite)) - parseInt(totalPay)} settings={settings}/>
                <PushNotification updateData={updateData} setNoticeLoading={setNoticeLoading} />
                <ScrollToTop />
                <Outlet context={{
                    updateData,
                    CheckUser,
                    deposite,
                    totalPay,
                    balance: (deposite - totalPay),
                    result,
                    topPlayer,
                    totalIncome,
                    withdrawRequest,
                    isLoading,
                    settings
                    // setNoticeLoading
                }} />
                <BottomNav />
                <Toaster />
                <ToastContainer className={'z-50'} />
            </div>
        </div>
    );
};

export default MainLayout;