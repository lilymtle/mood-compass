import { db } from "../config/db.js";

export const getStrategies = async (req, res) => {
    try {
        const strategies = await db("coping_strategies").select("*");
        res.status(200).json(strategies)
    } catch (error) {
        console.error("Error retrieving coping strategies:", error);
        res.status(500).json({message: "Unable to retrieve coping strategies data at this time."})
    };
};

export const getStrategyById = async (req, res) => {
    const { id } = req.params;

    try {
        const strategy = await db("coping_strategies").where({ id }).first();
        if (strategy) {
            res.status(200).json(strategy);
        } else {
            res.status(404).json({ message: "No coping strategy with that id was found." });
        }
    } catch (error) {
        console.error("Error retrieving coping strategy with that id.");
        res.status(500).json({message: "Unable to retrieve coping strategy data at this time."})
    };
};