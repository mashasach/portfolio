import React from 'react';
import './header.scss';
import Button from '../Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useState, useEffect } from 'react';
import classNames from 'classnames';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
   };
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50 && window.innerWidth >= 768) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      // виклик одразу після монтування для перезавантажнння внизу сторінки
      handleScroll();
      // розмонтування
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // 

   useEffect(() => {
      if (isMenuOpen) {
         document.body.classList.add("menu-open");
      } else {
         document.body.classList.remove("menu-open");
      }
   }, [isMenuOpen]);

   return (
      <>
         <header className={classNames('header', { 'header--scrolled': scrolled })}>
            <div className="header__container container ">
               <nav className={classNames('header__menu', { 'header__menu--active': isMenuOpen })} >
                  <ul className='header__menu-list'>
                     <li className="header__menu-item">
                        <a className="header__menu-link" href='#about' onClick={() => setIsMenuOpen(false)} >Про мене</a>
                     </li>
                     <li className="header__menu-item">
                        <a className="header__menu-link" href='#skills' onClick={() => setIsMenuOpen(false)} >Навички</a>
                     </li>
                     <li className="header__menu-item">
                        <a className="header__menu-link" href='#projects' onClick={() => setIsMenuOpen(false)} >Проекти</a>
                     </li>
                     <li className="header__menu-item">
                        <a className="header__menu-link" href='#contacts' onClick={() => setIsMenuOpen(false)} >Контакти</a>
                     </li>

                  </ul>
               </nav>


               <Button />
               <BurgerMenu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
         </header>
      </>
   )
}

export default Header