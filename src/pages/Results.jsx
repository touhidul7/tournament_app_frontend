/* eslint-disable react-hooks/exhaustive-deps */
import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

const Results = () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [categories, setCategories] = useState([]);
    // const [open, setOpen] = useState(0);
    const navigate = useNavigate();

    const [matchDetails, setMatchDetails] = useState([]);

    const fetchMatchDetails = (categoryId) => {
        fetch(`${BASE_URL}/matches`)
            .then((res) => res.json())
            .then((data) => {
                const found = data.filter((item) => item.category_id == categoryId);
                setMatchDetails(found);
            });
    }

    useEffect(() => {
        console.log("hit rules");
        fetch(`${BASE_URL}/categories`)
            .then((res) => res.json())
            .then((data) => { setCategories(data); fetchMatchDetails(data[0].id); })
            .catch((err) => console.error("Failed to fetch categories:", err));

        // fetchMatchDetails(categories[0].id);
    }, [BASE_URL]);
    // console.log("matchDetails", matchDetails);
    return (
        <div className='font-Jakarta bg-mainbg pb-30 min-h-screen'>
            <div className="bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3">
                        <FontAwesomeIcon className='text-xl' icon={faChevronLeft} />
                        Results
                    </NavLink>
                </div>
                {/* top navigation button */}
                <div className='mt-28'>
                    {categories && categories.length > 0 ? (
                        <div className="md-w-[95%] grid grid-cols-3 gap-4 bg-cardbg py-2 px-2 rounded-lg shadow-sm shadow-gray-600">
                            {categories.map((category, index) => (
                                <button onClick={() => fetchMatchDetails(category.id)} key={index} className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>{category?.name}</button>
                            ))}
                        </div>
                    ) : (<div className="text-center font-bold text-white pt-4">No Result Founded</div>)}
                </div>
            </div>
            {/* match details card 1 here */}
            {matchDetails && matchDetails.map((match, index) => (
                <div onClick={() => navigate(`/resultdetails/${match?.id}`)} key={index} className="relative mt-5 w-[98%] mx-auto bg-cardbg rounded-lg pb-3 mb-5">
                    <div className='absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white' >
                        # {match?.match_id}
                    </div>
                    <Link to={`/resultdetails/${match?.id}`} className='flex items-center gap-2 p-2'>
                        <div className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                            {/*  */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>
                            <h2 className='text-white font-medium'>{match?.match_name}</h2>
                            <p className='text-yellow-500 text-sm'>{match.date} at {match.time}</p>
                        </div>
                    </Link>
                    {/* pricing mini card */}
                    <div className='grid grid-cols-3 gap-3 items-center justify-center m-4'>
                        <div className=''>
                            <div className='bg-green-500 text-white text-center rounded-t-md'>
                                <h2>+ WIN PRIZE</h2>
                            </div>
                            <div className='bg-white  text-center rounded-b-md'>
                                <h2>{match?.win_price}</h2>
                            </div>
                        </div>
                        <div>
                            <div className='bg-blue-500 text-white text-center rounded-t-md'>
                                <h2>+ PER KILL</h2>
                            </div>
                            <div className='bg-white text-center rounded-b-md'>
                                <h2>{match?.kill_price}</h2>
                            </div>
                        </div>
                        <div>
                            <div className='bg-red-500 text-white text-center rounded-t-md'>
                                <h2>+ ENTRY FEE</h2>
                            </div>
                            <div className='bg-white text-center rounded-b-md'>
                                <h2>{match.entry_fee}</h2>
                            </div>
                        </div>
                    </div>
                    {/* match details */}
                    <div className='grid grid-cols-3 mt-5 mb-5 '>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-hoverbg'>MAX ENTRY</h2>
                            <h2 className='text-white'>{match.max_player}</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-hoverbg'>MAP</h2>
                            <h2 className='text-white'>{match.map_name}</h2>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-hoverbg'>VERSION</h2>
                            <h2 className='text-white'>{match.version}</h2>
                        </div>
                    </div>
                </div>))}

        </div>


    );
};

export default Results;