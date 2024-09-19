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
                    <h1 className="favorites__header">
                        Favorites
                    </h1>
                </div>

                <div className="favorites__list-container">
                        <ul className="favorites__list">
                            {/* renders mood cards */} 
                            {favorites.moods.map(mood => (
                                <FavoriteCard
                                key={mood.favorite_i ?? "fallback-id" }
                                resource={mood}
                                type="moods"
                                onToggle={getUpdatedFavorites} />
                            ))}

                            {/* renders educational resource cards */}
                            {favorites.educational_resources.map(resource => (
                                <FavoriteCard
                                key={resource.favorite_id ?? "fallback-id"}
                                resource={resource}
                                type="educational_resources"
                                onToggle={getUpdatedFavorites} />
                            ))}

                            {/* renders coping strategy cards */}
                            {favorites.coping_strategies.map(strategy => (
                                <FavoriteCard
                                key={strategy.favorite_id ?? "fallback-id"}
                                resource={strategy}
                                type="coping_strategies"
                                onToggle={getUpdatedFavorites} />

                            ))}

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