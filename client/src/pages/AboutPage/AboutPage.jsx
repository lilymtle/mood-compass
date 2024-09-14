import "./AboutPage.scss";

export function AboutPage() {
    return (
        <main>
            <section className="about">
                <div className="about__container">
                    <h1 className="about__header">
                        About
                    </h1>

                    <div className="about__content-container">
                        <h2 className="about__subheader">
                            What is MoodCompass?
                        </h2>
                        <p className="about__text">
                            MoodCompass is a passion project of mine. It is a capstone project for my
                            Software Engineering program at BrainStation. I am passionate about mental
                            health, and that played a huge role in deciding what my capstone project
                            will be.
                        </p>
                    </div>

                    <div className="about__content-container">
                        <h2 className="about__subheader">
                                The Person
                        </h2>
                        <p className="about__text">
                            My name is Lily, and I worked as a 
                            registered nurse for over 5 years. I specialized
                            in mental health and addicitons, and dedicated
                            my entire nursing career to it.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__values">
                <div className="about__values-container">
                </div>
            </section>
        </main>
    )
}