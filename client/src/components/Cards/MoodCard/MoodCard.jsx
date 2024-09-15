import "./MoodCard.scss";

export function MoodCard({ id, name, shortDescription }) {
    
    return (
        <li className="moods-list__card">
        <h2 className="moods-list__number">
            {id.toString().padStart(2, "0")}
        </h2>
        <h3 className="moods-list__title">
            {name}
        </h3>
        <p className="moods-list__text">
            {shortDescription}
        </p>
        <span className="moods-list__link">
            Read More 
            <img 
            className="moods-list__icon"
            src="/src/assets/icons/arrow-forward.svg"
            alt="forward arrow icon" />
        </span>
    </li>
    )
}