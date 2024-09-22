import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseAuth.js";

// register a new user
export const registerUser = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await axios.post("/api/users", {
            uid: user.uid,
            name: name,
            email: email
        });
    } catch (error) {
        console.error("Unable to register:", error);
    };
};

// login a user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Unable to login:", error);
    };
};

// logout the user
export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout error:", error);
    };
};
