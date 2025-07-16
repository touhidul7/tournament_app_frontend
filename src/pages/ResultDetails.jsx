import { faChevronLeft, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
const ResultDetails = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        Result Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ResultDetails;