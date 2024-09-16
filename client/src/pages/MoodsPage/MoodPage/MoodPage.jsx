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

export function MoodPage() {
    const { id } = useParams();
    const [mood, setMood] = useState({
        types: [],
        signsSymptoms: [],
        causes: [],
        treatmentOptions: []
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

    return (
        <main>
            <section className="mood">
                <div className="mood__description-container">
                    <h1 className="mood__header">
                        {mood.name}
                    </h1>

                    <p className="mood__description">
                        {mood.description}
                    </p>
                </div>

                <div className="mood__types-container">
                    <h2 className="mood__subheader">
                        Types of Anxiety
                    </h2>

                    <ul className="mood__list">
                        {mood.types.map((type, index) => (
                            <li key={index} className="mood__item">
                                <p className="mood__type">
                                    {type}
                                </p>
                            </li>
                    ))}
                    </ul>
                </div>

                <div className="mood__signs-symptoms-container">
                    <h2 className="mood__subheader">
                        Signs and Symptoms
                    </h2>

                    <ul className="mood__list">
                        {mood.signsSymptoms.map((signSymptom, index) => (
                            <li key={index} className="mood__item">
                                <p className="mood__sign-symptom">
                                    {signSymptom}
                                </p>
                            </li>
                    ))}
                    </ul>
                </div>

                <div className="mood__causes-container">
                    <h2 className="mood__subheader">
                        Causes
                    </h2>

                    <ul className="mood__list">
                        {mood.causes.map((cause, index) => (
                            <li key={index} className="mood__item">
                                <p className="mood__cause">
                                    {cause}
                                </p>
                            </li>
                    ))}
                    </ul>
                </div>

                <div className="mood__treatment-container">
                    <h2 className="mood__subheader">
                        Treatment Options
                    </h2>

                    <ul className="mood__list">
                        {mood.treatmentOptions.map((treatmentOption, index) => (
                            <li key={index} className="mood__item">
                                <p className="mood__treatment">
                                    {treatmentOption}
                                </p>
                            </li>
                    ))}
                    </ul>
                </div>

                <div className="mood__help-container">
                    <h3 className="mood__subheader-h3">
                        When to Seek Help
                    </h3>

                    <p className="mood__help">
                        {mood.whenToSeekHelp}
                    </p>
                </div>
            </section>
        </main>
    );
};