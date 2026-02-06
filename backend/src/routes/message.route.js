import express from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users", authUser, getUsersForSidebar);
router.get("/:id", authUser, getMessages);

router.post("/send/:id", authUser, sendMessage);

export default router;
