// import styling
import "./FavoriteCard.scss";

// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import util function
import { replaceUnderscoreWithHyphen } from "../../../utils/formatUtils";

// import components
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { FavoriteToggleIcon } from "../../FavoriteToggleIcon/FavoriteToggleIcon";

export function FavoriteCard({ resource, type, onToggle }) {
    let id = "";
    let image = "";
    let name = "";
    let description = "";

    // if type = case, properties from the resource object will be assigned to empty strings above
    switch (type) {
        case "moods":
            id = resource.mood_id;
            image = resource.mood_images ? resource.mood_images[0] : "";
            name = resource.mood_name || "";
            description = resource.mood_short_description || "";
            break;
        case "educational_resources":
            id = resource.educational_resource_id;
            image = resource.resource_images ? resource.resource_images[0] : "";
            name = resource.resource_name || "";
            description = resource.resource_short_description || "";
            break;
        case "coping_strategies":
            id = resource.coping_strategy_id;
            image = resource.strategy_images ? resource.strategy_images[0] : "";
            name = resource.strategy_name || "";
            description = resource.strategy_short_description || "";
            break;
    };

    // reformats types with underscores to match its route in App.jsx
    const formattedType = replaceUnderscoreWithHyphen(type);

    return (
        <li className="favorites__list-item">
            <Link
                to={`/${formattedType}/${id}`}
                className="favorites__card-link"
                onClick={(e) => {
                    if (e.target.closest("svg")) {
                        e.preventDefault(); // prevents loading resource page so users can click on the favorite icon
                    }
                }}>
                <div className={"favorites__card favorites__card-box"}>
                    <Avatar
                        alt="card image of favorited resource"
                        src={`${baseURL}${image}`}
                        sx={{
                            width: { // xs for mobile, sm for tablet, md for desktop breakpoints
                                xs: 56,
                                sm: 80,
                                md: 100
                            },
                            height: {
                                xs: 56,
                                sm: 80,
                                md: 100
                            },
                        }}
                    />
                    <div className="favorites__card-container">
                        <h2 className="favorites__card-title">{name}</h2>
                        <p className="favorites__card-description">{description}</p>
                    </div>
                    <FavoriteToggleIcon
                        resource={{
                            mood_id: resource.mood_id,
                            educational_resource_id: resource.educational_resource_id,
                            coping_strategy_id: resource.coping_strategy_id
                        }}
                        onToggle={onToggle}
                    />
                </div>
            </Link>
        </li>
    );
};