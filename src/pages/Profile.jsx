import {
  faArrowRightFromBracket,
  faChartSimple,
  faScaleBalanced,
  faShareAlt,
  faUserCircle,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate, useOutletContext } from "react-router";
import toast from "react-hot-toast";
import { doSignOut } from "../firebase/auth";
const Profile = () => {
  const { totalIncome, result } = useOutletContext();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  // load localStorage user data
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const logout = async () => {
    try {
      await doSignOut();
      localStorage.removeItem("user");
      toast.success("Logged out successfully");

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // console.log(result);

  return (
    <div className="max-w-md mx-auto bg-mainbg  font-Jakarta pb-20 pt-2">
      {/* profile picure */}
      <div className="flex justify-center flex-col items-center mt-3">
        <img
          src="./image/profile.png"
          alt=""
          className="h-16 w-16 border-3 border-white rounded-full"
        />
        <h2 className="text-white text-lg font-medium mt-1">
          {user.user?.displayName}
        </h2>
      </div>
      {/* user analitics */}
      <div className="bg-slate-100 rounded-lg w-[95%] mx-auto mt-4 mb-5">
        <div className="grid grid-cols-2 text-cardbg font-semibold px-2 py-1">
          {/* <div className="flex flex-col items-center">
            <h2>
              {result.message != "No player results found for this user"
                ? result.total_games
                : 0}
            </h2>
            <h2>Played</h2>
          </div> */}
          <div className="flex flex-col items-center">
            <h2 className="">
              {result.message != "No player results found for this user"
                ? result.total_kill
                : 0}
            </h2>
            <h2 className="">Total Kill</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2>{totalIncome ? totalIncome : 0}</h2>
            <h2>Income</h2>
          </div>
          {/*   <div className='flex flex-col items-center'>
                        <h2>{result.message != "No player results found for this user" ? result.total_winner : 0}</h2>
                        <h2>Won</h2>
                    </div> */}
        </div>
      </div>
      <div className="space-y-4">
        {/* wallet div */}
        <NavLink
          to="/wallet"
          className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg"
        >
          <FontAwesomeIcon icon={faWallet} className="text-3xl text-white" />
          <h2 className="text-white text-xl font-medium">Wallet</h2>
        </NavLink>
        {/* withdraw section */}
        <NavLink
          to="/withdraw"
          className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            className="text-3xl text-white"
          />
          <h2 className="text-white text-xl font-medium">Withdraw</h2>
        </NavLink>
        {/* Profile details section */}
        <NavLink
          to="/profile-edit"
          className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-3xl text-white"
          />
          <h2 className="text-white text-xl font-medium">Profile</h2>
        </NavLink>
        {/* Rules section */}
        <NavLink
          to="/rules"
          className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className="text-3xl text-white"
          />
          <h2 className="text-white text-xl font-medium">Rules</h2>
        </NavLink>
        {/* Top Player Section */}
        <NavLink
          to="/top-players"
          className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faChartSimple}
            className="text-3xl text-white"
          />
          <h2 className="text-white text-xl font-medium">Top Players</h2>
        </NavLink>

        <div className="w-[90%] mx-auto bg-cardbg px-3 py-3 flex items-center gap-5 rounded-lg">
          <FontAwesomeIcon icon={faShareAlt} className="text-3xl text-white" />
          <h2 className="text-white text-xl font-medium">Share This App</h2>
        </div>
        {/* log out button */}
        <div
          onClick={logout}
          className="bg-red-500 text-white py-3 px-5 rounded-2xl flex justify-center items-center gap-4 w-[50%] mx-auto mt-10"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <a href="#">Log Out</a>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-gray-300 font-semibold text-lg">Version 1.0</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
