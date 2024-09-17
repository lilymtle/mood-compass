// import styling
import "./FavoritesPage.scss";

export function FavoritesPage() {
    return (
        <main>
            <section className="favorites">
                <div className="favorites__container">
                    <div className="favorites__divider-arrow">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <h1 className="favorites__header">
                        Favorites
                    </h1>
                </div>

                <div className="favorites__list-container">
                    <div className="favorites__list-box">
                        <ul className="favorites__list">
                            <li className="favorites__list-item">
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
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}