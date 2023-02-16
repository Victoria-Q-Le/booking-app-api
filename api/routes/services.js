import express from "express"
import { createService, updateService } from "../controllers/service.js"
import Service from "../models/Service.js"

const router = express.Router()

//CREATE
router.post("/", createService)

//UPDATE
router.put("/:id", updateService)

//DELETE
router.delete("/:id", async (req,res) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
        res.status(200).json("Service has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET 
router.get("/:id", async (req,res) => {
    try {
        const service = await Service.findById(req.params.id)
        res.status(200).json(service)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL
router.get("/", async(req,res, next) => {
    try {
        const services = await Service.find()
        res.status(200).json(services)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router