import { faAward, faChevronLeft, faCircleXmark, faClock, faCrown, faFire, faHandPeace, faKey, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {} from '../css/BrMatch.css'



const LoneWolf = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">


                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Lone Wolf
                    </NavLink>

                </div>
            </div>
            {/* === BR Matches Card Section === */}
            <section className="w-full mt-24 justify-items-center">
                {/* === Cards === */}
                <div className="w-[95%]">
                    <div className="relative bg-cardbg rounded-lg p-2">
                        <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                        <NavLink to='/lone-wolf-details' className="match-box flex items-center gap-2">
                            <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                            <div className="match-details flex flex-col gap-1.5">
                                <h1 className="text-white font-semibold">LW 2 VS 2 | [ 1,3 vs 2,4 ]</h1>
                                <p className="text-sm text-yellow-500">2025-07-17 at 11:00 pm</p>
                            </div>
                        </NavLink>
                        {/* pricing mini card */}
                        <div className='grid grid-cols-3 gap-3 items-center justify-center mt-4'>
                            <div className=''>
                                <div className='bg-green-500 text-white text-center rounded-t-md'>
                                    <h2>+ WIN PRIZE</h2>
                                </div>
                                <div className='bg-white  text-center rounded-b-md'>
                                    <h2>800</h2>
                                </div>
                            </div>
                            <div>
                                <div className='bg-blue-500 text-white text-center rounded-t-md'>
                                    <h2>+ PER KILL</h2>
                                </div>
                                <div className='bg-white text-center rounded-b-md'>
                                    <h2>10</h2>
                                </div>
                            </div>
                            <div>
                                <div className='bg-red-500 text-white text-center rounded-t-md'>
                                    <h2>+ ENTRY FEE</h2>
                                </div>
                                <div className='bg-white text-center rounded-b-md'>
                                    <h2>20</h2>
                                </div>
                            </div>
                        </div>
                        {/* match details */}
                        <div className='grid grid-cols-3 mt-5 '>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-hoverbg font-medium'>ENTRY TYPE</h2>
                                <h2 className='text-white font-semibold'>Solo</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-hoverbg font-medium'>MAP</h2>
                                <h2 className='text-white font-semibold'>Bermuda</h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-hoverbg font-medium'>VERSION</h2>
                                <h2 className='text-white font-semibold'>Mobile</h2>
                            </div>
                        </div>
                        {/* === Progres Bar and Joining === */}
                        <div className="flex items-center justify-between gap-4 mt-2">
                            {/* === Bar === */}
                            <div className="mt-5 w-3/4">
                                <div className="w-full h-5 rounded-full bg-hoverbg">
                                    <div className="bg-green-500 h-5 w-32 rounded-full"></div>
                                </div>
                                <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                    <p>Only 2 spots are left</p>
                                    <p>2/4</p>
                                </div>
                            </div>
                            {/* === Joining === */}
                            <div className="w-1/4">
                                <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-4 mb-12">
                            {/* === Room Details Modal === */}
                            <div>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                                >
                                    <FontAwesomeIcon icon={faKey}/>

                                   Room Details
                                </button>
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
                                                        <div className=" flex flex-col bg-cardbg items-center text-white rounded-md font-Jakarta py-2">
                                                            <h2 className="font-semibold">TOTAL PRIZE</h2>
                                                            <p className="text-sm ">Duo | Mobile | Regular</p>
                                                        </div>
                                                        <div className="mt-3 w-full text-center text-lg bg-cardbg text-white font-Jakarta flex flex-col gap-2 rounded-md px-3 py-3">
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faCrown} className="text-yellow-400" /> <span>Winner - 100Tk</span></h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faTrophy} className="text-yellow-400" /> <span>2nd Position - 80Tk</span></h2>
                                                            <h2 className="flex items-center gap-3"><FontAwesomeIcon icon={faAward} className="text-yellow-400" /> <span>3rd Position - 50Tk</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen(false)}
                                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    >
                                                       <FontAwesomeIcon icon={faCircleXmark} className="text-2xl"/>
                                                    </button>
                                                   
                                                </div>
                                            </DialogPanel>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                            {/* prize details modal */}
                            <div>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                                >
                                    <FontAwesomeIcon icon={faTrophy}/>

                                   Prize Details
                                </button>
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
                                                        <div className=" flex flex-col bg-cardbg items-center text-white rounded-md font-Jakarta py-2">
                                                            <h2 className="font-semibold">TOTAL PRIZE</h2>
                                                            <p className="text-sm ">Duo | Mobile | Regular</p>
                                                        </div>
                                                        <div className="mt-3 w-full text-center text-lg bg-cardbg text-white font-Jakarta flex flex-col gap-2 rounded-md px-3 py-3">
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faCrown} className="text-yellow-400" /> <span>Winner - 100Tk</span></h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faTrophy} className="text-yellow-400" /> <span>2nd Position - 80Tk</span></h2>
                                                            <h2 className="flex items-center gap-3"><FontAwesomeIcon icon={faAward} className="text-yellow-400" /> <span>3rd Position - 50Tk</span></h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faAward} className="text-yellow-400" /> <span>4th Position - 40Tk</span></h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faAward} className="text-yellow-400" /> 5th Position - 30Tk</h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faFire} className="text-yellow-400" /> Per Kill - 10Tk</h2>
                                                            <h2 className=" flex items-center gap-3"><FontAwesomeIcon icon={faHandPeace} className="text-yellow-400" />Total Prize Pool- 10Tk</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpen(false)}
                                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    >
                                                       <FontAwesomeIcon icon={faCircleXmark} className="text-2xl"/>
                                                    </button>
                                                   
                                                </div>
                                            </DialogPanel>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                            <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock} />STARTS IN-</p>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default LoneWolf;