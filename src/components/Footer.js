import React from 'react';
import './Footer.css'
import {FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {

   

    return (
        <div data-aos="slide-up">
            <footer className="footer" >
              
                <ul className="social-list">
                <li className="social-list__item">
                        
                        <a className="social-list__link" href="mailto:ikechukwupeter1999@gmail.com">
                        < FaEnvelope  />
                        </a>
                        </li>

                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com/ikechukwu-peter">
                       < FaGithub />
                       
                        </a>
                  </li>
                    <li className="social-list__item">
                        
                        <a className="social-list__link" href="https://www.linkedin.com/in/">
                        < FaLinkedin />
                        </a>
                        </li>
                    <li className="social-list__item">
                        
                        <a className="social-list__link" href="https://twitter.com/">
                       < FaTwitter />
                        </a>
                        </li>
                    <li className="social-list__item">
                        
                        <a className="social-list__link" href="https://web.facebook.com/">
                        < FaFacebook />
                         </a>
                         </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
