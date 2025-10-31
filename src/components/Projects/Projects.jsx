import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './projects.scss'
import ProjectCard from './ProjectCard/ProjectCard'
import desire from "../../assets/images/desire.webp";
import growfy from "../../assets/images/growfy.webp";
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';

export const Projects = () => {
   const myProjects = [
      { projectTitle: 'Growfy', projectDescription: 'Single Page Application, React + Vite, з реалізацією багатосторінкової навігації через React Router.', img: growfy, link: 'https://mashasach.github.io/growfy/' },
      { projectTitle: 'Desire', projectDescription: 'Багатосторінковий адаптивний сайт, створений за допомогою Gulp для автоматизації збірки, компіляції SASS та мініфікації коду.', img: desire, link: 'https://mashasach.github.io/furniture/' }


   ]
   return (
      <div className="projects" id='projects'>
         <div className="projects__wrapper container ">
            <AnimatedOnScroll>
               <div className="projects__title ">
                  <SectionTitle title={'Проекти'} background={'section-title--background'} />
               </div>
               <div className="projects__cards ">
                  {myProjects.map((project, index) => (
                     <ProjectCard key={index} project={project} />
                  ))}
               </div>
            </AnimatedOnScroll>





         </div>
      </div>
   )
}
