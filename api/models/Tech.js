import mongoose from "mongoose"

const TechSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    workdays: [{number: Number, unvailableDates: {type: [Date]}}]
})

export default mongoose.model("Tech", TechSchema)