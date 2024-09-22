// import context
import { AuthContext } from "./AuthProvider.jsx";

// import hook
import { useContext } from "react";

// import function
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return "";
    };

    if (!user) {
        return <Navigate to="/login" />;
    };

    return children;
};