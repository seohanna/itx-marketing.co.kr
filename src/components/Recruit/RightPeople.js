import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import idea from '../../img/sub/idea.png';
import trust from '../../img/sub/trust.png';
import passion from '../../img/sub/passion.png';
import target from '../../img/sub/target.png';
import MiniBanner from '../MiniBanner';
import ScrollMagic from "scrollmagic";

const Container = styled.section`
  padding: 7% 13.54166666666667% 0%;

  @media (max-width: 700px) {
    padding: 8.6% 7%;
  }
`;

const ItemContainer = styled.div`
  padding: 13.5% 5.45% 19.3%;

  @media (max-width: 700px) {
    padding: 21.2% 0% 17.8%;
  }
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &.show li{
    opacity: 1;
    transform: translateY(0);
  } 

  @media (max-width: 700px) {
    flex-flow: row wrap;
   
  }
   
`;
const Items = styled.li`
  width: 17.5%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.6s;
  opacity: 0;
  transform: translateY(50%);
  
  @media (max-width: 700px) {
    width: 50%;
    align-self: flex-start;
    padding-bottom: 7%;
  }
  &.delay-0 {
    transition-delay: 0;
  }
  &.delay-1 {
    transition-delay: .3s;
  }
  &.delay-2 {
    transition-delay: .4s;
  }
  &.delay-3 {
    transition-delay: .5s;
  }
  >.img-wrap{
    width: 128px;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F8F8F8;
    border-radius: 50%;

    @media (max-width: 700px) {
      width: 100px;
      height: 100px;
      > img {
        transform: scale(0.7);
      }
    }
  }
  >.text-wrap{
      text-align: center;
      padding-top: 8%;
    > h3 {
      line-height: 2.5rem;
    }
    > h3 > strong {
      color: #B8292D;
      font-family: 'GoyangDeogyang';
    }
    > p {
      font-size: 0.8rem;
      > span{
        font-family: 'GoyangDeogyang';
      }
    }
    @media (max-width: 700px) {
      padding: 15% 23% 0;
      > h3 {
        font-size: 1rem;
        line-height: 1.125rem;
      }
      > p {
        font-size: 0.625rem;
        line-height: 0.6875rem;
        padding-top: 22%; 
        br {
          display: none;
        }
      }
    }   
  }
`;
const RightPeople = () => {

  const itemsRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
      new ScrollMagic
      .Scene({
        triggerElement: itemsRef.current,
        triggerHook: .8
      })
      .setClassToggle(itemsRef.current, 'show')
      .addTo(controller);
  });

  return (
    <Container>
      <MiniBanner desc="인슈어테크를 넘어 핀테크를 선도할 혁신 人" />
      <ItemContainer>
        <ItemList ref={itemsRef}>
          <Items className='delay-0'>
            <div className='img-wrap'>
              <img src={idea} alt="idea"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>I</strong>dea</h3>
              <p>창의적인&nbsp;<span>아이디어</span>로<br /> 혁신을&nbsp;선도할&nbsp;인재</p>
            </div>
          </Items>
          <Items className='delay-1'>
            <div className='img-wrap'>
              <img src={trust} alt="trust"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>T</strong>rust</h3>
              <p>고객을&nbsp;최우선으로<br /> <span>신뢰</span>를&nbsp;얻을&nbsp;수 있는&nbsp;인재</p>
            </div>
          </Items>
          <Items className='delay-2'>
            <div className='img-wrap'>
              <img src={passion}  alt="passion"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>P</strong>assio<strong>n</strong></h3>
              <p><span>열정</span>을&nbsp;무기로 최고의<br /> 전문가 될 수 있는&nbsp;인재</p>
            </div>
          </Items>
          <Items className='delay-3'>
            <div className='img-wrap'>
              <img src={target} alt="target"/>
            </div>
            <div className='text-wrap'>
              <h3><strong>T</strong>ar<strong>g</strong>et</h3>
              <p><span>목표의식</span>을&nbsp;가지고<br /> 결과물을&nbsp;만들어 내는&nbsp;인재</p>
            </div>
          </Items>
        </ItemList>
      </ItemContainer>
    </Container>
  )
}

export default RightPeople;
