// import library
import express from "express";

// import controllers
import { getUserName, loginUser, registerUser } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/name", getUserName);

export default router;