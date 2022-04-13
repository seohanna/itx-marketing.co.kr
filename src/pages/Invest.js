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
import { getPostByNo } from '../data/InvestData';

const Invest = ({match, history}) => {
  const [ data, setData ] = useState({});
  const { id } = match.params;
  const location = useLocation();

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-el');
    fadeEls.forEach(function (fadeEl) {
      new ScrollMagic
        .Scene({
          triggerElement: fadeEl,
          triggerHook: .8
        })
        .setClassToggle(fadeEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })


    setData(getPostByNo(id));
    
  }, [id]);
  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        strong='3분 '
        title='제테크'
      />
       {location.pathname === '/business/invest' && (
         <>
          <EventSection 
            thin='+ '
            strong='3분 '
            title='제테크'
            img={invest}
            invest
          >
            <div>
              <h2>3분만에 확인할 수 있는 제테크 노하우</h2>
              <p>보장분석, 상속/증여, 재무설계, 부동산, 세무, 예적금, 투자 등<br />
              다양한 재테크 분야별 노하우를 만나 볼 수 있습니다.
              </p>
            </div>
            <HashWrap className='fade-el'>
              <HashTag name='프롬이 보험이야기'/>
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
         <InvestDetail data={data} />
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
        transition-delay: 0.4s;
      }
      :nth-child(4) {
        transition-delay: 0.6s;
      }
      :nth-child(5) {
        transition-delay: .8s;
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
      :last-child {
        transition-delay: 1.6s;
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


  
`;

