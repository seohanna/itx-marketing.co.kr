import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import sinhan from "../img/main/sinhanSimbol.png";
import morebtn from "../img/main/newsMoreBtn.svg";
import nextbtn from "../img/main/nextBtn.svg";
import styled from "styled-components";
import { Data } from "../data/PressRoom";


const AwardData = [
  {
    id: 0,
    date: '2013',
    content: '우수보험대리점 (주최: 신한생명)'
  },
  {
    id: 1,
    date: '2014',
    content: '우수보험대리점 (주최: 신한생명)'
  },
  {
    id: 2,
    date: '2017',
    content: '우수보험대리점 (주최: 신한생명)'
  },
]

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
 
  > .news-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    
    @media (max-width: 700px) {
      padding: 7.4vh 0 10vh 20px;
      flex-direction: column;
      background-color: #F8F8F8;
    }
  }
`;

const DirectNews = styled.div`
  width: 650px;
  height: 900px;
  background-color: #F8F8F8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: #1A1A1A;
  h2 {
    font-size: 3rem;
    > strong {
      color: #C22229;
    }
  }
  p {
    font-size: 3rem;  
  }
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    padding: 0%;
    margin-bottom: 0;
    > div {
      display: flex;
      width: 100%;
    }
     h2 {
      font-size: 1rem;
      padding-bottom: 0;
      margin-right: 2%;
    }
    p {
      font-size: 1rem;  
    }
    .pc {
      display: none;
    }
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 72px;

  @media (max-width: 700px) {
     line-height: 31px;
     position: absolute;
     top: 1800%;
     z-index: 20;
  }
  > p {
    font-size: 1.25rem;
    white-space: nowrap;
    @media (max-width: 700px) {
      font-size: 0.625rem;
    } 
  }
  > span {
    display: inline-block;
    width: 38px;
    height: 38px;
    background-image: url(${morebtn});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4.9%;
    @media (max-width: 700px) {
      width: 20px;
      height: 20px;
    } 
  }
`;
const NewsContainer = styled.div`
  height: 900px;
  width: 1260px;
  display: flex;
  align-items: center;
  padding-left: 3%;
  overflow: hidden;

  @media (max-width: 700px) {
    padding:0;
    width: 100%;
    height: 300px;
  } 
`;
const StyleSwiper = styled(Swiper)`
  overflow: hidden;
  
  @media (max-width: 700px) {
    .swiper-slide-duplicate,
    .swiper-slide {
      transition: all .3s;
      transform: scale(1);
      overflow: hidden;
      background-color: #FFFFFF;
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(0.9);
    }
  }
  
  .swiper-button-prev {
      display: none;
    }
  .swiper-button-next {
    position: absolute;
    width: 107.5px;
    height: 16.5px;
    right: 10%;
    margin-top: 0;
    @media (max-width: 700px) {
      display: none;
    }
  }
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-next:after{
      content: "" !important;
      background-image: url(${nextbtn});
      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      height: 100%;
    }

  .swiper-slide {
    padding: 22px 21.8% 18px 0;
    overflow: hidden;
    width: 100%;

    @media (max-width: 700px) {
    padding: 20px 10px 29px 8px;
    margin-right: 20px;
    width: 203px;
    height: 204px;
    border-radius: 9px;
    box-shadow: 6px 7px 14px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
    h3, h2 {
      font-size: 2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 10px;
      @media (max-width: 700px) {
        font-size: 0.625rem;
        width: 187px;
        height: 30px;
      }
    }
    .text-wrap {
      padding-top: 62px;
      width: 793px;
 
      > p { 
        font-size: 1.25rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: normal;        
      }
      @media (max-width: 700px) {
        padding-top: 30px;
        > p {
          font-size: 0.625rem;
          line-height: 15px;
          -webkit-line-clamp: 3;
          width: 187px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    padding: 20px 0;
  }
`;

const AwardHistory = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    padding: 21px 0;
  }
`;
const AwradList = styled.ul`
 display: flex;
 @media (max-width: 700px) {
    flex-direction: column;
  }
  > li {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 27px 0 28px 0;
    border-right: 2px solid #C4C4C4;

    @media (max-width: 700px) {
      border-right: 0;
      padding: 12px 0 13px 0;
      align-items: center;
    }
    :last-child {
      border-right: 0;
    }
    > .sponsor-logo {
      background-image: url(${sinhan});
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }
    > .sponsor-txt {
      font-size: 0.8rem;
      @media (max-width: 700px) {
        display: flex;
        align-items: center;
        font-size: 0.8125rem;
      }
      > p:last-child {
        padding-top: 11px;
        @media (max-width: 700px) {
          padding-top: 0;
          text-indent: 5px;
        }
      }
    }
  }
`;
const NewsMarketing = () => {
  const [swiper , setSwiper] = useState(null);
  console.log(swiper);

  SwiperCore.use([Autoplay, Navigation]);

  const swiperParams = {
    onSwiper: setSwiper,
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    slidesBetween:0,
    navigation: true,
    speed: 1000,
    autoplay : {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints : {
      700: {slidesPerView:'auto'},
      1220: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
  }

  return (
    <SectionContainer>
      <div className="news-wrap"> 
        <DirectNews>
          <div>
            <h2>
              <strong>N</strong>e<span>w</span>s
            </h2>
            <p>ITX Marketing</p>
            <StyledLink to="/intro/summary?veiw">
              <p>자세히보기</p> 
              <span></span>
            </StyledLink>
          </div>
        </DirectNews>
        <NewsContainer>
          <StyleSwiper {...swiperParams} ref={setSwiper}> 
            {Data.map((newDt) => (
              <SwiperSlide key={newDt.id}>
                <h3>{newDt.date}</h3>
                <div className="text-wrap">
                  <h2>{newDt.title}</h2>
                  <p>{newDt.content1}</p>
                </div>
              </SwiperSlide>
            ))} 
            </StyleSwiper> 
        </NewsContainer>    
      </div>
      <AwardHistory>
        <AwradList>
          {AwardData.map((awradDt) => (
          <li key={awradDt.id}>
            <div className="sponsor-logo"></div>
            <div className="sponsor-txt">
              <p>{awradDt.date}</p>
              <p>{awradDt.content}</p>
            </div>
          </li>
          ))} 
        </AwradList>
      </AwardHistory>
    </SectionContainer>
  )
}
export default NewsMarketing;