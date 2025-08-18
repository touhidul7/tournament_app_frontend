/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  faBangladeshiTakaSign,
  faChevronLeft,
  faClipboardCheck,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const ResultDetails = () => {
  const { matchId } = useParams();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [loader, setLoader] = useState(true);
  const [results, setResults] = useState([]);
  const [matchDetails, setMatchDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultRes = await fetch(
          `${BASE_URL}/get/match-results/${matchId}`
        );
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
        setMatchDetails(data);
      });
  }, []);

  // Get team players by userId
  const getTeamPlayers = (userId) => {
    const team = matchDetails.joins?.find((j) => j.user_id === userId);
    if (!team) return [];
    return [team.pname1, team.pname2, team.pname3, team.pname4].filter(Boolean);
  };

  // Get player data from results by userId
  const getPlayerById = (userId) => {
    return results.player_results?.find((p) => p.user_id === userId) || null;
  };

  // Calculate kills
  const calculateTotalKills = (player) => {
    if (!player) return 0;
    let total = 0;
    if (player?.pname1_kill) total += parseInt(player.pname1_kill);
    if (player?.pname2_kill) total += parseInt(player.pname2_kill);
    if (player?.pname3_kill) total += parseInt(player.pname3_kill);
    if (player?.pname4_kill) total += parseInt(player.pname4_kill);
    return total;
  };

  // Get player kills with names in table format
  const renderPlayerKillsTable = (userId) => {
    const team = matchDetails.joins?.find((j) => j.user_id === userId);
    const player = getPlayerById(userId);
    if (!team || !player) return null;

    const players = [
      { name: team.pname1, kills: player.pname1_kill || 0 },
      { name: team.pname2, kills: player.pname2_kill || 0 },
      { name: team.pname3, kills: player.pname3_kill || 0 },
      { name: team.pname4, kills: player.pname4_kill || 0 },
    ].filter((item) => item.name);

    return (
      <table className="w-full border-collapse">
        <tbody>
          {players.map((item, i) => (
            <tr key={i} className="border-b border-gray-200 last:border-b-0">
              <td className="py-1 px-1 text-left">{item.name}</td>
              <td className="py-1 px-1 text-right">{item.kills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24 min-h-screen">
      <div className=" bg-mainbg relative flex items-start justify-center">
        {/* Top white curved section */}
        <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
          <NavLink
            to="/results"
            className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 "
          >
            <span>
              <FontAwesomeIcon className=" text-xl" icon={faChevronLeft} />
            </span>
            Result Details
          </NavLink>
        </div>
      </div>

      {!loader ? (
        <>
          <div>
            {/* === Match Info === */}
            <div className="w-full justify-items-center">
              <div className="w-[95%] bg-cardbg rounded-md text-center mt-24 py-2 shadow-sm shadow-gray-600">
                <div>
                  <h3 className="text-white text-md">
                    {matchDetails.match_name}
                  </h3>
                  <p className="text-hoverbg text-sm mt-2">
                    Organised on {matchDetails.date} at {matchDetails.time}
                  </p>
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
                        <th className="text-md text-white pt-2">
                          <FontAwesomeIcon
                            className="mr-1"
                            icon={faBangladeshiTakaSign}
                          />{" "}
                          {matchDetails.win_price} TK
                        </th>
                        <th className="text-md text-white pt-2">
                          <FontAwesomeIcon
                            className="mr-1"
                            icon={faBangladeshiTakaSign}
                          />{" "}
                          {matchDetails.kill_price} TK
                        </th>
                        <th className="text-md text-white pt-2">
                          <FontAwesomeIcon
                            className="mr-1"
                            icon={faBangladeshiTakaSign}
                          />
                          {matchDetails.entry_fee} TK
                        </th>
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
                    <th
                      className="text-md text-white py-1 rounded-t-md"
                      colSpan={4}
                    >
                      <FontAwesomeIcon
                        className="text-md mr-2"
                        icon={faTrophy}
                      />
                      WINNER
                      <FontAwesomeIcon
                        className="text-md ml-2"
                        icon={faTrophy}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-start text-sm">
                  {["winner", "second", "third", "fourth", "fifth"].map(
                    (pos, index) => {
                      const userId = results[pos];
                      if (!userId) return null;
                      const player = getPlayerById(userId);
                      return (
                        <tr key={pos} className="border-b">
                          <td className="text-center py-1 align-top">
                            {index + 1}
                          </td>
                          <td className="py-1 px-1">
                            {renderPlayerKillsTable(userId)}
                          </td>
                          <td className="text-center py-1 align-top">
                            {calculateTotalKills(player)}
                          </td>
                          <td className="text-center py-1 align-top">
                            {parseInt(player?.total_prize || 0) +
                              parseInt(matchDetails[`${pos}_prize`] || 0)}{" "}
                            ৳
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
                <tfoot className="bg-blue-500 text-start">
                  <tr>
                    <td className="text-center text-white py-1">No</td>
                    <td className="text-white pl-2 py-1">Players (Kills)</td>
                    <td className="text-white text-center py-1">Total</td>
                    <td className="text-white pl-2 py-1">Amount</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* === Full Result Section === */}
            <div className="w-full justify-items-center mt-4">
              <table className="w-[95%]">
                <thead className="w-full bg-green-500">
                  <tr>
                    <th
                      className="text-md text-white py-1 rounded-t-md"
                      colSpan={4}
                    >
                      <FontAwesomeIcon
                        className="text-md mr-2"
                        icon={faClipboardCheck}
                      />
                      Full Result (Only Per Kill)
                      <FontAwesomeIcon
                        className="text-md ml-2"
                        icon={faClipboardCheck}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-start text-sm">
                  {results?.player_results?.length > 0 ? (
                    results.player_results.map((result, index) => (
                      <tr key={index} className="border-b">
                        <td className="text-center py-1 align-top">
                          {index + 1}
                        </td>
                        <td className="py-1 px-1">
                          {renderPlayerKillsTable(result.user_id)}
                        </td>
                        <td className="text-center py-1 align-top">
                          {calculateTotalKills(result)}
                        </td>
                        <td className="text-center py-1 align-top">
                          {result.total_prize} ৳
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-2">
                        No Results Found
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="bg-blue-500 text-start">
                  <tr>
                    <td className="text-center text-white py-1">No</td>
                    <td className="text-white pl-2 py-1">Players (Kills)</td>
                    <td className="text-white text-center py-1">Total</td>
                    <td className="text-white pl-2 py-1">Prize</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default ResultDetails;
