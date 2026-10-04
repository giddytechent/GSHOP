import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import proxy from "express-http-proxy"
import morgan from "morgan"
import rateLimit from "express-rate-limit"
import swaggerUi from "swagger-ui-express"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3002"],
        allowedHeaders: ["Authorization", "Content-Type"],
        credentials: true
    })
)

app.use(morgan("dev"))
app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ limit: "100mb" }))
app.use(cookieParser())
app.set("trust proxy", 1)

// Apply rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: (req: any) => (req.user ? 1000 : 100),
    message: { error: "Too many requests, please try again!" },
    standardHeaders: true,
    legacyHeaders: true,
})

app.use(limiter)

app.get('/gateway-health', (req, res) => {
    res.send({ message: 'Welcome to api-gateway' })
})

app.use("/", proxy("http://localhost:6001"))

app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
    console.log(err)
    return res.status(err.status || 500).json({message:err.message || "Internal Server Error!"})
})

const start = async () => {
    try {
        app.listen(8080, () => {
            console.log("Api gateway service is running at http://localhost:8080/api")
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()