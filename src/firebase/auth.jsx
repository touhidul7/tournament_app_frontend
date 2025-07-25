import { auth } from "./firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, updateProfile } from "firebase/auth";

// create user with email, password, and name (displayName)
export const doCreateUserWithEmailAndPassword = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
        await updateProfile(userCredential.user, { displayName: name });
    }
    return userCredential;
};

// sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
    console.log("Signing in with:", email, password);

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // console.log("Login successful:", userCredential);
        return userCredential;
    } catch (error) {
        console.error("Firebase Login Error:", error.code, error.message);
        throw error; // Rethrow error to be handled in `handleSubmit`
    }
};


// sign out
export const doSignOut = async () => {
    return auth.signOut();
};

// password reset
export const doPasswordReset = async (email) => {
    return sendPasswordResetEmail(email);
};

// update password
export const doPasswordUpdate = async (password) => {
    return updatePassword(password);
};

// email verification
export const doEmailVerification = async () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/login`
    })
};