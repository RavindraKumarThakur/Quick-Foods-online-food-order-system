import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser"
import bodyParser from "body-parser";
import { userRouter } from "./route/user.routes.js";
import { foodRouter } from "./route/food.routes.js";
import { orderRouter } from "./route/order.route.js";
import { paymentRouter } from "./route/payment.route.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieparser())

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());


app.use("/api/v1/users",userRouter);
app.use("/api/v1/foods",foodRouter);
app.use("/api/v1/orders",orderRouter);
app.use("/api/v1/orders/payments",paymentRouter);

export {app}