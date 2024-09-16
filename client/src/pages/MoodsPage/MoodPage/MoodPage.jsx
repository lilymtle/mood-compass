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
    const [mood, setMood] = useState("");
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
                <h1 className="mood__header">
                    {mood.name}
                </h1>
            </section>
        </main>
    );
};