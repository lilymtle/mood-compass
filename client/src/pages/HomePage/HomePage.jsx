import { Button } from "../../components/Button/Button";
import "./HomePage.scss";
import { navigationHandler } from "../../utils/navigationHandler";

export function HomePage() {

    const navigateTo = navigationHandler();
    const handleClick = () => {
        navigateTo("/about");
    };

    return (
        <main>
            <section className="home__welcome">
                <div className="home__welcome-container">
                    <h1 className="home__welcome-header">
                        Welcome!
                    </h1>
                    <p className="home__welcome-message">
                        Hi, there! I am so glad you are here. MoodCompass is a capstone project
                        for BrainStation's Software Engineering program, and it is a budding
                        web app that strives to create positive change.
                    </p>
                    <p className="home__welcome-message">
                        MoodCompass is continuously evolving, with more features coming soon.
                        In the meantime, stay updated on our progress by checking the updates below!
                    </p>
                </div>
            </section>

            <section className="home__about">
                <div className="home__about-container">
                    <div className="home__about-overlay"></div>
                    <div className="home__about-box">
                        <div className="home__about-content">
                            <h2 className="home__about-header">My name is Lily.</h2>
                            <p className="home__about-message">
                                As for me, I am a <span className="home__about-message--italics">registered nurse </span> 
                                studying software engineering at BrainStation in Toronto. 
                            </p>
                        </div>
                        <Button
                        className="home__about-btn"
                        text="Learn more"
                        onClick={handleClick}/>
                    </div>
                </div>
            </section>

            <section className="home__education">
                <div className="home__education-container">
                    f
                </div>
            </section>
        </main>
    )
}