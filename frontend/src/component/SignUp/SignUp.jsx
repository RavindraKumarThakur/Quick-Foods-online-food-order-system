import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import './SignUp.css';
=======
import { useNavigate } from "react-router-dom";
>>>>>>> d1479c247aff130c3af50970860fae917ebbae36

function SignUp(){
  const [success,setSuccess] = useState({});
  const [successResponse,setSuccessResponse] = useState(true);
  const navigate = useNavigate()

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
        .then(
          (res) => {
            console.log("Response: ",res);
            navigate('/Login')
          })
        .catch((err) => {
          setSuccess(err.response.data)
          console.log(success);
          if (success.status === 404) {
            setSuccessResponse((prev) => prev = false);
            console.log(successResponse);
            if (!successResponse) {
              alert(success.message)
            }
          }
        });
        event.target.reset();
        
    }

<<<<<<< HEAD
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
=======
    return (
        <div className="flex flex-col items-center justify-center h-fit bg-slate-200">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 m-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
          <form className="flex flex-col" onSubmit={register}>
            <input placeholder="Username" name="username" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <input placeholder="Full Name" name="fullname" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <input placeholder="Email" name="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
            <input placeholder="Address" name="address" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <input placeholder="Password" name="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>
            <input placeholder="Pincode" name="pincode" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"/>
            <input placeholder="Contact" name="contact" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"/>
            <label className="text-sm mb-2 text-gray-900 cursor-pointer" htmlFor="gender">
              Gender
            </label>
            <select name="gender" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
            <p className="text-gray-900 mt-4"> Already have an account? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Login</a></p>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      
    );
>>>>>>> d1479c247aff130c3af50970860fae917ebbae36
}

export default SignUp