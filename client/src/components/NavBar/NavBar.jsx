// import styling
import "./NavBar.scss";

import { NavLink } from "react-router-dom";

// import components
import { Button } from "../Button/Button";

export function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__container">
                <ul className="nav-bar__list">
                    <li className="nav-bar__item">
                        <NavLink
                        to="/"
                        className={({ isActive }) => `nav-bar__item ${isActive ? "active" : ""}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink
                        to="/about"
                        className={({ isActive}) => `nav-bar__item ${isActive ? "active" : ""}`}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink
                        to="/moods-list"
                        className={({ isActive }) => `nav-bar__item ${isActive ? "active" : ""}`}>
                            Moods
                        </NavLink>
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
};