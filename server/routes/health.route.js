import express from "express"

const healthRouter = express.Router()

// Public health-check endpoint for uptime monitors and deployment platforms.
healthRouter.get("/", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "InteroVoice API is running",
        timestamp: new Date().toISOString(),
    })
})

export default healthRouter
