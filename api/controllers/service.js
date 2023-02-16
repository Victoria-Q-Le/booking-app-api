import Service from "../models/Service.js"

export const createService = async (req,res,next) => {
    const newService = new Service(req.body)
    try {
        const savedService = await newService.save()
        res.status(200).json(savedService)
    } catch (error) {
        next(error)
    }
}

export const updateService = async (req, res, next) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} )
        res.status(200).json(updatedService)
    } catch (error) {
        next(error)
    }
}