import React from 'react'
import Slider from '../../Component/Slider/Slider';
import SolorPanel from '../../Component/Solorpanel/SolorPanel';
import Blog from '../../Component/Blog/Blog';
import Work from '../../Component/Howwrok/Work';


function Home(){
  return(
    <>
     <Slider />
     <SolorPanel />
     <Blog />
     <Work />
    </>
  )
}

export default Home;