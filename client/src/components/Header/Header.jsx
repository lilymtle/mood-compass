// import styling
import "./Header.scss";

// import auth
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../auth/firebaseAuth.js";

// import hooks
import { useEffect, useState } from "react";

// import util function
import { navigationHandler } from "../../utils/navigationHandler";

// import components
import { Button } from "../Button/Button";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe;
    }, []);

    const navigateTo = navigationHandler();
    const handleClick = () => {
        if (user) {
            navigateTo("/profile");
        } else {
            navigateTo("/login");
        };
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img
                    className="header__logo-img"
                    src="/src/assets/logos/mood-compass-logo.png"
                    alt="moodcompass logo" />
                </Link>
            </div>

            <section className="header__navigation">
                <NavBar />
            </section>

            <div className="header__login">
                <Button 
                className="header__login-btn"
                text={user ? "Profile" : "Login"}
                onClick={handleClick} />
            </div>
        </header>
    )
};