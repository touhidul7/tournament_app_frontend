/* eslint-disable react-hooks/exhaustive-deps */
import {
  faAward,
  faChevronLeft,
  faCircleXmark,
  faClock,
  faCrown,
  faFire,
  faHandPeace,
  faKey,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { } from "../css/BrMatch.css";
import toast from "react-hot-toast";

const BrMatches = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;
  const [matchData, setMatchData] = useState([]);
  const [open, setOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState({});
  const [match, setMatch] = useState([]);
  const [isStarted, setIsStarted] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { id } = useParams();
  const [joinCounts, setJoinCounts] = useState({});
  const [loadingJoinCounts, setLoadingJoinCounts] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/matches`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.filter((item) => item.category_id == id);
        setMatch(found);
        // Fetch join counts for all matches in this category
        if (found.length > 0) {
          setLoadingJoinCounts(true);
          Promise.all(
            found.map((m) =>
              fetch(`${BASE_URL}/game-entry/count/${m.id}`)
                .then((res) => res.json())
                .then((data) => ({ id: m.id, count: data.game_count }))
                .catch(() => ({ id: m.id, count: 0 }))
            )
          ).then((results) => {
            const countsObj = {};
            results.forEach(({ id, count }) => {
              countsObj[id] = count;
            });
            setJoinCounts(countsObj);
            setLoadingJoinCounts(false);
          });
        } else {
          setJoinCounts({});
          setLoadingJoinCounts(false);
        }
      });

    fetch(`${BASE_URL}/game-entry/check/${user.user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinedMatch(data);
      });

  }, [id, user.user.uid]);


  const [joinedMatch, setJoinedMatch] = useState([]);
  // Helper function for Join button

  const roomDetailsVerify = (date, time, id) => {
    const matchDateTime = new Date(`${date} ${time}`);
    const now = new Date();
    const started = matchDateTime - now <= 0;
    const alreadyJoined = Array.isArray(joinedMatch?.data) && joinedMatch.data.some((entry) => String(entry.match_id) === String(id));

    if (alreadyJoined && started) {
      return (true);
    } else if (alreadyJoined && !started) { return ("notstarted") } else {
      return (false);
    }
  };
  const renderJoinButton = (date, time, id) => {
    const matchDateTime = new Date(`${date} ${time}`);
    const now = new Date();
    const started = matchDateTime - now <= 0;

    // joinedMatch is an object with a data array
    const alreadyJoined = Array.isArray(joinedMatch?.data) && joinedMatch.data.some((entry) => String(entry.match_id) === String(id));
    if (alreadyJoined) {
      return (
        <NavLink className="w-1/4">
          <h2 className="bg-gray-400 font-semibold text-white text-center p-2 rounded-md opacity-50 cursor-not-allowed">
            Joined
          </h2>
        </NavLink>
      );
    }

    if (started) {
      return (
        <NavLink className="w-1/4">
          <h2 className="bg-green-400 font-semibold text-white text-center p-2 rounded-md opacity-50 cursor-not-allowed">
            Started
          </h2>
        </NavLink>
      );
    } else {
      return (
        <NavLink to={`/br-match-join/${id}`} className="w-1/4">
          <h2 className="bg-green-500 font-semibold text-white text-center p-2 rounded-md">
            Join
          </h2>
        </NavLink>
      );
    }
  };
  // get id data

  //load data



  if (!match) return <p className="text-white">Loading match...</p>;


  const MatchTimer = ({ date, time, matchId }) => {
    const [remaining, setRemaining] = useState("Loading...");

    useEffect(() => {
      const updateTimer = () => {
        if (!date || !time) {
          setRemaining("Time not set");
          return;
        }

        const matchTime = new Date(`${date} ${time}`);
        const now = new Date();
        const diff = matchTime - now;

        if (diff <= 0) {
          setRemaining("Match started");
          setIsStarted(matchId);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const pad = (num) => num.toString().padStart(2, "0");

        if (days > 0) {
          setRemaining(`${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);
        } else if (hours > 0) {
          setRemaining(`${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);
        } else {
          setRemaining(`${pad(minutes)}m ${pad(seconds)}s`);
        }
      };

      // Update immediately
      updateTimer();

      // Update every second
      const interval = setInterval(updateTimer, 1000);

      return () => clearInterval(interval);
    }, [date, time]);

    return <span> {!isStarted && "MATCH STARTING IN"} {remaining}</span>;
  };



  return (
    <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
      <div className=" bg-mainbg relative flex items-start justify-center">
        {/* Top white curved section */}
        <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
          <NavLink
            to="/"
            className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 "
          >
            <span>
              <FontAwesomeIcon className=" text-xl" icon={faChevronLeft} />
            </span>
            BR Matches
          </NavLink>
        </div>
      </div>
      {/* === BR Matches Card Section === */}
      <section className="w-full mt-24 justify-items-center">
        {/* === Cards === */}
        {match.map((match) => (
          <div className="w-[95%] mt-5" key={match.id}>
            <div className="relative bg-cardbg rounded-lg p-2">
              <div className="absolute top-0 right-0 w-12 h-5 flex items-center justify-center bg-white text-cardbg rounded-tr-lg">
                #{match.match_id}
              </div>
              <NavLink
                to={`/matchdetails/${match.id}`}
                className="match-box flex items-center gap-2"
              >
                <img
                  className="w-16 h-16 rounded-full"
                  src={`${IMAGE_URL}/${match.category?.image || "default.jpg"}`}
                  alt=""
                />
                <div className="match-details flex flex-col gap-1.5">
                  <h1 className="text-white font-semibold">
                    {match.match_name}
                  </h1>
                  <p className="text-sm text-yellow-500">
                    {match.date} at {match.time}
                  </p>
                </div>
              </NavLink>

              {/* Pricing Mini Card */}
              <div className="grid grid-cols-3 gap-3 items-center justify-center mt-4">
                <div>
                  <div className="bg-green-500 text-white text-center rounded-t-md">
                    <h2>+ WIN PRIZE</h2>
                  </div>
                  <div className="bg-white text-center rounded-b-md">
                    <h2>{match.win_price}</h2>
                  </div>
                </div>
                <div>
                  <div className="bg-blue-500 text-white text-center rounded-t-md">
                    <h2>+ PER KILL</h2>
                  </div>
                  <div className="bg-white text-center rounded-b-md">
                    <h2>{match.kill_price}</h2>
                  </div>
                </div>
                <div>
                  <div className="bg-red-500 text-white text-center rounded-t-md">
                    <h2>+ ENTRY FEE</h2>
                  </div>
                  <div className="bg-white text-center rounded-b-md">
                    <h2>{match.entry_fee}</h2>
                  </div>
                </div>
              </div>

              {/* Match Details */}
              <div className="grid grid-cols-3 mt-5">
                <div className="flex flex-col items-center">
                  <h2 className="text-hoverbg font-medium">ENTRY TYPE</h2>
                  <h2 className="text-white font-semibold">
                    {match.game_type}
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-hoverbg font-medium">MAP</h2>
                  <h2 className="text-white font-semibold">{match.map_name}</h2>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-hoverbg font-medium">VERSION</h2>
                  <h2 className="text-white font-semibold">{match.version}</h2>
                </div>
              </div>

              {/* Join Section */}
              <div className="flex items-center justify-between gap-4 mt-2">
                <div className="mt-5 w-3/4">
                  <div className="w-full h-5 rounded-full bg-hoverbg">
                    <div className="bg-green-500 h-5 w-10 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-white text-sm mt-1 pr-12">
                    <p>
                      {loadingJoinCounts
                        ? "Loading spots..."
                        : `Only ${match.max_player - (joinCounts[match.id] || 0)} spots are left`}
                    </p>
                    <p>
                      {loadingJoinCounts ? "-/-" : `${joinCounts[match.id] || 0}/${match.max_player}`}
                    </p>
                  </div>
                </div>
                {renderJoinButton(match.date, match.time, match.id)}

              </div>

              {/* Buttons: Room Details & Prize Details */}
              <div className="flex justify-center gap-2 mt-4 mb-12">
                {/* Room Details */}
                <div>

                  <button
                    onClick={() => {
                      const result = roomDetailsVerify(match.date, match.time, match.id);
                      result === true ? (setRoomDetails(match), setRoomOpen(true))
                        : result === 'notstarted' ? toast.error("Match not started yet")
                          : result === 'notjoined' ? toast.error("Join to access Room")
                            : toast.error("Match Ended");
                    }}
                    className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                  >
                    <FontAwesomeIcon icon={faKey} />
                    Room Details
                  </button>



                </div>

                {/* Prize Details */}
                <div>
                  <button
                    onClick={() => { setOpen(true); setMatchData(match); }}
                    className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                  >
                    <FontAwesomeIcon icon={faTrophy} />
                    Prize Details
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 w-full left-0 text-white bg-green-500 p-2 rounded-b-lg">
                <p className="flex items-center justify-center">
                  <FontAwesomeIcon className="mr-2 text-2xl" icon={faClock} />
                  {/* use this props and make a timer {match.date} and {match.time} */}
                  <MatchTimer date={match.date} time={match.time} matchId={match.id} />
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Modal Shown Here */}
        <div className="flex justify-center gap-2 mt-4 mb-12">
          {/* prize details modal */}
          <div>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
              />

              <div className="fixed top-4 z-10 w-sm overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-mainbg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                  >
                    <div className="bg-mainbg px-4 pt-2 pb-4 ">
                      <div className="">
                        <div className=" flex flex-col bg-cardbg items-center text-white rounded-md font-Jakarta py-2">
                          <h2 className="font-semibold">TOTAL PRIZE</h2>
                          <p className="text-sm ">{matchData?.match_name}</p>
                        </div>
                        <div className="mt-3 w-full text-center text-lg bg-cardbg text-white font-Jakarta flex flex-col gap-2 rounded-md px-3 py-3">
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faCrown}
                              className="text-yellow-400"
                            />{" "}
                            <span>Winner - {matchData?.win_price}Tk</span>
                          </h2>
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faTrophy}
                              className="text-yellow-400"
                            />{" "}
                            <span>2nd Position - {matchData?.second_prize}Tk</span>
                          </h2>
                          <h2 className="flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faAward}
                              className="text-yellow-400"
                            />{" "}
                            <span>3rd Position - {matchData?.third_prize}Tk</span>
                          </h2>
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faAward}
                              className="text-yellow-400"
                            />{" "}
                            <span>4th Position - {matchData?.fourth_prize}Tk</span>
                          </h2>
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faAward}
                              className="text-yellow-400"
                            />{" "}
                            5th Position - {matchData?.fifth_prize}Tk
                          </h2>
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faFire}
                              className="text-yellow-400"
                            />{" "}
                            Per Kill - {matchData?.kill_price}Tk
                          </h2>
                          <h2 className=" flex items-center gap-3">
                            <FontAwesomeIcon
                              icon={faHandPeace}
                              className="text-yellow-400"
                            />
                            Total Prize Pool- {matchData?.total_prize}Tk
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          className="text-2xl"
                        />
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          </div>
          {/* Room Details Dialogue */}
          <div>
            {/* Room Details Modal */}
            <Dialog open={roomOpen} onClose={setRoomOpen} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
              />

              <div className="fixed top-4 z-10 w-sm overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-mainbg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-in-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                  >
                    <div className="bg-mainbg px-4 pt-2 pb-4 ">
                      <div className="flex flex-col bg-cardbg items-center text-white rounded-md font-Jakarta py-2">
                        <h2 className="font-semibold">ROOM DETAILS</h2>
                        <p className="text-sm">{roomDetails?.match_name}</p>
                      </div>
                      {roomDetails?.rooms && (
                        <div className="mt-3 w-full text-left text-md bg-cardbg text-white font-Jakarta flex flex-col gap-3 rounded-md px-4 py-4">
                          <p><strong>Room ID:</strong> {roomDetails?.rooms[0]?.room_id || 'Not Available'}</p>
                          <p><strong>Password:</strong> {roomDetails?.rooms[0]?.room_password || 'Not Available'}</p>
                          {/* <p><strong>Host Name:</strong> {roomDetails?.room_host || 'Not Available'}</p> */}
                          {/* Add more room fields if needed */}
                        </div>
                      )}
                    </div>

                    <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        onClick={() => setRoomOpen(false)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>

          </div>
        </div>
        {/* Modal End Here */}
      </section>
    </div>
  );
};

export default BrMatches;
