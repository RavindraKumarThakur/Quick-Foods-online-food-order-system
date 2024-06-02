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
        <>
            <form onSubmit={register} >
                <label >UserName: </label>
                <input type="text" name="username" />
                <label >Email: </label>
                <input type="email" name="email" />
                <label >Address: </label>
                <input type="text" name="address" />
                <label >Pincode: </label>
                <input type="text" name="pincode" />
                <label >Fullname: </label>
                <input type="text" name="fullname" /><br />
                <label >Gender: </label><br />
                <label >Male:</label>
                <input type="radio" name="gender" value={"MALE"} />
                <label >Female:</label>
                <input type="radio" name="gender" value={"FEMALE"} />
                <label >Others:</label>
                <input type="radio" name="gender" value={"OTHERS"} /><br />
                <label >Password: </label>
                <input type="password" name="password" placeholder="more than 6 characters" /><br />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp