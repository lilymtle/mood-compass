// import styling
import { useContext, useEffect, useState } from "react";
import "./FavoritesPage.scss";
import { AuthContext } from "../../auth/AuthProvider.jsx";

import { Link } from "react-router-dom";
import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

import Avatar from "@mui/material/Avatar";

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
                        <ul className="favorites__list">
                            {favorites.map((mood, index) => (
                                <li key={mood.id} className="favorites__list-item">
                                <Link to={`/moods/${mood.id}`} className="favorites__card-link">
                                    <div 
                                    className={`favorites__card favorites__card-box
                                    ${index === favorites.length - 1 ? "remove-border" : ""}`} >
                                        {/* <img 
                                        className="favorites__card-img"
                                        src={`${baseURL}${mood.images[0]}`}
                                        alt="card image of article favorited" /> */}

                                        <Avatar
                                        alt="card image of article favorited"
                                        src={`${baseURL}${mood.images[0]}`}
                                        sx={{ width: 56, height: 56 }}/>
                                        <div className="favorites__card-container">
                                            <h2 className="favorites__card-title">
                                                {mood.name}
                                            </h2>
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
            </section>
        </main>
    )
}