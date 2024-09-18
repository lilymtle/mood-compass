// // import core modules
// import path from "path";
// import { readFileSync } from "fs";
// import { fileURLToPath } from "url";

// // retrieve JSON file
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const jsonFilePath = path.join(__dirname, "..", "data", "educationalResources.json");

import { db } from "../config/db.js";

// const educationalResources = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

export const getResources = async (req, res) => {
    try {
        const resources = await db("educational_resources").select("*");
        res.status(200).json(resources);
    } catch (error) {
        console.error("Error retrieving educational resources:", error);
        res.status(500).json({message: "Unable to retrieve educational resources data at this time."})
    }
};

export const getResourceById = async (req, res) => {
    const { id } = req.params;

    try {
        const resource = await db("educational_resources").where({ id }).first();
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ message: "No educational resource with that id was found." });
        }
    } catch (error) {
        console.error("Error retrieving educational resource with that id.");
        res.status(500).json({message: "Unable to retrieve educational resources data at this time."})
    }
}