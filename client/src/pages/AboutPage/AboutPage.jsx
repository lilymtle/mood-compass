import "./AboutPage.scss";

export function AboutPage() {
    return (
        <main>
            <section className="about__mood-compass">
                <div className="about__mood-compass-container">
                    <h1 className="about__mood-compass-header">
                        About
                    </h1>
                </div>
            </section>

            <section className="about__me">
                <div className="about__me-container">
                    <div className="about__me-container--right">
                        <h2 className="about__me-header">
                            The Person
                        </h2>
                        <p className="about__me-text">
                            My name is Lily, and I worked as a 
                            registered nurse for over 5 years. I specialized
                            in mental health and addicitons, and dedicated
                            my entire nursing career to it.
                        </p>
                    </div>
                    <div className="about__me-container--bottom">
                        <p className="about__me-text">
                            Something here
                        </p>
                    </div>                
                    <div className="about__me-container--left">
                        <div className="about__me-placeholder"></div>
                    </div>
                </div>
            </section>

            <section className="about__values">
                <div className="about__values-container">
                    <div className="about__values-box">
                        <h2 className="about__values-header">
                            Values
                        </h2>
                        <div className="about__cards">
                            <ul className="about__cards-list">
                                <li className="about__card-item">
                                    <div className="about__card">
                                        <img 
                                        className="about__card-img"
                                        src="src/assets/images/about-values-1.jpg" />
                                        <div className="about__card-text-overlay">
                                            <h3 className="about__card-title">
                                                Trauma-informed Care
                                            </h3>
                                            <p className="about__card-text">
                                                Recognizing and responding to the effects of trauma,
                                                creating a safe environment.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="about__card-item">
                                    <div className="about__card">
                                        <img 
                                        className="about__card-img"
                                        src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
                                        <div className="about__card-text-overlay">
                                            <h3 className="about__card-title">
                                                Empathy
                                            </h3>
                                            <p className="about__card-text">
                                                Understanding and sharing individuals'
                                                experiences and emotions.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="about__card-item">
                                    <div className="about__card">
                                        <img 
                                        className="about__card-img"
                                        src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
                                        <div className="about__card-text-overlay">
                                            <h3 className="about__card-title">
                                                Empowerment
                                            </h3>
                                            <p className="about__card-text">
                                                Equipping individuals with tools and
                                                knowledge to manage their well-being.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="about__card-item">
                                    <div className="about__card">
                                        <img 
                                        className="about__card-img"
                                        src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
                                        <div className="about__card-text-overlay">
                                            <h3 className="about__card-title">
                                                Inclusivity
                                            </h3>
                                            <p className="about__card-text">
                                                Ensuring the app is welcoming andaccessible to 
                                                individuals from all backgrounds.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="about__card-item">
                                    <div className="about__card">
                                        <img 
                                        className="about__card-img"
                                        src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
                                        <div className="about__card-text-overlay">
                                            <h3 className="about__card-title">
                                                Accessibility
                                            </h3>
                                            <p className="about__card-text">
                                                Ensuring everyone, regardless of their abilities
                                                or circumstances, can access and benefit from 
                                                the
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}