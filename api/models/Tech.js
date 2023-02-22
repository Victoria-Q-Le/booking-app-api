import mongoose from 'mongoose'

const {Schema} = mongoose 

const TechSchema = new mongoose.Schema({
    name: { type: String, required: true },
    schedule: [{days: Number, unavailableDates: {type: [Date]}}]

})

export default mongoose.model("Tech", TechSchema)