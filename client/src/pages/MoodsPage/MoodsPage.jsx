/* this page displays a list of moods users can select to learn more about */

// import styling
import "./MoodsPage.scss";

// import environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import component
import { MoodCard } from "../../components/Cards/MoodCard/MoodCard";

export function MoodsPage() {
    const [moodsData, setMoodsData] = useState([]);
    // const [selectedMood, setSelectedMood] = useState({});
    // const { moodId } = useParams();

    useEffect(() => {
        const getMoods = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/moods`);
                console.log(response.data); 
                setMoodsData(response.data);
            } catch (error) {
                console.error("Error retrieving moods:", error);
            };
        };
        getMoods();
    }, []);

return (
    <main>
        <section className="moods">
            <div className="moods__container">
                <h1 className="moods__header">
                    Moods
                </h1>

                <p className="moods__text">
                    Here you will find a list of different moods you can
                    learn more about here on MoodCompass.
                </p>
            </div>
        </section>

        <section className="moods-list__container">
            <ul className="moods-list">
                {moodsData.map((mood) => (
                    <MoodCard
                    baseURL={baseURL}
                    key={mood.id}
                    id={mood.id}
                    name={mood.name}
                    images={mood.images}
                    shortDescription={mood.shortDescription} />
                ))}
            </ul>
        </section>
    </main>
    );
};