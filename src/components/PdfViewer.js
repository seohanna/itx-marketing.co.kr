import { pdfjs, Document, Page } from 'react-pdf';
import React, { useState } from "react";
import styled from "styled-components";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function PdfViewer({file}) {
  
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber-1)
    } 

  }
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber+1)
    }

  }
  return (
    <ViewContainer>
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
      <PageWrap>
        <span onClick={prevPage}>&#60;&#60;&nbsp;&nbsp;</span>
        <span>{pageNumber} / {numPages}&nbsp;&nbsp;</span>
        <span onClick={nextPage}>&#62;&#62;</span>
      </PageWrap>
    </Document>
  </ViewContainer>
    
 
  );
}

export default PdfViewer;

const ViewContainer = styled.div`



`;


const PageWrap = styled.div`
  position: absolute;
  bottom: 5%;
  right: 30%;
  font-size: 1.25rem; 
  background-color: #F0F0F0;
  border-radius: 5px;
  padding: 1%;
  box-shadow: 0px 22px 29px rgba(0, 0, 0, 0.15);
`;