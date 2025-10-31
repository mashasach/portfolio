import React from 'react'
import './footer.scss'
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';
const BASE_URL = import.meta.env.BASE_URL;
const SPRITE_URL = `${BASE_URL}sprite.svg?v-2#`;

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__wrapper container">
            <div className="footer__address"><AnimatedOnScroll>м. Київ</AnimatedOnScroll></div>
            <a className="footer__phone" href="tel:+380633243396"><AnimatedOnScroll>+380 (63) 324-33-96</AnimatedOnScroll></a>
            <a className="footer__email" href="mailto:mashasachenko.dev@gmail.com"><AnimatedOnScroll>mashasachenko.dev@gmail.com</AnimatedOnScroll></a>
            <div className="footer__icons">

               <AnimatedOnScroll>
                  <a href="https://t.me/masha_raccoon" target="_blank" rel="noopener noreferrer">
                     <svg className="footer__telegram" width="40" height="40" fill="currentColor">
                        <use href={`${SPRITE_URL}icon-telegram`} />
                     </svg>
                  </a>
               </AnimatedOnScroll>


               <AnimatedOnScroll>
                  <a href="viber://chat?number=%2B80633243396">
                     <svg className="footer__viber" width="40" height="40" fill="currentColor">
                        <use href={`${SPRITE_URL}icon-viber`} />
                     </svg>
                  </a>
               </AnimatedOnScroll>
            </div>
         </div>

      </div>
   )
}

export default Footer