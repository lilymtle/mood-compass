// import styling
import "./Header.scss";

// import components
import { Button } from "../Button/Button";
import { NavBar } from "../NavBar/NavBar";

export function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img
                className="header__logo-img"
                src="/src/assets/logos/mood-compass-logo.png"
                alt="moodcompass logo" />
            </div>

            <section className="header__navigation">
                <NavBar />
            </section>

            <div className="header__login">
                <Button 
                className="header__login-btn"
                text="Login" />
            </div>
        </header>
    )
};