/* eslint-disable react-hooks/exhaustive-deps */

import { Outlet } from 'react-router';
import BottomNav from '../components/BottomNav';
import { Toaster } from 'react-hot-toast';
import MainHeader from '../components/MainHeader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PushNotification from '../components/PushNotification';
import { ToastContainer } from 'react-toastify';
const MainLayout = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [deposite, setDeposite] = useState(0);
    const [totalPay, setTotalPay] = useState(0);
    const [result, setResult] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const loadDeposite = () => {
        fetch(`${BASE_URL}/deposites/user/${user?.user?.uid}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setDeposite(data.total_deposit);
            })
            .catch((error) => {
                console.error("Error fetching deposite data:", error);
                toast.error("Error fetching deposite data");
            });
    }
    const loadTotalPay = () => {
        fetch(`${BASE_URL}/game-entry/sum-pay/${user?.user?.uid}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setTotalPay(data.total_pay);
            })
            .catch((error) => {
                console.error("Error fetching total pay data:", error);
                toast.error("Error fetching total pay data");
            });
    }

    // load player results
    const loadResultData = () => {
        fetch(`${BASE_URL}/player-result/${user?.user?.uid}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
            })
            .catch((error) => {
                console.error("Error fetching:", error);
                toast.error("Error fetching");
            });
    }

    // load top player results
    const loadTopPlayerData = () => {
        fetch(`${BASE_URL}/top-players`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setTopPlayer(data.top_players);
            })
            .catch((error) => {
                console.error("Error fetching:", error);
                toast.error("Error fetching");
            });
    }


    const updateData = () => {
        loadDeposite();
        loadTotalPay();
        loadResultData()
        loadTopPlayerData()
    }

    useEffect(() => {
        updateData();
    }, [])

    return (
        <div className='max-w-md mx-auto'>
            <MainHeader balance={deposite - totalPay} />
            {/* <UserPanel/> */}
            <PushNotification />
            <Outlet context={{ updateData, deposite, totalPay, balance: (deposite - totalPay), result, topPlayer }} />
            <BottomNav />
            <Toaster />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;