import express from "express"
import { createService, deleteService, getService, getServices, updateService } from "../controllers/service.js"
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/",verifyAdmin, createService)

//UPDATE 
router.put("/:id", verifyAdmin, updateService)

//DELETE
router.delete("/:id", verifyAdmin, deleteService)

//GET
router.get("/:id", getService)

//GET ALL
router.get("/", getServices)

export default router