import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper";

import icon1 from "../img/main/insurancePlus.svg";
import icon2 from "../img/main/corporateConsulting.svg";
import icon3 from "../img/main/inheritanceResearch.svg";
import rectangle from "../img/main/Rectangle.svg";
import { gsap } from "gsap"
import styled from 'styled-components';

const card = [
  {
    id: 0,
    title: '보험플러스',
    description: '병원, 마트 등 고객친화형 플랫폼\n보장분석 등 total 보험서비스 제공',
    icon: icon1,
  },
  {
    id: 1,
    title: '법인컨설팅',
    description: '중소기업과 개인사업자의\n안정적인 기업경영을 위한 컨설팅',
    icon: icon2,
  },
  {
    id: 2,
    title: '상속증여연구소',
    description: '상속 및 증여에 대한\n절세 방법 제시',
    icon: icon3,
  }
]
const SectionContainer = styled.div`
  width: 100%;
  padding: 8.08% 0 0;
  background-color: #F8F8F8;
  position: relative;

  @media(max-width: 700px) {
    padding: 19.8% 0 16% 0;
  }
`;
const TitleBox = styled.div`
  text-align: center;
  > h3 {
    font-size: 3rem;
    line-height: 3.4rem;
    color: #323232;

    @media (max-width: 700px) {
    font-size: 1.25rem;
    line-height: 1.41rem;
    }
  }
  > p {
    padding-top: 1.7vh;
    font-size: 1.25rem;
    white-space: nowrap;

    @media (max-width: 700px) {
    font-size: 0.8125rem;
    line-height: 0.904375rem;
    padding-top: 10px;
    }    
  }
`;
const StyleSwiper = styled(Swiper)`
  width: 100%;
  flex-direction: row nowrap;
  padding: 12.1% 8.5% 11.5%;
  justify-content: space-between;

  &.swiper-pagination-bullet{
    display: none;
  }
 
  @media (max-width: 700px) {
    padding: 23.5% 6%;
    
    .swiper-slide-duplicate,
    .swiper-slide{
      transition: all .3s;
      transform: scale(0.8);
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active{
      box-shadow: 0px 22px 29px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      border-radius: 21px;
      background-color: #FFFFFF;
      transform: scale(1);
      transition-duration: .4s;
    }
    .swiper-pagination-bullet {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 5px !important;
      background-color: #C4C4C4 !important;
      opacity: 1 !important;
      cursor: pointer;
    }
    .swiper-pagination-bullet-active {
      background-color: #C22229 !important;
    }
  }
`;

// 슬라이드 
const CardBox = styled.ul`
  border-radius: 30px;
  padding: 10% 11% 8.3% 14.2%;
  transition: all 0.3s;
  background-color: #FFFFFF;
  :hover {
    box-shadow: -30px 49px 82px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1261px) {
    width: 100%;
    font-size: 1.125rem;
    padding: 13.5% 12%;

  }
  > .card-icon {
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 1261px) {
      width: 70px;
      height: 70px;
    }
  }
  > .card-title {
    font-family: 'GoyangDeogyang';
    font-size: 1.5rem;
    color: #323232;
    padding-top: 40.6%;

    @media (max-width: 1261px) {
    font-size: 1.125rem;
    line-height: 1.25rem;
    padding-top: 50%;
    }
  }
  > .card-desc {
    font-size: 1.05vw;
    white-space: pre-wrap;
    padding-top: 10.5%;
    padding-bottom: 28.5%;
    line-height: 1.25rem;

    @media (max-width: 1261px) {
    font-size: 0.8125rem;
    line-height: 1.0625rem;
    padding-top: 10%;
    padding-bottom: 70%;
    }
  }
  .more-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    line-height: 0.8935rem;
    @media (max-width: 1261px) {
    font-size: 0.625rem;
    line-height: 1.113125rem;
    }
  }
  > .more-btn::before {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background: #C22229;
    margin-right: 7%;
  }
`;
const Rectangle = styled.div`
  width: 15.625%;
  position: absolute;
  bottom: -19.5%;
  right: 7.8125%;
  
  @media (max-width: 700px) {
    width: 27%;
    bottom: 0;
    right: 10.4%;
  }
  > img{
    width: 100%;
    z-index: 10;
  }
`;

const Business = () => {
  const recRef = useRef(null);

  const random = (min, max) => {
    return parseFloat((Math
      .random() * (max - min) + min)
      .toFixed(2))
  }

  useEffect(() => {
    gsap.to(recRef.current, 1, {
      transform: 'translateY(50px)',
      delay: random(0, 1),
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: 'Power1.easeInOut',
    },[]);
  })

  SwiperCore.use([Pagination]);

  return (
    <SectionContainer>
      <TitleBox>
        <h3>Business 플랫폼</h3>
        <p>ITX마케팅의 다양한 비지니스를 경험해 보세요.</p>
      </TitleBox>
      <StyleSwiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.35}
        spaceBetween={0}
        breakpoints={{
          700: {
            loop: false,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 66,
            allowTouchMove: false,
          }
        }}
      > 
      {card.map((dt) => (
        <SwiperSlide 
          key={dt.id}
        >
          <CardBox>
            <li
              className="card-icon"
              style={{backgroundImage:`url(${dt.icon})`}}>
            </li>
            <li className="card-title">{dt.title}</li>
            <li className="card-desc">{dt.description}</li>
            <li className="more-btn"><Link to="#">자세히 보기</Link></li>
          </CardBox>  
        </SwiperSlide>
        ))} 
      </StyleSwiper>
      <Rectangle>
        <img ref={recRef} src={rectangle} alt="Rectangle" />
      </Rectangle>
    </SectionContainer>
  );
}
export default Business;
