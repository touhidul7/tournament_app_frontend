import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faGamepad, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const BottomNav = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="fixed bottom-0 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white  rounded-lg left-1/2 font-Jakarta shadow-lg">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto ">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-1 group transition-all duration-300 delay-75 ease-in-out ${
                isActive
                  ? "bg-hoverbg text-mainbg rounded-2xl  "
                  : "hover:bg-hoverbg rounded-2xl"
              }`
            }
          >
          <FontAwesomeIcon icon={faGamepad} className="text-2xl"/>
            <span className="font-bold">Play</span>
          </NavLink>

          {/* my matches */}
          <NavLink
            to="/my-matches"
             className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-1 group transition-all duration-300 delay-75 ease-in-out ${
                isActive
                  ? "bg-hoverbg text-mainbg rounded-2xl "
                  : "hover:bg-hoverbg  text-mainbg rounded-2xl"
              }`
            }
          >
           <FontAwesomeIcon icon={faListCheck} className="text-2xl"/>
            <span className="text-sm font-bold">My Matches</span>
          </NavLink>

         

          {/* Ambulance */}
          <NavLink
            to="/results"
                className={({ isActive }) =>
                `inline-flex flex-col items-center justify-center px-1 group transition-all duration-300 delay-75 ease-in-out ${
                    isActive
                    ? "bg-hoverbg text-mainbg rounded-2xl "
                    : "hover:bg-hoverbg  text-mainbg rounded-2xl"
                }`
                }
            >
            <FontAwesomeIcon icon={faChartSimple} className="text-2xl"/>
            <span className="font-bold">Result</span>
          </NavLink>

          {/* profile */}
          <NavLink
            to="/profile"
                className={({ isActive }) =>
                `inline-flex flex-col items-center justify-center px-1 group transition-all duration-300 delay-75 ease-in-out ${
                    isActive
                    ? "bg-hoverbg text-mainbg rounded-2xl "
                    : "hover:bg-hoverbg  text-mainbg rounded-2xl"
                }`
                }
            >
           <FontAwesomeIcon icon={faUser} className="text-2xl"/>
            <span className="font-bold">Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;