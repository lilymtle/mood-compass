// import dependency
import express from "express";
import { addFavorite, checkFavorites, deleteFavorite, getFavorites } from "../controllers/favoritesControllers.js";

// import controllers

const router = express.Router();

router.post("/add", addFavorite);
router.delete("/delete", deleteFavorite);
router.get("/check", checkFavorites);
router.get("/get", getFavorites);

export default router;