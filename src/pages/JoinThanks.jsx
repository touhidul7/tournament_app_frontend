import React from 'react';
import { faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useParams } from 'react-router';
const JoinThanks = () => {
    const{id}= useParams();
    return (
        <div className='max-w-md mx-auto h-screen font-Jakarta bg-white flex flex-col justify-items-center items-center'>
            <div className='w-full h-full flex flex-col gap-4 items-center bg-linear-to-b  text-center py-8'>
                <span className='text-4xl text-green-500'> <FontAwesomeIcon icon={faCircleCheck} /> </span>
                <h1 className='text-2xl text-gray-900 font-bold'>Thanks for your reservation</h1>
                <p className='text-md font-md text-gray-900'>Your can join at more matches</p>
                <p className='text-sm text-gray-900'>Room details will be visible after match started</p>
                <NavLink to={`/brmatches/${id}`} className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 mt-5">
                    <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                    Back to Matches
                </NavLink>
            </div>
        </div>
    );
};

export default JoinThanks;