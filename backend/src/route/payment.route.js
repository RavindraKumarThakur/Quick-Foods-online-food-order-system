import {Router} from "express";
import { receivePayments, verifyPayment } from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.route('/receivePayments').post(receivePayments);
paymentRouter.route('/verifyPayment').post(verifyPayment);

export {paymentRouter}