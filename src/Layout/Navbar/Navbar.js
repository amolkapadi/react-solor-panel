import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow bg-light">
      <div className="container">
        <Link className="navbar-brand text-bold" to="/">Solor</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-border-style"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown px-3">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solor Panel 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="https://www.adanisolar.com/Solar-Calculator">Solor Calculator</a></li>
              </ul>
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
          </ul>

        </div>
      </div>
    </nav>
  );
}
