import React from 'react'
import './sectionTitle.scss'

const SectionTitle = ({ background, title }) => {
   return (
      <h3 className={`section-title ${background} `}>{title}</h3>
   )
}

export default SectionTitle