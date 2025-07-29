import { getIdTokenResult, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";

const useAuthObserver = () => {
  useEffect(() => {
    let intervalId;

    const checkClaims = async (user) => {
      try {
        const tokenResult = await getIdTokenResult(user, true); // force refresh

        if (tokenResult.claims.disabled) {
          alert("Your account has been disabled by the admin.");
          await signOut(auth);
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error checking claims:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkClaims(user); // check once immediately
        intervalId = setInterval(() => checkClaims(user), 30000); // poll every 30s
      } else {
        console.log("User is logged out.");
        localStorage.removeItem("user"); // remove local user
        // window.location.href = "/login";
        clearInterval(intervalId);
      }
    });

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, []);
};

export default useAuthObserver;
