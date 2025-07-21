import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"  

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))

app.use(express.json({limit: "16kb"})) // json data config
app.use(express.urlencoded({extended: true, limit: "16kb"}))// url data config
app.use(express.static("public"))// for storing files or folders in server
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.router.js"


//routes declaration
app.use("/api/v1/users", userRouter)




export { app }