import React from 'react'
import './Blog.css'
export default function Blog() {
    const img ="https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"
  return (
    <div className='container py-5'>
        <h3>Blogs & Articles</h3>
        <p>Apart from the obvious financial benefits, there are other pertinent reasons why you should convert to using solar power instead of fossil fuels.What other reasons should you consider when going solar? Here are seven compelling reasons</p>
        <hr />
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">1. Solar Power Is Good for the Environment</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">2. Solar Electricity Makes Your Home Go Off-the-Grid</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>
       
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">3. Solar Power Can Use Underutilised Land</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">4. Solar Power Causes Less Electricity Loss</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">5. Solar Power Improves Grid Security</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">6. Solar Power Creates Jobs and Economic Growth</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
        <span className="badge rounded-pill bg-primary">Read More</span>

       
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
