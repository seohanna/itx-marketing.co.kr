import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore, { Autoplay } from 'swiper';

import SectionTitle from './SectionTitle';
import sucCaseIcon1 from '../../img/sub/sucCaseIcon1.png';
import sucCaseIcon2 from '../../img/sub/sucCaseIcon2.png';
import sucCaseIcon3 from '../../img/sub/sucCaseIcon3.png';
import sucCaseIcon4 from '../../img/sub/sucCaseIcon4.png';
import sucCaseIcon5 from '../../img/sub/sucCaseIcon5.png';

const Data = [
  {
    id: 0,
    icon: sucCaseIcon1,
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more'
  },
  {
    id: 1,
    icon: sucCaseIcon2,
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more'
  },
  {
    id: 2,
    icon: sucCaseIcon3,
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more'
  },
  {
    id: 3,
    icon: sucCaseIcon4,
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more'
  },
  {
    id: 4,
    icon: sucCaseIcon5,
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more'
  },
]
const TitleWrap = styled.div`
  padding-right: 11.05%;
  text-align: right;

  @media (max-width: 700px) {
    padding-right: 6%;
  }
`;

const StyleSwiper = styled(Swiper)`
  padding: 10% 0;

  .swiper-slide,
  .swiper-slide-duplicate {
    box-shadow: 8px 7px 43px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.8% 1.5%;
    background-color: #FFFFFF;
    transition: all .4s ease-in-out;
    transform: scale(0.9);
    
    > div {
      padding-top: 15.6%;
      > span {
        font-size: 0.65rem;
        color: #C4C4C4;
        line-height: 1rem;
      }
      > h2 {
        font-size: 1rem;
        color: #323232;
        line-height: 1.3rem;
      }
      > p {
        font-size: 0.5rem;
        white-space: pre;
        line-height: 0.8rem;
      }
    }
    .content-wrap {
      padding-top: 9%;
    }
    > button {
      width: 100%;
      font-size: 0.8rem;
      color: #C22229;
      display: flex;
      justify-content: flex-start;
      padding-top: 14%;
    }
  }
  .swiper-slide-duplicate-active,
  .swiper-slide-active {
    transform: scale(1);
  }
  @media (max-width: 700px) {
    padding: 34.4% 0 28.8% 0;
    
    .swiper-slide {
      box-shadow: 8px 7px 20px rgba(0, 0, 0, 0.2);
      padding: 14.6% 6.45% 11.5% 6.45%;
      > img {
        transform: scale(0.8);
      }
      > div {
        span {
          font-size: 0.625rem;
        }
        h2 {
          font-size: 0.8125rem;
          padding-top: 10%;
        }
        p {
          font-size: 0.625rem;
          line-height: 0.95rem;
        }
      }
      > button {
          padding-top: 25.2%;
          font-size: 0.8125rem;
      }
      .content-wrap {
        padding-top: 12%;
      }
    }
  }
`;
const InsuSlider = (props) => {
  const [swiper , setSwiper] = useState(null);

  SwiperCore.use([Autoplay]);

  const swiperParams = {
    onSwiper: setSwiper,
    grabCursor: true,
    loop: true,
    slidesPerView: 1.34,
    centeredSlides: true,
    spaceBetween: 15,
    speed: 700,
    autoplay : {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      700: {
        slidesPerView: 4.6,
        spaceBetween: 30,
      }
    }
  }


  return (
    <>
    <TitleWrap>
      <SectionTitle>
        <span>{props.thin}</span>
        &nbsp;{props.title1}
        <span>{props.thin2}</span>
      </SectionTitle>
    </TitleWrap>
      <StyleSwiper {...swiperParams}>
        {Data.map((dt) => (
          <SwiperSlide key={dt.id}>
            <img src={dt.icon} alt={dt.award} />
            <div>
              <span>{dt.lounge}</span>
              <h2>{dt.award}</h2>
            </div>
            <div className='content-wrap'>
              <p>{dt.content}</p>
              <p>{dt.content2}</p>
            </div>
            <button>{dt.linkBtn}</button>
          </SwiperSlide>
        ))}
      </StyleSwiper>
    </>
  );
}

export default InsuSlider;
