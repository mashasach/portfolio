import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

const Button = () => {
   return (
      <Link className="button-resume" to="/resume">Дивитись резюме</Link>
   )
}

export default Button