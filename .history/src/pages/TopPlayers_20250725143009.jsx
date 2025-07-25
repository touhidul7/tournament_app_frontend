import { faBangladeshiTakaSign, faChevronLeft, faClipboardCheck, faTrophy, faCrown, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useOutletContext } from "react-router";
const TopPlayers = () => {
    const { topPlayer} = useOutletContext();
    console.log(topPlayer);
    
    return (
        <div className="max-w-md mx-auto h-screen font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/profile' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Top Players
                    </NavLink>
                </div>
            </div>
            {/* === Winner Details Section === */}
            {/* === Total Slots 48 (Limited) === */}
            <div className="w-full justify-items-center mt-24">
                <table className="w-[95%]">
                    <thead className="w-full bg-green-500">
                        <th className="text-md text-white py-1 rounded-t-md" colSpan={4}>
                            <FontAwesomeIcon className="text-md mr-2" icon={faClipboardCheck}/>
                            Top 50 Players 
                            <FontAwesomeIcon className="text-md ml-2" icon={faClipboardCheck}/>
                        </th>
                    </thead>
                    <tfoot className="bg-white">
                        <tr className="border-b text-start text-sm">
                            <td className="text-center py-1 bg-hoverbg text-orange-400"><FontAwesomeIcon icon={faCrown}/></td>
                            <td className="pl-2 py-1 bg-hoverbg text-md font-semibold text-cardbg">Subas Hembrom</td>
                            <td className="pr-2 py-1 text-end bg-hoverbg text-md font-semibold text-cardbg"> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 1,00,000 TK</td>
                        </tr>
                        <tr className="border-b text-start text-sm">
                            <td className="text-center py-1 bg-hoverbg text-orange-400"><FontAwesomeIcon icon={faTrophy}/></td>
                            <td className="pl-2 py-1 bg-hoverbg text-md font-semibold text-cardbg">Juwel Hossain</td>
                            <td className="pr-2 py-1 text-end bg-hoverbg text-md font-semibold text-cardbg"> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 99,000 TK</td>
                        </tr>
                        <tr className="border-b text-start text-sm">
                            <td className="text-center py-1 bg-hoverbg text-orange-400"><FontAwesomeIcon icon={faAward}/></td>
                            <td className="pl-2 py-1 bg-hoverbg text-md font-semibold text-cardbg">Md Babu</td>
                            <td className="pr-2 py-1 text-end bg-hoverbg text-md font-semibold text-cardbg"> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 80,000 TK</td>
                        </tr>
                        <tr className="border-b text-start text-sm">
                            <td className="text-center py-1 bg-hoverbg">4</td>
                            <td className="pl-2 py-1 bg-hoverbg text-md font-semibold text-cardbg">Roton</td>
                            <td className="pr-2 py-1 text-end bg-hoverbg text-md font-semibold text-cardbg"> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 60,000 TK</td>
                        </tr>
                        <tr className="border-b text-start text-sm">
                            <td className="text-center py-1 bg-hoverbg rounded-bl-md">5</td>
                            <td className="pl-2 py-1 bg-hoverbg text-md font-semibold text-cardbg">Bikrom</td>
                            <td className="pr-2 py-1 text-end rounded-br-md bg-hoverbg text-md font-semibold text-cardbg"> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 50,000 TK</td>
                        </tr>
                    </tfoot>
                    <tbody className="bg-cardbg text-start">
                        <td className="text-center text-white py-1">No</td>
                        <td className="text-white pl-2 py-1">Players Name</td>
                        <td className="text-white pr-2 py-1 text-end">Winning</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopPlayers;