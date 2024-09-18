/* this page is for a single coping strategy resource and provides more 
detailed information on it */

// import styling
import "./CopingStrategyPage.scss";

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import component
import { Button } from "../../../components/Button/Button.jsx";
import { FavoriteToggleIcon } from "../../../components/FavoriteToggleIcon/FavoriteToggleIcon.jsx";


export function CopingStrategyPage() {
    const { id } = useParams();
    const [strategy, setStrategy] = useState({
        descriptions: [],
        images: [],
        steps: [],
        benefits: [],
        resources: []
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStrategy = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/coping-strategies/${id}`)
                setStrategy(data);
            } catch (error) {
                console.error("Error fetching coping strategies data:", error);
                setError("Failed to fetch coping strategies data.");
            };
        };
        getStrategy();
    }, [id])

    return (
        <main>
            <section className="coping">

                <section className="coping__description">
                    <div className="coping__description-container">
                    <div className="coping__divider-book">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
                        </svg>
                    </div>
                        <h1 className="coping__header">
                            {strategy.name}
                        </h1>

                        {/* <FavoriteToggleIcon
    resource={{
        coping_strategy_id: strategy.id,
        educational_resource_id: null,
        mood_id: null,
    }}
/> */}

<FavoriteToggleIcon
    resource={{
        coping_strategy_id: strategy.id,
        educational_resource_id: null,
        mood_id: null,
    }}
/>

                        {strategy.descriptions.map((description, index) => (
                            <p key={index} className="coping__description-text">
                                {description}
                            </p>
                        ))}
                    </div>
                </section>
                
                <section className="coping__steps">
                    <div 
                    className="coping__steps-container"
                    style={{ backgroundImage: `url(${baseURL}${strategy.images[1]})` }}>
                        <div className="coping__box">
                            <h2 className="coping__subheader">
                                Steps
                            </h2>

                            <ol className="coping__list">
                                {strategy.steps.map((step, index) => (
                                    <li key={index} className="coping__item">
                                        <p className="coping__steps-text">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="coping__benefits">
                    <div className="coping__benefits-container">
                    <div className="coping__divider-curve">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                        </svg>
                    </div>

                        <h1 className="coping__header">
                            Benefits
                        </h1>

                        <ul className="coping__list">
                                {strategy.benefits.map((benefit, index) => (
                                    <li key={index} className="coping__item--white">
                                        <p className="coping__benefits-text">
                                            {benefit}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </section>

                <section className="coping__extra-resources">
                    <div className="coping__extra-resources-container">
                        <h2 className="coping__subheader--green">
                            Additional Resources
                        </h2>

                        <ul className="coping__list">
                            {strategy.resources.map((extraResource, index) => (
                                <li key={index} className="coping__item">
                                    <Link to={extraResource.link}>
                                        <p className="coping__extra-resources-text">
                                            {extraResource.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="learn-more">
                    <div className="learn-more__container">
                    <div className="coping__divider-multi-waves">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                        </svg>
                    </div>

                        <h2 className="learn-more__subheader">
                            Learn More
                        </h2>

                        <div className="learn-more__box">
                            <p className="learn-more__text">
                                Did you know MoodCompass has resources on coping strategies? These
                                coping strategies can be applied to many different negative emotional
                                states.
                            </p>
                        </div>
                        
                        <Button
                        className="learn-more__btn"
                        type="button"
                        text="Let's Go!" />
                    </div>
                </section>
            </section>
        </main>
    );
};