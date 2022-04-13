import React from 'react';
import styled from "styled-components";
import SectionTitle from '../PlatForm/SectionTitle';
import TitleBox from '../TitleBox';
import ContentsInner from '../ContentsInner';
import { useLocation } from 'react-router-dom';
import { profile, profile2 } from '../../data/ProfileList';

function BorderTitleSection({
  disc, span
}) {
  const location = useLocation();
  return (
    <>
      <TitleWrap>
        <SectionTitle>
          <span>+ </span>
          전문가 그룹
        </SectionTitle>
      </TitleWrap>
      <Content>
        <TitleBox left='0' title='전문가그룹' list4='아이티엑스 전문가그룹' expert />
        <GrayBox>
          <div>
            <h3>고객의 입장에서 생각하고<br className='mobile'/>실행합니다.</h3>
            <p>{disc}<span>{span}</span></p>
          </div>
        </GrayBox> 
      </Content>
      <ContentsInner>
        {location.pathname === '/corporation/expert' ? (
          <>
            <ProfileList>
            {profile.map((data) => (
              <li key={data.id}>
                <div className='header'>
                  <h2>{data.job}</h2>
                  <p>전문가 프로필</p>
                </div>
                <div className='top'>
                  <img src={data.img} alt={data.name} />
                  <div>
                    <h2>{data.job}&nbsp;{data.name}</h2>
                    <p>연령 : {data.age}</p>
                    <p>연락처 : {data.tel}</p>
                  </div>
                </div>
                <div className='bottom'>
                  <div>
                    <p><span>학력</span></p>
                    <p>{data.education}</p>
                  </div>
                  <div>
                    <p><span>주요 경력</span></p>
                    <p>{data.career}</p>
                  </div>
                  <div>
                    <p><span>주요 업무</span></p>
                    <p>{data.task}</p>
                  </div>
                </div>
              </li>
            ))}
          </ProfileList>
          <ButtonWrap>
            <MoreButton>더보기 +</MoreButton>
          </ButtonWrap>
        </>
        ) : (
          <>
            <ProfileList className='column'>
            {profile2.map((data) => (
              <li key={data.id}>
                <div className='header'>
                  <h2>{data.part}</h2>
                  <p>전문가 프로필</p>
                </div>
                <div className='top center'>
                  <img src={data.img} alt={data.part} />
                </div>
              </li>
            ))}
            </ProfileList>
            
          </>
        )}
      </ContentsInner> 
    </>
  )
}

export default BorderTitleSection;

const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  
  @media (max-width: 700px) {
    padding-left: 6%;
    background-color: #f8f8f8;
  }
`;
const Content = styled.div`
  position: relative;
  margin: 4.3% 0 5.6% 0;
  padding-left: 12.96875%;

  @media (max-width: 700px) {
    margin: 0;
    padding-left: 0;
  }
`;

const GrayBox = styled.div`
  background-color: #f8f8f8;
  > div {
    padding: 7.7% 0 7.6% 17%;
    
    h3 {
      font-size: 1.5rem;
      padding-bottom: 2.95%;
      .mobile {
        display: none;
      }
    }
    p {
      font-size: 1.25rem;
      line-height: 1.775rem;
      white-space: pre;

      > span {
        white-space: normal;
      }
    }
  }
  @media (max-width: 700px) {
    
    > div {
      padding: 13% 0 103% 6.2%;
      > h3 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        .mobile {
          display: block;
        }
      }
      > p {
        width: 45%;
        font-size: 0.8125rem;
        line-height: 1.3rem;
        padding-bottom: 0%;
        > span {
          white-space: pre;
        }
      }
      
    }
  }
`;

const ProfileList = styled.ul`
  display: flex;
  flex-flow: row wrap;
 
  > li {
    width: 30.8641975308642%;
    border: 2px solid #B8292D;
    margin-right: 3.6%;
    margin-bottom: 10%;

    :nth-child(3n) {
      margin-right: 0;
    }
      div {
        padding: 5% 4.5%;
      }
      h2 {
        font-size: 1.25rem;
      }
    .header {
      background-color: #B8292D;
      color: #FFFFFF;
      p {
        font-size: 0.8rem;
        display: flex;
        justify-content: flex-end;
        transform: translate(3%, 50%);
      }
    }
    .top {
      display: flex;
      div {
        padding: 0 0 0 7% ;
      }
      img {
        height: 160px;
        width: 125px;
        background-color: #BEBEBE;
      }
      h2 {
        border-bottom: 1px solid #BEBEBE;
        color: #1a1a1a;
        line-height: 2.3rem;
      }
      p {
        padding-top: 7%;
      }

    }
    .top.center{
      justify-content: center;
      align-items: center;
      height: 250px;
      img {
        align-self: center;
        width: auto;
        height: auto;
        background-color: transparent;

      }
    }
    .bottom {
      span {
        color: #B8292D;
        display: block;
        padding-bottom: 1%;
      }
    }
  }

  @media (max-width: 700px) {
    width: 290%;
    padding: 20% 0 20% 0;
    &.column {
      flex-direction: column;
      width: 100%;
      > li {
        width: 100%;
      }
    }
    > li {
      width: 30.8641975308642%;
      border: 2px solid #B8292D;
      margin-right: 3.6%;
      margin-bottom: 10%;

      :nth-child(3n) {
      margin-right: 0;
    }
      div {
        padding: 5% 10%;
      }
      h2 {
        font-size: 1.25rem;
      }
    .header {
      height: 80px;
      p {
        font-size: 0.8125rem;
        transform: translate(0, 50%);
      }
    }
    .top {
      display: flex;
      div {
        padding: 0 0 0 7% ;
      }
      img {
        height: 160px;
        width: 125px;
        background-color: #BEBEBE;
      }
      h2 {
        border-bottom: 1px solid #BEBEBE;
        color: #1a1a1a;
        line-height: 2.3rem;
      }
      p {
        padding-top: 7%;
      }

    }
    .top.center{
      justify-content: center;
      align-items: center;
      height: 170px;
      img {
        align-self: center;
        width: 200px;
        height: auto;
        background-color: transparent;
      }
    }
    .bottom {
      span {
        color: #B8292D;
        display: block;
        padding-bottom: 1%;
      }
    }
  }
  }
`;
const ButtonWrap = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    padding: 0 0 20% 0;
  }
`;
const MoreButton = styled.button`
  

  @media (max-width: 700px) {
    display: flex;
    width: 200px;
    height: 50px;
    background-color: #F8F8F8;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: #444444;
    font-size: 1rem;
    font-family: 'GoyangIlsan';
  }


`;