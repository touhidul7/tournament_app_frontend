import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAt, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/authContext";


const SignUp = () => {
    const authContext = useAuth();
    const { userLoggedIn } = authContext || {}; // Prevent destructuring error

    const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();



    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        if (!isSignedIn) {
            setIsSignedIn(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password, name);
                toast.success("Account Created successfully!");
                navigate('/login');
            } catch (error) {
                toast.error(error.message || "Error signing up");
                setIsSignedIn(false); // Reset state on error
            }
        }
    };

    return (
        <div className='max-w-md mx-auto h-screen text-white font-Jakarta items-center justify-center'>
            {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
            <div className="flex flex-col items-center justify-center text-center text-cardbg py-12">
                <h2 className="text-3xl font-semibold">Welcome👋</h2>
                <p className="text-lg">Please enter your details</p>
            </div>
            <section className="bg-mainbg justify-items-center pt-12 pb-24 rounded-t-[20px]">
                <div className="w-[80%]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl ">Sign Up</h2>
                    </div>
                    <div>
                        <div>
                            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                                <div className="flex items-center gap-2 bg-white p-1 rounded shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faUser} className="text-mainbg pl-1" />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full bg-white focus:outline-none text-mainbg p-2"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2 bg-white p-1 rounded shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faAt} className="text-mainbg pl-1" />
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full bg-white focus:outline-none text-mainbg p-2"
                                        required
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 bg-white text-mainbg p-1 rounded shadow-lg shadow-gray-800">
                                        <FontAwesomeIcon icon={faKey} className="text-mainbg pl-1" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter Your Password"
                                            className="w-full bg-white p-2 rounded text-mainbg  focus:outline-none"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-gray-700 "
                                        >
                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                        </button>
                                    </div>


                                    {/* <div className="flex items-center gap-2 bg-white text-mainbg p-1 rounded shadow-lg shadow-gray-800">
                                        <FontAwesomeIcon icon={faKey} className="text-mainbg pl-1" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm Password"
                                            className="w-full bg-white p-2 rounded text-mainbg  focus:outline-none"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                        </button>
                                    </div> */}
                                    <button
                                        type="submit"
                                        className="w-40 items-center justify-items-center bg-white border text-mainbg px-8 py-2 rounded-md text-xl font-semibold shadow-lg shadow-gray-800"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <div className=" mt-8">

                                <NavLink to="/login" className="underline">
                                    Already have an account?  Log In
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster position="top-center"  />
        </div>
    );
};

export default SignUp;