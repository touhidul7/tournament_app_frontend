import { faBangladeshiTakaSign, faChartBar, faChartDiagram, faChartSimple, faScaleBalanced, faShare, faShareAlt, faUser, faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons/faHandHoldingDollar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Profile = () => {
    return (
        <div className='max-w-md mx-auto bg-mainbg  font-Jakarta pb-20'>
            {/* app name icon and wallet section */}
            <div className='py-2 flex items-center justify-between border-b border-cardbg'>
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                    <h2 className='text-white font-medium text-lg'>App Name</h2>
                </div>
                <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full mr-2'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 0.0TK</p></div>
            </div>
            {/* profile picure */}
            <div className='flex justify-center flex-col items-center mt-3'>
                <img src="./image/profile.png" alt="" className='h-16 w-16 border-3 border-white rounded-full' />
                <h2 className='text-white text-lg font-medium mt-1'>Juwel Hossain</h2>
            </div>
            {/* user analitics */}
            <div className='bg-slate-100 rounded-lg w-[98%] mx-auto mt-4 mb-5'>
                <div className='grid grid-cols-3 text-cardbg font-semibold px-2 py-1'>
                    <div className='flex flex-col items-center'>
                        <h2>0</h2>
                        <h2>Matches Played</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className=''>0</h2>
                        <h2 className=''>Total Kill</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2>0</h2>
                        <h2>Won</h2>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                {/* wallet div */}
                <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faWallet} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Wallet
                    </h2>
                </div>
                {/* withdraw section */}
               <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Withdraw
                    </h2>
                </div>
                {/* Profile details section */}
               <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Profile
                    </h2>
                </div>
                {/* Rules section */}
               <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faScaleBalanced} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Rules
                    </h2>
                </div>
                {/* Top Player Section */}
               <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faChartSimple} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Top Players
                    </h2>
                </div>

               <div className='w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg'>
                    <FontAwesomeIcon icon={faShareAlt} className='text-3xl text-white' />
                    <h2 className='text-white text-xl font-medium'>
                        Share This App
                    </h2>
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <h2 className='text-gray-300 font-semibold text-lg'>Version 1.0</h2>
                    <h2 className='text-slate-600'>Developed By SoftCodeLoop</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;