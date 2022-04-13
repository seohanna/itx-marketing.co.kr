import styled from "styled-components";
import React, { useState } from "react";
import logo from "../img/common/footLogo.svg";
import pdf1 from '../pdf/privacy.pdf';
import pdf2 from '../pdf/service.pdf';
import pdf3 from '../pdf/life_insurance.pdf';
import pdf4 from '../pdf/general_insurance.pdf';
import pdf5 from '../pdf/consumer_protection.pdf';
import pdf6 from '../pdf/internal_control.pdf';
import closeBtn from '../img/common/closeBtnWhite.svg';
import PdfViewer from "../components/PdfViewer";


const Footer = () => {
  const [pdfViewer, setPdfViewer] = useState(false);
  const [pdfViewer2, setPdfViewer2] = useState(false);
  const [pdfViewer3, setPdfViewer3] = useState(false);
  const [pdfViewer4, setPdfViewer4] = useState(false);
  const [pdfViewer5, setPdfViewer5] = useState(false);
  const [pdfViewer6, setPdfViewer6] = useState(false);

  const open = () => {
    setPdfViewer(true);
  }
  const open2 = () => {
    setPdfViewer2(true);
  }
  const open3 = () => {
    setPdfViewer3(true);
  }
  const open4 = () => {
    setPdfViewer4(true);
  }
  const open5 = () => {
    setPdfViewer5(true);
  }
  const open6 = () => {
    setPdfViewer6(true);
  }
  const close = () => {
    setPdfViewer(false);
  }
  const close2 = () => {
    setPdfViewer2(false);
  }
  const close3 = () => {
    setPdfViewer3(false);
  }
  const close4 = () => {
    setPdfViewer4(false);
  }
  const close5 = () => {
    setPdfViewer5(false);
  }
  const close6 = () => {
    setPdfViewer6(false);
  }
  return (
    <>
    <Footers>
      <div>
        <Logo></Logo>
        <FooterMenu>
        <ul>
          <Li onClick={open}>개인정보처리방침</Li>
          <Li onClick={open2}>이용약관</Li>
          <Li onClick={open3}>생명보험 대리점등록증</Li>
          <Li onClick={open4}>손해보험 대리점등록증</Li>
          <Li onClick={open5}>금융소비자보호기준</Li>
          <Li onClick={open6}>금융소비자보호 내부통제기준</Li>
        </ul>
        <ul> 
          <Li>서울시 영등포구 양평로68 8층(당산동6가 디엔빌딩) 아이티엑스마케팅㈜</Li>
          <Li>등록번호 2011120170</Li>
          <Li>대표이사 : 전병무</Li>
          <Li>사업자등록번호 : 107-87-60713</Li>
        </ul>
        </FooterMenu>
      </div>
      <p>
        Copyrightⓒ ITX Marketing. All Rights Reserved
      </p>
     
      
    </Footers>
     {pdfViewer ? (<PdfContainer>
      <Button onClick={close}>닫기</Button>
        <PdfViewer file={pdf1} />
      </PdfContainer>) : 
      pdfViewer2 ? (<PdfContainer><Button onClick={close2}>닫기</Button><PdfViewer file={pdf2} /></PdfContainer>) : 
      <>
        {pdfViewer3 ? (<PdfContainer><Button onClick={close3}>닫기</Button><PdfViewer file={pdf3} /></PdfContainer>) : 
        <>
          {pdfViewer4 ? (<PdfContainer><Button onClick={close4}>닫기</Button><PdfViewer file={pdf4} /></PdfContainer>) : 
          <>
            {pdfViewer5 ? (<PdfContainer><Button onClick={close5}>닫기</Button><PdfViewer file={pdf5} /></PdfContainer>) : 
            <>
              {pdfViewer6 ? (<PdfContainer><Button onClick={close6}>닫기</Button><PdfViewer file={pdf6} /></PdfContainer>) : null}
            </>}
          </>}
        </>}
      </>}
    </>
  );
};

export default Footer;

const PdfContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  z-index: 999;
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
`;


const Footers = styled.footer`
  color: #FFFFFF;
  background-color: #323232;
  font-size: 0.65rem;
  font-weight: 400;
  width: 100%;
  padding: 3.05% 0 2.44% 7.8125%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  line-height: 20px;
  @media (max-width: 700px) {
    font-size: 0.625rem;
    padding: 12% 12.8% 10% 5.33%;
    line-height: 18.75px;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 30.67px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  margin-bottom: 1.8%;

  @media (max-width: 700px) {
    width: 130px;
    height: 20px;
    margin-bottom: 30px;
  }
`;
const FooterMenu = styled.div`
  width: 100%;
 
  > ul {
    display: flex;
    flex-wrap: wrap;
  }
  > ul:last-child {
    width: 30%;
    padding-bottom: 3.03%;
    >li:nth-child(2)::after {
      display: none;
    }
    @media (max-width: 700px) {
      width: 100%;
      padding-bottom: 70px;
      >li:nth-child(2)::after {
      display: block;
      }
      >li:first-child::after {
      display: none;
      }
    }
  }
`;

const Li = styled.li`
  list-style: none;
  position: relative;
  margin-right: 15px;
  position: relative;
  cursor: pointer;

  @media (max-width: 700px) {
    margin-right: 10px;
  }
  :last-child::after{
    display: none;
    margin-right: 0;
  }
 
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 9px;
    background-color: #ffffff;
    position: absolute;
    top: 5.5px;
    right: -7.5px;

    @media (max-width: 700px) {
    top: 4px;
    right: -5px;
    height: 8px;
    }  
  }
`;

