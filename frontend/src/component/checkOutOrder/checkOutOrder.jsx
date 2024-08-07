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
    const openDialog = () => {
        dialogRef.current.showModal()
    }

    const handleOrder = () => {
        const data = {
            title: singleOrder.title,
            orderId: singleOrder._id,
            totalPrice: orderQuantity * singleOrder.price,
            quantity: orderQuantity
        }

        //Handling Payment
        axios.post("http://localhost:8000/api/v1/orders/payments/receivePayments",{amount: data.totalPrice})
        .then((res) => {
            console.log(res.data)
            initPayment(res.data.data)
        })
        .catch((err) => console.log(err))

        //Adding orders
        axios.post("http://localhost:8000/api/v1/orders/addOrders",data)
        .then((res) => console.log("Success: ",res))
        .catch((err) => console.log("Error: ",err))
        dialogRef.current.close()
    }

    //Verifying payment
    const initPayment = (data) => {
        const option = {
            key: "rzp_test_G5hukZD6i0hd2L",
            amount: data.amount,
            currency: data.currency,
            name: singleOrder.title,
            description: "Test transaction",
            image: singleOrder.image,
            order_id: data.id,
            handler: (response) => {
                try {
                    axios.post("http://localhost:8000/api/v1/orders/payments/verifyPayment",response)
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc"
            }
        }
        const rzp = new window.Razorpay(option)
        rzp.open()
        navigate('/')
    }

    return(
        <>
        <div className="checkOutMain">
            <div className="orderCard">
                <div className="infoCard">
                    <img src={singleOrder.image} className="foodimage" alt=""/>
                    <div className="singlefoodinfo">
                        <div className="flex gap-1">
                        <span><img src={assets.star} width={"15px"}/></span>
                        <span><img src={assets.star} width={"15px"}/></span>
                        <span><img src={assets.star} width={"15px"}/></span>
                        <span><img src={assets.star} width={"15px"}/></span>
                        <span><img src={assets.star} width={"15px"}/></span>
                        </div>
                        <p className="title">{singleOrder.title}</p>
                        <p className="singledescription">{singleOrder.description}</p>
                        <p className="orderPrice">&#8377;{orderQuantity * singleOrder.price}/-</p>
                        <div className="number-input">
                        <button type="button" onClick={decreaseAmount} className="minusBtn"><img src={assets.minusIcon} alt=""/></button>
                        <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} min="1" className="quantity"/>
                        <button type="button" onClick={increaseAmount} className="plusBtn"><img src={assets.plusIcon} alt=""/></button>
                        </div>
                        <button className="confirmOrder" onClick={openDialog}>Confirm Order</button>
                        <button className="cancelOrder" onClick={(e) => navigate('/')}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <dialog ref={dialogRef} className="confirmMessage">
            <div>
                <img src={singleOrder.image} alt="" className="paymentImg"/>
                <p className="paymentName">{singleOrder.title}</p>
                <p className="paymentQuantity paymentDes">{singleOrder.description}</p>
                <p className="paymentQuantity">Quantity: {orderQuantity}</p>
                <p className="paymentQuantity">Price: &#8377;{orderQuantity * singleOrder.price}</p>
                <p className="paymentQuantity">Quantity: {orderQuantity}</p>
                <button onClick={handleOrder} className="confirmOrder">Place Order</button>
                <button onClick={() => {dialogRef.current.close()}} className="cancelPayment">Cancel</button>
            </div>
        </dialog>
        </>
    )
}

export default CheckOutOrder