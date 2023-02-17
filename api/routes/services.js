import express from "express"
import { createService, deleteService, getServices, getService, updateService } from "../controllers/service.js"

const router = express.Router()

//CREATE
router.post("/", createService)

//UPDATE
router.put("/:id", updateService)

//DELETE
router.delete("/:id", deleteService)

//GET 
router.get("/:id", getService)

//GET ALL
router.get("/", getServices)

export default router