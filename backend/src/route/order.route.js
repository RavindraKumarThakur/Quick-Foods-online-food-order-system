import { Router } from "express";
import { addOrders } from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.post("/addOrders",addOrders);

export {orderRouter}