import { Router } from "express";
const router = Router();

import {
  getUser,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/index.controller.js";

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
