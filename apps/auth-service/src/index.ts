import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import router from "./routes/authRouter.js"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger-output.json" with { type: "json" };

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3002"],
        allowedHeaders: ["Authorization", "Content-Type"],
        credentials: true
    })
)

app.use(express.json())
app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send({message: 'Hello API'})
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get("/docs-json", (req,res)=>{
    res.json(swaggerDocument)
})

// Routes
app.use("/api", router)

app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
    console.log(err)
    return res.status(err.status || 500).json({message:err.message || "Internal Server Error!"})
})

const start = async () =>{
    try {
        app.listen(6001, ()=>{
            console.log("Auth service is running on 6001")
            console.log('Swagger Docs available at http://localhost:6001/docs')
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()