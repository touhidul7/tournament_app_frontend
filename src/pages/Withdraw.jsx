import { faBangladeshiTakaSign, faChevronLeft, faMobileScreenButton, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';

const Withdraw = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg space-y-3 mt-2 pb-60'>
            {/* wallet header */}
            <div className='w-[96%] mx-auto flex justify-between items-center py-3 px-4 font-medium text-white bg-cardbg rounded-lg'>
                <NavLink to='/profile'><FontAwesomeIcon icon={faChevronLeft} className='text-xl'/></NavLink>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-lg'>Abailable Balance</h2>
                    <h2 className='text-xl'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 0 Tk</h2>
                </div>
            </div>
            {/* Mobile Banking list */}
            <div className='bg-cardbg grid grid-cols-3 gap-2 px-1 py-2'>
                <div className='bg-white rounded '>
                    <img src="./image/BKash-bKash2-Logo.wine.png" alt="" />
                </div>
                <div className='bg-white rounded'>
                    <img src="./image/Nagad-Logo.wine.png" alt="" />
                </div>
                <div className=' rounded'>
                    <img src="./image/dutch-bangla-rocket-seeklogo.png" alt="" />
                </div>
            </div>
            {/* withdraw form */}
            <div className='bg-cardbg w-[96%] mx-auto px-5 py-5 rounded-lg text-white'>
                <form action="" className='space-y-3 flex flex-col '>
                    <div className='flex items-center gap-2 bg-white text-cardbg px-2 py-2 rounded-lg'>
                        <FontAwesomeIcon icon={faMobileScreenButton} className='text-xl'/>
                        <input type="text" placeholder='Mobile Number' className='placeholder:text-black focus:outline-none w-full'/>
                    </div>
                    <div className='flex items-center gap-2 bg-white text-cardbg px-2 py-2 rounded-lg'>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} className='text-xl'/>
                        <input type="text" placeholder='Amount to Withdraw' className='placeholder:text-black focus:outline-none w-full'/>
                    </div>
                    <h2 className='text-center text-red-500'>* Minimum withdraw amount 100 taka *</h2>
                    <button type='submit' className='bg-amber-400 py-2 px-4 rounded-2xl'>
                        Withdraw
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Withdraw;