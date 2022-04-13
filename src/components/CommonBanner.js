import React from 'react'
import styled, { css } from 'styled-components';
import Overay from './Overay';
import mobileBanner from '../img/sub/coporExpertBannerMb.png'

const CommonBanner = ({
  apply, corpor, inherit, corporexpert, inherexpert, strong, title, subtxt, img
}) => {
  return (
    <BannerContainer 
      apply={apply} 
      corpor={corpor}
      corporexpert={corporexpert}
      inherexpert={inherexpert}
      inherit={inherit} 
      style={{backgroundImage: `url(${img})`}}
    >
      <div className='text-wrap'>
        <h2>
         <strong>{strong}</strong>{title}
        </h2>
        <p>{subtxt}</p> 
      </div>
      <Overay />
    </BannerContainer>
  )
}

export default CommonBanner;

const BannerContainer = styled.section`
  position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
  
  ${props => props.apply && css`
    background-position: 0 0;
    background-size: 125%;
  `}

  ${props => props.corporexpert && css`
    background-position: 0 0;
  `}

  ${props => props.inherit && css`
    background-position: 0 12%;
  `}


  @media (max-width: 700px) {
    padding-top: 162%;
    background-position: center top;
    background-size: cover;

    ${props => props.apply && css`
      background-position: 40% 0;
      background-size: 260%;
    `}

    ${props => props.corporexpert && css`
      background-image: url(${mobileBanner}) !important;
      background-position: 30% top;
    `}

    ${props => props.inherit && css`
      background-position: 34% center;
      background-size: 245%;
    `}

    ${props => props.inherexpert && css`
      background-position: 13% top;
      background-size: 245%;
    `}
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
        padding-top: 11.4%;
        line-height: 1.4rem;
        font-size: 1.25rem;
      }
      @media (max-width: 700px) {
        width: 100%;
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

        ${props => props.expert && css`
          > p {
            padding-top: 3%;
          }
        `}

        ${props => props.inherit && css`
          transform: translateY(-60%);
          > p {
            padding-top: 3%;
          }
        `}
        ${props => props.inherexpert && css`
          transform: translateY(-50%);
          > p {
            padding-top: 3%;
          }
        `}
        }
      }

      
`;
