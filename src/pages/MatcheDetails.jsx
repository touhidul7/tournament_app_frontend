import { faChevronLeft, faClipboardCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const MatcheDetails = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg justify-items-center pb-40">
                <NavLink to='/brmatches' className="w-full flex items-center gap-8 bg-cardbg pl-3 text-white py-2 sticky top-0">
                    <FontAwesomeIcon className="font-medium text-xl" icon={faChevronLeft}/>
                    <h1 className="font-medium text-xl">Match Details</h1>
                </NavLink>
                {/* === Match Details Section === */}
                <section className="w-[95%] bg-cardbg mt-3 rounded-md py-2 text-white">
                    <h2 className="border-b border-b-hoverbg pb-2 pl-2 text-md font-semibold mb-2">Solo Time | Mobile | Regular</h2>
                    <div className="grid gap-3">
                        <div className="flex items-center justify-between gap-3 mx-2">
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm">Type: <b>Duo</b></h2>
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
                    <h1 className="bg-red-500 p-2 rounded-md text-white text-md font-medium">Full Map Rules:</h1>
                </div>
                {/* === Rules === */}
                <div className="w-[95%] mt-2 text-white font-Siliguri font-medium">
                    <p className="text-md"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/>
                    অ্যাপের মধ্যে আপনি যত নাম্বারে জয়েন হবেন গেমের মধ্যেও ঠিক একই নাম্বার স্লটে আপনাকে থাকতে হবে। অন্যথায় কিক দেওয়া হবে
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    ম্যাচের মধ্যে কমপক্ষে ৩টা থেকে ৪টা স্ক্রিনশট নিবেন আলাদা আলাদা সময়ের। প্রয়োজনবশত স্ক্রিনশটগুলো চাওয়া হতে পারে screenshot না দিলে রিওয়ার্ড দেওয়া হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    কোন Female Character ব্যাবহার করা যাবেনা। সবার Gameplay Fair হতে হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Room ID এবং Password Collect থেকে শুরু করে প্লেন পর্যন্ত Video Screen Record করে রাখতে হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    যদি কোন প্লেয়ার হ্যাক বা টিমিং করেছে এরকম প্রমাণ দিতে পারলে WizZ-WaR এর পক্ষ থেকে আপনাকে রিওয়ার্ড দেয়া হবে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    কোনো প্রকার স্নাইপার, ডাবল ভেক্টর ও M590 ইউজ করা যাবে না। যদি করেন রিওয়ার্ড দেয়া হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    কোনো ধরনের গাড়ি চালানো যাবে না, চালালে রিওয়ার্ড দেওয়া হবেনা।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    BR ম্যাচে কেউ ৭ কিলের অধিক কিল করলে তাকে ৭কিলের টাকাই দেওয়া হবে
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    আপনার ফ্রি ফায়ার আইডি লেভেল ৪০ এর নিচে হলে রুম থেকে কিক দেয়া হবে এবং কোন রকম রিফান্ড দেয়া হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    রুম আইডি এবং পাসওয়ার্ড ম্যাচ টাইমের ০৫ থেকে ০৭মিনিট আগে দেয়া হবে। আপনি যদি না জানেন কিভাবে রুম এ জয়েন করতে হবে তাহলে তাহলে আমাদের অ্যাপ থেকে ভিডিও দেখে নিতে পারেন।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    রুম আইডি এবং পাসওয়ার্ড Unregistered কারো সাথে শেয়ার করবেন না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    কেও যদি হ্যাক এবং টিমিং করার সময় ধরা পরে তাকে APP থেকে ব্যান করে দেয়া হবে এবং Full Map এ Heal Battle করলে কোন রিওয়ার্ড পাবেন না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    Duo এবং Squad এ আপনার টিমমেট না থাকে তাহলে রুমে গিয়ে Random প্লেয়ার এর সাথে খেলতে হবে। রুমের মধ্যে অন্য টিমকে বিরক্ত করলে সাথে সাথে রুম থেকে বের করে দেয়া হবে এবং আপনার টাকা ফেরত দেয়া হবে না।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    প্রতিটি কিল এবং Booyah এর রিওয়ার্ড ম্যাচ শেষে ৩০ মিনিট এর মধ্যে দেয়া হবে যদি কোন Server সমস্যা না থাকে।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="text-red-500 mr-2" icon={faRightLong}/> 
                    যেকোনো সমস্যায় টেলিগ্রাম এডমিনের সাথে যোগাযোগ করুন।
                    </p>
                    <p className="text-md mt-4"> <FontAwesomeIcon className="mr-2 text-green-500" icon={faRightLong}/> 
                    "ADMIN" এর সিদ্ধান্তই চূড়ান্ত সিদ্ধান্ত।
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
    );
};

export default MatcheDetails;