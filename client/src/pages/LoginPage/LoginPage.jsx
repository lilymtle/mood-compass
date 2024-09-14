// import styling
import "./LoginPage.scss";

// import libraries
import { Link } from "react-router-dom";

// import components
import { Button } from "../../components/Button/Button";
import { InputFormField } from "../../components/FormFields/InputFormField/InputFormField";

export function LoginPage() {
    return (
        <main>
            <section className="login">
                <div className="login__container">
                    <h1 className="login__header">
                        Login
                    </h1>
                    <form className="login__form">
                        <div className="login__email">
                            <p className="login__label">
                                Email
                            </p>
                            <InputFormField 
                            className="login__input-email"
                            type="email"
                            placeholder="Email" />
                        </div>
                        <div className="login__password">
                            <p className="login__label">
                                Password
                            </p>
                            <InputFormField
                            className="login__input-password"
                            type="password"
                            placeholder="Password" />
                        </div>
                        <div className="login__btn-container">
                            <Button 
                            className="login__btn"
                            type="submit"
                            text="Login" />
                        </div>
                    </form>
                    <section className="register">
                        <div className="register__container">
                            <p className="register__text">
                                Don't have an account?
                            </p>
                            <p className="register__text">
                                No worries, you can register <Link to="/register">here</Link>.
                            </p>
                        </div>
                    </section>
                </div>

                <section className="login__message">
                    <div className="login__message-container">                        
                        <div className="login__message-box">
                            <h2 className="login__message-header">
                                Welcome back!
                            </h2>
                            <p className="login__message-text">
                            I am happy to see you back at MoodCompass. May today bring you
                            additional comfort and progress in your healing journey.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}