import React from 'react'
import './SolorPanelCard.css'
export default function SolorPanelCard() {
    const img ="https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"

  return (
    <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card1">
      <img src={img} className="img-fluid" alt="..." />
      <div className="card1-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="badge rounded-pill bg-primary">Read More</span>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card1">
      <img src={img} className="img-fluid" alt="..."/>
      <div className="card1-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="badge rounded-pill bg-primary">Read More</span>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card1">
      <img src={img} className="img-fluid" alt="..."/>
      <div className="card1-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="badge rounded-pill bg-primary">Read More</span>

      </div>
    </div>
  </div>
 
 
</div>
    </div>
  )
}
