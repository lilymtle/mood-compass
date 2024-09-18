import axios from "axios";
import FavoriteIcon  from "@mui/icons-material/Favorite";
import { useActionData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider.jsx";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function FavoriteToggleIcon({ resource }) {
    const { user } = useContext(AuthContext);
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const getFavorites = async () => {
            if (!user) return;

            console.log("Resource data:", resource); // debug - see resource data being passed

            const { data } = await axios.get(`${baseURL}/api/favorites/get`, {
                params: {
                    user_id: user.uid,
                    mood_id: resource.mood_id,
                    educational_resource_id: resource.educational_resource_id,
                    coping_strategy_id: resource.coping_strategy_id
                }
            });
            console.log("Favorite status:", data.favorites ? true : false); // debug - see if favorite status is true or false
            setIsFavorited(!!data.favorites);
        };
        getFavorites();
    }, [user, resource]);

    const handleToggleFavorite = async () => {
        if (!user) return;

        const favoriteData = {
            user_id: user.uid,
            mood_id: resource.mood_id,
            educational_resource_id: resource.educational_resource_id,
            coping_strategy_id: resource.coping_strategy_id
        };

        console.log("Sending favorite data:", favoriteData);

        try {
            if (isFavorited) {
                await axios.delete(`${baseURL}/api/favorites/delete`, { data: favoriteData });
                setIsFavorited(false);
            } else {
                await axios.post(`${baseURL}/api/favorites/add`, favoriteData);
                setIsFavorited(true);
            }

            await checkFavorites();
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
}

    return (
        <FavoriteIcon 
        sx={{ color: isFavorited ? "#557153" : "#FFFFFF", cursor: "pointer" }} 
        onClick={handleToggleFavorite} />
    )
}