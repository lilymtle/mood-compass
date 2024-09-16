// import core modules
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

// retrieve JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonFilePath = path.join(__dirname, "..", "data", "copingStrategies.json");

const copingStrategies = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

export const getStrategies = (req, res) => {
    if (copingStrategies) {
        res.status(200).json(copingStrategies);
    } else {
        res.status(500).json({message: "Unable to retrieve coping strategies data at this time."})
    }
};

export const getStrategyById = (req, res) => {
    const { id } = req.params;
    const copingStrategy = copingStrategies.find(copingStrategy => copingStrategy.id === id);

    if (copingStrategy) {
        res.status(200).json(copingStrategy);
    } else {
        res.status(404).json({message: "No coping strategy with that id was found."});
    };
};