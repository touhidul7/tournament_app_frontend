import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";


const Login = () => {
    return (
        <div className='max-w-md mx-auto h-screen text-white font-Jakarta items-center justify-center'>
            <div className="flex flex-col items-center justify-center text-center text-cardbg py-12">
                <h2 className="text-3xl font-semibold">Welcome Back 👋</h2>
                <p className="text-lg">Please enter you details</p>
            </div>
            <section className="w-full bg-mainbg justify-items-center pt-12 pb-24 rounded-t-[40px]">
                <div className="w-[80%]">
                    {/* <div className="flex items-center justify-center gap-4 mt-6 p-2 bg-white rounded-md cursor-pointer text-mainbg">
                    <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
                    <p className="text-lg">Log in with Google</p>
                </div> */}
                    <div>
                        <div>
                            <form className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-2 bg-dark-card p-2 rounded-xl bg-white text-mainbg shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faAt} />
                                    <input
                                        type="email"
                                        placeholder="Email or Username"
                                        className="w-full bg-dark-card p-1 text-lg rounded text-mainbg border-none focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2 bg-dark-card p-2 rounded-xl bg-white text-mainbg shadow-lg shadow-gray-800">
                                    <FontAwesomeIcon icon={faKey} className="text-mainbg" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-dark-card  p-1 text-lg rounded text-mainbg border-none focus:outline-none"
                                        required
                                    />
                                </div>
                                {/* <div className="flex items-center justify-between text-sm text-gray-400 mt-5">
                                <label className="flex items-center gap-2 text-sm text-white">
                                    <input type="checkbox" className="accent-cardbg" />
                                    Remember me
                                </label>
                                <p><a href="#" className="underline text-white">Forgot Password</a></p>
                            </div> */}
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <button
                                        type="submit"
                                        className="w-40 items-center justify-items-start bg-white border text-mainbg px-8 py-2 rounded-md text-xl font-semibold shadow-lg shadow-gray-800"
                                    >
                                        Log In
                                    </button>
                                    <h2 className="text-center text-sm font-light">

                                    </h2>
                                    <NavLink to='/signup' className="underline">
                                         Don't have an account? Sign up
                                    </NavLink>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;