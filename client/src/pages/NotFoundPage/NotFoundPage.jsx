// import styling
import { navigationHandler } from "../../utils/navigationHandler";
import "./NotFoundPage.scss";

// import component
import { Helmet, HelmetProvider } from "react-helmet-async";

export function NotFoundPage() {
    const navigateTo = navigationHandler();

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
            </HelmetProvider>
            <section className="not-found">
                <div className="not-found__container">
                    <div className="not-found__box">
                        <h2 className="not-found__emoji">
                            Σ(°ロ°)
                        </h2>

                        <h1 className="not-found__header">
                            Oops..
                        </h1>

                        <p className="not-found__text">
                            It appears that the page you were looking for does
                            not exist.
                        </p>

                        <p className="not-found__text">
                            That's okay, you can go back by clicking <span className="not-found__link" onClick={() => navigateTo(-1)}>here</span>!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};