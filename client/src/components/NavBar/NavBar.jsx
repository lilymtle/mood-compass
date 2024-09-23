// import styling
import "./NavBar.scss";

// import components
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__container">
                <ul className="nav-bar__list">
                    <li className="nav-bar__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-bar__link ${isActive ? "active" : ""}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-bar__link ${isActive ? "active" : ""}`}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink
                            to="/moods"
                            className={({ isActive }) => `nav-bar__link ${isActive ? "active" : ""}`}>
                            Moods
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <div className="dropdown">
                            <Button className="dropdown__btn" text="Learn" />
                            <div className="dropdown__content">
                                <ul className="dropdown__list">
                                    <li className="dropdown__item">
                                        <NavLink
                                            to="/educational-resources"
                                            className={({ isActive }) => `nav-bar__link-dropdown ${isActive ? "active" : ""}`}>
                                            Educational Resources
                                        </NavLink>
                                    </li>
                                    <li className="dropdown__item">
                                        <NavLink
                                            to="/coping-strategies"
                                            className={({ isActive }) => `nav-bar__link-dropdown ${isActive ? "active" : ""}`}>
                                            Coping Strategies
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};