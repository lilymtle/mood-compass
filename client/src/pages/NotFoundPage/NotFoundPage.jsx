// import styling
import "./NotFoundPage.scss";

// import component
import { Helmet, HelmetProvider } from "react-helmet-async";

export function NotFoundPage() {

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
                    </div>
                </div>
            </section>
        </main>
    );
};