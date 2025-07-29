import { onIdTokenChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

const useAuthObserver = () => {
  useEffect(() => {
    let intervalId;

    const handleDisabledUser = async () => {
      toast.error("Your account has been disabled by the admin.");
      await signOut(auth);
      localStorage.removeItem("user");
      window.location.href = "/login";
    };

    const checkClaims = async (user) => {
      try {
        const tokenResult = await user.getIdTokenResult(true); // force refresh
        if (tokenResult.claims.disabled) {
          await handleDisabledUser();
        }
      } catch (error) {
        if (error.code === "auth/user-disabled") {
          await handleDisabledUser(); // forcibly sign out
        } else {
          console.error("Error checking claims:", error);
        }
      }
    };

    const unsubscribe = onIdTokenChanged(auth, (user) => {
      if (user) {
        checkClaims(user); // immediately check
        intervalId = setInterval(() => checkClaims(user), 60000); // every 60s
      } else {
        localStorage.removeItem("user");
        if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
          window.location.href = "/login";
        }
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
