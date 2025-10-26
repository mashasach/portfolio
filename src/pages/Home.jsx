import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Qualities from '../components/Qualities/Qualities';
import { Projects } from '../components/Projects/Projects';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import AnimatedOnScroll from '../components/AnimatedOnScroll/AnimatedOnScroll';
import RunningLine from '../components/RunningLine/RunningLine';


const Home = () => {
   return (
      <>


         <Hero />
         <AnimatedOnScroll>
            <About />
         </AnimatedOnScroll>
         <Skills />
         <RunningLine />
         <Qualities />
         < Projects />
         <AnimatedOnScroll>
            <Contacts />
         </AnimatedOnScroll>
         <Footer />


      </>

   )
}

export default Home