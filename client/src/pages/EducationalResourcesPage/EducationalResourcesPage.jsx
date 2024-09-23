/* this page displays a list of educational resources 
users can select to learn more about */

// import styling
import "./EducationalResourcesPage.scss";

// import environment variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";

// import component
import { Card } from "../../components/Cards/Card.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function EducationalResourcesPage() {
    const [resourcesData, setResourcesData] = useState([]);

    useEffect(() => {
        const getResourcesData = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/educational-resources`);
                setResourcesData(data);
            } catch (error) {
                console.error("Error retrieving educational resources:", error);
            };
        };
        getResourcesData();
    }, []);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Educational Resources</title>
                </Helmet>
            </HelmetProvider>
            <section className="resources">
                <div className="resources__container">
                    <h1 className="resources__header">
                        Resources
                    </h1>

                    <p className="resources__text">
                        Here you will find a list of different educational resources you can
                        learn more about here on MoodCompass.
                    </p>
                </div>
            </section>

            <section className="resources-list__container">
                <ul className="resources-list">
                    {resourcesData.map((resource) => (
                        <Card
                            listItemClassname="resources-list__card"
                            h2ClassName="resources-list__number"
                            h3ClassName="resources-list__title"
                            divClassName="resources-list__content"
                            imgClassName="resources-list__img"
                            pClassName="resources-list__text"
                            linkClassName="resources-list__link"
                            linkPath={`/educational-resources/${resource.id}`}
                            iconClassName="resources-list__icon"
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