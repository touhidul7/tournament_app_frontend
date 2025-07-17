import { faChevronLeft, faUser, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
const ProfileEdit = () => {
    return (
        <div className="max-w-md mx-auto h-auto font-Jakarta bg-mainbg pb-24">
            <div className=" bg-mainbg relative flex items-start justify-center">
                {/* Top white curved section */}
                <div className="absolute top-0 left-0 w-full h-22 bg-white rounded-b-[100%] shadow-md  flex justify-center items-end pb-4">
                    <NavLink to='/profile' className="bg-cardbg text-white px-6 py-2 rounded-xl text-lg font-medium shadow flex items-center gap-3 ">
                        <span><FontAwesomeIcon className=" text-xl" icon={faChevronLeft} /></span>
                        My Profile
                    </NavLink>
                </div>
            </div>
            {/* === My Matches List === */}
            <section className="w-full justify-items-center mt-24">
                {/* === Profile Image Change === */}
                <div>
                    <div className="relative bg-cardbg w-18 h-18 border border-white text-white rounded-full flex items-center justify-center">
                        <FontAwesomeIcon className="text-5xl" icon={faUser}/>
                    </div>
                </div>
                <div className="w-[95%] mt-4">
                    <h1 className="text-lg text-white font-semibold text-center">My Info</h1>
                    <h2 className="inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4">Subas Hembrom</h2>
                    <h2 className="inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4">+880 1315-291293</h2>
                    <h2 className="inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4">subashebrom@gmail.com</h2>
                    <h1 className="text-lg text-white font-semibold text-center mt-6">Password Change</h1>
                    <input className="w-full focus:outline-none inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4" type="password" placeholder="Old Password" />
                    <input className="w-full focus:outline-none inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4" type="password" placeholder="New Password" />
                    <input className="w-full focus:outline-none inset-shadow-sm inset-shadow-gray-100/70 bg-cardbg text-white text-md font-medium px-5 py-3 rounded-md mt-4" type="password" placeholder="Confirm Password" />
                    <div className="w-full flex items-end justify-end mt-4">
                        <button className="bg-green-500 text-white text-xl font-medium px-5 py-2 rounded-md shadow-md shadow-gray-100/70" type="submit">Save Changes</button>
                    </div>
               </div>
            </section>
        </div>
    );
};

export default ProfileEdit;