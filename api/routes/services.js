import express from "express"
import Service from "../models/Service.js"

const router = express.Router()

//CREATE
router.post("/", async (req,res) => {
    const newService = new Service(req.body)
    try {
        const savedService = await newService.save()
        res.status(200).json(savedService)
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
router.put("/:id", async (req,res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} )
        res.status(200).json(updatedService)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router