
import React from 'react';
import './Header.css';
import logo from './Images/portlogoImg.jpg'




const Header = () => {
   
    const handleToggle = () => {
        document.body.classList.toggle('nav-open');
    }

    const removeToggle = () => {
        document.body.classList.remove('nav-open')
    }







    return (
        <div className="header">
             <header>
             <img className="logo"  alt="" src={logo} data-aos="flip-up"/>
               
                 <button className="nav-toggle" aria-label="toggle navigation" onClick={handleToggle}>
                     <span className="hamburger"></span>
                 </button>
                 <nav className="nav">
                     <ul className="nav__list" onClick={removeToggle} >
                         <li className="nav__item"><a href="#home"  className="nav__link">Home</a></li>
                         <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                          <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                          <li className="nav__item"><a href="#works" className="nav__link">My Works</a></li>
                     </ul>
                 </nav>

             </header>
        </div>
    )
}

export default Header
