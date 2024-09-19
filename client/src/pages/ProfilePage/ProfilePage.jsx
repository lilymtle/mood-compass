
import { Button } from "../../components/Button/Button";
import "./ProfilePage.scss";

import { logoutUser } from "../../auth/authUtils";
import { navigationHandler } from "../../utils/navigationHandler";

import { AuthContext } from "../../auth/AuthProvider.jsx";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userName, setUsername] = useState("");
    const navigateTo = navigationHandler();

    const handleLogout = () => {
        logoutUser();
        navigateTo("/");
    }

    useEffect(() => {
        const getUserName = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/users/name?email=${encodeURIComponent(user.email)}`)
                
                if (data) {
                    setUsername(data.name);
                } else {
                    console.error("Error retrieving user name:", data);
                }
            } catch (error) {
                console.error("Error retrieving name:", error);
            }
        }
        getUserName();
    }, [user]);

    console.log(userName);

    return (
        <main>
            <section className="profile">
                <h1 className="profile__header">
                    Welcome Back {userName}
                </h1>

            </section>

            <Button
            className="logout-btn"
            type="submit"
            text="Logout"
            onClick={handleLogout} />
        </main>
    )
};