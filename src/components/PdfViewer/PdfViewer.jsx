import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { BeatLoader } from 'react-spinners';

import '@react-pdf-viewer/core/lib/styles/index.css';
import './pdfViewer.scss';

const workerUrl = `/pdf.worker.js`;


const PdfViewer = ({ fileUrl, workerUrl }) => {

   const renderCustomLoader = (tasks) => (
      <div className="pdf-custom-loader">
         <BeatLoader size={15} color="#3498db" />
      </div>
   );

   return (
      <Worker workerUrl={workerUrl}>
         <div className="pdf__viewer-wrapper">
            <Viewer
               fileUrl={fileUrl}
               renderLoader={renderCustomLoader}
               workerUrl={workerUrl}
            />
         </div>
      </Worker>
   );
};

export default PdfViewer;