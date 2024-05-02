import React from 'react'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info';
import './HeaderPages.css'
import Menu from '../../components/Menu/Menu';
import PhotoGall from '../../components/PhotoGall/PhotoGall';
import Video from '../../components/Video/Video';
import Desc from '../../components/Desc/Desc';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const HeaderPages = () => {
  return (
    <div className='block' >
        <Header/>
        <Info/>
        <Menu/>
        <PhotoGall/>
        <Video/>
        <Desc/>
        <Form/>
        <Footer/>
        <Navbar/>
    </div>
  )
}

export default HeaderPages