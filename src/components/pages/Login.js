import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"



function Login() {
  return (
    <div className='body'>
    <div className="login">
        <div className="form">
          <form noValidate>
            <span>Login</span>

            <input
              type="email"
              name="email"
              placeholder="Enter email id / username"
              className="form-control inp_text"
              id="email"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
            />

           <Link to="/Home"> <button type="submit">Login</button></Link>
          </form>
         
        </div>
       
      </div>
      </div>
    
  )
}

export default Login
