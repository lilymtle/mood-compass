// import styling
import "./ProfilePage.scss";

// import dependencies
import axios from "axios";

// import auth
import { AuthContext } from "../../auth/AuthProvider.jsx";
import { logoutUser } from "../../auth/authUtils";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import util
import { navigationHandler } from "../../utils/navigationHandler";

// import hooks
import { useContext, useEffect, useState } from "react";

// import components
import { Link } from "react-router-dom";
import { InputFormField } from "../../components/FormFields/InputFormField/InputFormField.jsx";
import { Button } from "../../components/Button/Button";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import BasicCalendar from "../../components/Calendar/Calendar.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function ProfilePage() {
    const { user } = useContext(AuthContext);
    const [userName, setUsername] = useState("");
    const navigateTo = navigationHandler();

    const handleLogout = () => {
        logoutUser();
        navigateTo("/");
    };

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

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Profile</title>
                </Helmet>
            </HelmetProvider>
            <section className="profile">
                <div className="profile__wrapper">
                    <div className="profile__header-container">
                        <h1 className="profile__header">
                            Dashboard
                        </h1>

                        <Avatar
                            sx={{ width: 100, height: 100 }}>
                            <AccountCircleIcon
                                sx={{ width: 50, height: 50 }} />
                        </Avatar>

                        <div className="profile__box--welcome">
                            <h2 className="profile__subheader">
                                Welcome back, {userName}!
                            </h2>
                        </div>

                        <div className="profile__btn-container">
                            <Link to="/favorites" className="profile__btn-favorite-wrapper">
                                <p className="profile__btn-favorite">
                                    Favorites
                                </p>
                            </Link>

                            <Button
                                className="profile__btn-logout"
                                type="submit"
                                text="Logout"
                                onClick={handleLogout} />
                        </div>
                    </div>

                    <section className="profile__mood-tracker">
                        <div className="profile__mood-tracker-container">
                            <div className="profile__divider-curve">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                                </svg>
                            </div>

                            <div className="profile__box--mood-tracker">
                                <p className="profile__mood-tracker-subheader">
                                    Today I am feeling...
                                </p>

                                <form className="profile__mood-tracker-form">
                                    <InputFormField
                                        className="profile__mood-tracker-input"
                                        type="text"
                                        placeholder="Your mood in one word" />

                                    <Button
                                        className="profile__btn-submit"
                                        type="submit"
                                        text={<AddReactionIcon
                                            sx={{ color: "#557153" }} />} />
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="profile__mood-log">
                    <div className="profile__mood-log-container">
                        <div className="profile__divider-multi-waves">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                            </svg>
                        </div>

                        <div className="profile__box--mood-log-calendar">
                            <h2 className="profile__mood-log-subheader">
                                Mood Log
                            </h2>

                            <div className="profile__mood-log-calendar">
                                <BasicCalendar />
                            </div>
                        </div>
                    </div>

                    <div className="profile__mood-log-card">
                        <ul className="profile__mood-log-list">
                            <li className="profile__mood-log-item">
                                <p className="profile__mood-log-text">
                                    It seems like you haven't logged any moods yet.
                                    Why don't you start today?
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </main>
    );
};