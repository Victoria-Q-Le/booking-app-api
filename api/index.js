import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import servicesRoute from "./routes/services.js"
import usersRoute from "./routes/users.js"

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

//MIDDLEWARES
app.use("/api/auth", authRoute)
app.use("/api/services", servicesRoute)
app.use("/api/users", usersRoute)





app.listen(8800, () => {
    connect()
    console.log("Connect to backend!");
})