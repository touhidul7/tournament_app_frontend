/* eslint-disable react-hooks/exhaustive-deps */
import { faChevronLeft, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
const MyMatches = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [matchData, setMatchData] = useState([]);
    const loadMyMatches = () => {
        fetch(`${BASE_URL}/game-entry/user/${user.user.uid}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setMatchData(data);
            })
            .catch((error) => {
                console.error("Error fetching deposite data:", error);
                toast.error("Error fetching deposite data");
            });
    }
    useEffect(() => {
        loadMyMatches();
    }, [BASE_URL, user.user.uid]);

    console.log(matchData.joins);


    return (
        <div className="max-w-md mx-auto min-h-screen font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        My Matches
                    </NavLink>
                </div>
            </div>
            {/* === My Matches List === */}
            <section className="w-full justify-items-center mt-26">
                {matchData.joins && matchData.joins.length > 0 ? (
                    matchData.joins.map((match, index) => (
                        <div key={index} className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                            <div className="flex items-center gap-4 p-3">
                                <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                                    {match.entry_fee} TK
                                </div>
                                <h1 className="text-lg font-medium">{index+1}</h1>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-md font-semibold">{match.game_name}</h1>
                                    <p className="text-sm text-hoverbg">{match.game_date}, {match.game_time} Pm</p>
                                    <h2 className="text-md font-medium">Match Winning Prize : {match.win_prize} TK</h2>
                                </div>
                                {/* <h2>#777</h2> */}
                            </div>
                        </div>
                    ))) : (<>No Match Founded</>)}
            </section>
        </div>
    );
};

export default MyMatches;