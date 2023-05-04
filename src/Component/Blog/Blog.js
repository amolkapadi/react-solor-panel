
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css"
import Embrace from '../../img/Embrace.jpg'
import future from '../../img/future.jpg'

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
              <img src={Embrace} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Embrace green tech revolution or risk falling behind...</h5>
               <a href="https://news.un.org/en/story/2023/03/1134672"  target="_blank"> <span className="badge rounded-pill bg-primary" >Read More</span></a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src={future} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Future of solar energy expansion in India</h5>
                <a href="https://timesofindia.indiatimes.com/blogs/voices/future-of-solar-energy-expansion-in-india/"  target="_blank"> <span className="badge rounded-pill bg-primary" >Read More</span></a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Despite challenges, India's plans for energy sector are ambitious.</h5>
                <a  target="_blank" href="https://www.businesstoday.in/magazine/industry/story/despite-challenges-indias-plans-for-energy-sector-are-ambitious-it-needs-proper-execution-369010-2023-02-05"> <span className="badge rounded-pill bg-primary" >Read More</span></a>

              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
