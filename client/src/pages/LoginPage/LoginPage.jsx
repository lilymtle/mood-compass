// import styling
import "./LoginPage.scss";

// import 
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
                        <div className="login__username">
                            <p className="login__label">
                                Username:
                            </p>
                            <InputFormField 
                            className="login__input"
                            type="text"
                            placeholder="Enter username" />
                        </div>
                        <div className="login__password">
                            <p className="login__label">
                                Password:
                            </p>
                            <InputFormField
                            className="login__input"
                            type="password"
                            placeholder="Enter password" />
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
                                No worries, you can register here!
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
                            Happy to see you back at MoodCompass. May today bring you additional
                            comfort and progress in your healing journey.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}