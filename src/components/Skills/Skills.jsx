import React from 'react';
import { SkillsCard } from './SkillsCard/SkillsCard';
import './skills.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';

const Skills = () => {
   return (
      <section className="skills" id='skills'>
         <AnimatedOnScroll>
            <div className="skills__container container">
               <SectionTitle title={'Навички'} />
               <div className="skills__cards">
                  <SkillsCard skillsTitle="Адаптивність"
                     skillsItem={['FlexBox', 'Grid', 'Bootstrap']} />
                  <SkillsCard skillsTitle="Графічні редактори та дизайн інтерфейсів"
                     skillsItem={['Adobe Photoshop', 'Adobe Illustrator', 'Figma']} />
                  <SkillsCard skillsTitle="Мови програмування та розмітки, бібліотеки"
                     skillsItem={['HTMI', 'CSS', 'SCSS', 'PHP', 'REACT']} skillsBackground={'skills__background'} />
                  <SkillsCard skillsTitle="СMS"
                     skillsItem={['WordPress', 'Joomla']} />
               </div>
            </div>
         </AnimatedOnScroll>
      </section>
   )
}

export default Skills