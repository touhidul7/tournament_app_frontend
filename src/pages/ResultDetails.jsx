/* eslint-disable no-unused-vars */
import { faBangladeshiTakaSign, faChevronLeft, faClipboardCheck, faTrophy, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
const ResultDetails = () => {
    const { matchId } = useParams();

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [loader, setLoader] = useState(true);
    const [results, setResults] = useState([]);



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
    }, []);

    console.log(results)


    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            {matchId}
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
                                <h3 className="text-white text-md font-medium">Duo Time | Mobile | Regular</h3>
                                <p className="text-hoverbg text-sm mt-2">Organised on 2025-07-17 at 12:00 pm</p>
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
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} /> 800 TK</th>
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} /> 10 TK</th>
                                            <th className="text-md text-white pt-2"> <FontAwesomeIcon className="mr-1" icon={faBangladeshiTakaSign} /> 20 TK</th>
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
                                <th className="text-md text-white py-1 rounded-t-md" colSpan={4}>
                                    <FontAwesomeIcon className="text-md mr-2" icon={faTrophy} />
                                    WINNER
                                    <FontAwesomeIcon className="text-md ml-2" icon={faTrophy} />
                                </th>
                            </thead>
                            <tfoot className="bg-white">
                                <tr className="border-b text-start text-sm">
                                    <td className="text-center py-1">1</td>
                                    <td className="pl-2 py-1">Subas Hembrom</td>
                                    <td className="text-center py-1">30</td>
                                    <td className="pl-2 py-1">100</td>
                                </tr>
                                <tr className="border-b text-start text-sm">
                                    <td className="rounded-bl-md text-center py-1">2</td>
                                    <td className="pl-2 py-1">Juwel Hossain</td>
                                    <td className="text-center py-1">30</td>
                                    <td className="pl-2 rounded-br-md py-1">100</td>
                                </tr>
                            </tfoot>
                            <tbody className="bg-blue-500 text-start">
                                <td className="text-center text-white py-1">No</td>
                                <td className="text-white pl-2 py-1">Players Name</td>
                                <td className="text-white text-center py-1">Kills</td>
                                <td className="text-white pl-2 py-1">Winning</td>
                            </tbody>
                        </table>
                    </div>
                    {/* === Winner Details Section === */}
                    {/* === Total Slots 48 (Limited) === */}
                    <div className="w-full justify-items-center mt-4">
                        <table className="w-[95%]">
                            <thead className="w-full bg-green-500">
                                <th className="text-md text-white py-1 rounded-t-md" colSpan={4}>
                                    <FontAwesomeIcon className="text-md mr-2" icon={faClipboardCheck} />
                                    Full Result
                                    <FontAwesomeIcon className="text-md ml-2" icon={faClipboardCheck} />
                                </th>
                            </thead>
                            <tfoot className="bg-white">
                                {results?.player_results?.length > 0 ? (
                                    results.player_results.map((result, index) => (
                                        <tr key={index} className="border-b text-start text-sm">
                                            <td className="text-center py-1">{index + 1}</td>
                                            <td className="pl-2 py-1">{result.ex_1}</td>
                                            <td className="text-center py-1">{result.pname1_kill + result.pname2_kill}</td>
                                            <td className="pl-2 py-1">{result.total_prize}</td>
                                        </tr>
                                    ))
                                ) : (<div>No Results Found</div>)}


                            </tfoot>
                            <tbody className="bg-blue-500 text-start">
                                <td className="text-center text-white py-1">No</td>
                                <td className="text-white pl-2 py-1">Players Name</td>
                                <td className="text-white text-center py-1">Kills</td>
                                <td className="text-white pl-2 py-1">Winning</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>) : <>Loading</>}
        </div>
    );
};

export default ResultDetails;