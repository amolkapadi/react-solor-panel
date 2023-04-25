import React from 'react'
import './Work.css'
import img from '../../img/howwork.png'
export default function Work() {
  return (
    <div className='container py-5'>
        <h3>How Bidprotrade Works</h3><hr />
        <div className='row'>
            <img src={img} className='img-fluid' />
        </div>
    </div>
  )
}
