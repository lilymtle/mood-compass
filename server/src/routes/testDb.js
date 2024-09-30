// import express
import express from "express";

// import controllers
import { testDb } from "../controllers/testDbController.js";

const router = express.Router();

router.get("/", testDb);

export default router;