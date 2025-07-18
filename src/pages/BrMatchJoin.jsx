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
            <div className="w-full mt-24 justify-items-center">
                <div className="w-[95%] bg-cardbg">
                    <h1>Solo Time | Mobile | Regular</h1>
                    <p>19/07/2025, 02:00 PM</p>
                    <div>
                        <p>Win Prize: <FontAwesomeIcon className="mx-1" icon={faBangladeshiTakaSign}/> 800 Tk</p>
                        <p>Entry Fee: <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 10 TK</p>
                    </div>
                    <hr />
                    <p className="font-Siliguri">অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন।</p>
                </div>
            </div>
        </div>
    );
};

export default BrMatchJoin;