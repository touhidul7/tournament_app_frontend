import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";


const Login = () => {
    return (
        <div className='min-h-screen bg-main-bg text-white p-3 md:p-8 font-poppins flex items-center justify-center'>
            <section className="max-w-xl w-full h-auto mx-auto bg-dark-bg p-10 rounded-lg shadow-md">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl ">Welcome Back 👋</h2>
                    <p className="text-lg">Please enter you details</p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 p-2 bg-dark-card rounded-lg cursor-pointer hover:bg-purple-600 transition-colors border border-card-border">
                    <FontAwesomeIcon icon={faGoogle} className="text-3xl text-white" />
                    <p>Log in with Google</p>
                </div>
                <div>
                   <h2 className="text-center text-md font-light mt-4">
                    or
                   </h2>
                   <div>
                        <form className="flex flex-col gap-4 mt-4">
                           <div className="flex items-center gap-2 bg-dark-card p-2 rounded text-white border border-card-border">
                             <FontAwesomeIcon icon={faAt}/>
                            <input
                                type="email"
                                placeholder="Email or Username"
                                className="w-full bg-dark-card p-2 rounded text-white border-none"
                                required
                            />
                           </div>
                            <div className="flex items-center gap-2 bg-dark-card p-2 rounded text-white border border-card-border">
                                <FontAwesomeIcon icon={faKey} className="text-white" />
                                <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-dark-card p-2 rounded text-white border-none"
                                required
                            />
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400 mt-5">
                                <label className="flex items-center gap-2 text-sm text-white">
                                    <input type="checkbox" className="accent-purple-600" />
                                    Remember me
                                </label>
                                <p><a href="#" className="underline text-white">Forgot Password</a></p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 p-2 py-3 text-lg mt-3 rounded text-white hover:bg-purple-700 transition-colors"
                            >
                                Log In
                            </button>
                        </form>
                        <h2 className="text-center text-sm font-light mt-4">
                            Don't have an account?
                        </h2>
                    
                        <NavLink to="/signup"
                         className="w-full flex justify-center items-center border border-purple-600 p-2 py-3 text-lg mt-3 rounded text-white hover:bg-purple-600 transition-colors">
                            Sign Up
                        </NavLink>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default Login;