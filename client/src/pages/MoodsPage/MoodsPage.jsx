import "./MoodsPage.scss";

export function MoodsPage() {
return (
    <main>
        <section className="moods">
            <div className="moods__container">
                <h1 className="moods__header">
                    Moods
                </h1>

                <p className="moods__text">
                    Here you will find a list of different moods you can
                    learn more about here on MoodCompass.
                </p>
            </div>
        </section>

        <section className="moods-list__container">
            <ul className="moods-list">
                <li className="moods-list__card">
                    <h2 className="moods-list__number">
                        01
                    </h2>
                    <h3 className="moods-list__title">
                        Anxiety
                    </h3>
                    <p className="moods-list__text">
                        Test
                    </p>
                    <span className="moods-list__link">
                        Read More 
                        <img 
                        className="moods-list__icon"
                        src="/src/assets/icons/arrow-forward.svg"
                        alt="forward arrow icon" />
                    </span>
                </li>
                <li className="moods-list__card">
                    <h2 className="moods-list__number">
                        02
                    </h2>
                    <h3 className="moods-list__title">
                        Depression
                    </h3>
                    <p className="moods-list__text">
                        Test
                    </p>
                    <span className="moods-list__link">
                        Read More 
                        <img 
                        className="moods-list__icon"
                        src="/src/assets/icons/arrow-forward.svg"
                        alt="forward arrow icon" />
                    </span>
                </li>
            </ul>
        </section>
    </main>
    )
};