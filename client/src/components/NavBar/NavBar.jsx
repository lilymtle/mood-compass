import "./NavBar.scss";

export function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item">
                    <a className="nav-bar__link" href="/">Home</a>
                </li>
                <li className="nav-bar__item">
                    <a className="nav-bar__link" href="/">About</a>
                </li>
                <li className="nav-bar__item">
                    <a className="nav-bar__link" href="/">Moods</a>
                </li>
                <li className="nav-bar__item">
                    <a className="nav-bar__link" href="/">Learn</a>
                </li>
            </ul>
        </nav>
    )
}