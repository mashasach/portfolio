import './contacts.scss'
import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import contactsImg from '../../assets/images/contactsImg.webp'


const Contacts = () => {
   return (
      <div className="contacts" id='contacts'>
         <div className="contacts__wrapper container">

            <div className="contacts__title">
               <SectionTitle title='Контакти' background={'section-title--background'} />
            </div>

            <div className="contacts__content">

               <div className="contacts__info">

                  <div className="contacts__phone"> <div className="contacts__icon-svg">
                     <svg className="icon icon-phone" width="40" height="40" fill="currentColor">
                        <use href="/sprite.svg#icon-phone" />
                     </svg>
                  </div>
                     <div className="contacts__phone-wrapper">
                        <p className="contacts__phone-title  " >Телефон:</p>
                        <a className="contacts__phone-text" href="tel:+380633243396">+380 (63) 324-33-96</a>
                     </div>
                  </div>

                  <div className="contacts__email"> <div className="contacts__icon-svg">
                     <svg className="icon icon-message" width="40" height="40" fill="currentColor">
                        <use href="/sprite.svg#icon-message" />
                     </svg>
                  </div>
                     <div className="contacts__email-wrapper">
                        <p className="contacts__email-title" >E-mail:</p>
                        <a className="contacts__email-text" href="mailto:mshasachenko1807@gmail.com">MashaSachenko1807@gmail.com</a>
                     </div>
                  </div>

                  <div className="contacts__address">
                     <div className="contacts__icon-svg">
                        <svg className="icon icon-location" width="40" height="40" fill="currentColor">
                           <use href="/sprite.svg#icon-location" />
                        </svg>
                     </div>
                     <div className="contacts__address-wrapper">
                        <div className="contacts__address-title">Адреса:</div>
                        <div className="contacts__address-text">м. Київ</div>
                     </div>
                  </div>



               </div>
               <div className="contacts__img-wrapper">
                  <img className="contacts__img" src={contactsImg} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contacts