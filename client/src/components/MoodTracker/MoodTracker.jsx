// import styling
import "./MoodTracker.scss";

// import axios
import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import hooks
import { useEffect, useState } from "react";

// import component
import { MoodModal } from "../Modal/MoodModal/MoodModal.jsx";

export function MoodTracker() {
    const [moodOptions, setMoodOptions] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedMood, setSelectedMood] = useState(null);

    useEffect(() => {
        const fetchMoodOptions = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/mood-options`);
                setMoodOptions(data);
            } catch (error) {
                console.error("Error fetching mood options:", error);
            }
        };
        fetchMoodOptions();
    }, []);

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        setIsPopupOpen(false);
    };

    return (
        <section className="mood-tracker">
            <div className="mood-tracker__container">
                <div className="mood-tracker__display">
                    {selectedMood ? (
                        <p className="mood-tracker__display-text">
                            Today I am feeling... {selectedMood.description} {selectedMood.emoji}
                        </p>
                    ) : (
                        <p className="mood-tracker__display-text">
                            Today I am feeling...
                        </p>
                    )}
                </div>
                
                <div className="mood-tracker__btns">
                    <button className="mood-tracker__btn--select" onClick={() => setIsPopupOpen(true)}>Select</button>
                    <button className="mood-tracker__btn--submit">Submit</button>
                </div>
            </div>

            <MoodModal
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                moodOptions={moodOptions}
                onSelectMood={handleMoodSelect}
            />
        </section>
    );
};