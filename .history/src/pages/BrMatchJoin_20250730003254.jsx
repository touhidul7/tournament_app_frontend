import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate, useOutletContext, useParams } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";

const BrMatchJoin = () => {
    const { balance, CheckUser } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const user = JSON.parse(localStorage.getItem("user")) || {};

    const [joinType, setJoinType] = useState(null);
    const [matchDetails, setMatchDetails] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const { updateData } = useOutletContext();


    /* get matches */
    useEffect(() => {
        fetch(`${BASE_URL}/get/matches/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMatchDetails(data);
            });
        /* Deposit Data */
    }, [BASE_URL, id]);

    console.log(matchDetails);


    /* Match join function */
    let multiplier = 1;
    const onSubmit = (data) => {
        CheckUser();
        if (joinType == "duo") multiplier = 2;
        else if (joinType == "squad") multiplier = 4;

        const fee = Number(matchDetails.entry_fee) * multiplier;

        if (fee > balance) {
            toast.error("Insufficient balance to join this match.");
            navigate("/addmoney");
            return;
        }
        const joinmatch = {
            user_id: user.user.uid,
            ex1: user.user.displayName,
            match_id: matchDetails.id,
            game_type: joinType,
            entry_fee: matchDetails.entry_fee,
            game_date: matchDetails.date,
            game_time: matchDetails.time,
            status: matchDetails.status,
            pname1: data.player1,
            pname2: data.player2 || "",
            pname3: data.player3 || "",
            pname4: data.player4 || "",
            game_name: matchDetails.match_name,
            win_prize: matchDetails.win_price,
            pay: fee,
        };

        const request = axios.post(`${BASE_URL}/game-entry`, joinmatch);

        toast.promise(request, {
            loading: 'Joining...',
            success: 'Joined successfully!',
            error: 'Something went wrong!',
        });
        request
            .then((response) => {
                if (response.status === 201) {
                    updateData();
                    reset();
                    navigate(`/joine-thanks/${matchDetails.category_id}`);
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto h-screen font-Jakarta bg-mainbg'>
            <div className=" bg-black relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to={`/brmatches/${matchDetails.category_id}`} className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Back
                    </NavLink>
                </div>
            </div>
            {/* === Join Details === */}
            <div className="w-full mt-24 justify-items-center font-Jakarta pt-5">
                <div className="w-[95%] bg-cardbg rounded-md text-white p-3">
                    <h1 className="text-md font-semibold ml-2">{matchDetails.match_name} | {matchDetails.game_type}</h1>
                    <p className="text-md text-hoverbg ml-2 mt-3">Date: {matchDetails.date} | Time: {matchDetails.time}</p>

                    <div className="flex text-md font-medium ml-2 mt-3 gap-7 justify-between">
                        <p>Win Prize: <FontAwesomeIcon className="mx-1" icon={faBangladeshiTakaSign} />{matchDetails.win_price}</p>
                        <p>Entry Fee: <FontAwesomeIcon icon={faBangladeshiTakaSign} />{matchDetails.entry_fee}</p>
                    </div>

                    <hr className="text-hoverbg my-3" />
                    <p className="text-lg text-center font-Siliguri text-green-500">
                        অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন।
                    </p>

                    {/* === Join type buttons === */}
                    <div className="flex items-center justify-center gap-5 mt-4 p-3">
                        {
                            matchDetails.game_type == "Solo" ? <button
                                className={`text-lg font-medium w-32 py-2 rounded-md inset-shadow-sm transition-all duration-300 ${joinType === 'solo' ? 'bg-green-600' : 'bg-black'
                                    } hover:bg-green-600`}
                                onClick={() => setJoinType('solo')}
                            >
                                Solo
                            </button> : matchDetails.game_type == "Duo" ? <button
                                className={`text-lg font-medium w-32 py-2 rounded-md inset-shadow-sm transition-all duration-300 ${joinType === 'duo' ? 'bg-green-600' : 'bg-black'
                                    } hover:bg-green-600`}
                                onClick={() => setJoinType('duo')}
                            >
                                Duo
                            </button> : matchDetails.game_type == "Squad" ? <button
                                className={`text-lg font-medium w-32 py-2 rounded-md inset-shadow-sm transition-all duration-300 ${joinType === 'duo' ? 'bg-green-600' : 'bg-black'
                                    } hover:bg-green-600`}
                                onClick={() => setJoinType('squad')}
                            >
                                Squad
                            </button> : null
                        }


                    </div>

                    {/* === Conditional Input Fields === */}
                    {joinType && (
                        <div className="flex flex-col mx-2 mt-6 gap-4">
                            <input
                                className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                type="text"
                                {...register("player1", { required: true })}
                                placeholder="Player 1 Name"
                            />
                            {joinType === 'duo' || joinType == 'squad' ? (
                                <input
                                    className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                    type="text"
                                    {...register("player2", { required: true })}
                                    placeholder="Player 2 Name"
                                />
                            ) : null}
                            {joinType == 'squad' && (
                                <>
                                    <input
                                        className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                        type="text"
                                        {...register("player3", { required: true })}
                                        placeholder="Player 3 Name"
                                    />
                                    <input
                                        className="w-full bg-cardbg inset-shadow-sm inset-shadow-gray-100/70 px-3 py-3 text-lg font-medium rounded-md focus:outline-none hover:inset-shadow-green-500/60 transition-all duration-300 delay-75 ease-in-out"
                                        type="text"
                                        {...register("player4", { required: true })}
                                        placeholder="Player 4 Name"
                                    />
                                </>
                            )}
                        </div>
                    )}

                </div>
            </div>
            {/* === Join Now btn === */}
            <div className="w-full  flex items-center justify-center mt-4">
                <button type="submit" className="w-[95%] p-3 bg-green-500 mb-20 rounded text-lg text-white font-semibold">Pay & Join Now</button>
            </div>
        </form>
    );
};

export default BrMatchJoin;