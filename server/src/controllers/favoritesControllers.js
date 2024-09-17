import { db } from "../config/db.js";

export const addFavorite = async (req, res) => {
    const { user_id, mood_id } = req.body;

    if (!user_id || !mood_id) {
        return res.status(400).json({ error: 'User ID and Mood ID are required' });
    }

    try {
        const existingFavorite = await db("favorites")
        .where({user_id, mood_id})
        .first();

        if (existingFavorite) {
            return res.status(400).json({ error: 'Favorite already exists' });
        }

        await db("favorites").insert({ user_id, mood_id });
        res.status(201).json({ message: 'Favorite added' });
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteFavorite = async (req, res) => {
    const { user_id, mood_id } = req.body;

    if (!user_id || !mood_id) {
        return res.status(400).json({ error: 'User ID and Mood ID are required' });
    }

    try {
        const result = await knex('favorites')
            .where({ user_id, mood_id })
            .del();

        if (result === 0) {
            return res.status(404).json({ error: 'Favorite not found' });
        }

        res.status(200).json({ message: 'Favorite removed' });
    } catch (error) {
        console.error('Error removing favorite:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const checkFavorites = async (req, res) => {
    const { user_id, mood_id } = req.query;

    if (!user_id || !mood_id) {
        return res.status(400).json({ error: 'User ID and Mood ID are required' });
    }

    try {
        // Check if the favorite exists
        const favorite = await db('favorites')
            .where({ user_id, mood_id })
            .first();

        res.status(200).json({ isFavorited: !!favorite });
    } catch (error) {
        console.error('Error checking favorite status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getFavorites = async (req, res) => {
    const { user_id } = req.query;

    if (!user_id) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        const favorites = await db("favorites")
        .where({ user_id })
        .select("mood_id")

        const moodIds = favorites.map(favorite => favorite.mood_id);
        const moods = await db("moods")
        .whereIn("id", moodIds);

        res.status(200).json(moods);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}