import { faAward, faChevronDown, faChevronLeft, faCircleXmark, faClock, faCrown, faFire, faHandPeace, faKey, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const BrMatches = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    
                        
                        <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                            <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft}/></span>
                            BR Matches
                        </NavLink>
                    
                </div>
            </div>
            {/* === BR Matches Card Section === */}
            <section className="w-full mt-24 justify-items-center">
                {/* === Cards === */}
                <div className="w-[95%]">
                    <div className="relative bg-cardbg rounded-lg p-2">
                    <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                    <NavLink to='/matchdetails' className="flex items-center gap-2">
                        <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                        <div className="flex flex-col gap-1.5">
                            <h1 className="text-white font-semibold">Duo Time | Mobile | Regular</h1>
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
                            <h2 className='text-white font-semibold'>100</h2>
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
                                <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                <p>Only 42 spots are left</p>
                                <p>10/38</p>
                            </div>
                        </div>
                        {/* === Joining === */}
                        <div className="w-1/4">
                            <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 mb-12">
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faKey}/> Room Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faTrophy}/>Prize Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                        <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock}/>STARTS IN- <h2><input className="font-bold" type="time" /></h2></p>
                    </div>
                </div>
                </div>
                {/* === Cards Two === */}
                <div className="relative w-[95%] bg-cardbg rounded-lg p-2 mt-6">
                    <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                    <div className="flex items-center gap-2">
                        <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                        <div className="flex flex-col gap-1.5">
                            <h1 className="text-white font-semibold">Duo Time | Mobile | Regular</h1>
                            <p className="text-sm text-yellow-500">2025-07-17 at 11:00 pm</p>
                        </div>
                    </div>
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
                            <h2 className='text-white font-semibold'>100</h2>
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
                                <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                <p>Only 42 spots are left</p>
                                <p>10/38</p>
                            </div>
                        </div>
                        {/* === Joining === */}
                        <div className="w-1/4">
                            <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 mb-12">
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faKey}/> Room Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faTrophy}/>Prize Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                        <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock}/>STARTS IN- <h2><input className="font-bold" type="time" /></h2></p>
                    </div>
                </div>
                {/* === Cards Three === */}
                <div className="relative w-[95%] bg-cardbg rounded-lg p-2 mt-6">
                    <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                    <div className="flex items-center gap-2">
                        <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                        <div className="flex flex-col gap-1.5">
                            <h1 className="text-white font-semibold">Duo Time | Mobile | Regular</h1>
                            <p className="text-sm text-yellow-500">2025-07-17 at 11:00 pm</p>
                        </div>
                    </div>
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
                            <h2 className='text-white font-semibold'>100</h2>
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
                                <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                <p>Only 42 spots are left</p>
                                <p>10/38</p>
                            </div>
                        </div>
                        {/* === Joining === */}
                        <div className="w-1/4">
                            <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 mb-12">
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faKey}/> Room Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faTrophy}/>Prize Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                        <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock}/>STARTS IN- <h2><input className="font-bold" type="time" /></h2></p>
                    </div>
                </div>
                {/* === Cards Four === */}
                <div className="relative w-[95%] bg-cardbg rounded-lg p-2 mt-6">
                    <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                    <div className="flex items-center gap-2">
                        <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                        <div className="flex flex-col gap-1.5">
                            <h1 className="text-white font-semibold">Duo Time | Mobile | Regular</h1>
                            <p className="text-sm text-yellow-500">2025-07-17 at 11:00 pm</p>
                        </div>
                    </div>
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
                            <h2 className='text-white font-semibold'>100</h2>
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
                                <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                <p>Only 42 spots are left</p>
                                <p>10/38</p>
                            </div>
                        </div>
                        {/* === Joining === */}
                        <div className="w-1/4">
                            <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 mb-12">
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faKey}/> Room Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faTrophy}/>Prize Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                        <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock}/>STARTS IN- <h2><input className="font-bold" type="time" /></h2></p>
                    </div>
                </div>
                {/* === Cards Five === */}
                <div className="relative w-[95%] bg-cardbg rounded-lg p-2 mt-6">
                    <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">#777</div>
                    <div className="flex items-center gap-2">
                        <img className="w-16 h-16 rounded-full" src="./image/br-profile.jpg" alt="" />
                        <div className="flex flex-col gap-1.5">
                            <h1 className="text-white font-semibold">Duo Time | Mobile | Regular</h1>
                            <p className="text-sm text-yellow-500">2025-07-17 at 11:00 pm</p>
                        </div>
                    </div>
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
                            <h2 className='text-white font-semibold'>100</h2>
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
                                <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                                <p>Only 42 spots are left</p>
                                <p>10/38</p>
                            </div>
                        </div>
                        {/* === Joining === */}
                        <div className="w-1/4">
                            <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">Join</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 mb-12">
                        <div className="w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faKey}/> Room Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="prizeDetails w-full flex items-center justify-between border-2 border-blue-500 text-white text-md rounded-md text-md p-2">
                            <p><FontAwesomeIcon className="text-md mr-1" icon={faTrophy}/>Prize Details</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                        <p className="flex items-center justify-center"><FontAwesomeIcon className="mr-2 text-2xl" icon={faClock}/>STARTS IN- <h2><input className="font-bold" type="time" /></h2></p>
                    </div>
                </div>
            </section>
            {/* ==== Pop Up === */}
            <div className="showPrizeDetails fixed bottom-18 w-full justify-items-center z-80">
                {/* === Cross icon === */}
                <div>
                    <FontAwesomeIcon className="text-3xl text-red-500" icon={faCircleXmark}/>
                </div>
                <div className="w-[70%] text-center mt-3">
                    <div className="bg-blue-500 rounded-t-md py-2">
                        <h2 className="font-bold text-xl text-white">TOTAL WINPRIZE</h2>
                        <p className="text-sm text-white mt-1">Dou Time | Mobile | Regular</p>
                    </div>
                    <div className="bg-white rounded-b-md py-2 flex flex-col gap-0.5">
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-400" icon={faCrown}/> Winner - 100 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-orange-300" icon={faTrophy}/> 2nd Position - 80 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-300" icon={faAward}/> 3rd Position - 50 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-300" icon={faMedal}/> 4th Position - 40 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-300" icon={faMedal}/> 5th Position - 30 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-500" icon={faFire}/> Per Kill: 10 Taka</p>
                        <p className="font-medium text-lg text-gray-700"> <FontAwesomeIcon className="text-xl text-amber-500" icon={faHandPeace}/> Total Prize Pool: 800 Taka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrMatches;