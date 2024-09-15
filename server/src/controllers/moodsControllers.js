// import core modules
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

// retrieve JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonFilePath = path.join(__dirname, "..", "data", "moods.json");

const moods = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

export const getMoods = (req, res) => {
    if (moods) {
        res.status(200).json(moods);
    } else {
        res.status(500).json({message: "Unable to retrieve moods data at this time."})
    }
};

export const getMoodById = (req, res) => {
    const { id } = req.params;
    const mood = moods.find(mood => mood.id === id);

    if (mood) {
        res.status(200).json(mood);
    } else {
        res.status(404).json({message: "No mood with that id was found."});
    };
};