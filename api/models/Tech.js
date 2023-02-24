import mongoose from "mongoose"

const TechSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    workDays: [{day: String, unavailableDates: {type: [Date]}}],
},
    {timestamps: true}
)

export default mongoose.model("Tech", TechSchema)