import { db } from "../config/db.js";

export const addFavorite = async (req, res) => {
    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;
    try {
        const existingFavorite = await db("favorites")
        .where({ user_id, mood_id, educational_resource_id, coping_strategy_id })
        .first();

        if (existingFavorite) {
            return res.status(409).json({ message: "Favorite already exists" });
        };

        const favorite = await db("favorites").insert({
            user_id,
            mood_id,
            educational_resource_id,
            coping_strategy_id
        });

        res.status(201).json({ message: "Favorite added", favorite });
    } catch (error) {
        console.error("Error adding favorite:", error);
        res.status(500).json({ error: "Failed to add favorite" });
    }
};

export const checkFavorites = async (req, res) => {
    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.query;

    try {
        const query = db("favorites").where({ user_id });

        if (mood_id) {
            query.andWhere({ mood_id });
        };

        if (educational_resource_id) {
            query.andWhere({ educational_resource_id });
        };

        if (coping_strategy_id) {
            query.andWhere({ coping_strategy_id });
        };

        const favorite = await query.first();
        res.json({ exists: !!favorite });
    } catch (error) {
        res.status(500).json({ error: "Failed to check favorite" });
    };
};

export const deleteFavorite = async (req, res) => {
    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;

    try {
        const existingFavorite = await db("favorites").where({ user_id, mood_id, educational_resource_id, coping_strategy_id }).first();
        if (!existingFavorite) {
            return res.status(404).json({ error: "Favorite not found" });
        };

        const result = await db("favorites").where({ user_id, mood_id, educational_resource_id, coping_strategy_id }).del();
        if (result === 0) {
            return res.status(404).json({ error: "Favorite not found or already deleted" });
        };

        res.json({ message: "Favorite deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete favorite" });
    };
};

export const getFavorites = async (req, res) => {
    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.query;

    try {
        const query = db("favorites")
        .leftJoin("moods", "favorites.mood_id", "moods.id")
        .leftJoin("educational_resources", "favorites.educational_resource_id", "educational_resources.id")
        .leftJoin("coping_strategies", "favorites.coping_strategy_id", "coping_strategies.id")
        .select(
            "favorites.id AS favorite_id",
            "favorites.user_id",
            "favorites.mood_id",
            "favorites.educational_resource_id",
            "favorites.coping_strategy_id",
            "moods.images AS mood_images",
            "moods.name AS mood_name",
            "moods.short_description AS mood_short_description",
            "educational_resources.images AS resource_images",
            "educational_resources.name AS resource_name",
            "educational_resources.short_description AS resource_short_description",
            "coping_strategies.images AS strategy_images",
            "coping_strategies.name AS strategy_name",
            "coping_strategies.short_description AS strategy_short_description"
        )
        .where({ "favorites.user_id": user_id }); // Filters favorites based on user_id

        if (mood_id) query.where("favorites.mood_id", mood_id);
        if (educational_resource_id) query.where("favorites.educational_resource_id", educational_resource_id);
        if (coping_strategy_id) query.where("favorites.coping_strategy_id", coping_strategy_id);

        const favorites = await query;
        res.json({ favorites });
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ error: "Failed to get favorites" });
    };
};