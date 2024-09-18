import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FavoriteToggleIcon } from "../../FavoriteToggleIcon/FavoriteToggleIcon";


// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

export function FavoriteCard({ resource, type }) {
    console.log('Resource in FavoriteCard:', resource);

    return (
        <li className="favorites__list-item">
        <Link to={`/${type}/${resource.id}`} className="favorites__card-link">
            <div className={`favorites__card favorites__card-box`}>
                <Avatar
                    alt="card image of article favorited"
                    src={`${baseURL}${resource.images[0]}`}
                    sx={{ width: 56, height: 56 }}
                />
                <div className="favorites__card-container">
                    <h2 className="favorites__card-title">{resource.name}</h2>
                    <p className="favorites__card-description">{resource.short_description}</p>
                </div>
                <FavoriteToggleIcon 
                    resource={{ id: resource.id, type }} 
                    onClick={(e) => handleUnfavoriteClick(e, `${type}_id`, resource.id)} 
                />
            </div>
        </Link>
    </li>
    )
}