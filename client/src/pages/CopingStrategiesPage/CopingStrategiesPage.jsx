/* this page displays a list of coping strategies users can select to learn more about */

// import styling
import "./CopingStrategiesPage.scss";

// import environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";

// import components
import { Card } from "../../components/Cards/Card.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function CopingStrategiesPage() {
    const [strategiesData, setStrategiesData] = useState([]);

    useEffect(() => {
        const getStrategiesData = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/coping-strategies`);
                setStrategiesData(data);
            } catch (error) {
                console.error("Error retrieving coping strategies:", error);
            };
        };
        getStrategiesData();
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Coping Strategies</title>
                </Helmet>
            </HelmetProvider>
            <section className="strategies">
                <div className="strategies__container">
                    <h1 className="strategies__header">
                        Coping Strategies
                    </h1>

                    <p className="strategies__text">
                        Here you will find a list of different educational resources you can
                        learn more about here on MoodCompass.
                    </p>
                </div>
            </section>

            <section className="strategies-list__container">
                <ul className="strategies-list">
                    {strategiesData.map((strategy) => (
                        <Card
                            listItemClassname="strategies-list__card"
                            h2ClassName="strategies-list__number"
                            h3ClassName="strategies-list__title"
                            divClassName="strategies-list__content"
                            imgClassName="strategies-list__img"
                            pClassName="strategies-list__text"
                            linkClassName="strategies-list__link"
                            linkPath={`/coping-strategies/${strategy.id}`}
                            iconClassName="strategies-list__icon"
                            baseURL={baseURL}
                            key={strategy.id}
                            id={strategy.id}
                            name={strategy.name}
                            images={strategy.images}
                            shortDescription={strategy.short_description} />
                    ))}
                </ul>
            </section>
        </main>
    );
};