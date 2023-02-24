import Tech from "../models/Tech.js"
import Service from "../models/Service.js"

export const createTech = async (req,res,next) => {
    const serviceid = req.params.serviceid
    const newTech = new Tech (req.body)
    
    try {
        const savedTech = await newTech.save()
        try {
            await Service.findByIdAndUpdate(serviceid, {$push: {techs: savedTech._id}}) //pushing to new techs to the techs list that can perform a spcific service 
        } catch (error) {
            next(error)
        }
        res.send(200).json(savedTech)
    } catch (error) {
        next(error)
    }
}

export const updateTech = async (req,res,next) => {
    try {
        const updatedTech = await Tech.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} ) //findByIdAndUpdate will return the original doc not the updated one, therefore to prevent this I added an option new to return the updated doc
        res.status(200).json(updatedTech)
    } catch (error) {
        next(error)
    }
}

export const deleteTech = async (req,res,next) => {
    const serviceid = req.params.serviceid
    try {
        await Tech.findByIdAndDelete(req.params.id)
        try {
            await Service.findByIdAndUpdate(serviceid, {$pull: {techs: req.params.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json("Tech has been deleted!")
    } catch (error) {
        next(error)
    }
}

export const getTech = async (req,res,next) => {
    try {
        const tech = await Tech.findById(req.params.id)
        res.status(200).json(tech)
    } catch (error) {
        next(error)
    }
}

export const getTechs = async (res,next) => {
    try {
        const techs = await Tech.find()
        res.status(200).json(techs)
    } catch (error) {
        next(error)
    }
}