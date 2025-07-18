import { faChevronLeft, faClipboardCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const ClassSquadMatchDetails = () => {
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
                    <h2 className="border-b border-b-hoverbg pb-2 pl-2 text-md font-semibold mb-2">CS 4v4 [ 1,3,5,7 VS 2,4,6,8 ]</h2>
                    <div className="grid gap-3">
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Type: <b>Solo</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Version: <b>TTP</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Map: <b>Bermuda</b></h2>
                        </div>
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Match Type: <b>Paid</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Entry Fee: <b>20 TK</b></h2>
                        </div>
                        <div className="">
                            <h2 className="bg-white p-1 rounded-md text-cardbg text-sm mx-2">Match Schedule: <b>2025-07-16 at 05:00 pm</b></h2>
                        </div>
                        <h2 className="border-b border-b-white pb-2 pl-2 text-md font-semibold">Prize Details</h2>
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Winning Prize: <b>800 TK</b></h2>
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Per Kill: <b>10 TK</b></h2>
                        </div>
                    </div>
                </section>
                <div className="w-[95%] mt-4 bg-yellow-500 text-white text-md font-medium rounded-md p-2">
                    <h2>Room details will be shared before 5-10 minutes of match start time</h2>
                </div>
                <div className="w-[95%] mt-4 bg-cardbg text-white text-md font-semibold text-center rounded-md p-2">
                    <h1 className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faClipboardCheck}/>
                        Match Instructions and Rules
                        <FontAwesomeIcon icon={faClipboardCheck}/>
                    </h1>
                </div>
                <div className="mt-4">
                    <h1 className="bg-red-500 p-2 rounded-md text-white text-md font-medium">CS এর নিয়ামাবলিঃ-</h1>
                </div>
                {/* === Rules === */}
                <div className="w-[95%] mt-2 text-white font-Siliguri font-medium">
                    <p className="text-md"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/>
                    ইমোট দেওয়া যাবে না, দিলে  WINNING দেওয়া হবে না ।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CS 9 ROUND থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Coin 9500 থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Class Squad Match Unlimited Wall থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Character Skill Off থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Gun Skin Off থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Air Drop Off  থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Loadout Yes থাকবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CS এর ফাস্ট উইনিং পাওয়ার জন্য টেলিগ্রাম এ ম্যাচের রেজাল্টের স্ক্রিনশট দিতে পারেন।
                    </p>
                    <div className="mt-4">
                    <h1 className="bg-red-500 p-2 rounded-md text-white text-md font-medium text-center">Important Rules</h1>
                    </div>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CS 4v4 এ রিপ্লে ভিডিও on রাখতে হবে বাধ্যতামূলক আডমিন চাইলে দিতে হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CLASH SQUAD ম্যাচে প্রথম চার জন এক টিমে এবং পরের চারজন আরেক টিমে থাকতে হবে। এটি বাধ্যতামূলক।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CLASH SQUAD এর প্রতি ম্যাচে ৪ টি থেকে ৫ টি SCREENSHOT দিতে হবে, প্রয়োজন হলে স্ক্রিনশটগুলো চাওয়া হতে পারে। SCREENSHOT এডমিনের কাছে SUBMIT করতে না পারলে কোন REWARDS দেওয়া হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Cs এ Victor, Mag7, M90, Change Buster, Sniper নেওয়া যাবে না
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CLASH SQUADI No Heal Battle.
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    CLASH SQUAD ম্যাচে PC প্লেয়াররা ALLOW না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    Cs এ বোম ও ফ্ল্যাশবোম ব্যবহার করা যাবে না। যদি কেউ ব্যবহার করে তাহলে বিপরীত দলকে "উইন' করে দেয়া হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    নেট সমস্যার কারণে কাস্টম থেকে বের করে দিলে অথবা গেম এ না ঢুকালে কোনো ধরনের রিফান্ড দেওয়া হবেনা।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    ক্ল্যাশ স্কোয়াড ম্যাচ এ জয়েন করার পর কোন ধরনের রিফান্ড হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    প্লেয়ারের নাম পরিবর্তন করতে হলে কমপক্ষে ২০-৩০ মিনিট আগে আগে আমাদের সাপোর্ট এ জানাতে হবে এবং প্লেয়ার লিস্ট দিতে হবে। নাহলে রুম থেকে কিক দেয়া হবে।(বাধ্যতামূলক)
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    আপনার FREE FIRE আইডি 40 লেভেলের কম হলে খেলতে পারবেন না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    রুম আইডি এবং পাসওয়ার্ড ম্যাচ টাইমের ৪-৬ মিনিট আগে দেওয়া হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    সঠিক সময়ে রুমে জয়েন করতে না পারলে টাকা রিফান্ড করা হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    রুম আইডি এবং পাসওয়ার্ড "UN-REGISTERED" দের সাথে শেয়ার করবেন না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    কোনো ম্যাচ এ ৭ জন প্লেয়ার হলে এক্ষেত্রে "3V3' করানো হবে। ১জনকে রিফাল্ড দেয়া হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    যদি হ্যাক ইউজ করার সময় ধরা পরে তাহলে "WizZ-War" থেকে ব্যান করে দেওয়া হবে ।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    SOLO অথবা SQUAD ম্যাচ এ "UN-REGISTERED" টিম মেইটস নিয়ে খেলা যাবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    ম্যাচ "WINNING" এর টাকা ম্যাচ শেষ হওয়ার ৩০-৪০ মিনিটের মধ্যে দিয়ে দেওয়া হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-red-500" icon={faRightLong}/> 
                    WITHDRAW" নির্দিষ্ট সময়ের মধ্যে দেওয়া হয়।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-green-500" icon={faRightLong}/> 
                    "ADMIN" এর সিদ্ধান্তই চুরান্ত সিদ্ধান্ত।
                    </p>
                </div>
                <div className="w-[95%] mt-4 bg-cardbg text-white text-md font-semibold text-center rounded-md p-2">
                    <h1 className="flex items-center justify-center gap-3">
                        <FontAwesomeIcon icon={faClipboardCheck}/>
                        Registered Participants
                        <FontAwesomeIcon icon={faClipboardCheck}/>
                    </h1>
                </div>
                <div className="w-[95%] mt-4 font-semibold text-white">
                    <h2 className="border-b border-b-hoverbg pb-2">1. Subas Hembrom</h2>
                    <h2 className="border-b border-b-hoverbg py-2">2. Juwel Hossain</h2>
                </div>
            </div>
        </div>
    );
};

export default ClassSquadMatchDetails;