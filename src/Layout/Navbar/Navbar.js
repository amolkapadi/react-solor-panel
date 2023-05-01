import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
import Login from "../../Pages/Login/Login";
export default function Navbar() {
  return (
<>
    
<nav className="navbar navbar-expand-lg navbar-light  shadow bg-light">
      <div className="container">
        <Link className="navbar-brand text-bold" to="/">Solar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-border-style"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item px-3">
              <a className="nav-link" href="#solar-panel">Solar Panel</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link " href="https://solarrooftop.gov.in/rooftop_calculator">Solar Calculator</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Biomass Briquettes</a>
            </li>
            <li className="nav-item px-3" >
              <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal11" >LogIn</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    <div class="modal fade" id="exampleModal11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Login />
      </div>
    
    </div>
  </div>
</div>

</>
  );
}
