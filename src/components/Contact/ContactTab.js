import React, { useState } from 'react'
import styled from 'styled-components';

import banner1 from '../../img/sub/contactVisual1.png';
import banner2 from '../../img/sub/contactVisual2.png';

import Layout from '../../Layouts/Layout'
import GroupChart from './GroupChart';
import Overay from '../Overay';
import SalesChart from './SalesChart';
import TopBox from './TopBox';
import TitleBox from '../TitleBox';
import SearchMap from './SearchMap';



const BannerContain = styled.div`
  position: relative;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.7% 13.54166666666667% 2.1%;
  @media (max-width: 700px) {
    padding: 8% 5.4% 8%;
  }
  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 700px) {
      padding: 0;
    }
    > li {
      width: 50%;
      text-align: center;
      border: 1px solid #C4C4C4;
      border-right-width: 0;
      color: #767676;
  
      &.active{
        border: 2px solid #B8292D;
        border-right-width: 2px;
        color: #B8292D;
        font-family: 'GoyangDeogyang';
      }
      > a {
        display: block;
        line-height: 3.5rem;
        @media (max-width: 700px) {
          line-height: 2.5rem;
          font-size: 0.8125rem;
        }
      }
      :last-child {
        border-right-width: 1px;
      }
      :last-child.active {
        border-right-width: 2px;
      }
    }
  }
`;

const ContactBanner = styled.section`
  position: relative;
  padding-top: 52.09%;
  background-repeat: no-repeat;
  background-position: 0 70%;
  background-size: 100%;
  
  @media (max-width: 700px) {
    padding-top: 154.7%;
    background-size: cover;
    background-position: 72% 50%;
    &.banner2-bg {
      background-position: 16% 50%;
    }
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
        padding-top: 12.4%;
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
const TabContent = styled.div`
  .block{
    display: block;
  }
  .hidden{
    display: none;
  }
`;


const ContactTab = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Layout>
      {openTab === 1 && (
        <ContactBanner style={{
          backgroundImage: `url(${banner1})`
        }}>
          <Overay />
          <div className='text-wrap'>
            <h2><strong>C</strong>ontact <strong>U</strong>s</h2>
            <p>ITX 마케팅 조직도</p> 
          </div>
        </ContactBanner> 
      )}
      {openTab === 2 && (
        <ContactBanner
          className='banner2-bg'
          style={{
          backgroundImage: `url(${banner2})`
        }}>
          <div className='text-wrap'>
            <h2><strong>C</strong>ontact<strong>U</strong>s</h2>
            <p>ITX마케팅 사업단</p> 
          </div>
        </ContactBanner> 
      )}
      
      <NavContainer>
        <ul>
          <li className={openTab === 1 ? 'active' : '' }>
            <a
              onClick={(e) => {
              e.preventDefault();
              setOpenTab(1)}}
              data-toggle="tab"
              href="#cont1"
              role="tablist"
            >조직도</a>
          </li>
          <li className={openTab === 2 ? 'active' : '' }>
            <a
              onClick={(e) => {
              e.preventDefault();
              setOpenTab(2)}}
              data-toggle="tab"
              href="#cont2"
              role="tablist"
            >사업단 & FP 찾기</a>
          </li>
        </ul>
      </NavContainer>
    <TabContent>
      <div className={openTab === 1 ? 'block' : 'hidden'} id="#cont1">
        <BannerContain>
          <TopBox title="조직구성"/>
          <TitleBox
            title="조직도"
            left='0'
          />
        </BannerContain>
        <GroupChart />
        <SalesChart />
      </div>
      <div className={openTab === 2 ? 'block' : 'hidden'} id="#cont2">
        <BannerContain>
          <TopBox title="사업단, 보험플러스 조회"/>
          <TitleBox
            title="사업단 조회"
            left='0'
          />
        </BannerContain>
        <SearchMap />
      </div>
    </TabContent>
    </Layout>
  )
}

export default ContactTab;
