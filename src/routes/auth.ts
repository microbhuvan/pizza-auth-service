import express from "express";
const authRouter = express.Router();

import { AuthController } from "../controllers/AuthController.js";
const authController = new AuthController();

authRouter.post("/register", (req, res) => authController.register(req, res));

export default authRouter;
