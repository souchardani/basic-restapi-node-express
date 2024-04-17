import express from "express";
import {createItem, getItems, getItem, deleteItem, updateItem} from "../controllers/items.js"

const router = express.Router();

router.get("/", getItems)
router.post("/", createItem);
router.get("/:id", getItem);
router.delete("/:id", deleteItem);
router.patch("/:id", updateItem);

export default router;