import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Login = () => {
    const authContext = useAuth();
    const { userLoggedIn } = authContext || {}; // Prevent destructuring error
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();



    const sendNotification = async (userId, message) => {
        try {
            await addDoc(collection(db, 'notifications'), {
                userId: userId,
                message: message,
                timestamp: serverTimestamp()
            });
            // alert('Notification sent!');
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignedIn) return; // Prevent multiple clicks

        const email = e.target[0].value;
        const password = e.target[1].value;
        setIsSignedIn(true); // Set loading state

        try {
            const user = await doSignInWithEmailAndPassword(email, password);

            // Store user data in localStorage
            localStorage.setItem("user", JSON.stringify(user));

            toast.success("User logged in successfully!");
            sendNotification(user.user.uid, `You have successfully logged in.`);
            setIsSignedIn(false); // Reset loading state
            navigate("/");
        } catch (error) {
            console.error("Login error:", error.message);
            toast.error("Login failed! " + 'Invalid-Credential');
            setIsSignedIn(false); // Reset state on failure
        }
    };
    return (
        <div className='max-w-md mx-auto h-screen text-white font-Jakarta items-center justify-center'>
            {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
            <div className="flex flex-col items-center justify-center text-center text-cardbg py-12">
                <h2 className="text-3xl font-semibold">Welcome Back 👋</h2>
                <p className="text-lg">Please enter you details</p>
            </div>
            <section className="w-full bg-mainbg justify-items-center pt-12 pb-24 rounded-t-[20px]">
                <div className="w-[80%]">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl ">Login</h2>
                    </div>
                    <div>
                        <div>
                            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
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
                                <div className="">
                                    <button
                                        type="submit"
                                        className="w-40 items-center justify-items-center bg-white border text-mainbg px-8 py-2 rounded-md text-xl font-semibold shadow-lg shadow-gray-800"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="mt-5">
                                <NavLink to='/signup' className="underline mt-5">
                                    Don't have an account? Sign up
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default Login;