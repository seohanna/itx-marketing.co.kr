import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Data2 } from '../../../../data/InvestStory';
import navigation from '../../../../img/sub/pagination.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

function StoryList({data}) {
  const [swiper , setSwiper] = useState(null);
  console.log(swiper);
  SwiperCore.use([Navigation]);
  const swiperParams = {
    onSwiper: setSwiper,
    slidesPerView: '1',
    loopedSlides: 4,
    slidesBetween:0,
    navigation: true,
    autoplay : false,
  }
  return (
    <Layout>
      <>
        <DataList>
            {Data2.map((dt) => (
              <li key={dt.id}>
                <RouteImage>
                  <Link to={`/business/invest/story/${dt.id}`}>
                    <div className='img-wrap'>
                      <img src={dt.banner} alt={dt.title} />
                    </div>
                  </Link>
                </RouteImage>
                <h2>#프롬이의 {dt.title}</h2>
              </li>
            ))}
        </DataList>
        <StyleSwiper {...swiperParams} ref={setSwiper}>
          <>
            {Data2.map((dt) => (
              <SwiperSlide key={dt.id}>
                 <RouteImage>
                  <Link to={`/business/invest/story/${dt.id}`}>
                    <div className='img-wrap'>
                      <img src={dt.banner} alt={dt.title} />
                    </div>
                  </Link>
                </RouteImage>
                <h2>#프롬이의 {dt.title}</h2>
              </SwiperSlide>
            ))}
          </>
        </StyleSwiper>
      </>
    </Layout>
  );
}
export default StoryList;

const Layout = styled.div`
  width: 100%;
  padding: 5% 7.8125%;
  @media (max-width: 700px) {
    padding: 0 7.8125%;
  }
`;

const DataList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
> li {
  width: 21.60493827160494%;
  margin-bottom: 5%;
  > h2 {
    font-size: 1rem;
    padding-top: 5%;
  }

  @media (max-width: 700px) {
    display: none;
    flex-direction: column;
    > li {
      width: 100%;
      > p {
        padding-bottom: 10%;
      }
    }
  }
}
  
`;

const RouteImage = styled.div`
   cursor: pointer;
`;

const StyleSwiper = styled(Swiper)`
  display: none;
  @media (max-width: 700px) {
    display: block;
    padding: 10% 0 40% 0;

    .swiper-button-next,.swiper-button-prev {
      color: #444444;
      top: 85%;
      width: 30px;
      height: 30px;
    }
    .swiper-button-prev {
      margin-left: 30%;
      transform: rotate(-180deg);
    }
    .swiper-button-next {
      margin-right: 30%;
    }  
    .swiper-button-next:after, .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after{
      width: 9px;
      height: 20px;
      content: "" !important;
      background-image: url(${navigation});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
  h2 {
    font-size: 1rem;
    white-space: pre;
  }
`;
