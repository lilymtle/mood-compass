// import styling
import "./RegisterPage.scss";

// import components
import { InputFormField } from "../../components/FormFields/InputFormField/InputFormField";
import { Button } from "../../components/Button/Button";

export function RegisterPage() {
    return (
        <main>
            <section className="register">
                <div className="register__form-container">
                    <h2 className="register__header">
                        Register Now
                    </h2>
                    <form className="register__form">
                        <div className="register__name-container">
                            <label htmlFor="name">
                                <p className="register__label">Name</p>
                                <InputFormField
                                className="register__input"
                                type="text"
                                placeholder="Name" />
                            </label>
                        </div>

                        <div className="register__email-container">
                            <label htmlFor="email">
                                <p className="register__label">Email</p>
                                <InputFormField
                                className="register__input"
                                type="email"
                                placeholder="Email" />
                            </label>
                        </div>

                        <div className="register__password-container">
                            <label htmlFor="password">
                                <p className="register__label">Password</p>
                                <InputFormField
                                className="register__input"
                                type="password"
                                placeholder="Password" />
                            </label>
                        </div>

                        <div className="register__btn-container">
                            <Button
                            className="register__btn"
                            type="submit"
                            text="Register" />
                        </div>
                    </form>
                </div>

                <div className="register__message">
                    <div className="register__message-container">
                        <h1 className="register__message-header">
                            Thank you,
                        </h1>

                        <div className="register__message-box">
                            <p className="register__message-text">
                                One of the hardest things to do is taking that first step.
                                You showed tremendous strength by registering today. That is 
                                something you should be proud of, and I hope you are.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}