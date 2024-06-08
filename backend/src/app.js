import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userRouter } from "./route/user.routes.js";
import { foodRouter } from "./route/food.routes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());


app.use("/api/v1/users",userRouter);
app.use("/api/v1/orders",foodRouter)

export {app}