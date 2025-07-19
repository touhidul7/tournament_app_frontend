import { faBangladeshiTakaSign, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';

const ThankYou = () => {
    return (
        <div className='max-w-md mx-auto h-screen font-Jakarta bg-mainbg justify-items-center'>
            {/* === Reservation Setion === */}
            <div className='w-full bg-linear-to-b from-cyan-500 to-blue-500 text-center py-8'>
                <span className='text-4xl text-green-500'> <FontAwesomeIcon icon={faCircleCheck}/> </span>
                <h1 className='text-2xl text-white font-bold'>Thank You for Reservation</h1>
                <p className='text-md text-white'>Your booking has been comfirmed</p>
            </div>
            {/* === Match Details === */}
            <div className='w-[95%] flex flex-col gap-2 border border-hoverbg bg-cardbg rounded-md mt-4 p-4'>
                <h1 className='text-md font-semibold text-white'>Solo Time | Mobile | Regular</h1>
                <div className='flex items-center justify-between'>
                    <p className='text-md text-white font-medium'>Date & Time:</p>
                    <h2 className='text-md font-semibold text-white'>2025/07/19 at 07:07 pm</h2>
                </div>
                {/* === Paid details === */}
                <div className='flex items-center justify-between p-2 border border-hoverbg text-white rounded bg-linear-to-t from-cyan-500 to-blue-500'>
                    <div>
                        <p>Total Win Prize</p>
                        <h1 className='text-md font-bold'> <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> </span> 800 TK</h1>
                    </div>
                    <div>
                        <p>Paid</p>
                        <h1 className='text-md font-bold'> <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> </span> 20 TK</h1>
                    </div>
                </div>
            </div>
            {/* === Player Details === */}
            <div className='w-[95%] bg-green-700 rounded-md mt-4 h-18 flex items-center justify-center justify-items-center'>
                <div className='w-[97%] h-18 bg-linear-to-b flex flex-col items-start justify-center from-green-600 to-green-500 rounded-md pl-2'>
                    <h1 className='text-xl text-white font-semibold'>Plyaer 1</h1>
                    <h1 className='text-lg font-bold text-cardbg'>Subas Hembrom</h1>
                </div>
            </div>
            {/* === Important Notice Section === */}
            <div className='w-[95%] bg-red-500 rounded-md mt-4 flex justify-center'>
                <div className='w-[97%] bg-red-300 rounded px-2 py-1'>
                    <h1 className='text-lg font-semibold text-red-500'>Important Notice</h1>
                    <h1 className='text-md font-medium text-red-500'>You have to follow all the rules and regulations otherwise you'll be <b>BANNED</b></h1>
                </div>
            </div>
            {/* === Group Joining BUTTON === */}
            <div className='w-full flex flex-col text-center gap-1.5 mt-4 items-center justify-center'>
                <NavLink className='bg-cardbg w-[95%] rounded py-2 text-lg text-white' to=''>Click here to jion Group</NavLink>
                <NavLink className='bg-cardbg w-[95%] rounded py-2 text-lg text-white' to=''>Done</NavLink>
            </div>
        </div>
    );
};

export default ThankYou;