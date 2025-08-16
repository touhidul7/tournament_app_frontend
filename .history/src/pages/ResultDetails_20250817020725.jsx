/* eslint-disable react-hooks/exhaustive-deps */
import { faBangladeshiTakaSign, faChevronLeft, faClipboardCheck, faTrophy, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
const ResultDetails = () => {
    const { matchId } = useParams();

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [loader, setLoader] = useState(true);
    const [results, setResults] = useState([]);
    const [matchDetails, setMatchDetails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const resultRes = await fetch(`${BASE_URL}/get/match-results/${matchId}`);
                const resultData = await resultRes.json();

                if (resultData?.player_results) {
                    setResults(resultData);
                }
            } catch (error) {
                console.error("Error fetching match/result data:", error);
            } finally {
                setLoader(false);
            }
        };

        fetchData();

        fetch(`${BASE_URL}/get/matches/${matchId}`)
            .then((res) => res.json())
            .then((data) => {
                // const found = data.filter((item) => item.category_id == id);
                setMatchDetails(data);
            });


    }, []);

    const getPlayerNameById = (userId) => {
        const player = results.player_results?.find(p => p.user_id === userId);
        return player ? player : "Unknown";
    };

    const calculateTotalKills = (player) => {
        let total = 0;
        if (player?.pname1_kill) total += parseInt(player.pname1_kill);
        if (player?.pname2_kill) total += parseInt(player.pname2_kill);
        if (player?.pname3_kill) total += parseInt(player.pname3_kill);
        if (player?.pname4_kill) total += parseInt(player.pname4_kill);
        return total;
    };


    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24 min-h-screen">
            {/* {matchId} */}
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/results' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Result Details
                    </NavLink>
                </div>
            </div>
            {!loader ? (<>
                <div>
                    {/* === Result Details === */}
                    <div className="w-full justify-items-center">
                        <div className="w-[95%] bg-cardbg rounded-md text-center mt-24 py-2 shadow-sm shadow-gray-600">
                            <div>
                                <h3 className="text-white text-md">{matchDetails.match_name}</h3>
                                <p className="text-hoverbg text-sm mt-2">Organised on {matchDetails.date} at {matchDetails.time}</p>
                            </div>
                            <div className="border border-hoverbg my-3"></div>
                            <div className="justify-items-center">
                                <table className="w-[95%] text-white py-2">
                                    <thead className="pt-2">
                                        <tr className="pt-2">
                                            <td className="text-sm text-hoverbg">WIN PRIZE</td>
                                            <td className="text-sm text-hoverbg">PER KILL</td>
                                            <td className="text-sm text-hoverbg">ENTRY FEE</td>
                                        </tr>
                                    </thead>
                                    <tbody className="w-[95%]">
                                        <tr className="mt-4">
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} /> {matchDetails.win_price} TK</th>
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} /> {matchDetails.kill_price}  TK</th>
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} />{matchDetails.entry_fee} TK</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* === Winner Details Section === */}
                    <div className="w-full justify-items-center mt-4">
                        <table className="w-[95%]">
                            <thead className="w-full bg-green-500">
                                <tr>
                                    <th className="text-md text-white py-1 rounded-t-md" colSpan={4}>
                                        <FontAwesomeIcon className="text-md mr-2" icon={faTrophy} />
                                        WINNER
                                        <FontAwesomeIcon className="text-md ml-2" icon={faTrophy} />
                                    </th>
                                </tr>
                            </thead>
                            <tfoot className="bg-white rounded-b-md">
                                <tr className="border-b text-start text-sm">
                                    <td className="text-center py-1">1</td>
                                    <td className="pl-2 py-1">{getPlayerNameById(results.winner).ex_1}</td>
                                    <td className="pl-2 py-1">{calculateTotalKills(getPlayerNameById(results.winner))}</td>
                                    <td className="pl-2 py-1">{parseInt(getPlayerNameById(results.winner).total_prize) + parseInt(matchDetails.win_price)} ৳</td>
                                </tr>
                                {results.second && (
                                    <tr className="border-b text-start text-sm">
                                        <td className="text-center py-1">1</td>
                                        <td className="pl-2 py-1">{getPlayerNameById(results.winner).ex_1}</td>
                                        <td className="pl-2 py-1">{calculateTotalKills(getPlayerNameById(results.winner))}</td>
                                        <td className="pl-2 py-1">{parseInt(getPlayerNameById(results.winner).total_prize) + parseInt(matchDetails.win_price)} ৳</td>
                                    </tr>
                                )}
                                {results.third && (
                                    <tr className="border-b text-start text-sm">
                                        <td className="rounded-bl-md text-center py-1">3</td>
                                        <td className="pl-2 py-1">{getPlayerNameById(results.third).ex_1}</td>
                                        <td className="pl-2 py-1"> {calculateTotalKills(getPlayerNameById(results.third))}</td>
                                        <td className="pl-2 py-1">{parseInt(getPlayerNameById(results.third).total_prize) + parseInt(matchDetails.third_prize)} ৳</td>
                                    </tr>
                                )}
                                {results.fourth && (
                                    <tr className="border-b text-start text-sm">
                                        <td className="rounded-bl-md text-center py-1">4</td>
                                        <td className="pl-2 py-1">{getPlayerNameById(results.fourth).ex_1}</td>
                                        <td className="pl-2 py-1"> {calculateTotalKills(getPlayerNameById(results.fourth))}</td>
                                        <td className="pl-2 py-1">{parseInt(getPlayerNameById(results.fourth).total_prize) + parseInt(matchDetails.fourth_prize)} ৳</td>
                                    </tr>
                                )}
                                {results.fifth && (
                                    <tr className="border-b text-start text-sm">
                                        <td className="rounded-bl-md text-center py-1">5</td>
                                        <td className="pl-2 py-1">{getPlayerNameById(results.fifth).ex_1}</td>
                                        <td className="pl-2 py-1"> {calculateTotalKills(getPlayerNameById(results.fifth))}</td>
                                        <td className="pl-2 py-1">{parseInt(getPlayerNameById(results.fifth).total_prize) + parseInt(matchDetails.fifth_prize)} ৳</td>
                                    </tr>
                                )}
                            </tfoot>
                            <tbody className="bg-blue-500 text-start">
                                <tr>
                                    <td className="text-center text-white py-1">No</td>
                                    <td className="text-white pl-2 py-1">Players Name</td>
                                    <td className="text-white text-center py-1">Kills</td>
                                    <td className="text-white pl-2 py-1">Amount</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* === Winner Details Section === */}
                    {/* === Total Slots 48 (Limited) === */}
                    <div className="w-full justify-items-center mt-4">
                        <table className="w-[95%]">
                            <thead className="w-full bg-green-500">
                                <tr>
                                    <th className="text-md text-white py-1 rounded-t-md" colSpan={4}>
                                        <FontAwesomeIcon className="text-md mr-2" icon={faClipboardCheck} />
                                        Full Result (Only Per Kill)
                                        <FontAwesomeIcon className="text-md ml-2" icon={faClipboardCheck} />
                                    </th>
                                </tr>
                            </thead>
                            <tfoot className="bg-white">
                                {results?.player_results?.length > 0 ? (
                                    results.player_results.map((result, index) => (
                                        <tr key={index} className="border-b text-start text-sm">
                                            <td className="text-center py-1">{index + 1}</td>
                                            <td className="pl-2 py-1">{result.ex_1}</td>
                                            <td className="text-center py-1">{parseInt(result.pname1_kill) + parseInt(result.pname2_kill)}</td>
                                            <td className="pl-2 py-1">{result.total_prize} ৳</td>
                                        </tr>
                                    ))
                                ) : (<tr><td>No Results Found</td></tr>)}


                            </tfoot>
                            <tbody className="bg-blue-500 text-start">
                                <tr>
                                    <td className="text-center text-white py-1">No</td>
                                    <td className="text-white pl-2 py-1">Players Name</td>
                                    <td className="text-white text-center py-1">Kills</td>
                                    <td className="text-white pl-2 py-1">Amount</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>) : <>Loading</>}
        </div>
    );
};

export default ResultDetails;