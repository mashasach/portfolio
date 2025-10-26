import React from 'react'
import heroAvatar from '../../assets/images/heroAvatar.webp'
import Button from '../Button/Button';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
import './hero.scss';
const Hero = () => {
   return (
      <section className='hero'>
         <AnimatedOnScroll opacity={true}>
            <div className="hero__container container">

               <div className="hero__info">
                  <p className="hero__greeting">Вітаю,</p>
                  <h1 className="hero__name">я Саченко Марія,</h1>
                  <h2 className="hero__position">Frontend Developer</h2>
                  <div className="hero__button">
                     <Button />
                  </div>

               </div>
               <div className="hero__avatar-wrapper">
                  <img className="hero__avatar" src={heroAvatar} alt="Портретне фото" />
               </div>

            </div>
         </AnimatedOnScroll>
      </section>
   )
}

export default Hero