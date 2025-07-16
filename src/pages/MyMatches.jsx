import { faChevronLeft, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
const MyMatches = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
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
            <section className="w-full justify-items-center ">
                <div className="relative w-[95%] rounded-md mt-24 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">01</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">02</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">03</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">04</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">05</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">06</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
                <div className="relative w-[95%] rounded-md mt-4 bg-cardbg text-white shadow-sm shadow-gray-600">
                    <div className="flex items-center gap-4 p-3">
                        <div className="absolute top-0 right-0 bg-green-500 text-md font-semibold rounded-tr-md py-1 px-2 text-white">
                            40 TK
                        </div>
                            <h1 className="text-lg font-medium">07</h1>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-md font-semibold">Dou Time | Mobile | Regular</h1>
                            <p className="text-sm text-hoverbg">2025-07-16, 07:30:07 Pm</p>
                            <h2 className="text-md font-medium">Won Amount: 80 TK</h2>
                        </div>
                            <h2>#777</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyMatches;