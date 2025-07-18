import { faBangladeshiTakaSign, faFire, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import { NavLink } from 'react-router';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const Home = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='max-w-md mx-auto bg-mainbg font-Jakarta items-center justify-center justify-items-center pb-24'>
            <section className='w-[95%]'>
                <div className='py-2 flex items-center justify-between border-b border-cardbg'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px] rounded-full' src="./image/profile-image.jpg" alt="Profilepic" />
                        <h2 className='text-white font-medium text-lg'>App Name</h2>
                    </div>
                    <div className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full'> <FontAwesomeIcon className='text-2xl' icon={faWallet} /> <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> 0.0TK</p></div>
                </div>
                {/* === notice board ==== */}
                <div className='bg-cardbg p-2 rounded-md text-white font-medium text-center mt-4 mb-4'><p>OFFER NOTICEBOARD <FontAwesomeIcon className='text-[#ff5a00]' icon={faFire} /> <FontAwesomeIcon className='text-[#ff5a00]' icon={faFire} /></p></div>
                <Carousel />
                {/* === Match Title === */}
                <div className='bg-cardbg text-white text-lg font-medium text-center py-1 rounded-md my-6'><p>BR AND LONEWOLF MATCH</p>
                </div>
                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed top-4 z-10 w-sm overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-mainbg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <div className="bg-mainbg px-4 pt-2 pb-4 ">
                                    <div className="">
                                        
                                        <div className="mt-3 w-full text-start text-lg bg-white text-cardbg font-Siliguri flex flex-col gap-2 rounded-md px-3 py-3">
                                            <p className='text-center bg-red-400 text-white py-1 rounded'>গুরুত্বপূর্ণ নোটিশ!!</p>
                                            <p>
                                                Br Update M590 সম্পূর্ণভাবে ব্যান এপ থেকে, M590, Double Victor, Awm, M82B এগুলো চালানো যাবে না
                                                Br এ বাহিরের প্লেয়ার নিয়ে ডুকবেননা এবং ইনভাইট দিবেন না - নাইলে সোজা কিক খাবেন টাকা বেক পাবেন না  
                                            </p>
                                            <ul>
                                                <li>ডিপোজিটে সমস্যা হলে টেলিগ্রামে মেসেজ দিন নাম্বারে কল দিবেন না দয়া করে</li>
                                                <li> উইথড্র লিমিট ২৫০ <FontAwesomeIcon icon={faBangladeshiTakaSign}/></li>
                                                <li>*যেকোনো সহযোগিতায় টেলিগ্রামে জয়েন করুন</li>
                                                <li>ফ্রি ম্যাচে!</li>
                                                <li> জয়েন করুন, ধন্যবাদ</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-md font-Jakarta font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Okay
                                    </button>

                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
                {/* === Match Card Section === */}
                <div>
                    {/* === CARD === */}
                    <div className='grid grid-cols-2 gap-3'>
                        <NavLink to='/brmatches' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/br-banner.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>BR MATCH</p>
                            <p className='text-sm font-light'>5 Match Found</p>
                        </NavLink>
                        <NavLink to='/class-squad' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/class-squad.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>CLASS SQUAD</p>
                            <p className='text-sm font-light'>9 Match Found</p>
                        </NavLink>
                        <NavLink to='/lone-wolf' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/lonewolf.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>LONE WOLF</p>
                            <p className='text-sm font-light'>3 Match Found</p>
                        </NavLink>
                        <NavLink to='/cs-match' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/vs.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>CS 1V1, 2V2</p>
                            <p className='text-sm font-light'>10 Match Found</p>
                        </NavLink>
                    </div>
                    <div className='bg-cardbg text-white text-lg font-medium text-center py-1 rounded-md mt-6'><p>BR AND LONEWOLF MATCH</p></div>
                    <div className='grid grid-cols-2 gap-3 mt-6'>
                        <NavLink to='/free-match' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/free-match.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>FREE MATCH</p>
                            <p className='text-sm font-light'>25 Match Found</p>
                        </NavLink>
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-6'>
                        <NavLink to='/free-match' className='bg-cardbg  p-2  rounded-xl text-white'>
                            <img className='rounded-md' src="./image/free-match.jpg" alt="" />
                            <p className='font-semibold text-md mt-2'>FREE MATCH</p>
                            <p className='text-sm font-light'>25 Match Found</p>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;