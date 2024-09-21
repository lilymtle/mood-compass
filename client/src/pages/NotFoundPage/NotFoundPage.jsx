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
                Placeholder
            </section>
        </main>
    )
};