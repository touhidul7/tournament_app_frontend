import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';

const ProfileEdit = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg space-y-3 mt-2 pb-60'>
            {/* wallet header */}
            <div className='w-[96%] mx-auto flex justify-between items-center py-3 px-4 font-medium text-white bg-cardbg rounded-lg'>
                <NavLink to='/profile'><FontAwesomeIcon icon={faChevronLeft} className='text-xl'/></NavLink>
                <div>
                    <h2 className='text-lg'>
                        My Profile
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;