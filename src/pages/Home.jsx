import { faBangladeshiTakaSign, faFire, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <div className='max-w-md mx-auto bg-mainbg font-Jakarta items-center justify-center justify-items-center pb-24'>
            <section className='w-[95%]'>
                <div className='py-2 flex items-center justify-between border-b border-cardbg'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px] rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                        <h2 className='text-white font-medium text-lg'>App Name</h2>
                    </div>
                    <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full'> <FontAwesomeIcon className='text-2xl' icon={faWallet}/> <p><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 0.0TK</p></div>
                </div>
                {/* === notice board ==== */}
                <div className='bg-cardbg p-2 rounded-md text-white font-medium text-center mt-4 mb-4'><p>OFFER NOTICEBOARD <FontAwesomeIcon className='text-[#ff5a00]' icon={faFire}/> <FontAwesomeIcon className='text-[#ff5a00]' icon={faFire}/></p></div>
                <Carousel/>
                {/* === Match Title === */}
                <div className='bg-cardbg text-white text-lg font-medium text-center py-1 rounded-md my-6'><p>BR AND LONEWOLF MATCH</p></div>
                {/* === Match Card Section === */}
                <div>
                    {/* === CARD === */}
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/br-banner.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>BR MATCH</p>
                            <p className='text-sm font-light'>5 Match Found</p>
                        </div>
                        <div className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/class-squad.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>CLASS SQUAD</p>
                            <p className='text-sm font-light'>9 Match Found</p>
                        </div>
                        <div className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/lonewolf.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>LONE WOLF</p>
                            <p className='text-sm font-light'>3 Match Found</p>
                        </div>
                        <div className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/vs.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>CS 1V1, 2V2</p>
                            <p className='text-sm font-light'>10 Match Found</p>
                        </div>
                    </div>
                    <div className='bg-cardbg text-white text-lg font-medium text-center py-1 rounded-md mt-6'><p>BR AND LONEWOLF MATCH</p></div>
                    <div className='grid grid-cols-2 gap-3 mt-6'>
                        <div className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/free-match.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>FREE MATCH</p>
                            <p className='text-sm font-light'>25 Match Found</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;