import React from 'react';
import peter from './Images/peterImg.jpg';
import peter01 from './Images/dev_peteImg.jpg';
import weather from './Images/weatherImg.jpg'
import firegram from './Images/firegramImg.jpg'
import recipes from './Images/recipeImg.jpg'
import gpa from './Images/gpaImg.jpg'



const Intro = () => {

    return (
        <div>
             <section className="intro" id="home" >
            <h1 className="section__title section__title--intro" >
                Hi, I am <strong > Ikechukwu Peter</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro" data-aos="slide-up">front-end dev</p>
            <img  src={peter} alt="Ikechukwu Peter smiling" className="intro__img" />
            </section>

            {/* My services */}
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services" data-aos="slide-down" >What I do</h2>
                <div className="services" data-aos="fade">
                <div className="service" data-aos="fade-right">
                    <h3>Design + Web Dev</h3>
                    <p>I design great websites, using awesome designing tools, not only do I design 
                        I also make sure that they are developed to perfection.

                    </p>
                </div>
                <div className="service" data-aos="fade-down">
                    <h3>E-Commerce</h3>
                    <p> Many business need online presence and online store , I render my service by building great E-commerce sites, 
                        SEO friendly with payment gateway efficiently integrated.
                        
                     </p>
                </div>
                <div className="service" data-aos="fade-left">
                    <h3>Wordpress and Wix</h3>
                    <p>
                                                
                       I have expertise in using <strong>Content Management System</strong> (CMS), I will build great CMS sites for
                       you within a short span.
                        
                    </p>
                </div>
                </div>
                
                <a href="#works"  className="btn" data-aos="slide-up">My Work</a>
            </section>
            {/* ABout me */}

            <section className="about-me" id="about">
                <h2 className="section__title section__title--about" data-aos="zoom-in">Who I am</h2>
                <p className="section__subtitle section__subtitle--about" data-aos="flip-down">Web Developer</p>
                

                <div className="about-me__body" data-aos="fade-right">
                <p>
                I am <em>Ikechukwu Peter</em>,  a software engineer hailing from Lagos,  Nigeria.
                
                </p>
                 <p>
                                                
                   I work with the following frontend technologies, HTML, CSS, Boostrap, SASS,
                   Javascript and ReactJs.
                 </p>
                   
                </div>
                <img src={peter01} alt="Peter standing beside a car " 
                    className="about-me__img" />     
            </section> 
                        {/* My Works */}
             <section className="my-work" id="works">
                <h2 className="section__title" data-aos="slide-downss">My Works</h2>
                <p className="section__subtitle section__subtitle--work" data-aos ="slide-up"> A selection of my range of works</p>
                
                <div className="portfolio" id="work" data-aos="fade-up">

                   <a href="https://weather4.netlify.com/" className="portfolio__item">
                       <img src={weather} alt="Click to visit my weather project" className="portfolio__img" />
                   </a>
                   <a href="https://recipesforfood.netlify.com" className="portfolio__item">
                       <img src={recipes} alt="Click to visit my food recipes project" className="portfolio__img" />
                   </a>
                   <a href="https://firregram.netlify.com/" className="portfolio__item">
                       <img src={firegram} alt="click to visit my instagram like project" className="portfolio__img" />
                   </a>
                   <a href="https://gpa-cal.netlify.com" className="portfolio__item">
                       <img src={gpa} alt="Click to visit my GPA calculator site" className="portfolio__img" />
                   </a>
                   
                 
               </div>
            

            </section> 
        </div>
       
    )
}

export default Intro;
