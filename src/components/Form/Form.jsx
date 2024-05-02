import React, { useState } from 'react';
import './Form.css'
import formImg from '../../pages/image/img_form.png'

const Form = () => {
   const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
      stayTime: '',
      reservationTime: '',
      guestCount: '',
      comment: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Validation
      const { name, phoneNumber, stayTime, reservationTime, guestCount, comment } = formData;
      if (!name || !phoneNumber || !stayTime || !reservationTime || !guestCount || !comment) {
          setMessage('Пожалуйста, заполните все поля');
          return;
      }
      sendMessage(formData);
  };

  const sendMessage = (formData) => {
      setMessage('Форма успешно отправлена!');
      // Сбросим значения формы после успешной отправки
      setFormData({
          name: '',
          phoneNumber: '',
          stayTime: '',
          reservationTime: '',
          guestCount: '',
          comment: '',
      });
  };
  return (
     <div className="form">
         <div className="form_block">
            <img className='form_img' src={formImg} alt="" />
               <form className='form_card' onSubmit={handleSubmit} >
                <label className='form_label'>ФИО Клиента</label>
                <input className='form_input' type="text" name="name" value={formData.name} onChange={handleChange} />
                <label className='form_label'>Номер клиента</label>
                <input className='form_input' type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                <label className='form_label'>Время нахождения</label>
                <input className='form_input' type='number' name="stayTime" value={formData.stayTime} onChange={handleChange} />
                <label className='form_label'>Время брони</label>
                <input className='form_input' type="number" name="reservationTime" value={formData.reservationTime} onChange={handleChange} />
                <label className='form_label'>Количество гостей</label>
                <input className='form_input' type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} />
                <label className='form_label'>Комментарий</label>
                <input className='form_input' type="text" name="comment" value={formData.comment} onChange={handleChange} />
                <button className='form_btn' type="submit">Забронировать стол</button>
                  {message && <p style={{margin: 0, paddingTop: '10px', color: '#FFFFFF', paddingLeft: '35px'}} className={message.includes('ошибка') ? 'error' : 'success'}>{message}</p>}
               </form>

         </div>
     </div>
  )
}

export default Form