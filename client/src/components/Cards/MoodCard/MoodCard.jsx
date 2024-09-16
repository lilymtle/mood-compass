// import styling
import "./MoodCard.scss";

// import dependency
import { Link } from "react-router-dom";

export function MoodCard({ baseURL, id, name, image, shortDescription }) {
    
    return (
        <li className="moods-list__card">
        <h2 className="moods-list__number">
            {id.toString().padStart(2, "0")}
        </h2>
        <h3 className="moods-list__title">
            {name}
        </h3>
        <div className="moods-list__content">
            <img
            className="moods-list__img"
            src={`${baseURL}${image}`}
            alt={name} />
            <p className="moods-list__text">
                {shortDescription}
            </p>
        </div>
        <Link to={`/moods/${id}`} className="moods-list__link">
            Read More 
            <img 
            className="moods-list__icon"
            src="/src/assets/icons/arrow-forward.svg"
            alt="forward arrow icon" />
        </Link>
    </li>
    )
}