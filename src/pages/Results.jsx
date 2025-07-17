import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';

const Results = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg pb-30'>
            <div className="bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3">
                        <FontAwesomeIcon className='text-xl' icon={faChevronLeft}/>
                        Results
                    </NavLink>
                </div>
                {/* top navigation button */}
                <div className="pt-30 max-w-md w-full overflow-auto grid grid-cols-5 gap-x-8">
                    <NavLink className='w-full px-2 py-3 bg-hoverbg rounded-lg text-cardbg font-semibold hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>BR MATCHE</NavLink>
                    <NavLink className='w-full px-2 py-3 bg-hoverbg rounded-lg text-cardbg font-semibold hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>CS MATCHE</NavLink>
                    <NavLink className='w-full px-2 py-3 bg-hoverbg rounded-lg text-cardbg font-semibold hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>LONE WOLF</NavLink>
                    <NavLink className='w-full px-2 py-3 bg-hoverbg rounded-lg text-cardbg font-semibold hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>CS 1V1,2V2</NavLink>
                    <NavLink className='w-full px-2 py-3 bg-hoverbg rounded-lg text-cardbg font-semibold hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>FREE MATCH</NavLink>
                </div>   
            </div>
             {/* match details card 1 here */}
            <div className="mt-5 w-[98%] mx-auto bg-cardbg rounded-lg pb-3 mb-5">
                <div className='flex justify-between items-center mb5'>
                    <div>

                    </div>
                    <div>
                        <h2 className='text-cardbg bg-white h-5 w-12 rounded-tr-md '>
                            #778
                        </h2>
                    </div>
                </div>
                <NavLink to='/resultdetails' className='flex items-center gap-2 p-2'>
                    <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                        {/*  */}
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div>
                        <h2 className='text-white font-medium'>Solo Mobile survival - only headshot</h2>
                        <p className='text-yellow-500 text-sm'>2025-07-15 at 06:00pm</p>
                    </div>
                </NavLink>
                {/* pricing mini card */}
                <div className='grid grid-cols-3 gap-3 items-center justify-center m-4'>
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
            {/* match details card 2 here */}

            <div className="mt-5 w-[98%] mx-auto bg-cardbg rounded-lg pb-3 mb-5">
                <div className='flex justify-between items-center mb5'>
                    <div>

                    </div>
                    <div>
                        <h2 className='text-cardbg bg-white h-5 w-12 rounded-tr-md '>
                            #778
                        </h2>
                    </div>
                </div>
                <div className='flex items-center gap-2 p-2'>
                    <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                        {/*  */}
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div>
                        <h2 className='text-white font-medium'>Solo Mobile survival - only headshot</h2>
                        <p className='text-yellow-500 text-sm'>2025-07-15 at 06:00pm</p>
                    </div>
                </div>
                {/* pricing mini card */}
                <div className='grid grid-cols-3 gap-3 items-center justify-center m-4'>
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

            {/* match details card 3 here */}
            <div className="mt-5 w-[98%] mx-auto bg-cardbg rounded-lg pb-3 mb-5">
                <div className='flex justify-between items-center mb5'>
                    <div>

                    </div>
                    <div>
                        <h2 className='text-cardbg bg-white h-5 w-12 rounded-tr-md '>
                            #778
                        </h2>
                    </div>
                </div>
                <div className='flex items-center gap-2 p-2'>
                    <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                        {/*  */}
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div>
                        <h2 className='text-white font-medium'>Solo Mobile survival - only headshot</h2>
                        <p className='text-yellow-500 text-sm'>2025-07-15 at 06:00pm</p>
                    </div>
                </div>
                {/* pricing mini card */}
                <div className='grid grid-cols-3 gap-3 items-center justify-center m-4'>
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

export default Results;