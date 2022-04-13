import React from 'react'
import styled from 'styled-components';
import Overay from '../Overay';
import banner from '../../img/sub/recruitVisual.png';

const BannerContainer = styled.section`
  position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  
  @media (max-width: 700px) {
  padding-top: 154.8%;
  background-position: right center;
  background-size: 290%;
  background-position: 10% 5%;
}
> .text-wrap {
    position: absolute;
    top: 50%;
    left: 7.708333333333333%;
    transform: translateY(-20%);
    color: #FFFFFF;
    z-index: 3;
    display: flex;
    flex-direction: column;
    
    > h2 { 
      font-size: 2.5rem;
      > strong {
        color: #B8292D;
      }
    }
      > p {
        padding-top: 5.7%;
        line-height: 1.4rem;
        font-size: 1.25rem;
      }
      @media (max-width: 700px) {
        width: 56%;
        top: 31.5%;

        > h2 {
          font-size: 1.75rem;
          line-height: 2.15625rem;
        }
        > p {
          font-size: 0.8125rem;
          line-height: 1.25rem;
          padding-top: 8.8%;
        }
      }
    }
`;

const PartnerBanner = () => {
  return (
    <BannerContainer>
      <div className='text-wrap'>
        <h2>
          ITX Marketing<strong> R</strong>E
          <strong>C</strong>RUIT
        </h2>
        <p>ITX 마케팅의 미래를 이끄는 것은 도전적인 여러분들입니다!<br />
          창의적인 생각을 하고 도전적인 인재를 기다립니다.</p> 
      </div>
      <Overay />
    </BannerContainer>
  )
}

export default PartnerBanner;