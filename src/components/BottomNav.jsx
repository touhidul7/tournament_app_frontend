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
              `inline-flex flex-col items-center justify-center px-1 group ${
                isActive
                  ? "bg-hoverbg text-mainbg rounded-2xl "
                  : "hover:bg-hoverbg rounded-2xl"
              }`
            }
          >
          <FontAwesomeIcon icon={faGamepad}/>
            <span>Play</span>
          </NavLink>

          {/* my matches */}
          <NavLink
            to="/my-matches"
             className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-1 group ${
                isActive
                  ? "bg-hoverbg text-mainbg rounded-2xl "
                  : "hover:bg-hoverbg  text-mainbg rounded-2xl"
              }`
            }
          >
           <FontAwesomeIcon icon={faListCheck}/>
            <span>My Matches</span>
          </NavLink>

         

          {/* Ambulance */}
          <NavLink
            to="/results"
                className={({ isActive }) =>
                `inline-flex flex-col items-center justify-center px-1 group ${
                    isActive
                    ? "bg-hoverbg text-mainbg rounded-2xl "
                    : "hover:bg-hoverbg  text-mainbg rounded-2xl"
                }`
                }
            >
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Result</span>
          </NavLink>

          {/* profile */}
          <NavLink
            to="/profile"
                className={({ isActive }) =>
                `inline-flex flex-col items-center justify-center px-1 group ${
                    isActive
                    ? "bg-hoverbg text-mainbg rounded-2xl "
                    : "hover:bg-hoverbg  text-mainbg rounded-2xl"
                }`
                }
            >
           <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;