import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../Pagination';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import navigation from '../../../img/sub/pagination.svg';

function InvestList({data}) {
  const [dataList, setDataList] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const indexOfLast = currentPage * postsPerPage; 
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = data.slice(indexOfFirst, indexOfLast);
  
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
  useEffect(() => {
    setDataList(data);
  }, [data]);

  return (
    <Layout>
      <>
        <DataList>
          {dataList ? (
            <>{currentPosts.map((dt) => (
              <li key={dt.id}>
                <RouteImage>
                  <Link 
                    to={`/business/invest/story/${dt.id}`}>
                      <img src={dt.banner} alt='보험' />
                  </Link>
                </RouteImage>
                <h2>{dt.title}</h2>
                <div>
                  <p>{dt.tag}</p>
                </div>
              </li>
            ))}</>) : ''
          }
        </DataList>
        <StyleSwiper {...swiperParams} ref={setSwiper}>
          {dataList ? (
            <>{data.map((dt) => (
              <SwiperSlide key={dt.id}>
                <RouteImage>
                  <Link 
                    to={`/business/invest/story/${dt.id}`}>
                      <img src={dt.banner} alt='보험' />
                  </Link>
                </RouteImage>
                <h2>{dt.title}</h2>
                <div>
                  <p>{dt.tag}</p>
                </div>
              </SwiperSlide>
            ))}</>) : ''
          }
        </StyleSwiper>
        <Pagination
          postPerPage={postsPerPage} 
          totalPosts={data.length} 
          paginate={setCurrentPage} 
        />
      </>
    </Layout>
  );
}
export default InvestList;

const Layout = styled.div`
  width: 100%;
  padding: 5% 11.25% 0%;
  @media (max-width: 700px) {
    padding: 0 7.8125%;
  }
`;

const DataList = styled.ul`
  display: flex;
  justify-content: space-between;

  > li {
    /* width: 30.8641975308642%; */
    display: flex;
    flex-direction: column;
    
    > h2 {
      font-size: 1.25rem;
      white-space: pre;
      height: 70px;
    }
    > div {
      display: flex;
      
      > p {
        text-justify: inter-word;
        white-space: pre;
        display: flex;
        align-items: center;
        height: 80px;
      }
    }
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
`;

const RouteImage = styled.div`
   display: flex;
   align-items: flex-start;
   height: 100%;
   padding-bottom: 5%;
   cursor: pointer;
   @media (max-width: 700px) {
    
   }
   
`;
const StyleSwiper = styled(Swiper)`
  display: none;
  @media (max-width: 700px) {
    display: block;
    padding: 0 0 30% 0;

    .swiper-button-next,.swiper-button-prev {
      color: #444444;
      top: 95%;
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
  p {
    padding-top: 8%;
    font-size: 0.625rem;
  }
`;
