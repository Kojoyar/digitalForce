import React from 'react';
import './Video.css';
import videoBack from '../../pages/image/video_back.png'
import video_img from '../../pages/image/video_img.jpg';
import play from '../../pages/image/play.png'

const Video = () => {
  return (
    <div className='video'>
        <div className="video_block">
            <img className='video_back' src={videoBack} alt="" />

            <img className='video_img' src={video_img} alt="" />

            <img className='video_play' src={play} alt="" />

            <div className="video_card">
                <h1 className="video_title">Оцените лучший ресторан - Бар</h1>
                <p className="video_text">и проведите время с чутким персоналом которые обслужат вас и ваших гостей в самом лучшем формате!</p>
            </div>
        </div>
    </div>
  )
}

export default Video