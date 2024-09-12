import { Button } from "../Button/Button";
import "./NavBar.scss";

export function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__container">
                <ul className="nav-bar__list">
                    <li className="nav-bar__item">
                        <a className="nav-bar__link" href="/">Home</a>
                    </li>
                    <li className="nav-bar__item">
                        <a className="nav-bar__link" href="/">About</a>
                    </li>
                    <li className="nav-bar__item">
                        <a className="nav-bar__link" href="/">Profile</a>
                    </li>
                    <li className="nav-bar__item">
                        <a className="nav-bar__link" href="/">Moods</a>
                    </li>
                    <li className="nav-bar__item">
                        <div className="dropdown">
                            <Button className="dropdown__btn" text="Learn" />
                            <div className="dropdown__content">
                                <ul className="dropdown__list">
                                    <li className="dropdown__item">
                                        <a className="dropdown__link" href="/">Educational Resources</a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a className="dropdown__link" href="/">Coping Strategies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}