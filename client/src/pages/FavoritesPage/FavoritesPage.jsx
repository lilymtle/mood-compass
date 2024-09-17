// import styling
import "./FavoritesPage.scss";

import { Link } from "react-router-dom";

export function FavoritesPage() {
    return (
        <main>
            <section className="favorites">
                <div className="favorites__container">
                    <h1 className="favorites__header">
                        Favorites
                    </h1>
                </div>

                <div className="favorites__list-container">
                    <div className="favorites__list-box">
                        <ul className="favorites__list">
                            <li className="favorites__list-item">
                                <Link to="/" className="favorites__card-link">
                                    <div className="favorites__card">
                                        <img 
                                        className="favorites__card-img"
                                        src="/"
                                        alt="card image of article favorited" />
                                        <div className="favorites__card-container">
                                            <p className="favorites__card-title">
                                                Title
                                            </p>
                                            <p className="favorites__card-description">
                                                Description
                                            </p>
                                        </div>
                                        <img
                                        className="favorites__card-icon"
                                        src="/src/assets/icons/favorite-icon.svg"
                                        alt="heart icon" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}