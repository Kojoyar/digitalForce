import React from 'react';
import './PhotoGall.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo_1 from '../../pages/image/photo_1.png'
import photo_2 from '../../pages/image/photo_2.png'
import photo_3 from '../../pages/image/photo_3.png'
import photo_4 from '../../pages/image/photo_4.png'


const PhotoGall = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <div className='photo'>
      <div className="photo_block">
        <h1 className="photo_title">Фотогалерея</h1>

        <div className='photo_multi' > 
            <Carousel partialVisible={true} responsive={responsive} >
              <img className='photo_img' src={photo_3} alt="" />
              <img className='photo_img' src={photo_2} alt="" />
              <img className='photo_img' src={photo_3} alt="" />
              <img className='photo_img' src={photo_2} alt="" />
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default PhotoGall