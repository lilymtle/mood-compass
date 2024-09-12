// import styling
import "./Header.scss";

// import components
import { Button } from "../Button/Button";
import { NavBar } from "../NavBar/NavBar";

import { navigationHandler } from "../../utils/navigationHandler";

import { Link } from "react-router-dom";


export function Header() {

    const navigateTo = navigationHandler();
    const handleClick = () => {
        navigateTo("/login");
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
                text="Login"
                onClick={handleClick} />
            </div>
        </header>
    )
};