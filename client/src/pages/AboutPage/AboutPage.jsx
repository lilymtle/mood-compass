//import styling
import "./AboutPage.scss";

export function AboutPage() {
    return (
        <main>
            <div className="about__wrapper">
                <section className="about">
                    <div className="about__container">
                        <h1 className="about__header">
                            About
                        </h1>

                        <div className="about__content-container">
                            <h2 className="about__subheader">
                                What is MoodCompass?
                            </h2>
                            <p className="about__text--white">
                                MoodCompass is a passion project of mine. It is a capstone project for my
                                Software Engineering program at BrainStation. I am passionate about mental
                                health, and that played a huge role in deciding what my capstone project
                                will be.
                            </p>
                        </div>

                        <div className="about__content-container--box">
                            <h2 className="about__subheader--box">
                                    Why MoodCompass?
                            </h2>
                            <p className="about__text--grey">
                                I worked as a registered nurse for over 5 years and I specialized in
                                mental health and addictions. As someone who worked with individuals
                                who experienced mental health issues, and as someone with lived 
                                experience, advocating for mental health is close to my heart. 
                            </p>
                            <p className="about__text--grey">
                                One of my goals with MoodCompass is to create a safe space where
                                individuals can navigate through difficult emotions. I strongly
                                believe that knowledge is a powerful tool that can change lives.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about__values">
                    <div className="about__values-container">
                        <img
                            className="about__values-img"
                            src="/src/assets/images/mood-compass-values.png"
                            alt="moodcompass values" />
                    </div>
                </section>
            </div>
        </main>
    )
}