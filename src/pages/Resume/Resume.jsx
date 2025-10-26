import React from 'react'

//import ResumeSachenko from '../../public/files/ResumeSachenko.pdf';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom'
import './resume.scss'
import '../../components/Button/button.scss'
import PdfViewer from "../../components/PdfViewer/PdfViewer";



const Resume = () => {

   return (
      <div className='resume'>
         <div className="resume__container container" >

            <div className="resume__header">
               <Link className="resume__to-home" to="/">
                  <svg className="project__arrow" width="20" height="20" fill="currentColor">
                     <use href="/sprite.svg#icon-arrow-left" />
                  </svg>
                  <p>Назад до портфоліо </p>
               </Link>

               <div className="resume__button-wrapper">
                  <a
                     href="/files/ResumeSachenko.pdf"
                     download="Resume-Sachenko.pdf"
                     className="button-resume"
                  >
                     Завантажити резюме
                  </a>
               </div>
            </div>
            <div className="resume__title">
               <SectionTitle title='Резюме' />
            </div>
            <div className="resume__pdf-wrapper">
               <div className="resume__pdf">
                  <PdfViewer fileUrl="/files/ResumeSachenko.pdf" />
               </div>
            </div>




         </div>

      </div >
   )
}

export default Resume