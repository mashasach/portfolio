import React from 'react';
import './header.scss';
import Button from '../Button/Button';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { HashLink } from 'react-router-hash-link';

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
                        <HashLink className="header__menu-link" to="/#about" onClick={() => setIsMenuOpen(false)} >Про мене</HashLink>
                     </li>
                     <li className="header__menu-item">
                        <HashLink className="header__menu-link" to="/#skills" onClick={() => setIsMenuOpen(false)} >Навички</HashLink>
                     </li>
                     <li className="header__menu-item">
                        <HashLink className="header__menu-link" to="/#projects" onClick={() => setIsMenuOpen(false)} >Проекти</HashLink>
                     </li>
                     <li className="header__menu-item">
                        <HashLink className="header__menu-link" to="/#contacts" onClick={() => setIsMenuOpen(false)} >Контакти</HashLink>
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