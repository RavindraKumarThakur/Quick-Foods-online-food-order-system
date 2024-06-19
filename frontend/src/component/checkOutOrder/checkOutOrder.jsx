import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./checkOutOrder.css"
import { checkAccessToken } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import axios from "axios";

function CheckOutOrder(){

    const navigate = useNavigate()

    useEffect( () => {
        const tokenData = checkAccessToken()
        if(!tokenData){
            navigate("/Login")
        }
            
    })

    const singleOrder = useSelector(state => state.singleOrder)
    console.log(singleOrder);
    // const orders = useSelector(state => state.orders)

    const [quantity,setQuantity] = useState('1')
    const orderQuantity = Number(quantity)
    const increaseAmount = () => {
        if(orderQuantity < 50) setQuantity(orderQuantity + 1)
    }
    const decreaseAmount = () => {
        if(orderQuantity > 0) setQuantity(orderQuantity - 1)
    }

    const handleConfirm = (e) => {
        const data = {
            title: singleOrder.title,
            orderId: singleOrder._id,
            totalPrice: quantity * singleOrder.price,
            quantity: quantity,
            accessToken: localStorage.getItem("accessToken")
        }

        axios.post("http://localhost:8000/api/v1/orders/addOrders",data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("Error: ",err))
        navigate("/")
    }

    return(
        <div className="checkOutMain">
            <div className="orderCard">
                <div className="infoCard">
                    <img src={singleOrder.image} className="foodimage" alt=""/>
                    <div className="singlefoodinfo">
                        <p className="title">{singleOrder.title}</p>
                        <p className="singledescription">{singleOrder.description}</p>
                        <div className="number-input">
                        <button type="button" onClick={decreaseAmount} className="minusBtn"><img src={assets.minusIcon} alt=""/></button>
                        <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} min="1" className="quantity"/>
                        <button type="button" onClick={increaseAmount} className="plusBtn"><img src={assets.plusIcon} alt=""/></button>
                        </div>
                        <button className="confirmOrder" onClick={handleConfirm} >Confirm Order</button>
                        <button className="cancelOrder">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutOrder