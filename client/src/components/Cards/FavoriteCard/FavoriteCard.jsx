import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FavoriteToggleIcon } from "../../FavoriteToggleIcon/FavoriteToggleIcon";
import { replaceUnderscoreWithHyphen } from "../../../utils/formatUtils";


// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function FavoriteCard({ resource, type, onToggle }) {
    // console.log('Resource in FavoriteCard:', resource);

    // if (resource.images === undefined) {
    //     console.log('resource.images is undefined');
    // } else {
    //     console.log('resource.images:', resource.images);
    // }

    let id = "";
    let image = "";
    let name = "";
    let description = "";

    switch (type) {
        case 'moods':
            id = resource.mood_id;
            image = resource.mood_images ? resource.mood_images[0] : "";
            name = resource.mood_name || "";
            description = resource.mood_short_description || "";
            break;
        case 'educational_resources':
            id = resource.educational_resource_id;
            image = resource.resource_images ? resource.resource_images[0] : "";
            name = resource.resource_name || "";
            description = resource.resource_short_description || "";
            break;
        case 'coping_strategies':
            id = resource.coping_strategy_id;
            image = resource.strategy_images ? resource.strategy_images[0] : "";
            name = resource.strategy_name || "";
            description = resource.strategy_short_description || "";
            break;
    }

    const formattedType = replaceUnderscoreWithHyphen(type);
    return (
        <li className="favorites__list-item">
        <Link 
        to={`/${formattedType}/${id}`} 
        className="favorites__card-link"
        onClick={(e) => {
            if (e.target.closest('svg')) {
                e.preventDefault(); 
            }
        }}>
            <div className={`favorites__card favorites__card-box`}>
                <Avatar
                    alt="card image of article favorited"
                    src={`${baseURL}${image}`}
                    sx={{ width: 56, height: 56 }}
                />
                <div className="favorites__card-container">
                    <h2 className="favorites__card-title">{name}</h2>
                    <p className="favorites__card-description">{description}</p>
                </div>
                <FavoriteToggleIcon 
                    // resource={{ id: resource.favorite_id, type }}
                    resource={{ 
                        mood_id: resource.mood_id, 
                        educational_resource_id: resource.educational_resource_id, 
                        coping_strategy_id: resource.coping_strategy_id 
                    }} 
                    onToggle={onToggle}
                    // onClick={(e) => handleUnfavoriteClick(e, `${type}_id`, resource.favorite_id)} 
                />
            </div>
        </Link>
    </li>
    )
}