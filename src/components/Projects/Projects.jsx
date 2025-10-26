import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './projects.scss'
import ProjectCard from './ProjectCard/ProjectCard'
import project1 from "../../assets/images/project1.webp";
import AnimatedOnScroll from '../AnimatedOnScroll/AnimatedOnScroll';

export const Projects = () => {
   const myProjects = [
      { projectDescription: 'Про проект, Про проект,Прот Про проект, Про проект,Про проект Про проект, Про проект,Про проект', img: project1 },
      { projectDescription: 'Про проект, Про проект,Про проект', img: project1 },
      { projectDescription: 'Про проект, Про проект,Про проект Про проект, Про проект,Про проект', img: project1 },
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
