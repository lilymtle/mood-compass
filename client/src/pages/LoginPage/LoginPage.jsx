// import styling
import "./LoginPage.scss";

// import libraries/hooks
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// import Firebase and backend API functions
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebaseAuth.js";
import { loginUser } from "../../utils/authServices.js";
import { AuthContext } from "../../auth/AuthProvider.jsx";

// import components
import { Button } from "../../components/Button/Button";
import { InputFormField } from "../../components/FormFields/InputFormField/InputFormField";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function LoginPage() {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // redirects users who manually go to the login page back to the home page
    useEffect(() => {
        if (user) {
            navigate("/");
        };
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken();
            const userData = loginUser(idToken);

            if (userData) {
                navigate("/profile");
            }
        } catch (error) {
            if (!email || !password) {
                setError("All fields are required.");
            };
        };
    };

    // handle input change
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <section className="login">
                <div className="login__wrapper">
                    <div className="login__container">
                        <h1 className="login__header">
                            Login
                        </h1>
                        {error && <p className="login__error-text">
                            {error}
                            </p>}
                        <form
                            className="login__form"
                            onSubmit={handleLogin}>
                            <div className="login__email">
                                <p className="login__label">
                                    Email
                                </p>
                                <InputFormField
                                    className="login__input-email"
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={handleEmailChange} />
                            </div>
                            <div className="login__password">
                                <p className="login__label">
                                    Password
                                </p>
                                <InputFormField
                                    className="login__input-password"
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={handlePasswordChange} />
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
                </div>
            </section>
        </main>
    );
};