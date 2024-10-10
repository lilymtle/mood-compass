// import express
import express from "express";

// import controller
import { getMoodOptions } from "../controllers/moodOptionsController.js";

const router = express.Router();

router.get("/", getMoodOptions);

export default router;