/* eslint-disable no-unused-vars */
import { faChevronLeft, faClipboardCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const MatcheDetails = () => {
    const { id } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [matchDetails, setMatchDetails] = useState([]);
    console.log(`Match ID: ${id}`); // For debugging purposes, you can remove this later
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
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            <div className="pb-24">
                <div className=" bg-mainbg relative flex items-start justify-center">
                    {/* Top white curved section */}
                    <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                        <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                            <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                            Match Details
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto justify-items-center">
                {/* === Match Details Section === */}
                <section className="w-[95%] bg-cardbg mt-3 rounded-md py-2 text-white">
                    <h2 className="border-b border-b-hoverbg pb-2 pl-2 text-md font-semibold mb-2">{matchDetails.match_name}</h2>
                    <div className="grid gap-3">
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Type: <b>{matchDetails.game_type}</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Version: <b>{matchDetails.version}</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Map: <b>{matchDetails.map_name}</b></h2>
                        </div>
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Match Type: <b>Paid</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Entry Fee: <b>{matchDetails.entry_fee} TK</b></h2>
                        </div>
                        <div className="">
                            <h2 className="bg-white p-1 rounded-md text-cardbg text-sm mx-2">Match Schedule: <b>{matchDetails.date} at {matchDetails.time}</b></h2>
                        </div>
                        <h2 className="border-b border-b-white pb-2 pl-2 text-md font-semibold">Prize Details</h2>
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Winning Prize: <b>{matchDetails.win_price} TK</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Per Kill: <b>{matchDetails.kill_price} TK</b></h2>
                        </div>
                    </div>
                </section>
                <div className="w-[95%] mt-4 bg-yellow-500 text-white text-md font-medium rounded-md p-2">
                    <h2>Room details will be shared before 5-10 minutes of match start time</h2>
                </div>
                <div className="w-[95%] mt-4 bg-cardbg text-white text-md font-semibold text-center rounded-md p-2">
                    <h1 className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faClipboardCheck} />
                        Match Instructions and Rules
                        <FontAwesomeIcon icon={faClipboardCheck} />
                    </h1>
                </div>
                <div className="mt-4">
                    <h1 className="bg-red-500 p-2 rounded-md text-white text-md font-medium">Full Map Rules:</h1>
                </div>
                {/* === Rules === */}
                <div className="w-[95%] mt-2 text-white font-Siliguri font-medium">
                    <div
                        dangerouslySetInnerHTML={{ __html: matchDetails.category?.rules }}
                    />
                </div>

                <div className="w-[95%] mt-4 bg-cardbg text-white text-md font-semibold text-center rounded-md p-2">
                    <h1 className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faClipboardCheck} />
                        Registered Participants
                        <FontAwesomeIcon icon={faClipboardCheck} />
                    </h1>
                </div>
                <div className="w-[95%] mt-4 font-semibold text-white">
                    {matchDetails.joins && matchDetails.joins.length > 0 ? (
                        matchDetails.joins.map((join, index) => (
                            <>
                                {join?.pname1 && <h2 key={index} className="border-b border-b-hoverbg py-2"> {join?.pname1}</h2>}
                                {join?.pname2 && <h2 className="border-b border-b-hoverbg py-2"> {join?.pname2}</h2>}
                                {join?.pname3 && <h2 className="border-b border-b-hoverbg py-2"> {join?.pname3}</h2>}
                                {join?.pname4 && <h2 className="border-b border-b-hoverbg py-2"> {join?.pname4}</h2>}
                            </>
                        ))
                    ) : (<div>Hello World</div>)}
                </div>
            </div>
        </div>
    );
};

export default MatcheDetails;