
import React from 'react'
import './qualities.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import SwiperSlider from './Swiper/SwiperSlider';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';


const myData = [
   { quality: 'Наполеглевість' },
   { quality: 'Уважність до побажань замовника' },
   { quality: 'Неконфліктність' },
   { quality: 'Вчуся щодня' },
   { quality: 'Завжди рада допомогти' },
   { quality: 'Вимоглива до деталей' },
   { quality: 'Люблю котиків і код :)' }
];


const Qualities = () => {
   return (

      <div className='qualities'>
         <AnimatedOnScroll>  <div className="qualities__title container">
            <div className="qualities__title-wrapper">
               <SectionTitle title={'Мої якості'} background={'section-title--background'} position={'section-title--right'} />
            </div>

         </div>
         </AnimatedOnScroll>

         <div className="qualities__slider-background">
            <AnimatedOnScroll> <div className="qualities__slider-wrapper">
               <div className="qualities-swiper">
                  <SwiperSlider items={myData} />
               </div>
            </div>
            </AnimatedOnScroll>


         </div>

      </div>

   )
}

export default Qualities

