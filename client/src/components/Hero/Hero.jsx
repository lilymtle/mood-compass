import "./Hero.scss";

export function Hero() {
    return (  
        <section className="hero">
            <div className="hero__container">
                <div className="hero__overlay">
                    <img 
                    className="hero__overlay-img"
                    src="/src/assets/images/hero-img.jpg"
                    alt="close up of a bouqet of dried white flowers" />
                </div>

                <div className="hero__header">
                    <p className="hero__header-text">
                        Navigate your mood through education.
                    </p>
                </div>
            </div>
        </section>
    )
}