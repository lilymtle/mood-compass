import { db } from "../config/db.js";

export const getMoods = async (req, res) => {
    try {
        const moods = await db("moods").select("*");
        res.status(200).json(moods);
    } catch (error) {
        console.error("Error retrieving moods:", error);
        res.status(500).json({ message: "Unable to retrieve moods data at this time." })
    };
};

export const getMoodById = async (req, res) => {
    const { id } = req.params;

    try {
        const mood = await db("moods").where({ id }).first();
        if (mood) {
            res.status(200).json(mood);
        } else {
            res.status(404).json({ message: "No mood with that id was found." });
        };
    } catch (error) {
        console.error(`Error fetching mood with ID ${id}:`, error);
        res.status(500).json({ message: "Unable to retrieve mood data at this time." })
    };
};