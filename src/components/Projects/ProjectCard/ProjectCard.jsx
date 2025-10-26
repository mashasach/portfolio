import React from 'react'
import './projectCard.scss'



const ProjectCard = ({ project }) => {
   return (

      <div className="project__card">
         <img className="project__img" src={project.img} alt="Скріншот проекту" />
         <p className="project__description">{project.projectDescription}</p>
         <div className="project__arrow-wrapper">
            <svg className="project__arrow" width="20" height="20" fill="currentColor">
               <use href="/sprite.svg#icon-arrow-right" />
            </svg>
         </div>

      </div>




   )
}

export default ProjectCard