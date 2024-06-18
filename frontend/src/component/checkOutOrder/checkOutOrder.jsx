import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./checkOutOrder.css"

function CheckOutOrder(){

    const singleOrder = useSelector(state => state.singleOrder)
    console.log(singleOrder);

    const orders = useSelector(state => state.orders)
    console.log(orders);

    const [quantity,setQuantity] = useState('0')
    const orderQuantity = Number(quantity)
    const increaseAmount = () => {
        if(orderQuantity < 50) setQuantity(orderQuantity + 1)
    }
    const decreaseAmount = () => {
        if(orderQuantity > 0) setQuantity(orderQuantity - 1)
    }

    return(
        <div className="checkOutMain">
            <div className="orderCard">
                <div className="infoCard">
                    <img src={singleOrder.image} className="foodimage" alt=""/>
                    <div className="singlefoodinfo">
                        <p className="title">{singleOrder.title}</p>
                        <p className="singledescription">{singleOrder.description}</p>
                        <div class="number-input">
                        <button type="button" onClick={decreaseAmount}>-</button>
                        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} min="0"/>
                        <button type="button" onClick={increaseAmount}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutOrder