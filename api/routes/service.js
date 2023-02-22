import express from "express"
import Service from "../models/Service.js"

const router = express.Router()

//CREATE
router.post("/", async (req, res) => {
    const newService = new Service (req.body)

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
        const updatedService = await Service.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} ) //findByIdAndUpdate will return the original doc not the updated one, therefore to prevent this I added an option new to return the updated doc
        res.status(200).json(updatedService)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE
router.delete("/:id", async(req,res) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
        res.status(200).json("Service has been deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router