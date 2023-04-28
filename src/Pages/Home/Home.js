import React from 'react'
import Slider from '../../Component/Slider/Slider';
import SolorPanel from '../../Component/Solorpanel/SolorPanel';
import Blog from '../../Component/Blog/Blog';
import Work from '../../Component/Howwrok/Work';
import Navbar from '../../Layout/Navbar/Navbar'
import Footer from '../../Layout/Footer/Footer';

function Home(){
  return(
    <>
    <Navbar />
     <Slider />
     <SolorPanel />
     <Blog />
     <Work />
     <Footer />
    </>
  )
}

export default Home;