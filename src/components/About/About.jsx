import React from "react";
import "./about.scss";
import aboutImg from "../../assets/images/about-img.webp";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
   return (
      <section className="about" id='about'>
         <div className="about__container container">
            <div className="about__img-wrapper">
               <img className="about__img" src={aboutImg} alt="Портретне фото" />
            </div>
            <div className="about__info">

               <SectionTitle background={'section-title--background'} title={'Про мене'} />


               <p className="about__description">Я — Front-end розробник, створюю адаптивні та стабільні сайти.</p>
               <p className="about__description">Верстаю за методологією БЕМ і завжди орієнтуюсь на стабільність інтерфейсу: контент змінюється — дизайн залишається чітким.</p>
               <p className="about__description">Працюю з HTML, CSS, SCSS, JavaScript, PHP, React, Flexbox та Grid. </p>
               <p className="about__description">У минулому працювала з CMS WordPress та Joomla, створила інтернет-магазин на WooCommerce.</p>
               <p className="about__description">Зараз розвиваюсь у напрямку React і планую пов’язати з ним подальшу кар’єру </p>
            </div>
         </div>
      </section>

   )
}

export default About