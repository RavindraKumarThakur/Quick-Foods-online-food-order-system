import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import veg_icon from "../../assets/veg_icon.png";
import non_veg_icon from "../../assets/non_veg_icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrders } from "../../features/orders/orderSlice";

function Home(){

    const navigate = useNavigate()

    const [orders,setOrders] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/orders/getAllFoods").then((response) => setOrders(response.data));
        },[])
    console.log(orders)

    const dispatch = useDispatch();

    const orderFood = (e) => {
        e.preventDefault()
        const object = {
            title:e.target.getAttribute('title'),
            price:e.target.getAttribute('price'),
            image:e.target.getAttribute('image'),
            description:e.target.getAttribute('description'),
            quantity: 1
        }
        console.log(object);
        dispatch(addOrders(object))
        navigate("/orders");
    }
    return(
        <div className="main">
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
                    <div className="order_btn" title={order.title} price={order.price} image={order.image} description={order.description} onClick={orderFood}>
                        Order
                    </div>
                </li>))}
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
                <div className="virtual-card"></div>
            </ul>
        </div>
    )
}

export default Home