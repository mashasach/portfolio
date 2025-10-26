import React from 'react'
import './skillsCard.scss';

export const SkillsCard = ({ skillsTitle, skillsItem, skillsBackground }) => {
  return (
    <div className={`skills__card ${skillsBackground}`}>
      <h4 className="skills__title">{skillsTitle}</h4>
      <ul className="skills__items">
        {skillsItem.map((skill, index) => (
          <li className='skills__item' key={index}>{skill}</li>
        ))
        }

      </ul>
    </div>
  )
}

export default SkillsCard;