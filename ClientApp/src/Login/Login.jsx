import React from 'react'
import {NavLink} from 'react-router-dom'

import './Login.css'

export default function Login() {
  return (
    <>
    <div className="body">
      <section className="container" >
  <div className="login-container">
    <div className="circle circle-one" />
    <div className="form-container">
      <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
      <h1 className="opacity">LOGIN</h1>
      <form>
        <input type="email" placeholder="EMAIL" />
        <input type="password" placeholder="PASSWORD" />
        <NavLink button className="btn btn-outline-success " type="submit" style={{margin:"10px",color:"white"}} to ='/userpage'>Submit</NavLink>
      </form>
      <div className="login opacity">
         <NavLink to='/signup'>DONOT HAVE AN ACCOUNT? Sign Up</NavLink>
      </div>
    </div>
  </div>
  <div className="theme-btn-container" />
</section>

    </div>
    </>
  )
}
