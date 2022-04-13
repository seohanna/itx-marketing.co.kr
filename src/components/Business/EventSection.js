import React, { useEffect } from 'react'
import styled, { css } from "styled-components"
import SectionTitle from '../PlatForm/SectionTitle';
import ScrollMagic from "scrollmagic";
import InvestList from './Invest/InvestList';
import { Data } from '../../data/InvestData';

function EventSection({
  thin, strong, title,
  img, children, apply, invest
}) {

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
    <>
      <Wrap>
        <SectionTitle>
          <span>{thin}</span>
          <strong>{strong}</strong>{title}
        </SectionTitle>
        <Content>
          <ImgWrap apply={apply} className='fade-el'>
            <img src={img} alt={title}  />
          </ImgWrap>
          <TextWrap apply={apply} className='fade-el'>
            {children}
          </TextWrap>
        </Content>
      </Wrap>
      <SubContents>
        <InvestList data={Data} />
      </SubContents>
    </>
  ) 
}

export default EventSection;

const Wrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  @media (max-width: 700px) {
    padding-left: 6%;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.6% 0 3.6% 0;

  @media (max-width: 700px) {
    padding: 12.5% 8.2% 12.3% 2.2%;
    flex-direction: column;
  }
`;

const ImgWrap = styled.div`
  width: 45%;
  &.fade-el {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 1s ease;
    overflow: hidden;
    > img {
        transform: scale(1.6);
        /* transition: all 3s ease; */
        transition-delay: 1s;
        transition-duration: 3s;
      }
    }
    &.fade-el.show {
      opacity: 1;
      transform: translateX(0);
    > img {
        transform: scale(1);
      }
    }

  ${props => props.apply && css`
    width: 35%;
  `}
  
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TextWrap = styled.div`
  padding-left: 3.9%;
  width: 55%;
  &.fade-el {
    opacity: 0;
    transform: translateX(30px);
    transition: all 1s ease;
    overflow: hidden;
  }
  &.fade-el.show {
    opacity: 1;
    transform: translateX(0);
  }
  ${props => props.apply && css`
    padding: 0 12.3% 0 0;
    width: 65%;

    @media (max-width: 700px) {
      width: 100%;
    }
  `}
  h2 {
    font-size: 1.5rem;
    color: #1A1A1A; 
  }
  p {
    line-height: 2rem;
    padding-top: 4%;
    color: #444444;
  }  

  @media (max-width: 700px) {
    padding-left: 0;
    width: 100%;
  }
`;

const SubContents = styled.div`
  width: 100%;
`;
