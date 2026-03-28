import { Router } from "express";
const router = Router();
import { getAllUsers, getUserById, createUser, deleteUser } from "../controllers/userController.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);

export default router;