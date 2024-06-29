import React from "react";
import { NavLink } from "react-router-dom";

import "./SignUp.css";

export default function Login() {
  return (
    <>
      <div className="body">
        <section className="container">
          <div className="login-container">
            <div className="circle circle-one" />
            <div className="form-container">
              <img
                src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
                alt="illustration"
                className="illustration"
              />
              <h1 className="opacity">SIGN UP</h1>
              <form>
                <div className="name">
                  <input type="text" placeholder="FIRST NAME" />
                  <input type="text" placeholder="LAST NAME" />
                </div>

                <input type="text" placeholder="NATIONAL ID" />
                <input type="text" placeholder="ُEMAIL" />
                <input type="password" placeholder="PASSWORD" />
                <input type="password" placeholder="CONFIRM PASSWORD" />
                <NavLink button className="btn btn-outline-success " type="submit" style={{margin:"10px",color:"white"}} to ='/login'>Submit</NavLink>
              </form>
              <div className="login opacity">
                <NavLink to='/login'>ALREADY HAVE AN ACCOUNT? Login</NavLink>
              </div>
            </div>
          </div>
          <div className="theme-btn-container" />
        </section>
      </div>
    </>
  );
}
