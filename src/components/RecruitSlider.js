import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";

import { Link } from 'react-router-dom';   
import styled from "styled-components";
import visual from "../img/main/recruitVisual.png";
import  { ReactComponent as PlusBtn } from '../img/common/PlusBtn.svg';

const Card = [
  {
    id: 0,
    title: '개인영업(FP)',
    url: '/recruit'
  },
  {
    id: 1,
    title: '법인컨설턴트',
    url: '/recruit'
  },
  {
    id: 2,
    title: '전문가그룹',
    url: '/recruit'
  },
  {
    id: 3,
    title: '정규직',
    url: '/recruit'
  }
]
const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 15.7% 0 10%;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 28.5% 0 80%;
  }
`;

const SectionTitle = styled.div`
  margin-left: 5.333333333333333%;
  > h2 {
    font-size: 3.13vw;
    color: #1A1A1A;
    padding-bottom: 1.4%;
    border-bottom: 3px solid #1A1A1A;
    > span {
      display: inline-block;
      font-weight: 300;
    }
  }
 > p {
    position: absolute;
    font-size: 1.25rem;
    color: #444444;
    padding-top: 1.1%
  }
  @media (max-width: 700px) {
    padding-bottom: 5.7%;
  > h2 {
      font-size: 1.25rem;
      border-bottom: 2px solid #1A1A1A;
    }
  > p {
      font-size: 0.8125rem;
      line-height: 14.47px;
      position: static;
    }
  }
`;

const VisualBox = styled.div`
  width: 100%;
  margin-left: 29.5%;
  padding-top: 50%;
  background-image: url(${visual});
  background-repeat: no-repeat;
  background-position: 33.5% 1%;
  background-size: 132%;

  @media (max-width: 700px) {
    padding-top: 123%;
    margin-left: 0;
    background-size: 250%;
    background-position: 30% 0;
  }
`;
const SwiperContainer = styled.div`
  background-color: #F8F8F8;
  border-radius: 366.5px 0 0 366.5px;
  margin-left: 12.2%;
  @media (max-width: 700px) {
    left: 4%;
    top: 60%;
  }
`;
const StyleSwiper = styled(Swiper)`
  padding: 6.1% 0 6.1% 1.815087918321044%;
  /* width: 91.82291666666667%; */
  /* width: 1763px; */
  @media (max-width: 700px) {
    padding: 6.1% 0 6.1% 1%;
  }

  .swiper-slide {
    background-color: #FFFFFF;
    border-radius: 46px;
    display: flex;
    justify-content: space-between;
    padding: 4% 2.5% 15% 2%;
    cursor: pointer;
    font-size: 1.5rem;
    color: #323232;
    font-family: 'GoyangDeogyang';

    @media (max-width: 700px) {
      width: 25.68493150684932%;
      font-size: 0.8125rem;
      letter-spacing: -2.5%;
      border-radius: 15px;
      padding: 4% 2%;
      
      > p {
        line-height: 15px;
      }
    }
  }
  .swiper-slide-active {
    background-color: #B8292D;
    color: #FFFFFF;
    padding-bottom: 20%;
    @media (max-width: 700px) {
      height: 209px;
    }
  }
  .plus-btn{
      stroke: #323232;
      width: 45px;
      height: 45px;
      @media (max-width: 700px) {
      width: 15px;
      height: 15px;
      }
  }
  .swiper-slide-active .plus-btn {
    stroke: #FFFFFF;

  }
`;

const RecruitSlider = () => {
  
  const sliderRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const swiperHandle = () => {
    console.log(swiper);
  }  
  const swiperParams = {
    onSwiper: setSwiper,
    // loop: false,
    // speed: 1000,
    // spaceBetween: 6,
    // slidesPerView: 2.5,
    // centeredSlides: true,         
    // breakpoints: {
    //   700: {
        loop: true,
        speed: 1000,
        slideToClickedSlide: true,
        centeredSlides: false, 
        slidesPerView: 4,
        spaceBetween: 55,
        allowTouchMove: false,
        // pagination: {
        //   clickable: true,
        // }
      
    }
 

  return (
      <SectionContainer>
        <SectionTitle>
          <h2>
            <strong style={{color:"#C22229"}}>R</strong>
            e<strong>C</strong>
            r<strong>UIT</strong> 
            <span>&nbsp;ITX Marketing</span>
          </h2>
          <p>ITX 마케팅과 함께할 다양한 분야의 전문가를 기다립니다.</p> 
        </SectionTitle> 
        <VisualBox />
          <SwiperContainer>
          <StyleSwiper 
            {...swiperParams}
          >
            {Card.map((dt) => (
              <SwiperSlide 
                key={dt.id} 
                onClick={swiperHandle}
                ref={sliderRef}
              >
                <p>{dt.title}</p>
                <Link to={dt.url}>
                  <PlusBtn className="plus-btn"/>
                </Link>
              </SwiperSlide>
            ))}
            </StyleSwiper>
          </SwiperContainer>
   
      </SectionContainer>
  );
};

export default RecruitSlider;





