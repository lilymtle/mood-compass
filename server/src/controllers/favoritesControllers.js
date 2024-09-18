import { db } from '../config/db.js'; // Adjust path as necessary

export const addFavorite = async (req, res) => {
    console.log('addFavorite body:', req.body); // Log incoming request body

    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;
    try {
        const existingFavorite = await db("favorites")
        .where({ user_id, mood_id, educational_resource_id, coping_strategy_id })
        .first();

        if (existingFavorite) {
            return res.status(409).json({ message: 'Favorite already exists' });
        }

        const favorite = await db('favorites').insert({
            user_id,
            mood_id,
            educational_resource_id,
            coping_strategy_id
        });
        res.status(201).json({ message: 'Favorite added', favorite });
    } catch (error) {
        console.error('Error adding favorite:', error);  // Log the actual error
        res.status(500).json({ error: 'Failed to add favorite' });
    }
};

export const checkFavorites = async (req, res) => {
    console.log('checkFavs body:', req.body); // Log incoming request body

    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.query;

    try {
        const query = db('favorites').where({ user_id });

        if (mood_id) {
            query.andWhere({ mood_id });
        }
        if (educational_resource_id) {
            query.andWhere({ educational_resource_id });
        }
        if (coping_strategy_id) {
            query.andWhere({ coping_strategy_id });
        }

        const favorite = await query.first();
        res.json({ exists: !!favorite });
    } catch (error) {
        res.status(500).json({ error: 'Failed to check favorite' });
    }
};

export const deleteFavorite = async (req, res) => {
    console.log('deletefav body:', req.body); // Log incoming request body

    const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;
    try {
        await db('favorites').where({ user_id, mood_id, educational_resource_id, coping_strategy_id }).del();
        res.json({ message: 'Favorite deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete favorite' });
    }
};

export const getFavorites = async (req, res) => {
    console.log('get favs body:', req.body); // debug - see incoming req body

    const { user_id } = req.query;
    // try {
    //     const favorites = await db('favorites')
    //     .join('moods', 'favorites.mood_id', 'moods.id') // joins mood table with favorites table so that mood table data can be accessed
    //     .select(
    //         'favorites.id AS favorite_id',
    //         'favorites.user_id',
    //         'favorites.mood_id',
    //         'moods.images',
    //         'moods.name',
    //         'moods.short_description'
    //     )
    //     .where({ 'favorites.user_id': user_id }); // filters favorites based on user id

    // res.json({ favorites });
    try {
        const favorites = await db('favorites')
        .leftJoin('moods', 'favorites.mood_id', 'moods.id')
        .leftJoin('educational_resources', 'favorites.educational_resource_id', 'educational_resources.id')
        .leftJoin('coping_strategies', 'favorites.coping_strategy_id', 'coping_strategies.id')
        .select(
            'favorites.id AS favorite_id',
            'favorites.user_id',
            'favorites.mood_id',
            'favorites.educational_resource_id',
            'favorites.coping_strategy_id',
            'moods.images AS mood_images',
            'moods.name AS mood_name',
            'moods.short_description AS mood_description',
            'educational_resources.name AS resource_name',
            'educational_resources.descriptions AS resource_descriptions',
            'coping_strategies.name AS strategy_name',
            'coping_strategies.descriptions AS strategy_descriptions'
        )
        .where({ 'favorites.user_id': user_id }); // Filters favorites based on user_id

        res.json({ favorites });
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Failed to get favorites' });
    }
};


// export const addFavorite = async (req, res) => {
//     const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;

//     if (!user_id || (!mood_id && !educational_resource_id && !coping_strategy_id)) {
//         return res.status(400).json({ error: "User id and at least one of mood id, educational resources id, or coping strategy id are required" });
//     }

//     try {
//         const existingFavorite = await db("favorites")
//         .where({ user_id })
//         .where((builder) => {
//             if (mood_id) builder.orWhere({ mood_id });
//             if (educational_resource_id) builder.orWhere({ educational_resource_id });
//             if (coping_strategy_id) builder.orWhere({ coping_strategy_id });
//         })
//         .first();

//         if (existingFavorite) {
//             return res.status(400).json({ error: 'Favorite already exists' });
//         }

//         await db("favorites").insert({
//             user_id,
//             mood_id: mood_id || null,
//             educational_resource_id: educational_resource_id || null,
//             coping_strategy_id: coping_strategy_id || null,
//         });

//         res.status(201).json({ message: 'Favorite added' });
//     } catch (error) {
//         console.error('Error adding favorite:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// export const deleteFavorite = async (req, res) => {
//     const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.body;

//     if (!user_id || !mood_id && !educational_resource_id && !coping_strategy_id) {
//         return res.status(400).json({ error: 'User ID and Mood ID are required' });
//     }

//     try {
//         const result = await db('favorites')
//             .where({ user_id })
//             .where((builder) => {
//                 if (mood_id) builder.orWhere({ mood_id });
//                 if (educational_resource_id) builder.orWhere({ educational_resource_id });
//                 if (coping_strategy_id) builder.orWhere({ coping_strategy_id });
//             })
//             .del();

//         if (result === 0) {
//             return res.status(404).json({ error: 'Favorite not found' });
//         }

//         res.status(200).json({ message: 'Favorite removed' });
//     } catch (error) {
//         // console.error('Error removing favorite:', error);
//         console.error('Error removing favorite:', error.message, error.stack);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// export const checkFavorites = async (req, res) => {
//     const { user_id, mood_id, educational_resource_id, coping_strategy_id } = req.query;

//     if (!user_id || (!mood_id && !educational_resource_id && !coping_strategy_id)) {
//         return res.status(400).json({ error: 'User ID and Mood ID are required' });
//     }

//     try {
//         // Check if the favorite exists
//         // const favorite = await db('favorites')
//         //     .where({ user_id, mood_id })
//         //     .where((builder) => {
//         //         if (mood_id) builder.orWhere({ mood_id });
//         //         if (educational_resource_id) builder.orWhere({ educational_resource_id });
//         //         if (coping_strategy_id) builder.orWhere({ coping_strategy_id });
//         //     })
//         //     .first();

//         const check = db("favorites").where({ user_id });

//         if (mood_id) {
//             check.orWhere({ mood_id });
//         }

//         if (educational_resource_id) {
//             check.orWhere({ educational_resource_id });
//         }

//         if (coping_strategy_id) {
//             check.orWhere({ coping_strategy_id });
//         }

//         const favorite = await check.first();

//         res.status(200).json({ isFavorited: !!favorite });
//     } catch (error) {
//         console.error('Error checking favorite status:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// export const getFavorites = async (req, res) => {
//     const { user_id } = req.query;

//     if (!user_id) {
//         return res.status(400).json({ error: 'User ID is required' });
//     }

//     try {
//         const favorites = await db("favorites")
//         .where({ user_id })
//         .select("mood_id", "educational_resource_id", "coping_strategy_id");

//         // maps over each favorites column and creates a new array with valid id(s)
//         const moodIds = favorites.map(favorite => favorite.mood_id).filter(Boolean);
//         const educationalResourceIds = favorites.map(favorite => favorite.educational_resource_id).filter(Boolean);
//         const copingStrategyId = favorites.map(favorite => favorite.coping_strategy_id).filter(Boolean);

//         // fetches data from each table that matches new array of valid id(s)
//         const moods = await db("moods").whereIn("id", moodIds);
//         const educationalResources = await db("educational_resources").whereIn("id", educationalResourceIds);
//         const copingStrategies = await db("coping_strategies").whereIn("id", copingStrategyId);

//         res.status(200).json({ moods, educationalResources, copingStrategies });
//     } catch (error) {
//         console.error('Error fetching favorites:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }