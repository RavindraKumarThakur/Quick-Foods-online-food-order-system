import { Router } from "express";
import { addOrder } from "../controllers/order.controller.js";

const orderRouter = Router()

orderRouter.route("/addOrders").post(addOrder);

export {orderRouter}