/* this page displays a list of moods users can select to learn more about */

// import styling
import "./MoodsPage.scss";

// import environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";

// import component
import { Card } from "../../components/Cards/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function MoodsPage() {
    const [resourcesData, setResourcesData] = useState([]);

    useEffect(() => {
        const getMoodsData= async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/moods`);
                setResourcesData(data);
            } catch (error) {
                console.error("Error retrieving educational resources:", error);
            };
        };
        getMoodsData();
    }, []);

return (
    <main>
        <HelmetProvider>
            <Helmet>
                <title>Moods</title>
            </Helmet>
        </HelmetProvider>
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
            {resourcesData.map((resource) => (
                    <Card
                    listItemClassname="moods-list__card"
                    h2ClassName="moods-list__number"
                    h3ClassName="moods-list__title"
                    divClassName="moods-list__content"
                    imgClassName="moods-list__img"
                    pClassName="moods-list__text"
                    linkClassName="moods-list__link"
                    linkPath={`/moods/${resource.id}`}
                    iconClassName="moods-list__icon"
                    baseURL={baseURL}
                    key={resource.id}
                    id={resource.id}
                    name={resource.name}
                    images={resource.images}
                    shortDescription={resource.short_description} />
                ))}
            </ul>
        </section>
    </main>
    );
};