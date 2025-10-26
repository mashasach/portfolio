import './runningLine.scss'
import React from 'react'
import Marquee from "react-fast-marquee";

const RunningLine = () => {
   return (

      <div className="running-items">

         <Marquee speed={7} gradient={false} autoFill>
            <p className="running__item" >HTML</p>
            <p className="running__item" >SCSS</p>
            <p className="running__item" >JS</p>
            <p className="running__item" >REACT</p>
            <p className="running__item" >PHP</p>
            <p className="running__item" >Figma</p>
            <p className="running__item" >Adobe Illustrator</p>
            <p className="running__item" >Grid</p>
            <p className="running__item" >FlexBox</p>
            <p className="running__item" >Adobe Photoshop</p>
            <p className="running__item" >Wordpress</p>
            <p className="running__item" >CSS</p>
            <p className="running__item" >Joomla</p>
         </Marquee>

      </div>

   )
}

export default RunningLine