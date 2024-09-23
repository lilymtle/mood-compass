// import express
import express from "express";

// import controllers
import { getResourceById, getResources } from "../controllers/educationalResourcesControllers.js";

const router = express.Router();

router.get("/", getResources);
router.get("/:id", getResourceById);

export default router;