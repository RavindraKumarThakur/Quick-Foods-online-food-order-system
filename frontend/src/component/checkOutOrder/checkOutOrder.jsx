import React from "react";
import { useSelector } from "react-redux";
import "./checkOutOrder.css"

function CheckOutOrder(){

    const orders = useSelector(state => state.orders)
    console.log(orders);
    return(
        <div className="checkOutMain">
            <div className="orderCard">
                
            </div>
        </div>
    )
}

export default CheckOutOrder