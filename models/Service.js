import mongoose from "mongoose"

const ServiceSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    techs: {type: [String]},
    featured: {type: Boolean, default: false}
})

export default mongoose.model("Service", ServiceSchema)