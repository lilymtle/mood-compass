import { db } from "../config/db.js";

export const testDb = async (req, res) => {
    try {
        const connection = await db();
        const result = await connection.query("SELECT 1");

        res.status(200).json({ message: "Database connection successful", result });
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Database connection failed", error: error.message });
    }
}