import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";

const BrMatchJoin = () => {
    const { id } = useParams(); 

    const [joinType, setJoinType] = useState(null); 
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [matchDetails, setMatchDetails] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/get/matches/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // const found = data.filter((item) => item.category_id == id);
                setMatchDetails(data);
            });
    }, [BASE_URL, id]);
    console.log(matchDetails);
    return (
        <div className='max-w-md mx-auto h-screen font-Jakarta bg-mainbg'>
            <div className=" bg-black relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Back
                    </NavLink>
                </div>
            </div>
            {/* === Join Details === */}
            <div className="w-full mt-24 justify-items-center font-Jakarta pt-5">
                <div className="w-[95%] bg-cardbg rounded-md text-white p-3">
                    <h1 className="text-md font-semibold ml-2">{matchDetails.match_name}</h1>
                    <p className="text-md text-hoverbg ml-2 mt-3">Date: {matchDetails.date} | Time: {matchDetails.time}</p>

                    <div className="flex text-md font-medium ml-2 mt-3 gap-7">
                        <p>Win Prize: <FontAwesomeIcon className="mx-1" icon={faBangladeshiTakaSign} /> 800 Tk</p>
                        <p>Entry Fee: <FontAwesomeIcon icon={faBangladeshiTakaSign} /> 10 TK</p>
                    </div>

                    <hr className="text-hoverbg my-3" />
                    <p className="text-lg text-center font-Siliguri text-green-500">
                        অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন।
                    </p>

                    {/* === Join type buttons === */}
                    <div className="flex items-center justify-center gap-5 mt-4 p-3">
                        <button
                            className={`text-lg font-medium w-32 py-2 rounded-md inset-shadow-sm transition-all duration-300 ${joinType === 'solo' ? 'bg-green-600' : 'bg-black'
                                } hover:bg-green-600`}
                            onClick={() => setJoinType('solo')}
                        >
                            Solo
                        </button>
                        <button
                            className={`text-lg font-medium w-32 py-2 rounded-md inset-shadow-sm transition-all duration-300 ${joinType === 'duo' ? 'bg-green-600' : 'bg-black'
                                } hover:bg-green-600`}
                            onClick={() => setJoinType('duo')}
                        >
                            Duo
                        </button>
                    </div>

                    {/* === Conditional Input Fields === */}
                    {joinType && (
                        <div className="flex flex-col mx-2 mt-6 gap-4">
                            <input
                                className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                type="text"
                                placeholder="Player 1 Name"
                            />
                            {joinType === 'duo' && (
                                <input
                                    className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                    type="text"
                                    placeholder="Player 2 Name"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
            {/* === Join Now btn === */}
            <div className="w-full  flex items-center justify-center mt-4">
                <button className="w-[95%] p-3 bg-green-500 mb-20 rounded text-lg text-white font-semibold">Pay & Join Now</button>
            </div>
        </div>
    );
};

export default BrMatchJoin;