import React from 'react';
import './Menu.css';
import menuImg from '../../pages/image/menu.png'
import menuImg2 from '../../pages/image/menu_2.png'
import menuImg3 from '../../pages/image/manu_3.png'
import menuImg5 from '../../pages/image/menu_5.png'
import menuImg6 from '../../pages/image/menu_6.png'
import menuImg7 from '../../pages/image/menu_7.png'
import menuImgFinish from '../../pages/image/menu_finish.png'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu_title">Меню</div>

        <div className="menu_block">

            <div className="menu_col">
                <div className="menu_card">
                    <img className='menu_img' src={menuImg} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>

                <div className="menu_card">
                    <img className='menu_img' src={menuImg2} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>
            </div>

            <div className="menu_col_2">
                <div className="menu_card">
                    <img className='menu_img' src={menuImg3} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>

                <div className="menu_card">
                    <img className='menu_img' src={menuImg5} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>
            </div>

            <div className="menu_col_3">
                <div className="menu_card">
                    <img className='menu_img' src={menuImg5} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>

                <div className="menu_card">
                    <img className='menu_img' src={menuImg6} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>
            </div>

            <div className="menu_col_4">
                <div className="menu_card">
                    <img className='menu_img' src={menuImg7} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>

                <div className="menu_card">
                    <img className='menu_img' src={menuImgFinish} alt="" />
                    <div className="menu_text">Японская кухня</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu