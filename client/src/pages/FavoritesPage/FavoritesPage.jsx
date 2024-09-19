// import styling
import { useContext, useEffect, useState } from "react";
import "./FavoritesPage.scss";
import { AuthContext } from "../../auth/AuthProvider.jsx";

import FavoriteIcon  from "@mui/icons-material/Favorite";

import { Link } from "react-router-dom";
import axios from "axios";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

import Avatar from "@mui/material/Avatar";
import { FavoriteToggleIcon } from "../../components/FavoriteToggleIcon/FavoriteToggleIcon.jsx";
import { FavoriteCard } from "../../components/Cards/FavoriteCard/FavoriteCard.jsx";

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


    // const { user } = useContext(AuthContext);
    // const [favorites, setFavorites] = useState({ moods: [], educational_resources: [], coping_strategies: [] });

    // useEffect(() => {
    //     async function getFavorites() {
    //     if (user) {
    //         try {
    //             const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
    //             params: { user_id: user.uid }
    //         });
    //         setFavorites(data)
    //         } catch(error) {
    //             console.error("Error fetching favorites:", error);
    //         };
    //     }
    // }
    // getFavorites();
    // }, [user]);

    // const handleUnfavoriteClick = async (e, type, id) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     if (user) {
    //         try {
    //             await axios.delete(`${baseURL}/api/favorites/delete`, {
    //                 data: { user_id: user.uid, [type]: id},
    //             });
    //             setFavorites((prevFavorites) => ({
    //                 ...prevFavorites,
    //                 [type]: prevFavorites[type].filter(item => item.id !== id)
    //             }));
    //         } catch (error) {
    //             console.error("Error unfavoriting resource:", error);
    //         }
    //     }
    // };

    return (
        <main>
            <section className="favorites">
                <div className="favorites__container">
                <div className="favorites__divider-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                    </svg>
                </div>
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

                            {/* {favorites.moods.map((mood, index) => (
                                <li key={mood.id} className="favorites__list-item">
                                <Link to={`/moods/${mood.id}`} className="favorites__card-link">
                                    <div 
                                    className={`favorites__card favorites__card-box
                                    ${index === favorites.length - 1 ? "remove-border" : ""}`} >

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

                                        <FavoriteToggleIcon resource={favorite} />
                                    </div>
                                </Link>
                            </li>
                            ))}

                            {favorites.educational_resources.map((resource, index) => (
                                <li key={resource.id} className="favorites__list-item">
                                <Link to={`/educational-resources/${resource.id}`} className="favorites__card-link">
                                    <div 
                                    className={`favorites__card favorites__card-box
                                    ${index === favorites.length - 1 ? "remove-border" : ""}`} >

                                        <Avatar
                                        alt="card image of article favorited"
                                        src={`${baseURL}${resource.images[0]}`}
                                        sx={{ width: 56, height: 56 }}/>
                                        <div className="favorites__card-container">
                                            <h2 className="favorites__card-title">
                                                {resource.name}
                                            </h2>
                                            <p className="favorites__card-description">
                                                {resource.short_description}
                                            </p>
                                        </div>

                                        <FavoriteIcon 
                                        onClick={(e) => handleUnfavoriteClick(e, "educational_resource_id", resource.id)} />        
                                    </div>
                                </Link>
                            </li>
                            ))}

                            {favorites.coping_strategies.map((strategy, index) => (
                                <li key={strategy.id} className="favorites__list-item">
                                <Link to={`/coping-strategies/${strategy.id}`} className="favorites__card-link">
                                    <div 
                                    className={`favorites__card favorites__card-box
                                    ${index === favorites.length - 1 ? "remove-border" : ""}`} >

                                        <Avatar
                                        alt="card image of article favorited"
                                        src={`${baseURL}${strategy.images[0]}`}
                                        sx={{ width: 56, height: 56 }}/>
                                        <div className="favorites__card-container">
                                            <h2 className="favorites__card-title">
                                                {strategy.name}
                                            </h2>
                                            <p className="favorites__card-description">
                                                {strategy.short_description}
                                            </p>
                                        </div>

                                        <FavoriteIcon 
                                        onClick={(e) => handleUnfavoriteClick(e, "coping_strategy_id", strategy.id)} />        
                                    </div>
                                </Link>
                            </li>
                            ))} */}
                        </ul>
                </div>
            </section>
        </main>
    )
}