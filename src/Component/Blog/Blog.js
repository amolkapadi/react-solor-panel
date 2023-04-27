// import React from 'react'
// import './Blog.css'
// export default function Blog() {
//     const img ="https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"
//   return (
//     <div className='container py-5'>
//         <h3 className='text-center'>Blogs & Articles</h3>
//         <p className='text-center'>Apart from the obvious financial benefits, there are other pertinent reasons why you should convert to using solar power instead of fossil fuels.What other reasons should you consider when going solar? Here are seven compelling reasons</p>
//         <hr />
//         <div class="row row-cols-1 row-cols-md-3 g-4 py-5 mt-3">
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">1. Solar Power Is Good for the Environment</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">2. Solar Electricity Makes Your Home Go Off-the-Grid</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//         </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">3. Solar Power Can Use Underutilised Land</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">4. Solar Power Causes Less Electricity Loss</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">5. Solar Power Improves Grid Security</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">6. Solar Power Creates Jobs and Economic Growth</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>

//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={img} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
//         <span className="badge rounded-pill bg-primary">Read More</span>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css"
export default function Blog() {
  const img = "https://www.networkforphl.org/wp-content/uploads/2020/01/iStock-1032683612-1392x0-c-default-q40.jpg"
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
      autoplaySpeed: 4000,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className='container'>
      <h3 className='text-center'>Blogs & Articles</h3>
      <p className='text-center'>Apart from the obvious financial benefits, there are other pertinent reasons why you should convert to using solar power instead of fossil fuels.What other reasons should you consider when going solar? Here are seven compelling reasons</p>
      <hr />
      <div className="row py-5">
        <Slider {...settings}>
          
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
                <span className="badge rounded-pill bg-primary">Read More</span>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
                <span className="badge rounded-pill bg-primary">Read More</span>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
                <span className="badge rounded-pill bg-primary">Read More</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
                <span className="badge rounded-pill bg-primary">Read More</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">7. Solar Power Is A Free Source of Energy</h5>
                <span className="badge rounded-pill bg-primary">Read More</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
