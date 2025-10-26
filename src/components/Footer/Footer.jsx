import React from 'react'
import './footer.scss'
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__wrapper container">
            <div className="footer__address"><AnimatedOnScroll>м. Київ</AnimatedOnScroll></div>
            <a className="footer__phone" href="tel:+380633243396"><AnimatedOnScroll>+380 (63) 324-33-96</AnimatedOnScroll></a>
            <a className="footer__email" href="mailto:mashasachenko1807@gmail.com"><AnimatedOnScroll>MashaSachenko1807@gmail.com</AnimatedOnScroll></a>
            <div className="footer__icons">

               <AnimatedOnScroll>
                  <a href="https://t.me/masha_raccoon" target="_blank" rel="noopener noreferrer">
                     <svg className="footer__telegram" width="40" height="40" fill="currentColor">
                        <use href="/sprite.svg?v-2#icon-telegram" />
                     </svg>
                  </a>
               </AnimatedOnScroll>


               <AnimatedOnScroll>
                  <a href="viber://chat?number=%2B80633243396">
                     <svg className="footer__viber" width="40" height="40" fill="currentColor">
                        <use href="/sprite.svg?v-2#icon-viber" />
                     </svg>
                  </a>
               </AnimatedOnScroll>
            </div>
         </div>

      </div>
   )
}

export default Footer