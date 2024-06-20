import React from "react";
import axios from "axios";
import './SignUp.css';

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
        
          /*  <form onSubmit={register} >
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
            </form> */
        

        
      <div className='form-box sign-up'>

      <form action="">
        <h1>Sign up</h1>

        <div className='input-box'>
          <input type="text" placeholder='Username' required />
        </div>

        <div className='input-box'>
          <input type="email" placeholder='Email' required />
        </div>

        <div className='input-box'>
          <input type="text" placeholder='Address' required />
        </div>

        <div className='input-box'>
          <input type="number" placeholder='Pincode' min={0} required />
        </div>

        <div className='input-box'>
          <input type="tel" pattern="[+0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Mobile number' maxLength={13} required />
        </div>

        <div className="input-box">
          <input type="password" placeholder='Password' maxLength={8} required />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />I agree to Quick Foods Privacy Policy</label>
        </div>

        <button type='submit'>Sign up</button>

      </form>
    </div>

    )
}

export default SignUp