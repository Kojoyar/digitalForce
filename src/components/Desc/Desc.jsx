import React from 'react';
import './Desc.css'
import desc_img from '../../pages/image/desc_img.png';
import instagram from '../../pages/image/Instagram.png';
import twoGis from '../../pages/image/2gis.png';


const Desc = () => {
  return (
    <div className='desc' >
        <div className="desc_block">
            <div className="desc_block_img">
                <img src={desc_img} alt="" />
            </div>

            <div className="desc_block_text">
                <div className="desc_col">
                  <div className="desc_title">Мы открыты с 10:00 до 02:00</div>
                </div>
                <div className="desc_text">
                  Работаем в будни и выходные дни с 10:00 до 02:00. Бронируйте столики по телефону:
                  <span className='desc_span' >+996 0220140866</span> <span  className='desc_span' >+996 0220140866</span>
                </div>

                <div className="desc_col_2">
                  <div className="desc_title">С нетерпением ждем вас</div>
                </div>
                <div className="desc_text">
                    на улице Сухэ-Батора, 17
                    6-й мк-р, Октябрьский район, столица Бишкек,
                </div>
                
              <div className='desc_icon_flex' >
                <img src={instagram} alt="" />
                <span className='desc_icon_text' >@bono.bar.bishkek</span>
              </div>

              <div className="desc_icon_block">
                <img src={twoGis} alt="" />
                <span className='desc_icon_text_2' >ссылка на 2гис</span>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Desc