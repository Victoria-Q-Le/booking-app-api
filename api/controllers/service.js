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

export const deleteService = async (req, res, next) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
        res.status(200).json("Service has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id)
        res.status(200).json(service)
    } catch (error) {
        next(error)
    }
}

export const getServices = async (req, res, next) => {
    try {
        const services = Service.find()
        res.status(200).json(services)
    } catch (error) {
        next(error)
    }
}   