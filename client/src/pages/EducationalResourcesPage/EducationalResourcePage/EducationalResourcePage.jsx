/* this page is for a single educational resource and provides more 
detailed information on it */

// import styling
import "./EducationalResourcePage.scss";

// import dependency
import axios from "axios";

// import hooks
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function EducationalResourcePage() {
    const { id } = useParams();
    const [resource, setResource] = useState({
        descriptions: [],
        images: [],
        strategies: [],
        resources: []
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getResource = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/api/educational-resources/${id}`)
                setResource(data);
            } catch (error) {
                console.error("Error fetching educational resource data:", error);
                setError("Failed to fetch educational resource datadata.");
            };
        };
        getResource();
    }, [id])

    return (
        <main>
            <section className="resource">

                <section className="resource__description">
                    <div className="resource__description-container">
                        <h1 className="resource__header">
                            {resource.name}
                        </h1>

                        {resource.descriptions.map((description, index) => (
                            <p key={index} className="resource__description-text">
                                {description}
                            </p>
                        ))}
                    </div>
                </section>
                
                <section className="resource__strategies">
                    <div 
                    className="resource__strategies-container">
                        <div className="resource__box--types">
                            <h2 className="resource__subheader">
                                Strategies
                            </h2>

                            <ul className="resource__list">
                                {resource.strategies.map((strategy, index) => (
                                    <li key={index} className="resource__item">
                                        <p className="resource__strategy-text">
                                            {strategy}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="resource__extra-resources">
                    <div className="resource__extra-resources-container">
                        <h2 className="resource__subheader">
                            Additional Resources
                        </h2>

                        <ul className="resource__list">
                            {resource.resources.map((extraResource, index) => (
                                <li key={index} className="resource__item">
                                    <Link to={extraResource.link}>
                                        <p className="resource__extra-resources-text">
                                            {extraResource.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="coping-strategies">
                    <div className="coping-strategies__container">
                        <h2 className="coping-strategies__subheader--white">
                            Coping Strategies
                        </h2>

                        <p className="coping-strategies__text">
                            Text
                        </p>
                    </div>
                </section>
            </section>
        </main>
    );
};