// import styling 
import "./Hero.scss";

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__overlay">
                    <img
                        className="hero__overlay-img"
                        src="../../assets/images/hero-img.jpg"
                        alt="close up of a bouqet of dried white flowers" />
                </div>

                <div className="hero__text-container">
                    <p className="hero__text">
                        Navigate your mood through <span className="hero__text-important">education</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};