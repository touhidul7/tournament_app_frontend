/* eslint-disable react-hooks/exhaustive-deps */
import { faChevronLeft, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router";
import {
    faAward,
    // faChevronLeft,
    faCircleXmark,
    // faClock,
    faCrown,
    faFire,
    faHandPeace,
    faKey,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";


const MyMatches = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [matchData, setMatchData] = useState([]);

    const [open, setOpen] = useState(false);
    const [roomOpen, setRoomOpen] = useState(false);
    const [roomDetails, setRoomDetails] = useState({});


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

    // room details
    const roomDetailsVerify = (date, time) => {
        const matchDateTime = new Date(`${date} ${time}`);
        const now = new Date();
        const timeDiff = matchDateTime - now;

        const fiveMinutesBeforeStart = timeDiff <= 5 * 60 * 1000;

        if (fiveMinutesBeforeStart) {
            return true;
        } else if (!fiveMinutesBeforeStart) {
            return "notstarted";
        } else {
            return "matchended";
        }
    };



    // console.log(matchData.joins);


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
            <section className="w-full justify-items-center mt-20">
                {matchData.joins && matchData.joins.length > 0 ? (
                    matchData.joins.map((match, index) => (
                        <div key={index} className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                            <div className="flex items-center gap-4 p-3">
                                <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                                    {match.entry_fee} TK
                                </div>
                                <h1 className="text-lg font-medium">{index + 1}</h1>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-md font-semibold">{match.game_name}</h1>
                                    <p className="text-sm text-hoverbg">{match.game_date}, {match.game_time} Pm</p>
                                    <h2 className="text-md font-medium">Match Winning Prize : {match.win_prize} TK</h2>
                                </div>
                                {/* <h2>#777</h2> */}

                            </div>
                            {/* Buttons: Room Details & Prize Details */}
                            <div className="flex justify-center gap-2 mt-4 mb-12 pb-5">
                                {/* Room Details */}
                                <div>
                                    {roomDetailsVerify(match.date, match.time, match.id) == true ? (
                                        <button
                                            onClick={() => { setRoomDetails(match); setRoomOpen(true); }}
                                            className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                                        >
                                            <FontAwesomeIcon icon={faKey} />
                                            Room Details
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                const result = roomDetailsVerify(match.date, match.time, match.id);
                                                if (result === 'notstarted') {
                                                    toast.error("Room details will be available 5 minutes before match starts.");
                                                }
                                            }}

                                            className="w-full rounded-md bg-cardbg  px-2.5 py-2 text-md text-white border border-hoverbg gap-2 flex items-center"
                                        >
                                            <FontAwesomeIcon icon={faKey} />
                                            Room Details
                                        </button>

                                    )}

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
                        </div>
                    ))) : (<div className="text-center font-bold text-white pt-4">No Match Founded</div>)}

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

export default MyMatches;