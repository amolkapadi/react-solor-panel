import React from 'react'
import './Profile.css'
import Navbar from '../../Layout/Navbar/Navbar'
import Footer from '../../Layout/Footer/Footer'
export default function Profile() {
  return (
      <>
      <Navbar />
             <div className='container py-5 mt-5'>
    <div className='row py-5'>
      <h3>My Profile</h3> <hr />
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       My Open Auctions
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div className='container-fluid py-5 '>
      
      <div className='py-5 timeline'>
      <ul class="base-timeline">
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">order placed</span>
    </li>
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">Request send to manufacture</span>
    </li>
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">In-transit</span>
    </li>
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">Deliverd</span>
    </li>
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">Installation in process</span>
    </li>
    <li class="base-timeline__item">
      <span class="base-timeline__summary-text">Installation Done</span>
    </li>
  </ul>
      </div>
      </div>
  
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        My Quotes
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       My Order
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>    
    </div>

  </div>
  <br /><br />

   
    <Footer />
      </>
  )
}
