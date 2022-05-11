import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/investbanner.png';
import EventSection from '../components/Business/EventSection';
import invest from '../img/sub/invest.png';
import HashTag from '../components/Business/Invest/HashTag';
import ScrollMagic from "scrollmagic";
import { useLocation } from 'react-router-dom';
import InvestDetail from '../components/Business/Invest/InvestDetail';
import { getPostByNo, Data } from '../data/InvestData';
import { getPostByNo2, Data2 } from '../data/InvestStory';
import StoryList from '../components/Business/Invest/story/StoryList';
import SectionTitle from '../components/PlatForm/SectionTitle';
import { Link } from 'react-router-dom';
import InvestList from '../components/Business/Invest/InvestList';
import InvestTable from '../components/Business/Invest/InvestTable';

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
    <Layout primary>
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
              <Link to='/business/invest/story'>
                <HashTag name='프롬이 보험이야기' width={'163px'} color={'#FFFFFF'} bg={'#C22229'} mb={'114px'}/>
              </Link>
              <HashTag name='보험플러스' width={'146px'} mb={'94px'}/>
              <HashTag name='재테크' width={'116px'} mb={'64px'}/>
              <HashTag name='보장분석' width={'125px'} mb={'80px'}/>
              <HashTag name='법인컨설팅' width={'146px'} mb={'94px'}/>
              <HashTag name='재무설계' width={'125px'} mb={'80px'}/>
              <HashTag name='성공사례' width={'125px'} mb={'80px'}/>
              <HashTag name='기타' width={'85px'} mb={'65px'}/>
            </HashWrap>
          </EventSection>
          <SubContents>
            <InvestList data={Data2} />
            <InvestTable data={Data} />
          </SubContents>
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
                  <HashWrap className='title-hash'>
                    <HashTag name='프롬이 보험이야기' width={'163px'} color={'#FFFFFF'} bg={'#C22229'} mb={'114px'} />
                    <HashTag name='프롬이의 보험웹툰' width={'163px'} mb={'114px'} />
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
  padding-right: 20%;
  &.fade-el {
    padding-top: 5%;
    h4 {
      opacity: 0;
      margin: 0 25px 34px 0;
      transition: 1.4s;
      :nth-child(2) {
        transition-delay: 0.2s;
      }
      :nth-child(3) {
        transition-delay: 0.4s;
      }
      :nth-child(4) {
        transition-delay: 0.6s;
      }
      :nth-child(5) {
        transition-delay: 0.8s;
      }
      :nth-child(6) {
        transition-delay: 1s;
      }
      :nth-child(7) {
        transition-delay: 1.2s;
      }
      :nth-child(8) {
        transition-delay: 1.4s;
      }
    }
  }
  &.fade-el.show {
    h4 {
      opacity: 1;
    }
  }

  &.title-hash {
    padding-left: 3%;
    > h4 {
      margin: 0 25px 0 0;
    }
  }

  @media (max-width: 700px) {
    padding-right: 0;
    &.fade-el {
      padding-top: 0%;
      h4 {
        margin: 0 15px 14px 0;
      }
    }
    &.title-hash {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      h4 {
      margin: 0 0 10px 20px;
      :last-child {
        margin-bottom: 0;
      }
    }
  }
}
`;


const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  @media (max-width: 700px) {
    padding-left: 7.466666666666667%;
  }
  

`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
`;


const SubContents = styled.div`
  width: 100%;
`;
