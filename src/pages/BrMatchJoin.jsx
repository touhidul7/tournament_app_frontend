import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const BrMatchJoin = () => {
    return (
        <div className='max-w-md mx-auto h-screen font-Jakarta bg-mainbg'>
                <div className=" bg-mainbg relative flex items-start justify-center">
                    {/* Top white curved section */}
                    <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                        <NavLink to='/brmatches' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                            <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                            BR Matches
                        </NavLink>
                    </div>
            </div>
            {/* === Join Details === */}
            <div className="w-full mt-24 justify-items-center font-Jakarta">
                <div className="w-[95%] bg-cardbg rounded-md text-white py-2">
                    <h1 className="text-md font-semibold ml-2">Solo Time | Mobile | Regular</h1>
                    <p className="text-md text-hoverbg ml-2 mt-1">19/07/2025, 02:00 PM</p>
                    <div className="flex text-md font-medium ml-2 mt-1 gap-7">
                        <p>Win Prize: <FontAwesomeIcon className="mx-1" icon={faBangladeshiTakaSign}/> 800 Tk</p>
                        <p>Entry Fee: <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 10 TK</p>
                    </div>
                    <hr className="text-hoverbg my-3" />
                    <p className="text-lg text-center font-Siliguri text-green-500">অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন।</p>
                    {/* === Join type button === */}
                    <div className="flex items-center justify-center gap-5 mt-4">
                        <button className="text-lg font-medium bg-mainbg w-32 py-2 rounded-md inset-shadow-sm inset-shadow-gray-100/70 hover:bg-cardbg hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out" type="submit">Solo</button>
                        <button className="text-lg font-medium bg-mainbg w-32 py-2 rounded-md inset-shadow-sm inset-shadow-gray-100/70 hover:bg-cardbg hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out" type="submit">Duo</button>
                        {/* === DropDown Input Text === */}
                    </div>
                        <div className="solo mx-2 mt-6">
                            <input className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out" type="text" placeholder="Player 1 Name" />
                        </div>
                        <div className="Duo flex flex-col gap-4 mx-2 mt-6">
                            <input className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out" type="text" placeholder="Player 1 Name" />
                            <input className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out" type="text" placeholder="Player 2 Name" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default BrMatchJoin;