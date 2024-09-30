// import styling
import "./Footer.scss";

// import icons
import linkedinLogo from "../../assets/logos/linkedin-logo.png";
import githubLogo from "../../assets/logos/github-logo.svg";

// import component
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <section className="footer__left">
                <div className="footer__left-container">
                    <p className="footer__text">
                        Connect:
                    </p>
                </div>
                <div className="footer__left-container">
                    <Link to="https://www.linkedin.com/in/lilymtle/">
                        <img
                            className="footer__social-icon"
                            src={linkedinLogo}
                            alt="linkedin icon" />
                    </Link>

                    <Link to="https://github.com/lilymtle">
                        <img
                            className="footer__social-icon"
                            src={githubLogo}
                            alt="github icon" />
                    </Link>
                </div>
            </section>
            <section className="footer__right">
                <p className="footer__text">
                    © 2024, MoodCompass
                </p>
            </section>
        </footer>
    );
};