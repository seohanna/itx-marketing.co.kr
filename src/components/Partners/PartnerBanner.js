import React from 'react'
import styled from 'styled-components';
import bannerMb from '../../img/sub/partnersVisualMb.png';
import banner from '../../img/sub/partnersVisual.png';

const BannerContainer = styled.section`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 56.28%;
  background-image: url(${banner});
  > div {
      display: flex;
      flex-direction: column;
      align-content: center;
    > .text-wrap {
        position: absolute;
        top: 50%;
        left: 7.708333333333333%;
        transform: translateY(-20%);
        h2 {
          font-size: 2.5rem;
          white-space: pre;
          font-weight: 400;
          color: #1A1A1A;
          padding-bottom: 9.4%;
        > strong {
          color: #B8292D;
        }
      }
      > p {
        line-height: 1.65rem;
        font-size: 1.25rem;
      }
    }
  }
@media (max-width: 700px) {
  background-image: url(${bannerMb});
  padding-top: 154.7%;
  > div {
    > .text-wrap{
        top: 25%;
        transform: translateY(0);
        > h2 {
          font-size: 1.4rem;
          padding-bottom: 6.5%;
        }
        > p {
          font-size: 0.8125rem;
          line-height: 1.1rem;
        }
      }
    }
  }
`;

const PartnerBanner = () => {
  return (
    <BannerContainer>
      <div>
        <div className='text-wrap'>
          <h2>
            <strong>P</strong>ar
            <strong>T</strong>ners
          </h2>
          <p>핀테크를 함께 이끌어갈 다양한 분야의<br /> 소중한 파트너를 기다립니다.</p> 
        </div>
      </div>
    </BannerContainer>
  )
}

export default PartnerBanner;
