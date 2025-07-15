import { faBangladeshiTakaSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Profile = () => {
    return (
        <div className='max-w-md mx-auto bg-mainbg  font-Jakarta'>
            {/* app name icon and wallet section */}
            <div className='py-2 flex items-center justify-between border-b border-cardbg'>
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full' src="/public/image/profile-image.jpg" alt="Profilepic" />
                    <h2 className='text-white font-medium text-lg'>App Name</h2>
                </div>
                <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 0.0TK</p></div>
            </div>
            {/* profile picure */}
            <div className='flex justify-center flex-col items-center mt-3'>
                <img src="./image/profile.png" alt="" className='h-16 w-16 border-3 border-white rounded-full'/>
                <h2 className='text-white text-lg font-medium mt-1'>Juwel Hossain</h2>
            </div>
            {/* user analitics */}
            <div className='bg-slate-50 rounded-lg w-[90%] mx-auto'>
               <div className='grid grid-cols-3 mt-5 mb-5 '>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-hoverbg'>ENTRY TYPE</h2>
                        <h2 className='text-white'>100</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-hoverbg'>MAP</h2>
                        <h2 className='text-white'>Bermuda</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-hoverbg'>VERSION</h2>
                        <h2 className='text-white'>Mobile</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;