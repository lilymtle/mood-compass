import admin from "../config/firebaseAdmin.js";
import { handleUserData } from "../services/userServices.js";
import { db } from "../config/db.js";

// import environment variables
const { PORT } = process.env;
const port = PORT || 8080;

export const registerUser = async (req, res) => {
    const { idToken, name, email } = req.body;

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const firebaseUid = decodedToken.uid;

        await handleUserData(firebaseUid, name, email);

        res.status(200).send("User registered successfully.");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user.");
    };
};

export const loginUser = async (req, res) => {
    const { idToken } = req.body;

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const firebaseUid = decodedToken.uid;

        const user =
            await db("users")
                .where({ firebase_uid: firebaseUid })
                .first();

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found.");
        };
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send("Error logging in user.");
    };
};

export const getUserName = async (req, res) => {
    const { email } = req.query;

    try {
        const user = await db("users")
            .where({ email })
            .first();

        if (user) {
            res.status(200).json({ name: user.name });
        } else {
            res.status(404).json({ error: "User not found." });
        };
    } catch (error) {
        res.status(500).json({ error: "Database error." });
    };
};