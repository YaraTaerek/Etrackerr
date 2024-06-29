import React from 'react';
import nbeLogo from './img/nbeLogo.jpeg'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary"style={{ padding:"0px"}}>
  <div className="container-fluid"style={{backgroundColor: "#12401A "}}>
    <NavLink className="navbar-brand"style={{color:"white"}} to ='/'>E <img src={nbeLogo} alt="logo"style={{width:"30px" ,borderRadius:"50%",margin:"3px"}} />Tracker </NavLink>
    <form className="d-flex" role="search">
    <NavLink button className="btn btn-outline-success " type="submit" style={{margin:"10px",color:"white"}} to ='/login'>Login</NavLink>
    <NavLink button className="btn btn-outline-success " type="submit" style={{margin:"10px",color:"white"}} to ='/signup'>Sign Up</NavLink>

    </form>
  </div>
</nav>

    
    </>
  )
}
 