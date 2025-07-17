import { faChevronLeft, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';

const Rules = () => {
    return (
        <div className='max-w-md mx-auto font-Jakarta bg-mainbg pb-30 j'>
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/profile' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Rules
                    </NavLink>
                </div>
                {/* top navigation button */}
                <div className='mt-28'>
                    <div className="md-w-[95%] grid grid-cols-3 gap-4 bg-cardbg py-2 px-2 rounded-lg shadow-sm shadow-gray-600">
                        <NavLink className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>BR MATCH</NavLink>
                        <NavLink className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>CS MATCH</NavLink>
                        <NavLink className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>LONE WOLF</NavLink>
                        <NavLink className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>CS 1V1,2V2</NavLink>
                        <NavLink className='w-full text-center p-2 bg-hoverbg rounded-lg text-cardbg font-semibold inset-shadow-sm inset-shadow-green-500/60 hover:bg-cardbg hover:text-white transition-all duration-300 delay-75 ease-in-out' to=''>FREE MATCH</NavLink>
                    </div>
                </div> 
            </div>
            {/* === Rules === */}
            <div className='w-full justify-items-center'>
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
            </div>

        </div> 
    );
};

export default Rules;