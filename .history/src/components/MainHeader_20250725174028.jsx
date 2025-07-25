import { faBangladeshiTakaSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bell } from 'lucide-react';
import { NavLink } from 'react-router';


const MainHeader = ({ balance }) => {

    return (
        <div>
            {/* app name icon and wallet section */}
            <div className='py-2 flex items-center justify-between border-b border-cardbg bg-cardbg'>
                <NavLink to={`/`} className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                    <h2 className='text-white font-medium text-lg'>App Name</h2>
                </NavLink>
                <div className='flex items-center justify-end gap-0'>
                    <NavLink to='/notifications' className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full ml-7'>
                        <p><Bell className="w-6 h-6 text-blue-500" /></p>
                    </NavLink>

                    <NavLink to='/wallet' className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full mr-2'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} /> <span className='text-green-500'>{balance ? balance : 0}</span> TK</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;