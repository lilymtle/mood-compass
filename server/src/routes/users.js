// import library
import express from "express";

// import controllers
import { loginUser, registerUser } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;