import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Reg from './register';
import Footer from './footer';
import AboutUs from './about us';
import Application from './application';
import Slides from './reslides'
export default function Navigate() {
  return (
    <div> 
     <Routes>
     <Route path='/' element={<Application/>}/>
     <Route path='navbar' element={<Navbar/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='register' element={<Reg/>}/>
     <Route path='aboutus' element={<AboutUs/>}/>
     <Route path='footer' element={<Footer/>}/>
      <Route path='slide' element={<Slides/>}/>
     </Routes>
    </div>
  );
}