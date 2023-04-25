import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer-section py-5'>
      <div className='container '>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
              <div className='col'>
                <h3>Solor Panel</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className='col'>
                <h3>All Link</h3>
                <p>Home</p>
                <p>About</p>
                <p>Profile</p>
                <p>Contact</p>
              </div>
              <div className='col'>
                <h3>Contact Us</h3>
                <p>Address :5th floor, Ideas to impacts Hub, Baner, Pune-411045.</p>
                <p>Email Address : info@bidprotrade.com</p>
                <div className='footer-icon'>
                <i className="bi bi-facebook pe-3"></i>
                <i className="bi bi-linkedin pe-3"></i>
                <i className="bi bi-instagram pe-3"></i>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
