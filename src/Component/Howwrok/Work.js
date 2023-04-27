import React from 'react'
import './Work.css'
import img from '../../img/howwork.png'
export default function Work() {
  return (
    <div className='container py-5'>
        <h3 className='text-center'>How Bidprotrade Works</h3><hr />
        <div className='row'>
            <img src={img} className='img-fluid' />
        </div>
       
                <h3 className='text-center mt-5'>Why Us</h3><hr />
        <div className='row  row-cols-1 row-cols-md-5 g-4'>
              <div className='col bg-primary'>
                  <p className='why-text'>Procure time-efficiently</p>
              </div>
              <div className='col bg-success'>
                  <p className='why-text'>Campare multiple suppliers</p>
              </div>
              <div className='col bg-warning'>
                  <p className='why-text'>Scatter your allotment by choice</p>
              </div>
              <div className='col bg-secondary'>
                  <p className='why-text'>Get your large volume needs met</p>
              </div>
              <div className='col bg-warning'>
                  <p className='why-text'>Hassle Free tracking</p>
              </div>
        </div>
    </div>
  )
}
