import React from "react";
import axios from "axios";

function SignUp(){

    const register = (event) => {
        event.preventDefault();
        const data = {
            userName: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            address: event.target.address.value,
            pincode: event.target.pincode.value,
            fullName: event.target.fullname.value,
            gender: event.target.gender.value
        }
        console.log(data)
        axios.post("http://localhost:8000/api/v1/users/register",data)
        .then((res) => (console.log("Response: ",res)))
        .catch((err) => (console.log("Error: ",err)));
        event.target.reset();
    }

    return(
        <h1></h1>
    )
}

export default SignUp