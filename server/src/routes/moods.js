// import express
import express from "express";

// import controllers
import { getMoods, getMoodById } from "../controllers/moodsControllers.js";

const router = express.Router();

router.get("/", getMoods);
router.get("/:id", getMoodById);

export default router;