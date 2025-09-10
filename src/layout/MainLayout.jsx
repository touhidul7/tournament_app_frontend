/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';
import toast, { Toaster } from 'react-hot-toast';
import MainHeader from '../components/MainHeader';
import { useCallback, useEffect, useState } from 'react';
import PushNotification from '../components/PushNotification';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';
import { auth, db } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { Check } from 'lucide-react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MainLayout = () => {
    const [deposite, setDeposite] = useState(0);
    const [totalPay, setTotalPay] = useState(0);
    const [result, setResult] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);
    const [withdrawRequest, setWithdrawRequest] = useState([]);
    const [withdrawRequestPending, setWithdrawRequestPending] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [noticeLoading, setNoticeLoading] = useState(false);
    const [settings, setSettings] = useState([]);
    const [notifications, setNotifications] = useState([]);

    // console.log(notifications);


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

    useEffect(() => {
        const handleKeyDown = (e) => {
            const blockedKeys = ["ArrowRight", "ArrowLeft", "PageUp", "PageDown"];
            if (blockedKeys.includes(e.key)) {
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


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
            const [depositeRes, payRes, resultRes, topPlayerRes, withdrawRes] = await Promise.all([
                fetch(`${BASE_URL}/deposites/user/${user?.user?.uid}`),
                fetch(`${BASE_URL}/game-entry/sum-pay/${user?.user?.uid}`),
                fetch(`${BASE_URL}/player-result/${user?.user?.uid}`),
                fetch(`${BASE_URL}/top-players`),
                fetch(`${BASE_URL}/withdraw-request/sum/${user?.user?.uid}`)
            ]);

            const [depositeData, payData, resultData, topPlayerData, withdrawData] = await Promise.all([
                depositeRes.json(),
                payRes.json(),
                resultRes.json(),
                topPlayerRes.json(),
                withdrawRes.json()
            ]);

            setDeposite(depositeData.total_deposit);
            setTotalPay(payData.total_pay);
            setResult(resultData);
            setTopPlayer(topPlayerData.top_players);
            setWithdrawRequest(withdrawData.total_withdraw);
            setWithdrawRequestPending(withdrawData.total_withdraw_pending);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Stop loading regardless of success/error
        }
    }, [user?.user?.uid]);

    // useEffect(() => {
    //     updateData();
    // }, [updateData]);

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

    const prizeSum = parseInt(total_prize) + parseInt(total_win_price) + parseInt(total_second_prize) + parseInt(total_third_prize) + parseInt(total_fourth_prize) + parseInt(total_fifth_prize);

    const totalIncome = parseInt(prizeSum) > 0 ? parseInt(prizeSum) - parseInt(total_income_deposit) : 0;
    console.log(totalIncome);
    

    // get settings
    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch(`${BASE_URL}/settings`);
                const data = await response.json();
                setSettings(data?.settings);
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        };
        fetchSettings();
    }, []);

    // notifications
    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                const q = query(
                    collection(db, 'notifications'),
                    where('userId', '==', user.uid),
                    orderBy('timestamp', 'desc')
                );

                const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
                    const newNotis = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setNotifications(newNotis);
                });

                return () => unsubscribeSnapshot();
            }
        });

        return () => unsubscribeAuth();
    }, []);


    // Custom Loader Component
    const Loader = () => (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                    <p className="text-white text-lg font-semibold">Loading your data...</p>
                    <p className="text-gray-300 text-sm">Please wait a moment</p>
                </div>
            </div>
        </>
    );

    // console.log(withdrawRequestPending);

    return (
        <div className='max-w-md mx-auto relative'>
            {/* Show loader when data is loading */}
            {isLoading && <Loader />}

            {/* Main content with opacity control when loading */}
            <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                <MainHeader balance={(parseInt(deposite)) - parseInt(totalPay)} settings={settings} notifications={notifications} setNotifications={setNotifications}/>
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
                    withdrawRequestPending,
                    isLoading,
                    settings,
                    setNotifications,
                    notifications
                }} />
                <BottomNav />
                <Toaster />
                <ToastContainer className={'z-50'} />
            </div>
            {/* support icon */}
            <a className='fixed bottom-0 right-0 mr-6 mb-18 w-16 z-50' href="https://brbtour.com/"><img className='w-full h-auto rounded-full' src="/image/support.png" alt="" /></a>
        </div>
    );
};

export default MainLayout;