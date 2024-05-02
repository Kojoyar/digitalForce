import Carousel from 'react-bootstrap/Carousel';
import img from '../../pages/image/header_img.png'
import line_img from '../../pages/image/header_line_img.png'
import trigger_img from '../../pages/image/header_trigger.png'
import './Header.css'
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div className="header">
      <Navbar/>
      <Carousel>
        <Carousel.Item>
          <img className='header_img' src={img} alt="First Slide" />
          <Carousel.Caption>
            <div className='header_block' >
                <h3  className='header_title' >Выделяесь среди других </h3>
                <span className='header_text_title' >BONO - </span><span className='header_text' >КОКТЕЛЬНЫЙ БАР И РЕСТОРАН ПРИГЛАШАЕТ К СЕБЕ</span>
                <button className='header_btn' >Забронировать стол</button>
            </div>
            <div className='header_images' >
              <img className='header_icon' src={line_img} alt="" />
              <img className='header_icon_2'  src={trigger_img} alt="" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='header_img' src={img} alt="Second Slide" />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='header_img' src={img} alt="Third Slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;