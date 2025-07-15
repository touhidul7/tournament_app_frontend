import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAt, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router";

const SignUp = () => {
     const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='max-w-md mx-auto bg-mainbg text-white p-3 md:p-8 font-Jakarta flex items-center justify-center'>
            <section className="max-w-xl w-full h-auto mx-auto bg-dark-bg p-10 rounded-lg shadow-md">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl ">Welcome✨ </h2>
                    <p className="text-lg">Please enter you details</p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 p-2 bg-dark-card rounded-lg cursor-pointer hover:bg-slate-50 hover:text-mainbg border border-card-border transition-all delay-75 duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faGoogle} className="text-3xl  hover:text-mainbg" />
                    <p>Continue with Google</p>
                </div>
                <div>
                   <h2 className="text-center text-md font-light mt-4">
                    or
                   </h2>
                   <div>
                        <form className="flex flex-col gap-4 mt-4">
                            <div className="">
                                
                                <div className="flex items-center mt-3 gap-3 bg-white p-1 rounded text-white border border-card-border">
                                    <FontAwesomeIcon icon={faUser} className="text-mainbg pl-1" />
                                    <input type="text"
                                    placeholder="Enter Your Username" 
                                    className="focus:outline-none bg-white text-mainbg w-full p-2 rounded"
                                    required
                                    />
                                </div>

                            </div>
                           <div className="flex items-center gap-2 bg-white p-1 rounded">
                             <FontAwesomeIcon icon={faAt} className="text-mainbg pl-1"/>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-white focus:outline-none text-mainbg p-2"
                                required
                            />
                           </div>
                         <div className="space-y-4">
            <div className="flex items-center gap-2 bg-white text-mainbg p-1 rounded">
                <FontAwesomeIcon icon={faKey} className="text-mainbg pl-1" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
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
            
            
            <div className="flex items-center gap-2 bg-dark-card p-2 rounded text-white border border-card-border">
                <FontAwesomeIcon icon={faKey} className="text-white" />
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full bg-dark-card p-2 rounded text-white border-none outline-none"
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
                            
                            <button
                                type="submit"
                                className="w-full bg-purple-600 p-2 py-3 text-lg mt-3 rounded text-white hover:bg-purple-700 transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>
                        <h2 className="text-center text-sm font-light mt-4">
                            Already have an account?
                        </h2>
                    
                        <NavLink to="/login"
                         className="w-full flex justify-center items-center border border-purple-600 p-2 py-3 text-lg mt-3 rounded text-white hover:bg-purple-600 transition-colors">
                            Log In
                        </NavLink>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;