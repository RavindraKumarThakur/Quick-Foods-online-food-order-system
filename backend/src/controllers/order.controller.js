import { asyncHandler } from "../utils/ayncHandler.js";
import { Order } from "../models/order.model.js";

const addOrders = asyncHandler( async (req,res) => {
    const {title,orderId,totalPrice,quantity} = req.body
    if ([title, orderId,totalPrice, quantity].some((fields) => fields === "")) {
        throw console.log("All fields are required.");
    }

    const order = await Order.create({
        title,
        totalPrice,
        orderId,
        quantity
    })

    if (!order) {
        throw console.log("Error occured while creating order");
    }

    return res.status(200).json({
        status:200,
        order,
        message: "Successfully ordered"
    })
})

export {
    addOrders
}