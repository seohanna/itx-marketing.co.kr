import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../img/main/mbSlide1.png"
import banner2 from "../img/main/mbSlide2.png"
import banner3 from "../img/main/mbSlide3.png"
import styled from 'styled-components';
import Overay from './Overay';

const data = [
  {
    id: 0,
    page: '01/03',
    title: 'ITX 마케팅',
    description: '보험 마케팅의 혁신을 선도하는',
    image: banner1
  },
  {
    id: 1,
    page: '02/03',
    title: 'ITX Business',
    description: 'FP가 사업을 주도하는',
    image: banner2
  },
  {
    id: 2,
    page: '03/03',
    title: '보험플러스',
    description: '생활에 안심을 더하는 보험브랜드',
    image: banner3
  }
]

const Page = styled.h4`
  position: absolute;
  top: 81.48148148148148%;
  font-size: 1rem;
  color: #FFFFFF;
  line-height: 1.128rem;
  left: 9.270833333333333%;

  @media (max-width: 700px) {
    font-size: 0.625rem;
    line-height: 0.8rem;
    top: 84.33098591549296%;
  }
`;

const StyleSwiper = styled(Swiper)`
  .slide-img{
    padding: 56.25% 7.8125% 0 7.8125%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.4);
    transition: all 5s;
    overflow: hidden;
  }
  .swiper-slide-active .slide-img,
  .swiper-slide-duplicate-active .slide-img{
    transform: scale(1);
  }
  .text-wrap {
    position: absolute;
    top: 37.96296296296296%;
    z-index: 10;
    color: #FFFFFF;
  }
  .text-wrap > p, .text-wrap > h2{
    transform: translate(-100%);
    transition: all 2s;
  }
  .text-wrap > h2{
    font-size: 3rem;
    line-height: 3.384rem;
    padding-top: 5%;
  }  
  .text-wrap > p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .swiper-slide-active .slide-img > .text-wrap p,
  .swiper-slide-duplicate-active .slide-img > .text-wrap p,
  .swiper-slide-active .slide-img > .text-wrap h2,
  .swiper-slide-duplicate-active .slide-img > .text-wrap h2{
    transform: translate(0);
  }
  .swiper-slide-active .slide-img > .text-wrap h2,
  .swiper-slide-duplicate-active .slide-img > .text-wrap h2 {
    transition-delay: 0.2s;
  }


  @media (max-width: 700px){
    .slide-img{
      padding: 151.5% 7.8125% 0 7.8125%;
      background-position: 45% center;
    }
    .text-wrap{
      top: 65.3169014084507%;
    }
    .text-wrap > h2 {
      font-size: 1.75rem;
      line-height: 1.579rem;
      padding-top: 7px;
    }
    .text-wrap > p {
      font-size: 0.9375rem;
      line-height: 1rem;
    }
}

/* swiper pagination */
.swiper-pagination-progressbar {
  top: 79.81481481481481% !important;
  left: 9.270833333333333% !important;
  background-color: #fff !important;
  width: 46.875% !important;
  height: 5px !important;
  border-radius: 0  !important;
  transition-duration: 2s !important;
}

.swiper-pagination-progressbar-fill {
  background-color: #C22229 !important;
  border-radius: 0  !important;
  transition-duration: 2s !important;
}
@media (max-width: 700px){
  .swiper-pagination-progressbar{
    top: 82.92253521126761% !important;
    width: 64% !important;
    height: 2px !important;
  }
}
`;

const MainBanner = () => {
  SwiperCore.use([Autoplay, Pagination, EffectFade]);
  
  const swiperParams = {
    modules: [Pagination, EffectFade],
    loof: true,
    speed: 1000,
    slidsPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      type: 'progressbar',
    }
  }

  return (
    <StyleSwiper {...swiperParams}>
      {data.map((dt) => (
        <SwiperSlide key={dt.id}>
          <div
            className="slide-img"
            style={{backgroundImage:`url(${dt.image})`}}
          >
            <Overay />
            <div className="text-wrap">
              <p>{dt.description}</p>
              <h2>{dt.title}</h2>
            </div>
          </div>
          <Page>{dt.page}</Page>
        </SwiperSlide>
      ))}
    </StyleSwiper>
  );
}

export default MainBanner;


