import "./Footer.scss";

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
                    <img
                    className="footer__social-icon"
                    src="/src/assets/logos/linkedin-logo.png"
                    alt="linkedin icon" />

                    <img 
                    className="footer__social-icon"
                    src="/src/assets/logos/github-logo.svg"
                    alt="github icon" />
                </div>
            </section>
            <section className="footer__right">
                <p className="footer__text">
                © 2024, MoodCompass
                </p>
            </section>
        </footer>
    )
}