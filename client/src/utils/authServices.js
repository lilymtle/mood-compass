import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function registerUser(idToken, name, email) {
    try {
        const { data } = await axios.post(`${baseURL}/api/users/register`, {
            idToken,
            name,
            email,
        });

        console.log("Registration successful:", data); // delete
    } catch (error) {
        console.error("Error registering user:", error); // delete
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