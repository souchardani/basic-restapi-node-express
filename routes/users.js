import express from "express";
import {createUser, getUsers, getUser, deleteUser, updateUser} from "../controllers/user.js"

const router = express.Router();

//todas las rutas de aqui empiezan con /users
router.get("/", getUsers)
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;