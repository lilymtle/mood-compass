// import express
import express from "express";

// import controllers
import { getStrategies, getStrategyById } from "../controllers/copingStrategiesControllers.js";

const router = express.Router();

router.get("/", getStrategies);
router.get("/:id", getStrategyById);

export default router;