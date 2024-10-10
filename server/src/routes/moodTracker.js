// import express
import express from "express";

// import controllers
import { addUserMood, getUserMood, editUserMood, deleteUserMood } from "../controllers/moodTrackerController.js";

const router = express.Router();

router.post("/add", addUserMood);
router.get("get", editUserMood);
router.put("/edit", getUserMood);
router.delete("/delete", deleteUserMood);

export default router;