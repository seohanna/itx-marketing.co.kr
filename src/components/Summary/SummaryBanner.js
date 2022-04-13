import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { gsap } from "gsap";

import CircleFrame from '../../img/sub/circleFrame.svg';
import CircleFrameMb from '../../img/sub/circleFrameMb.svg';
import FpCircle from '../../img/sub/fpCircle.svg';
import InsuranceCircle from '../../img/sub/insuranceCircle.svg';
import LabCircle from '../../img/sub/labCircle.svg';
import CeoCircle from '../../img/sub/ceoCircle.svg';
import MarketCircle from '../../img/sub/marketCircle.svg';

const VisualContainer = styled.section`
  width: 100%;
  padding: 11.25% 7.8125% 5.3%;
  background-color: #F8F8F8;

  @media (max-width: 700px) {
    padding: 50% 0 0 6.3%; 
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TextWrap = styled.div`
  > h1 {
    font-size: 2rem;
    color: #1A1A1A;
    line-height: 2.375rem;
    padding-bottom: 6.8%;
   
    br {
    display: none;
    }
  }
  > p {
    font-size: 1rem;
    line-height: 1.366666666666667rem;
  }

  @media (max-width: 700px) {
   
    > h1 {
      font-size: 1.75rem;
      padding-bottom: 12.8%;

      br {
        display: block;
      }
    }
    > p {
      font-size: 0.8125rem;
    }
  }
 
`;
const CircleWrap = styled.div`
  position: relative;
  width: 39.44427083333333%;
  height: 70.12314814814815%;
  padding: 23.38%;
  background-image: url(${CircleFrame});
  background-repeat: no-repeat;
  background-size: contain;

  > img {
    position: absolute;
  }
  .fp-circle{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 26.40856693911505%;
    height: 26.40856693911505%;
  }
  .floating1{
    width: 17.42965417981593%;
    height: 17.42965417981593%;
    top: 12.8081549654708%;
    left: 2.50881385921593%;
  }
  .floating2{
    width: 17.42965417981593%;
    height: 17.42965417981593%;
    top: 2.509907529722589%;
    right: 11.26721508457344%;
  }
  .floating3{
    width: 17.42965417981593%;
    height: 17.42965417981593%;
    left: 22.44728189824779%;
    bottom: 22.49085603369733%;
  }
  .floating4{
    width: 17.42965417981593%;
    height: 17.42965417981593%;
    right: 6.249587366141576%;
    bottom: 5.061201853881399%;
  }
  @media (max-width: 700px) {
    background-image: url(${CircleFrameMb});
    padding: 75%;
    width: 120.8%;

    > img{
      display: none;
    }
  }
`;


const Visual = () => {

  const random = (min, max) => {
    return parseFloat((Math
      .random() * (max - min) + min)
      .toFixed(2))
  }

const floating1 = useRef(null);
const floating2 = useRef(null);
const floating3 = useRef(null);
const floating4 = useRef(null);

useEffect(() => {
  const floatingObject = (selector, delay, size) => {
    gsap.to(selector, random(1.5, 2.5), {
      delay: random(0, delay),
      y: size,
      repeat: -1,
      yoyo: true,
      ease: 'Power1.easeInOut',
    },[]);
  };
 
 
  floatingObject(floating1.current, 1, 5);
  floatingObject(floating2.current, .5, 8);
  floatingObject(floating3.current, 1.5, 12);
  floatingObject(floating4.current, 1.5, 7);
}, [])

  return (
    <VisualContainer>
      <ContentWrap>
        <TextWrap>
          <h1>
            <p>보험을 넘어<br /> 금융으로의 도약!</p> 
            <span>ITX 마케팅</span>
          </h1>
          <p>
            “열린시장”을 통해 FP에게 다양한 영업채널을 제공하고<br />
            소비자가 쉽고&nbsp;빠르게 금융상품을 구매할 수 있는 채널을<br />
            구축하고&nbsp;있습니다.
          </p>
        </TextWrap>
        <CircleWrap>
          <img src={FpCircle} className='fp-circle' alt="FP" />
          <img src={MarketCircle} ref={floating1} className='floating1'alt="Market" />
          <img src={InsuranceCircle} ref={floating2} className='floating2' alt="보험 플러스" />
          <img src={CeoCircle} ref={floating3} className='floating3' alt="CEO" />
          <img src={LabCircle} ref={floating4} className='floating4'alt="Lab 연구소" />
        </CircleWrap>
      </ContentWrap>
    </VisualContainer>
  )
}

export default Visual;
