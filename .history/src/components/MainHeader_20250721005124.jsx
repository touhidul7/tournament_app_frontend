import { faBangladeshiTakaSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MainHeader = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [deposite, setDeposite] = useState(0);
    // load localStorage user data
    const user = JSON.parse(localStorage.getItem("user")) || {};

    // load deposite data from api
    const loadDeposite = () => {
        fetch(`${BASE_URL}/deposites/user/${user.user.uid}`, {
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
    // Call loadDeposite when the component mounts
    useEffect(() => {
        loadDeposite();
    }, [])
    return (
        <div>
            {/* app name icon and wallet section */}
            <div className='py-2 flex items-center justify-between border-b border-cardbg bg-cardbg'>
                <div className='flex items-center gap-2'>
                    <img className=' rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                    <h2 className='text-white font-medium text-lg'>App Name</h2>
                </div>
                <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full mr-2'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> <span className='text-green-500'>{deposite ? deposite : 0}</span> TK</p></div>
            </div>
        </div>
    );
};

export default MainHeader;