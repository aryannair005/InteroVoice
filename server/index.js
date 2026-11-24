import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"
import healthRouter from "./routes/health.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config()


const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://interovoice-wppp.onrender.com"
    ],
    credentials:true,
}))


// Health Check Route (public; used by uptime monitors)
app.use("/health", healthRouter)


// Routes 

// Auth Routes
app.use("/api/auth",authRouter) 

// User Routes
app.use("/api/user",userRouter)

// Interview Routes
app.use("/api/interview",interviewRouter)

// Payment Routes
app.use("/api/payment",paymentRouter)


app.listen(PORT,()=>{
    console.log(`Server is listening to PORT : ${PORT}`)
    connectDB()
})
