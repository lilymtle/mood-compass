import { db } from "../config/db.js";

// fetches mood options data
export const getMoodOptions = async (req, res) => {
    try {
        const moodOptions = await db("mood_options").select("*");
        return res.status(200).json(moodOptions);
    } catch (error) {
        console.error("Error retrieving mood options:", error);
        res.status(500).json({ message: "Unable to retrieve mood options data at this time." })
    };
};