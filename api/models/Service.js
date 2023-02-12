import mongoose from 'mongoose'

const {Schema} = mongoose 

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    tech: {type: String},
    discount: {type: Boolean, default: false}
})

export default mongoose.model("Service", ServiceSchema)