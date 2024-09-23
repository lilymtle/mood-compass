// import environmental variable
const baseURL = import.meta.env.VITE_API_BASE_URL;

// import dependency
import axios from "axios";

export async function registerUser(idToken, name, email) {
    try {
        const { data } = await axios.post(`${baseURL}/api/users/register`, {
            idToken,
            name,
            email,
        });

        console.log("Registration successful:", data);
    } catch (error) {
        console.error("Error registering user:", error);
    };
};

export async function loginUser(idToken) {
    try {
        const { data } = await axios.post(`${baseURL}/api/users/login`, {
            idToken,
        });

        console.log("Login successful:", data);
    } catch (error) {
        console.error("Error logging in user:", error);
    };
};