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
                    <h2 className="home__education-header">
                        The Value of <span className="home__education-header--script">Education</span>
                    </h2>

                    <div className="home__education-cards">
                        <ul className="card__list">
                            <li className="card">
                                <div className="card__container">
                                    <img
                                    className="card__icon"
                                    src="src/assets/icons/potted-plant.svg"
                                    alt="potted plant icon" />

                                    <h3 className="card__header">
                                        Supports Growth and Resilience
                                    </h3>

                                    <p className="card__text">
                                            Mental health education provides tools like mindfulness and stress
                                            management, enabling individuals to handle emotions effectively.
                                            This proactive approach builds resilience, improves well-being,
                                            and reduces the risk of severe issues.
                                    </p>
                                </div>
                            </li>
                            <li className="card">
                                <div className="card__container">
                                    <img
                                    className="card__icon"
                                    src="src/assets/icons/lightbulb.svg"
                                    alt="potted plant icon" />

                                    <h3 className="card__header">
                                        Increases Understanding
                                    </h3>

                                    <p className="card__text">
                                        Education enhances understanding of mental health issues, helping
                                        individuals recognize symptoms, reduce stigma, and seek help more
                                        compassionately. It also aids in distinguishing mental health
                                        problems from daily stressors, leading to timely intervention.
                                    </p>
                                </div>
                            </li>
                            <li className="card">
                                <div className="card__container">
                                    <img
                                    className="card__icon"
                                    src="src/assets/icons/sentiment-calm.svg"
                                    alt="potted plant icon" />

                                    <h3 className="card__header"> 
                                        Promotes Effective Coping Strategies
                                    </h3>

                                    <p className="card__text">
                                        Mental health education promotes self-reflection and growth,
                                        helping individuals manage challenges, boost resilience, and
                                        improve emotional regulation, leading to greater self-esteem
                                        and a positive outlook.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}