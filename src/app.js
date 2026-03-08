import express from "express"
import cookieParser from "cookie-parser"

import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16KB"}))//LIMITION OF THE SIZE OF THE JSON BODY TO 16KB

app.use(express.urlencoded({extended: true, limit: "16kb"})) //LIMITION OF THE SIZE OF THE URL ENCODED BODY TO 16KB


app.use(express.static("public"))
app.use(cookieParser())





export {app}

