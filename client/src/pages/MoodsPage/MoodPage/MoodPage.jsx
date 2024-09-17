/* this page is for a single mood and provides more 
detailed information on it */

// import styling
import "./MoodPage.scss";

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

import FavoriteIcon from "@mui/icons-material/Favorite";

export function MoodPage() {
    const { id } = useParams();
    const [mood, setMood] = useState({
        descriptions: [],
        images: [],
        types: [],
        signs_symptoms: [],
        causes: [],
        treatment_options: [],
        when_to_seek_help: ""
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMood = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/moods/${id}`)
                setMood(data);
            } catch (error) {
                console.error("Error fetching mood data:", error);
                setError("Failed to fetch mood data.");
            };
        };
        getMood();
    }, [id])

    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <main>
            <section className="mood">

                <section className="mood__description">
                    <div className="mood__description-container">
                        <div className="mood__header-icon-container">
                            <h1 className="mood__header">
                                {mood.name}
                            </h1>

                        <FavoriteIcon 
                        sx={{ color: isFavorited ? "#557153" : "#FFFFFF", cursor: "pointer" }} 
                        onClick={handleFavoriteClick} />
                        </div>

                        {mood.descriptions.map((descriptions, index) => (
                            <p key={index} className="mood__description-text">
                                {descriptions}
                            </p>
                        ))}
                    </div>
                </section>
                
                <section className="mood__types">
                    <div 
                    className="mood__types-container"
                    style={{ backgroundImage: `url(${baseURL}${mood.images[1]})` }}>
                        <div className="mood__box--types">
                            <h2 className="mood__subheader">
                                Types of {mood.name}
                            </h2>

                            <ul className="mood__list">
                                {mood.types.map((type, index) => (
                                    <li key={index} className="mood__item">
                                        <p className="mood__type-text">
                                            {type}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mood__signs-symptoms">
                    <div className="mood__signs-symptoms-container">
                        <h2 className="mood__subheader">
                            Signs and Symptoms
                        </h2>

                        <ul className="mood__list">
                            {mood.signs_symptoms.map((sign_symptom, index) => (
                                <li key={index} className="mood__item">
                                    <p className="mood__sign-symptom-text">
                                        {sign_symptom}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mood__causes">
                    <div className="mood__causes-container">
                        <div className="mood__divider-wavy">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                            </svg>
                        </div>

                        <h2 className="mood__subheader--white">
                            Causes
                        </h2>

                        <ul className="mood__list">
                            {mood.causes.map((cause, index) => (
                                <li key={index} className="mood__item--white">
                                    <p className="mood__causes-text">
                                        {cause}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                
                <section className="mood__treatment">
                    <div className="mood__treatment-container"
                    style={{ backgroundImage: `url(${baseURL}${mood.images[2]})` }}>
                        <div className="mood__box--treatment">
                            <h2 className="mood__subheader">
                                Treatment Options
                            </h2>

                            <ul className="mood__list">
                                {mood.treatment_options.map((treatment_option, index) => (
                                    <li key={index} className="mood__item">
                                        <p className="mood__treatment-text">
                                            {treatment_option}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section className="mood__help">
                    <div className="mood__help-container">
                        <h3 className="mood__subheader--h3 mood__subheader--white">
                            When to Seek Help
                        </h3>

                        <p className="mood__help-text">
                            {mood.when_to_seek_help}
                        </p>
                    </div>
                </section>
                
                <section className="mood__resources">
                    <div className="mood__resources-container">
                        <div className="mood__divider-multi-waves">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                            </svg>
                        </div>
                        <div className="mood__box-resources">
                            <h3 className="mood__subheader--green">
                                Additional Resources
                            </h3>
                            <p className="mood__resources-text">
                                Add resources here.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};