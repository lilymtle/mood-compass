// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import context
import { AuthContext } from "../../auth/AuthProvider.jsx";

// import dependency
import axios from "axios";

// import hooks
import { useContext, useEffect, useState } from "react";

// import component
import FavoriteIcon  from "@mui/icons-material/Favorite";

export function FavoriteToggleIcon({ resource, onToggle }) {
    const { user } = useContext(AuthContext);
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const getFavorites = async () => {
            if (!user) return;

            const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
                params: {
                    user_id: user.uid,
                    mood_id: resource.mood_id,
                    educational_resource_id: resource.educational_resource_id,
                    coping_strategy_id: resource.coping_strategy_id
                }
            });
            setIsFavorited(data.favorites.length > 0);
        };
        getFavorites();
    }, [user, resource]);

    const handleToggleFavorite = async (e) => {
        e.stopPropagation(); // prevents parent event handlers from trigger when this function runs
        e.preventDefault(); 
        
        if (!user) return;

        const favoriteData = {
            user_id: user.uid,
            mood_id: resource.mood_id,
            educational_resource_id: resource.educational_resource_id,
            coping_strategy_id: resource.coping_strategy_id
        };

        try {
            if (isFavorited) {
                await axios.delete(`${baseURL}/api/favorites/delete`, { data: favoriteData });
                setIsFavorited(false);
            } else {
                await axios.post(`${baseURL}/api/favorites/add`, favoriteData);
                setIsFavorited(true);
            }
            onToggle();
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return (
        <FavoriteIcon 
        sx={{ color: isFavorited ? "#557153" : "#FFFFFF", cursor: "pointer" }} 
        onClick={handleToggleFavorite} />
    )
};