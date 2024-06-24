import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./checkOutOrder.css"
import { checkAccessToken } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import axios from "axios";

function CheckOutOrder(){

    const navigate = useNavigate()
    const dialogRef = useRef()

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
        if(orderQuantity > 1) setQuantity(orderQuantity - 1)
    }

    //Sending order to request
    const handleOrder = () => {
        const data = {
            title: singleOrder.title,
            orderId: singleOrder._id,
            totalPrice: orderQuantity * singleOrder.price,
            quantity: orderQuantity
        }
        axios.post("http://localhost:8000/api/v1/orders/addOrders",data)
        .then((res) => console.log("Success: ",res))
        .catch((err) => console.log("Error: ",err))
        navigate('/')
        dialogRef.current.close()
    }
    const openDialog = () => {
        dialogRef.current.showModal()
    }


    return(
        <>
        <div className="checkOutMain">
            <div className="orderCard">
                <div className="infoCard">
                    <img src={singleOrder.image} className="foodimage" alt=""/>
                    <div className="singlefoodinfo">
                        <p className="title">{singleOrder.title}</p>
                        <p className="singledescription">{singleOrder.description}</p>
                        <p className="orderPrice">&#8377;{orderQuantity * singleOrder.price}/-</p>
                        <div className="number-input">
                        <button type="button" onClick={decreaseAmount} className="minusBtn"><img src={assets.minusIcon} alt=""/></button>
                        <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} min="1" className="quantity"/>
                        <button type="button" onClick={increaseAmount} className="plusBtn"><img src={assets.plusIcon} alt=""/></button>
                        </div>
                        <button className="confirmOrder" onClick={openDialog}>Confirm Order</button>
                        <button className="cancelOrder">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <dialog ref={dialogRef} className="confirmMessage">
            <div>
                <p>Thanks for Ordering</p>
                <p>!!!Please confirm your order!!!</p>
                <button onClick={handleOrder}>Confirm</button>
            </div>
        </dialog>
        </>
    )
}

export default CheckOutOrder