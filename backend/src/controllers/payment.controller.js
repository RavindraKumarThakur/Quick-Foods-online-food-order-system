import { asyncHandler } from "../utils/ayncHandler.js";
import Razorpay from "razorpay";
import crypto from "crypto";

const receivePayments = asyncHandler((req,res) => {
    const instance = new Razorpay({
        key_id: process.env.PAYMENT_KEY_ID,
        key_secret: process.env.PAYMENT_KEY_SECRET
    })

    const option = {
        amount: req.body.amount * 100,
        currency: 'INR',
        receipt: crypto.randomBytes(10).toString("hex")
    };

    instance.orders.create(option,(error,order) => {
        if(error){
            console.log(error);
            return res.status(500).json({message: "Something went wrong while doing payment!"})
        }else{
            return res.status(200).json({data:order})
        }
    })
})

const verifyPayment = asyncHandler((req,res) => {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
    .createHmac("sha256",process.env.PAYMENT_KEY_SECRET)
    .update(sign.toString())
    .digest('hex');

    if (razorpay_signature === expectedSign) {
        return res.status(200).json({message: "Payment verified successfully"});
    }else{
        return res.status(400).json({message: "Invalid signature sent!"})
    }
})

export {receivePayments, verifyPayment}