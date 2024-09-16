// import core modules
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

// retrieve JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonFilePath = path.join(__dirname, "..", "data", "educationalResources.json");

const educationalResources = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

export const getResources = (req, res) => {
    if (educationalResources) {
        res.status(200).json(educationalResources);
    } else {
        res.status(500).json({message: "Unable to retrieve educational resources data at this time."})
    }
};

export const getResourceById = (req, res) => {
    const { id } = req.params;
    const educationalResource = educationalResources.find(educationalResource => educationalResource.id === id);

    if (educationalResource) {
        res.status(200).json(educationalResource);
    } else {
        res.status(404).json({message: "No educatioanl resource with that id was found."});
    };
};