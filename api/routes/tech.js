import express from "express"
import {verifyAdmin} from "../utils/verifyToken.js"
import { createTech, deleteTech, getTech, getTechs, updateTech } from "../controllers/tech.js"

const router = express.Router()

//CREATE
router.post("/:serviceid",verifyAdmin, createTech)

//UPDATE 
router.put("/:id", verifyAdmin, updateTech)

//DELETE
router.delete("/:id", verifyAdmin, deleteTech)

//GET
router.get("/:id", getTech)

//GET ALL
router.get("/", getTechs)

export default router