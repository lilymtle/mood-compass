// import styling
import { useContext, useEffect, useState } from "react";
import "./FavoritesPage.scss";
import { AuthContext } from "../../auth/AuthProvider.jsx";

import { Link } from "react-router-dom";
import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function FavoritesPage() {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function getFavorites() {
        if (user) {
            try {
                const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
                params: { user_id: user.uid }
            });
            setFavorites(data)
            } catch(error) {
                console.error("Error fetching favorites:", error);
            };
        }
    }
    getFavorites();
    }, [user]);

    return (
        <main>
            <section className="favorites">
                <div className="favorites__container">
                    <h1 className="favorites__header">
                        Favorites
                    </h1>
                </div>

                <div className="favorites__list-container">
                    <div className="favorites__list-box">
                        <ul className="favorites__list">
                            {favorites.map(mood=> (
                                <li key={mood.id} className="favorites__list-item">
                                <Link to={`/moods/${mood.id}`} className="favorites__card-link">
                                    <div className="favorites__card">
                                        <img 
                                        className="favorites__card-img"
                                        src={`${baseURL}${mood.images[0]}`}
                                        alt="card image of article favorited" />
                                        <div className="favorites__card-container">
                                            <p className="favorites__card-title">
                                                {mood.name}
                                            </p>
                                            <p className="favorites__card-description">
                                                {mood.short_description}
                                            </p>
                                        </div>
                                        <img
                                        className="favorites__card-icon"
                                        src="/src/assets/icons/favorite-icon.svg"
                                        alt="heart icon" />
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}