import { Order } from "../models/order.model.js";
import { asyncHandler } from "../utils/ayncHandler.js";

const addOrder = asyncHandler( async (req, res) => {
    const {title,orderId,totalPrice,quantity} = req.body
    if ([title,orderId,totalPrice,quantity].some((fields) => fields?.trim() === "")) {
        throw console.log("All fields are required.");
    }

    const order = await Order.create({
        title,
        orderId,
        totalPrice,
        quantity
    })
    if (!order) {
        throw console.log("Error occurred while creating order.");
    }

    return res.status(200).json({
        status:200,
        order,
        message: "Successfully Ordered"
    })
})

export {
    addOrder
}