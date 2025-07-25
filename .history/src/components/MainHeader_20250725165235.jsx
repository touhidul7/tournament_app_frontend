import { faBangladeshiTakaSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bell } from 'lucide-react';


const MainHeader = ({ balance }) => {

    return (
        <div>
            {/* app name icon and wallet section */}
            <div className='py-2 flex items-center justify-between border-b border-cardbg bg-cardbg'>
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                    <h2 className='text-white font-medium text-lg'>App Name</h2>
                </div>

                <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full mr-2'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p>
                    <FontAwesomeIcon icon={faBangladeshiTakaSign} /> <span className='text-green-500'>{balance ? balance : 0}</span> TK</p>
                </div>

                <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full mr-2'>
                    <p><Bell className="w-6 h-6 text-blue-500" /></p>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;