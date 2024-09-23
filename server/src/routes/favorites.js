// import express
import express from "express";

// import controllers
import { addFavorite, checkFavorites, deleteFavorite, getFavorites } from "../controllers/favoritesControllers.js";

const router = express.Router();

router.post("/add", addFavorite);
router.delete("/delete", deleteFavorite);
router.get("/check", checkFavorites);
router.get("/get", getFavorites);

export default router;