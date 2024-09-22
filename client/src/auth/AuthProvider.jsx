// import hooks and createContext function
import { createContext, useEffect, useState } from "react";

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseAuth.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading}}>
            {loading ? "": children }
        </AuthContext.Provider>
    );
};