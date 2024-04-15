import express from "express";
const router = express.Router();
import { createCategory } from "../controllers/categoryController";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

router.route("/").post(createCategory);

export default router;
