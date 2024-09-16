// import dependency
import { Link } from "react-router-dom";

export function Card({ 
    listItemClassname, h2ClassName, h3ClassName, divClassName, imgClassName, pClassName, 
    linkClassName, linkPath, iconClassName, baseURL, id, name, images, shortDescription }) {
    
    return (
        <li className={listItemClassname}>
        <h2 className={h2ClassName}>
            {id.toString().padStart(2, "0")}
        </h2>
        <h3 className={h3ClassName}>
            {name}
        </h3>
        <div className={divClassName}>
            <img
            className={imgClassName}
            src={`${baseURL}${images[0]}`}
            alt={name} />
            <p className={pClassName}>
                {shortDescription}
            </p>
        </div>
        <Link to={linkPath} className={linkClassName}>
            Read More 
            <img 
            className={iconClassName}
            src="/src/assets/icons/arrow-forward.svg"
            alt="forward arrow icon" />
        </Link>
    </li>
    )
}