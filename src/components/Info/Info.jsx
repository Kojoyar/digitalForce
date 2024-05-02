import React from 'react';
import './Info.css'
import infoImg from '../../pages/image/info_img.png'
import infoImgRes from '../../pages/image/info_res.png'
import infoLine from '../../pages/image/info_line.png'
import infoBuild from '../../pages/image/info_build.png'
import infoFood from '../../pages/image/info_food.png'

const Info = () => {
  return (
    <div className='info'>
        <div className="info_block">
            <div className="info_block_img">
                <img src={infoImg} alt="" />
            </div>

            <div className="info_block_text">
                <div className="info_col">
                  <img src={infoLine} alt="" />
                  <div className="info_title">Кухня</div>
                </div>
                <div className="info_text">
                  Современной кухни в Бишкеке с исключительным подходом к выбору продуктов. Минимум полуфабрикатов и максимум ручной работы: мы сами замешиваем тесто для пасты, варим сыры, выращиваем зелень и даже делаем свой тоник для коктейлей.
                </div>

                <div className="info_col_2">
                  <img src={infoBuild} alt="" />
                  <div className="info_title">Заведения</div>
                </div>
                <div className="info_text">
                  Два этажа заведения поделены на семейную зону с открытой кухней и коктейльную зону с барной стойкой, диджеем и просторной террасой.
                </div>

                <div className="info_col_3">
                  <img src={infoFood} alt="" />
                  <div className="info_title">Бронирования</div>
                </div>
                <div className="info_text">
                   Мы готовы Вам помочь с выбором необходимого для проведения мероприятия или встречи. Подберем для Вас и для Ваших гостей изысканное блюда которые буду соответствовать вашему мероприятию и приятное локация с видом на город.
                </div>
            </div>

        </div>

        <div className="info_block_2">
            <div className="info_block_text_2">
                <div className="info_col">
                  <img src={infoLine} alt="" />
                  <div className="info_title">Кухня</div>
                </div>
                <div className="info_text">
                  Современной кухни в Бишкеке с исключительным подходом к выбору продуктов. Минимум полуфабрикатов и максимум ручной работы: мы сами замешиваем тесто для пасты, варим сыры, выращиваем зелень и даже делаем свой тоник для коктейлей.
                </div>

                <div className="info_col_2">
                  <img src={infoBuild} alt="" />
                  <div className="info_title">Заведения</div>
                </div>
                <div className="info_text">
                  Два этажа заведения поделены на семейную зону с открытой кухней и коктейльную зону с барной стойкой, диджеем и просторной террасой.
                </div>

                <div className="info_col_3">
                  <img src={infoFood} alt="" />
                  <div className="info_title">Бронирования</div>
                </div>
                <div className="info_text">
                   Мы готовы Вам помочь с выбором необходимого для проведения мероприятия или встречи. Подберем для Вас и для Ваших гостей изысканное блюда которые буду соответствовать вашему мероприятию и приятное локация с видом на город.
                </div>
            </div>

            <div className="info_block_img">
                <img className='info_img_res'  src={infoImgRes} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Info
