import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper';



const StyleSwiper = styled(Swiper)`
  margin: 5% 15%;
  padding: 5% 9.21875%;

  .swiper-slide {
    text-align: center;
    box-shadow: 8px 7px 43px rgba(0, 0, 0, 0.2);
    height: 634px;
    padding: 4.5% 3%;
    background-color: #FFFFFF;
    
    >.content-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      > div {
        padding: 10% 0;
        span {
          display: block;
          padding-bottom: 3.3%;
          font-size: 0.65rem;
          color: #C4C4C4;
        }
        h2 {
          font-size: 1rem;
          color: #323232;
        }
      }
    }
    >.content-body {
      
      > div {
        padding-bottom: 5%;
        > p {
          font-size: 0.65rem;
          line-height: 1rem;
        }
      }
    }
    >.content-bottom {
      display: flex;
      align-items: flex-start;
      padding: 14% 0 0 0;
      a {
        color: #C22229;
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 700px) {
    margin: 0 0 20% 0;
    padding: 15% 0 20%;
    .swiper-slide {
      box-shadow: 8px 7px 20px rgba(0, 0, 0, 0.2);
      height: 400px;
      transition: all .4s ease-in-out;

      >.content-top {
        img {
          transform: scale(0.8);
        }
        > div {
          padding: 10% 0;
          
          span {
            padding-bottom: 10%;
            font-size: 0.625rem;
          }
          h2 {
            font-size: 0.8125rem;
            color: #323232;
          } 
        }
      }
      >.content-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
          padding-bottom: 7%;
          width: 200px;
          height: 50px;
        > p {
          font-size: 0.625rem;
          line-height: 15px;
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;    
        }
      }
    }
    >.content-bottom {
      padding: 10% 10%;

      a {
      
        font-size: 0.8125rem;
      }
    }
  }
  .swiper-pagination-bullet {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin: 0 17px 0 0!important;
    background-color: #E6E6E6 !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #444444 !important;
  }
}
`;
const InsuSlider = ({data}) => {
  const [swiper , setSwiper] = useState(null);
  console.log(swiper)
  SwiperCore.use([Autoplay, Pagination]);

  const swiperParams = {
    // onSwiper: setSwiper,
    // grabCursor: true,
    // loop: true,
    // slidesPerView: 1.34,
    // centeredSlides: true,
    // spaceBetween: 15,
    // speed: 700,
    // autoplay : {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    // breakpoints: {
    //   700: {
    //     slidesPerView: 4.6,
    //     spaceBetween: 30,
    //   }
    // }
    onSwiper: setSwiper,
    grabCursor: true,
    loop: false,
    slidesPerView: 1.3,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    // speed: 700,
    // autoplay : {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      700: {
        loop: false,
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 202,
        allowTouchMove: false,
        autoplay: false,
      }
    }
  }

  
  return (
    <StyleSwiper {...swiperParams}>
      {data.map((dt) => (
        <SwiperSlide key={dt.id}>
          <div className='content-top'>
            <img src={dt.icon} alt={dt.award} />
            <div>
              <span>{dt.lounge}</span>
              <h2>{dt.award}</h2>
            </div>
          </div>
          <div className='content-body'>
            <div>
              <p>{dt.content1}</p>
              <p>{dt.content1_2}</p>
            </div>
            <div>
              <p>{dt.content2}</p>
              <p>{dt.content2_2}</p>
            </div>
          </div>
          <div className='content-bottom'>
            <Link to={`/business/platform/insuplus?veiw=${dt.id}`}>{dt.linkBtn}</Link>
          </div>
        </SwiperSlide>
      ))}
    </StyleSwiper>
  );
}

export default InsuSlider;
