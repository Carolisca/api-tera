import express from "express";
const router = express.Router();

import controllers from "../controllers/userController.js";

router.get("/", controllers.getAll);
router.post("/", controllers.createUser);
router.patch("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);


export default router; 