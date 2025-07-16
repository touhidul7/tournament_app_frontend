import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MatcheDetails = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg justify-items-center">
                <div className="w-full flex items-center gap-8 bg-cardbg pl-3 text-white py-2">
                    <FontAwesomeIcon className="font-medium text-xl" icon={faChevronLeft}/>
                    <h1 className="font-medium text-xl">Match Details</h1>
                </div>
                {/* === Match Details Section === */}
                <section className="w-[95%] bg-cardbg mt-4 rounded-md py-2 text-white">
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
                            <h2 className="bg-white w-full p-1 rounded-md text-cardbg text-sm mx-2">Match Schedule: 2025-07-</h2>
                        </div>
                        <h2 className="border-b border-b-white pb-2 pl-2 text-md font-semibold">Solo Time | Mobile | Regular</h2>
                    </div>
                </section>
        </div>
    );
};

export default MatcheDetails;