import React from 'react';
import styled from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/businessApplyBanner.png';
import applyCorporate from '../img/sub/apply_corporate.png';
import applyInherit from '../img/sub/apply_inherit.png';
import EventSection from '../components/Business/EventSection';
import applyBusiness from '../img/sub/applyBusiness.png';
import { useLocation } from 'react-router-dom';
import ApplyTab from '../components/Business/Apply/ApplyTab';
import ApplyForm from '../components/Business/Apply/ApplyForm';

const Apply = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/business/apply' && (
        <>
        <Layout>
        <CommonBanner
          apply
          img={bannerImg}
          strong='B'
          title='usiness 상담문의'
          subtxt='비지니스 플랫폼'
        />
        <EventSection 
          thin='+ '
          title='상담문의'
          img={applyBusiness}
          apply
        >
          <PartitionBox>
            <div>
              <h2>전문가의 조언이 필요한 분</h2>
              <p>법인컨설팅<br />개인컨설팅이 필요하시면<br />검증된 전문가가 직접<br />궁금증을 해결해드립니다.</p>
            </div>
            <div>
              <h2>전문가로 활동하고 싶으신 분</h2>
              <p>다양한 영업채널<br />투명한 급여체계에서<br />일하길 원하는 분이면 누구나<br />환영합니다.
              </p>
            </div>
          </PartitionBox>
        </EventSection>
          <BottomWrap>
            <ApplyTab />
            {location.search === '' && (
              <ApplyForm
                corporate
                name='business-corporate'
              />
            )}
            {location.search === '?2' && (
              <ApplyForm name='business-personal'/>
            )}
            {location.search === '?3' && (
              <ApplyForm name='business-expert-join'/>
            )}
          </BottomWrap>
          </Layout>
        </>
      )}
       {location.pathname === '/corporation/apply' && (
      <>
        <CommonBanner
          apply
          img={bannerImg}
          title='상담신청'
          subtxt='기업컨설팅 상담신청'
        />
        <EventSection 
          thin='+ '
          title='법인컨설팅 신청'
          img={applyCorporate}
          apply
        >
          <TextWrap>
            <h2>중소기업의 더 밝은 내일을 위해<br className='mobile'/>노력하겠습니다.</h2>
            <p>소통하는 기업 아이티엑스마케팅은<br />기업의 작은 소리도 크게 듣겠습니다.</p>
          </TextWrap>
        </EventSection>
          <BottomWrap>
            <ApplyForm name='corporate' corporate />
          </BottomWrap>
        </>
      )}
      {location.pathname === '/inherit/apply' && (
        <>
        <CommonBanner
          apply
          img={bannerImg}
          title='상담신청'
          subtxt='상속증여연구소 상담신청'
        />
        <EventSection 
          thin='+ '
          title='건강한상속증여 상담신청'
          img={applyInherit}
          apply
        >
          <TextWrap>
            <h2>고객님의 더 밝은 내일을 위해<br className='mobile'/>노력하겠습니다.</h2>
            <p>건강한상속증여 연구소는<br />고객의 작은 소리도 크게 듣겠습니다.</p>
          </TextWrap>
        </EventSection>
          <BottomWrap>
            <ApplyForm name='inherit' inherit />
          </BottomWrap>
        </>
      )}
    </>
  );
};

export default Apply;

const PartitionBox = styled.div`
  display: flex;
   > div {
     padding: 10% 0 0 6%;
     width: 50%;
     display: flex;
     flex-direction: column;
     
   }
   > div:first-child {
      border-right: 1px solid #444444;
    }

  @media(max-width: 700px) {
    flex-direction: column;
    > div {
      width: 100%;
      padding: 10.3% 0 0 0;
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.625rem;
        line-height: 1rem;
        padding: 5% 0;
      }
    }
    > div:first-child {
      border-right: 0;
      border-bottom: 1px solid #444444;
    }
  }
`;

const BottomWrap = styled.div`
  padding: 7.8125%;
`;


const TextWrap = styled.div`
  padding-left: 8.3%;
  > h2 {
    font-size: 1.5rem;
    .mobile {
      display: none;
    }
  }
  > p {
    font-size: 1.25rem;
  }

  @media(max-width: 700px) {
    padding: 0;
    width: 100%;
    > h2 {
      font-size: 1rem;
      padding: 9% 0;
      line-height: 1.3rem;
      .mobile {
        display: block;
      }
    }
    > p {
      padding-top: 0;
      font-size: 0.625rem;
      line-height: 1rem;
    }
  }
`;