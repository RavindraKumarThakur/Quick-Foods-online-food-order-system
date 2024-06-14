import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home(){

    const [orders,setOrders] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/orders/getAllFoods").then((response) => setOrders(response.data));
        },[])
    console.log(orders)
    return(
        <div className="main">
            <ul className="foodList">
                {orders.map((order) => (<li key={order._id} className="foodCards">
                    <div className="foodImage">
                        <img src={order.image} />
                    </div>
                    <div className="foodInfo">
                        <span className="title">{order.title}</span>
                    </div>
                </li>))}
            </ul>
        </div>
    )
}

export default Home