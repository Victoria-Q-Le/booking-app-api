import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false}
    },
    {timestamps: true} //provide when the user is created
)

export default mongoose.model("User", UserSchema)