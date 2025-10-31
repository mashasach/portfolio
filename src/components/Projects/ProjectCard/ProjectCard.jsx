import React from 'react'
import './projectCard.scss'



const ProjectCard = ({ project }) => {

   const BASE_URL = import.meta.env.BASE_URL;
   const SPRITE_URL = `${BASE_URL}sprite.svg?v-2#`;
   return (
      <a
         href={project.link}
         className="project__link-wrapper"
         rel="noopener noreferrer"
      >
         <div className="project__card">
            <img className="project__img" src={project.img} alt="Скріншот проекту" />
            <h4 className="project__card-title">{project.projectTitle}</h4>
            <p className="project__description">{project.projectDescription}</p>
            <div className="project__arrow-wrapper">
               <svg className="project__arrow" width="20" height="20" fill="currentColor">
                  <use href={`${SPRITE_URL}icon-arrow-right`} />
               </svg>
            </div>
         </div>

      </a>





   )
}

export default ProjectCard