
// import React from "react";

import "./Home.css";
import AppDownload from "../AppDownload/AppDownload";

import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import veg_icon from "../../assets/veg_icon.png";
import non_veg_icon from "../../assets/non_veg_icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import background from "../../assets/Quick_background.png";
import { addOrders, sendOrders } from "../../features/orders/orderSlice";


function Home() {

    const navigate = useNavigate()

    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/foods/getAllFoods").then((response) => setOrders(response.data));
        },[])

    const dispatch = useDispatch();

    const orderFood = (e) => {
        e.preventDefault()
        const object = {
            title:e.target.getAttribute('title'),
            price:e.target.getAttribute('price'),
            image:e.target.getAttribute('image'),
            description:e.target.getAttribute('description'),
            _id:e.target.getAttribute('_id'),
            quantity: 1
        }
        console.log(object);
        dispatch(addOrders(object))
        dispatch(sendOrders(object))
        navigate("/orders",{state:{title:object.title}});
    }
    return (
        <div className="main">

            <div className="header">
                <div className="header-contents">
                    <h2>Order your favourite food here</h2>
                    <p>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredient and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experiance, one delicious meal at a time.</p>
                    <button>View Menu</button>
                </div>
            </div>

            <ul className="foodList">
                {orders.map((order) => (<li key={order._id} className="foodCards">
                    <div className="foodImage">
                        <img src={order.image} alt="" />
                    </div>
                    <div className="foodInfo">
                        <span className="title">{order.title}</span>
                        <span className="price">{order.price}&#8377;</span>
                    </div>
                    <div className="description">
                        <p>
                            {order.description}
                        </p>
                    </div>
                    <span className="veg-icon"><img src={order.veg?veg_icon:non_veg_icon} alt="" /></span>
                    <div className="order_btn" title={order.title} price={order.price} image={order.image} description={order.description} _id={order._id} onClick={orderFood}>
                        Order
                    </div>
                </li>))}
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
            </ul>
            <AppDownload/>
        </div>
    )
}

export default Home