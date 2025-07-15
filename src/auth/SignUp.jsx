import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAt, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router";

const SignUp = () => {
     const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='max-w-md mx-auto h-screen text-white font-Jakarta items-center justify-center'>
            <div className="flex flex-col items-center justify-center text-center text-cardbg py-12">
                    <h2 className="text-3xl font-semibold">Welcome👋</h2>
                    <p className="text-lg">Please enter your details</p>
                </div>
            <section className="h- bg-mainbg justify-items-center pt-12 pb-24 rounded-t-[40px]">
                <div className="w-[80%]">
                    <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl ">Sign Up</h2>
                </div>
                <div>
                    <div>
                        <form className="flex flex-col gap-4 mt-4">
                            <div className="">
                                <div className="flex items-center mt-3 gap-3 bg-white p-1 rounded text-white shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faUser} className="text-mainbg pl-1" />
                                    <input type="text"
                                    placeholder="Enter your first name" 
                                    className="focus:outline-none bg-white text-mainbg w-full p-2 rounded"
                                    required
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center mt-3 gap-3 bg-white p-1 rounded text-white shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faUser} className="text-mainbg pl-1" />
                                    <input type="text"
                                    placeholder="Enter your last name" 
                                    className="focus:outline-none bg-white text-mainbg w-full p-2 rounded"
                                    required
                                    />
                                </div>
                            </div>
                               <div className="flex items-center gap-2 bg-white p-1 rounded shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faAt} className="text-mainbg pl-1"/>
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
                                        placeholder="Enter your Password"
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


                                <div className="flex items-center gap-2 bg-white text-mainbg p-1 rounded shadow-lg shadow-gray-800">
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
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-col gap-4 items-center justify-center mt-8">
                                <button
                                type="submit"
                                className="w-40 items-center justify-items-center bg-white border text-mainbg px-8 py-2 rounded-md text-xl font-semibold shadow-lg shadow-gray-800"
                            >
                                Sign Up
                            </button>

                            <h2 className="text-center text-sm font-light">
                                Already have an account?
                            </h2>

                            <NavLink to="/login"
                             className="w-40 text-center bg-cardbg border text-white px-8 py-2 rounded-md text-xl font-semibold shadow-lg shadow-gray-800">
                                Log In
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;