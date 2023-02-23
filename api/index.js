import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import serviceRoute from "./routes/service.js"
import techRoute from "./routes/tech.js"

const app = express()
dotenv.config()


const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB!")
    } catch (error) {
       throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB is disconnected!")
})

///////MIDDLEWARE/////////////
app.use(express.json()) //by default, we cant send json to express server => this middleware is used to prevent this error


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/service", serviceRoute)
app.use("/api/tech", techRoute)

app.use((err, req,res,next) => {
   const errorStatus = err.errorStatus || 500
   const errorMessage = err.message || "Something went wrong"
   return res.status(errorStatus.json({success: false, status: errorStatus, message: errorMessage, stack: err.stack}))
})

////////////CONNECTION//////////
app.listen(8800, () => {
    connect()
    console.log("Connect to backend!")
})