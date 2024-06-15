import React, { useState } from 'react'
import './Login.css'
import { FaUser,FaLock, FaEnvelope, FaAddressCard,FaMobile,FaMapPin} from "react-icons/fa";

const Login = () => {
  
  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`loginform${action}`}>
      <div className='form-box login'>

        <form action="">
          <h1>Login</h1>

          <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account?
              <a href="#" onClick={registerLink}>Create account</a>
            </p>
          </div>
        </form>
      </div>

      <div className='form-box sign-up'>

        <form action="">
          <h1>Sign up</h1>

          <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <input type="email" placeholder='Email' required />
            <FaEnvelope className='icon'/>
          </div>

          <div className='input-box'>
            <input type="text" placeholder='Address' required />
            <FaAddressCard className='icon'/>
          </div>

          <div className='input-box'>
            <input type="number" placeholder='Pincode' min={0} required />
            <FaMapPin  className='icon'/>
          </div>

          <div className='input-box'>
            <input type="tel" pattern="[+0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Mobile number' maxLength={13} required />
            <FaMobile  className='icon'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' maxLength={8} required />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to Quick Foods Privacy Policy</label>
          </div>

          <button type='submit'>Create account</button>

          <div className="register-link">
            <p>Already have an account?
              <a href="#" onClick={loginLink}>Login</a>
            </p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login

