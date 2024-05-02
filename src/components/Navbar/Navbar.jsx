import React from 'react';
import './Navbar.css';
import phoneImg from '../../pages/image/nav_telephone.png'
import emailImg from '../../pages/image/nav_img_email.png';
import instagramImg from '../../pages/image/Instagram.png';
import twoGisImg from '../../pages/image/2gis.png';
import titleImg from '../../pages/image/footer_title_img.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_flex">
            <div className="nav_block">
                <div className="nav_icons">
                    <img src={phoneImg} alt="" />
                    <h4 className='nav_number'>+996 501 06 55 05</h4>
                </div>
                <div className="nav_icons">
                    <img className='nav_icon' src={emailImg} alt="" />
                    <h4 className='nav_email'>bono51@gmail.com</h4>
                </div>
            </div>

            <div className="nav_block">
                <div className="nav_icons">
                    <img src={instagramImg} alt="" />
                    <a href="#" className="nav_inst">instagram</a>
                </div>
                <div className="nav_icons">
                    <img className='nav_icon' src={twoGisImg} alt="" />
                </div>

                <div className="nav_block_btn">
                    <button className="nav_btn">Заказать</button>
                </div>
            </div>
        </div>

        <div className='line_nav' ></div>

            <div className="nav_logo_block">
                <img src={titleImg} alt="" />
                <div className="nav_links">
                    <a href="#" className="nav_link">Главная</a>
                    <a href="#" className="nav_link">Меню</a>
                    <a href="#" className="nav_link">Доставка</a>
                    <a href="#" className="nav_link">О нас</a>
                    <a href="#" className="nav_link_2">Контакты</a>
                </div>
            </div>
    </div>
  )
}

export default Navbar