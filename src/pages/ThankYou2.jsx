import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ThankYou2 = () => {
    return (
        <div className='max-w-md mx-auto h-screen font-Jakarta bg-white flex flex-col justify-items-center items-center'>
            <div className='w-full h-full flex flex-col gap-4 items-center bg-linear-to-b  text-center py-8'>
                <span className='text-4xl text-green-500'> <FontAwesomeIcon icon={faCircleCheck} /> </span>
                <h1 className='text-2xl text-gray-900 font-bold'>Thank You for Deposite</h1>
                <p className='text-md font-md text-gray-900'>Your Payment id pending</p>
                <p className='text-sm text-gray-900'>Status will update in 20 - 40 minutes</p>
            </div>
        </div>
    );
};

export default ThankYou2;