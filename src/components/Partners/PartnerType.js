import React, { useEffect } from 'react'
import styled from 'styled-components';
import Button from '../Button'
import ScrollMagic from "scrollmagic";

import insurtech from "../../img/sub/insurtech.png"
import healthCare from "../../img/sub/healthCare.png"
import financial from "../../img/sub/financial.png"
import bigData from "../../img/sub/bigData.png"
import  { ReactComponent as ArrowBtn } from '../../img/common/ArrowShortBtn.svg';
const TypeContainer = styled.section`
  padding: 10.12% 0 2.4% 0;
  background-color: #F8F8F8;

  @media (max-width: 700px) {
    padding: 18.3% 7.6%;
  }
`;

const TypeList = styled.ul`
`;
const Text = styled.p`
  transition: .5s;
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateX(15px);
  :hover {
    transform: translateX(0);
  }
  :hover > .arrow-icon {
    transform: translateX(15px);
    opacity: 1;
    display: inline-block;
  }
   .arrow-icon {
    width: 35px;
    height: 8.55px;          
    opacity: 0;
    transform: translateX(-15px);
    transition: .5s;
  }
  @media (max-width: 700px) {
    transform: translateX(0);
    :hover .arrow-icon {
      display: none;
    }
    > p {
      transform: translateX(0);
    }
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 4.7%;
  position: relative;
 
  &.show .img-box {
    width: 50.625%;
    opacity: 1;
    
    @media (max-width: 700px) {
      width: 100px;
    }

  }
  &.show .text-box {
    opacity: 1;
    
  }
  .img-box {
    width: 0;
    height: 58.8vh;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: width 1s ease-out .6s;
  }
  
  .text-box{
    width: 49.21875%;
    position: absolute;
    right: 7.8125%;
    padding: 3.1%;
    box-shadow: 2px 4px 22px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-end;
    background-color: #FFFFFF;
    transition-delay: .3s;
    opacity: 0;
    transition-duration: 1s;
    
    > div {
      width: 76%;
      > span {
        font-size: 1.25rem;
        color: #767676;
      }
      > h1 {
        font-size: 2.5rem;
        padding-top: 2.5%;
        padding-bottom: 15.7%;
        color: #1A1A1A;
      }
      > p {
        line-height: 1.366666666666667rem;
        width: 58%;
      }
    }
  }
  @media (max-width: 700px) {
    border-radius: 20px;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.2);
    padding: 5%;
    background: #FFFFFF;
    justify-content: space-between;

    .img-box{
      border-radius: 50%;
      overflow: hidden;
      width: 100px;
      height: 100px;
      z-index: 2;
      background-position: 25%;
      opacity: 1;
    }
    .text-box {
      position: static;
      box-shadow: none;
      width: 57%;
      padding: 0%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 1;

      > div {
        align-self: flex-start;
        > span {
        font-size: 0.625rem;
        line-height: 0rem;
        }
        > h1 {
        font-size: 1.25rem;
        padding-top: 0%;
        padding-bottom: 20%;
        }
        > p {
        line-height: 0.87rem;
        font-size: 0.625rem;
        width: 100%;
        padding-bottom: 3.1%;
        }
      }
    }
  }
`;
const Type = [
  {
    id: 0,
    image: insurtech,
    en: 'Insurtech',
    ko: '인슈어테크',
    desc: '데이터 분석, 인공지능(AI)등 정보기술(IT)을 활용하여 기존의 보험 산업을 혁신하는 서비스 분야의 기업 또는 개인',
  },
  {
    id: 1,
    image: healthCare,
    en: 'Health care',
    ko: '헬스케어',
    desc: '기존의 의료서비스에 질병 예방 및 관리 개념을 포함한 전반적인 건강관리 서비스를 제공하는 기업',
  },
  {
    id: 2,
    image: financial,
    en: 'Financial services',
    ko: '금융서비스',
    desc: '대출, 보험, 투자 등 다양한 금융상품에 대한 컨설팅과 서비스 및 상품 line-up을 보유한 기업',
  },
  {
    id: 3,
    image: bigData,
    en: 'Big Data',
    ko: '빅데이터',
    desc: '데이터의 수집, 저장, 분석을 통하여 다양한 마케팅을 진행하는 기업 또는 솔루션',
  },
]

const PartnerType = () => {

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-el');
    fadeEls.forEach(function (fadeEl) {
      new ScrollMagic
        .Scene({
          triggerElement: fadeEl,
          triggerHook: .5
        })
        .setClassToggle(fadeEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })
  }, []);

  return (
    <TypeContainer>
      <TypeList>
      {Type.map((td) => (
        <Item key={td.id} className='fade-el'>
          <div
            className='img-box'
            style={{
              backgroundImage: `url(${td.image})`
            }}
          >
          </div>
          <div className='text-box'>
            <div>
              <span>{td.en}</span>
              <h1>{td.ko}</h1>
              <p>{td.desc}</p>
            </div>
            <Button size="md">
              <Text>
                제휴상담문의
                <ArrowBtn stroke="#FFFFFF" className='arrow-icon'/>
              </Text>
            </Button>
          </div>
        </Item>
      ))}
      </TypeList>
    </TypeContainer>
  )
}

export default PartnerType;
