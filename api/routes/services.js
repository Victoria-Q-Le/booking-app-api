import express from "express"

const router = express.Router()

//CREATE
router.post("/", async (req,res) => {
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router