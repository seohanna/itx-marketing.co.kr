import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';   
import styled from "styled-components";
import visual from "../img/main/recruitVisual.png";
import  { ReactComponent as PlusBtn } from '../img/common/PlusBtn.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    title: '개인영업(FP)',
    url: '/intro/recruit?fp',
  },
  {
    id: 2,
    title: '법인컨설턴트',
    url: '/intro/recruit?fp',
  },
  {
    id: 3,
    title: '전문가그룹',
    url: '/intro/recruit?fp',
  },
  {
    id: 4,
    title: '정규직',
    url: '/intro/recruit?perment',
  }
];

const RecruitSlider = () => {
  
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current?.slickGoTo) {
      sliderRef.current.slickGoTo(selectedCarouselIndex);
      console.log(selectedCarouselIndex)
    }
  }, [selectedCarouselIndex])

  const settings = {
    infinity: true,
    slidesToScroll: 1,
    speed: 1000,
    variableWidth: true,
    // slidesToShow: 3.7,
    initialSlide: selectedCarouselIndex,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          
        }
      }
    ]
  };
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
      <SliderContainer>
        <StyledSlider {...settings} ref={sliderRef}>
          {data.map((data, i) => (
            <li key={data.id} onClick={() => setSelectedCarouselIndex(i)}>
              <Link to={data.url}>
                {data.title}
                <Icon>{data.title}</Icon>
              </Link>
            </li>
          ))}
        </StyledSlider>
      </SliderContainer>
    </SectionContainer>
  );
};
export default RecruitSlider;

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 15.7% 0 10%;

  @media (max-width: 700px) {
    padding: 28.5% 0 0;
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
  background-size: 120%;

  @media (max-width: 700px) {
    padding-top: 123%;
    margin-left: 0;
    background-size: 250%;
    background-position: 30% 0;
  }
`;

const SliderContainer = styled.div`
  background-color: #F8F8F8;
  
  height: 733px;
  padding: 117px 0 0 32px;
  margin-left: 10%;
  border-radius: 366.5px 0 0 366.5px;

  @media (max-width: 700px) {
    margin-left: 3.2%;
    padding: 35px 0 0 11px;
    height: 280px;
    transform: translateY(-30%);
  }
  /* margin-left: 223px; */
/* overflow: visible; */
`;

const StyledSlider = styled(Slider)`
  
  .slick-slide {
    width: 400px;
    padding-right: 55px;
    @media (max-width: 700px) {
      width: 150px;
      padding-right: 6px;
   }
  }

  .slick-slide div{
    height: 400px;
    padding: 20% 10% 0;
    background-color: #FFFFFF;
    border-radius: 45px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all .4s;
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        font-family: 'GoyangDeogyang';
      > svg {
        stroke: #323232;
      }
    }
    @media (max-width: 700px) {
      height: 150px;
      padding: 26px 18px 0;
      border-radius: 15px;
      a {
        font-size: 0.8125rem;
        > svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .slick-current div{
    background-color: #B8292D;
    height: 500px;
     a {
      color: #FFFFFF;
      > svg {
        stroke: #FFFFFF;
      }
    }

    @media (max-width: 700px) {
      height: 209px;
    }
  }


`;


const Icon = styled(PlusBtn)`
  stroke: inherit;
  width: 45px;
  height: 45px;
`;