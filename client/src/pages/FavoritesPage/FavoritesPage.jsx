// import styling
import "./FavoritesPage.scss";

// import dependency
import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import hooks
import { useContext, useEffect, useState } from "react";

// import auth
import { AuthContext } from "../../auth/AuthProvider.jsx";

// import components
import { FavoriteCard } from "../../components/Cards/FavoriteCard/FavoriteCard.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function FavoritesPage() {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState({
        moods: [],
        educational_resources: [],
        coping_strategies: []
    });
    

    useEffect(() => {
        const checkFavorites = async () => {
            if (!user) return;
            try {
                const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
                    params: { user_id: user.uid }
                });
                console.log('Favorites data:', data);
    
                const processedFavorites = {
                    moods: [],
                    educational_resources: [],
                    coping_strategies: []
                };

                if (data.favorites) {
                    data.favorites.forEach(favorite => {
                        console.log('Processing favorite:', favorite);

                        if (favorite.mood_id) {
                            processedFavorites.moods.push(favorite);
                        }
                        if (favorite.educational_resource_id) {
                            processedFavorites.educational_resources.push(favorite);
                        }
                        if (favorite.coping_strategy_id) {
                            processedFavorites.coping_strategies.push(favorite);
                        }
                    });
                }
        
                setFavorites(processedFavorites);
                console.log('Processed favorites:', processedFavorites); 
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        };
        checkFavorites();
    }, [user]);
    
    const getUpdatedFavorites = async () => {
        if (user) {
            try {
                const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
                    params: { user_id: user.uid }
                });

                const processedFavorites = {
                    moods: [],
                    educational_resources: [],
                    coping_strategies: []
                };

                if (data.favorites) {
                    data.favorites.forEach(favorite => {
                        if (favorite.mood_id) processedFavorites.moods.push(favorite);
                        if (favorite.educational_resource_id) processedFavorites.educational_resources.push(favorite);
                        if (favorite.coping_strategy_id) processedFavorites.coping_strategies.push(favorite);
                    });
                }

                setFavorites(processedFavorites);
            } catch (error) {
                console.error("Error fetching updated favorites:", error);
            }
        }
    }

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Favorites</title>
                </Helmet>
            </HelmetProvider>
            <section className="favorites">
                <div className="favorites__container">
                    <h1 className="favorites__header">
                        Your Favorites
                    </h1>
                </div>

                <div className="favorites__list-container">
                <div className="favorites__divider-multi-waves">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                        <ul className="favorites__list">
                            <section className="favorites__section">
                                <div className="favorites__section-subheader-container">
                                    <h2 className="favorites__section-subheader">
                                    Mood
                                    </h2>
                                </div>
                            {/* renders mood cards */} 
                            {favorites.moods.length > 0 ? (favorites.moods.map(mood => (
                                <FavoriteCard
                                key={mood.favorite_i ?? "fallback-id" }
                                resource={mood}
                                type="moods"
                                onToggle={getUpdatedFavorites} />
                                ))
                            ) : (
                                <div className="favorites__empty-message">
                                    Nothing favorited yet.
                                </div>
                            )}
                            </section>

                            <section className="favorites__section">
                                <div className="favorites__section-subheader-container">
                                    <h2 className="favorites__section-subheader">
                                    Education
                                    </h2>
                                </div>
                            {/* renders educational resource cards */}
                            {favorites.educational_resources.length > 0 ? (
                                favorites.educational_resources.map(resource => (
                                <FavoriteCard
                                key={resource.favorite_id ?? "fallback-id"}
                                resource={resource}
                                type="educational_resources"
                                onToggle={getUpdatedFavorites} />
                                ))
                            ) : (
                                <div className="favorites__empty-message">
                                    Nothing favorited yet.
                                </div>
                            )}
                            </section>

                            <section className="favorites__section">
                                <div className="favorites__section-subheader-container">
                                    <h2 className="favorites__section-subheader">
                                        Coping
                                    </h2>
                                </div>
                            {/* renders coping strategy cards */}
                            {favorites.coping_strategies.length > 0 ? (
                                favorites.coping_strategies.map(strategy => (
                                <FavoriteCard
                                key={strategy.favorite_id ?? "fallback-id"}
                                resource={strategy}
                                type="coping_strategies"
                                onToggle={getUpdatedFavorites} />
                                ))
                            ) : (
                                <div className="favorites__empty-message">
                                    Nothing favorited yet.
                                </div>
                            )}
                            </section>
                        </ul>
                </div>
            </section>
        </main>
    )
}