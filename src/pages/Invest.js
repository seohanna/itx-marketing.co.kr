import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/investbanner.png';
import EventSection from '../components/Business/EventSection';
import invest from '../img/sub/invest.png';
import HashTag from '../components/Business/Invest/HashTag';
import ScrollMagic from "scrollmagic";
import { useLocation } from 'react-router-dom';
import InvestDetail from '../components/Business/Invest/InvestDetail';
import { getPostByNo } from '../data/InvestData';
import { getPostByNo2 } from '../data/InvestStory';
import StoryList from '../components/Business/Invest/story/StoryList';
import SectionTitle from '../components/PlatForm/SectionTitle';
import { Link } from 'react-router-dom';

const Invest = ({match, history}) => {
  const [ data, setData ] = useState({});
  const [ data2, setData2 ] = useState({});
  const { id } = match.params;
  const location = useLocation();

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-el');
    fadeEls.forEach(function (fadeEl) {
      new ScrollMagic
        .Scene({
          triggerElement: fadeEl,
          triggerHook: 1,
        })
        .setClassToggle(fadeEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })
    setData(getPostByNo(id));
    setData2(getPostByNo2(id));
  }, [id]);
  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        strong='3분 '
        title='재테크'
      />
       {location.pathname === '/business/invest' && (
         <>
          <EventSection 
            thin='+ '
            strong='3분 '
            title='재테크'
            img={invest}
            invest
          >
            <div>
              <h2>3분만에 확인할 수 있는 재테크 노하우</h2>
              <p>보장분석, 상속/증여, 재무설계, 부동산, 세무, 예적금, 투자 등<br />
              다양한 재테크 분야별 노하우를 만나 볼 수 있습니다.
              </p>
            </div>
            <HashWrap className='fade-el'>
              <StyledLink to='/business/invest/story'>
                <HashTag name='프롬이 보험이야기' />
              </StyledLink>
              <HashTag name='보험플러스'/>
              <HashTag name='재테크'/>
              <HashTag name='보장분석'/>
              <HashTag name='법인컨설팅'/>
              <HashTag name='재무설계'/>
              <HashTag name='성공사례'/>
              <HashTag name='기타'/>
            </HashWrap>
          </EventSection>
         </>
       )}
       {location.pathname === `/business/invest/${id}` && (
         <InvestDetail data={data} primary />
       )} 
       {location.pathname === `/business/invest/story` && (
          <>
            <TitleWrap>
              <SectionTitle>
                <Wrap>
                  <div>
                    <span>+ </span>
                    <strong>3분</strong> 재테크
                  </div>
                  <HashWrap title>
                    <HashTag name='프롬이 보험이야기' link/>
                    <HashTag name='프롬이의 보험웹툰'/>
                  </HashWrap>
                </Wrap>
              </SectionTitle>
            </TitleWrap>
            <StoryList />
          </>
       )}
       {location.pathname === `/business/invest/story/${id}` && (
          <InvestDetail data2={data2} webtoon />
        )}
      </Layout>      
    );
  };

export default Invest;

const HashWrap = styled.div`
  width: 80%;
  
  
  &.fade-el {
    div {
      opacity: 0;
      transition: 1s;
      :first-child {
        transition-delay: 0s;
      }
      :nth-child(2) {
        transition-delay: 0.2s;
      }
      :nth-child(3) {
        transition-delay: 0.3s;
      }
      :nth-child(4) {
        transition-delay: 0.4s;
      }
      :nth-child(5) {
        transition-delay: 0.5s;
      }
      :nth-child(6) {
        transition-delay: 0.6s;
      }
      :nth-child(7) {
        transition-delay: 0.7s;
      }
      :nth-child(8) {
        transition-delay: 0.8s;
      }
      :last-child {
        transition-delay: 0.9s;
      }
    }
  }
  &.fade-el.show {
    div {
      opacity: 1;
    }
  }

  > div {
    margin-top: 5%;
  }
 
  ${props => props.title && css`
  display: flex;
  align-items: flex-end;
  margin-left: 3%;
  width: auto;
    div {
      margin-top: 0;
      > p {
        width: 165px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
    }
  `}  

  
`;

const StyledLink = styled(Link)`

`;

const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;


`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

