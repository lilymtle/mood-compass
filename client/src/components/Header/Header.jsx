import { Button } from "../Button/Button";
import { NavBar } from "../NavBar/NavBar";
import "./Header.scss";

export function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img
                className="header__logo-img"
                src="/src/assets/logo/mood-compass-logo.png"
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
}