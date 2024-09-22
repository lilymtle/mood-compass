// import styling
import "./RegisterPage.scss";

// import hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebaseAuth.js";
import { registerUser } from "../../utils/authServices.js";

// import components
import { InputFormField } from "../../components/FormFields/InputFormField/InputFormField";
import { Button } from "../../components/Button/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken();
            await registerUser(idToken, name, email);
            navigate("/profile");
        } catch (error) {
            console.error("Registration Error:", error);
            setError(error.message);
        };
    };

    // handle input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </HelmetProvider>
            <section className="register">
                <div className="register__wrapper">
                    <div className="register__form-container">
                        <h2 className="register__header">
                            Register Now
                        </h2>
                        {error && <p>Error</p>}
                        <form 
                        className="register__form"
                        onSubmit={handleRegister}>
                            <div className="register__name-container">
                                <label htmlFor="name">
                                    <p className="register__label">Name</p>
                                    <InputFormField
                                    className="register__input-name"
                                    type="text"
                                    value={name}
                                    placeholder="Name"
                                    onChange={handleNameChange} />
                                </label>
                            </div>

                            <div className="register__email-container">
                                <label htmlFor="email">
                                    <p className="register__label">Email</p>
                                    <InputFormField
                                    className="register__input-email"
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={handleEmailChange} />
                                </label>
                            </div>

                            <div className="register__password-container">
                                <label htmlFor="password">
                                    <p className="register__label">Password</p>
                                    <InputFormField
                                    className="register__input-password"
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={handlePasswordChange} />
                                </label>
                            </div>

                            <div className="register__password-container">
                                <label htmlFor="confirm-password">
                                    <p className="register__label">Confirm Password</p>
                                    <InputFormField
                                    className="register__input-password"
                                    type="password"
                                    value={confirmPassword}
                                    placeholder="Password"
                                    onChange={handleConfirmPasswordChange} />
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
                </div>
            </section>
        </main>
    )
}