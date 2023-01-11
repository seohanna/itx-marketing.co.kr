import React, { useState } from "react";
import styled from "styled-components";
import trademark from '../img/common/trademark.png';
import closebtn from '../img/common/eventCloseBtn.png';
import PdfViewer from "../components/PdfViewer";
import pdf from '../pdf/trademark.pdf';
import closeBtn from '../img/common/closeBtnWhite.svg';

const Container = styled.div`
  width: 300px;
  height: 226px;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  @media (max-width: 700px) {
    bottom: 12%;
    right: -4%;
    width: 120px;
    height: 90px;
  }
`;
const ContentImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${trademark});

`;
const Title = styled.h2`
  font-size: 15px;
  color: #424242;
  transform: translate(14%, 390%);
  .br {
    display: none;
  }
  @media (max-width: 700px) {
    font-size: 10px;
    transform: translate(-15%, 100%);
    text-align: center;
    .br {
      display: block;
    }
  }

`;
const CloseBtn = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 10%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${closebtn});
  @media (max-width: 700px) {
    display: none;
  }
`;

const PdfContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,.3);
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 10%;
  color: transparent;
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${closeBtn});
  
  @media (max-width: 700px) {
    width: 35px;
    height: 35px;
    right: 5%;
    top: 10%;
  }
`;

function EventBanner({handleClose, close}) {
  const [pdfViewer, setPdfViewer] = useState(false);
  const open = () => {
    setPdfViewer(true);
  }
  const pdfClose = () => {
    setPdfViewer(false);
  }
  return (
    <>
      {close && (
        <Container>
          <CloseBtn onClick={handleClose} />
          <ContentImageBox onClick={open}>
            <Title>보험플러스 <br className="br"/>상표권 등록</Title>
          </ContentImageBox>
        </Container>
      )}
      {pdfViewer && (<PdfContainer>
      <Button onClick={pdfClose}>닫기</Button>
        <PdfViewer file={pdf} />
      </PdfContainer>)}
    </>
  )
}

export default EventBanner