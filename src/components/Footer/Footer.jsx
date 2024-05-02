import React from 'react';
import './Footer.css';
import footerImg from '../../pages/image/footer_title_img.png'
import arrowImg from '../../pages/image/footer_arrow.png';
import instagram from '../../pages/image/Instagram.png';
import telegram from '../../pages/image/telegram.png';
import facebook from '../../pages/image/facebook.png';
import tictok from '../../pages/image/tictok.png';
import youtube from '../../pages/image/youtube.png';
import line from '../../pages/image/footerLine.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_size">
            <div className="footer_block">
                <div className="footer_arrow">
                    <img src={footerImg} alt="" />
                    <div className="arrow_block">
                        <img src={arrowImg} alt="" />
                        <h5 className='footer_zogo' >Вверх</h5>
                    </div>
                </div>

                <div className="footer_line">
                    <h3 className='footer_title' >/ Адрес:</h3>
                    <h5 className='footer_text' >карта 2гис</h5>
                    <h5 className='footer_text' >Карта Google</h5>
                    <h5 className='footer_text' >Доставка</h5>
                </div>

                <div className="footer_line">
                    <h3 className='footer_title' >/ Позвоните нам:</h3>
                    <h5 className='footer_text' >+996 501 06 55 05с</h5>
                    <h5 className='footer_text' >+996 501 06 55 05</h5>
                    <h5 className='footer_text' >+996 501 06 55 05</h5>
                </div>
            

                <div className="footer_line">
                    <h3 className='footer_title' >/ Пишите нам:</h3>
                    <h5 className='footer_text' >боно2gmail.com</h5>
                    <h5 className='footer_text' >боно2gmail.com</h5>
                    <h5 className='footer_text' >боно2gmail.com</h5>
                </div>
            

                <div className="footer_line">
                    <h3 className='footer_title' >/ Навигации по страницам:</h3>
                    <h5 className='footer_text' >Главный экран</h5>
                    <h5 className='footer_text' >О нас</h5>
                    <h5 className='footer_text' >Меню</h5>
                    <h5 className='footer_text' >Контакты</h5>
                    <h5 className='footer_text' >Бронь столика</h5>
                </div>
            
            
            </div>
        </div>

            <div className='line' ></div>


            <div className='foooter_end' >
                <div className="end_block">
                    <span className='end_title' >© 2024 год, Bono bar . Все права защищены.</span>
                </div>

                <div className="end_icons">
                    <img src={instagram} alt="" className="end_icon" />
                    <img src={telegram} alt="" className="end_icon" />
                    <img src={facebook} alt="" className="end_icon" />
                    <img src={tictok} alt="" className="end_icon" />
                    <img src={youtube} alt="" className="end_icon" />
                </div>
            </div>
    </div>
  )
}

export default Footer