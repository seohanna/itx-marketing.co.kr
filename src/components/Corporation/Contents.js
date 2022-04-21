import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";
import ContentsInner from '../ContentsInner';
import icon1 from '../../img/sub/corporIntroIcon1.png';
import icon2 from '../../img/sub/corporIntroIcon2.png';
import icon3 from '../../img/sub/corporIntroIcon3.png';
import icon4 from '../../img/sub/corporIntroIcon4.png';
import icon5 from '../../img/sub/corporIntroIcon5.png';

import icon2_1 from '../../img/sub/corporIntroIcon2-1.png';
import icon2_2 from '../../img/sub/corporIntroIcon2-2.png';
import icon2_3 from '../../img/sub/corporIntroIcon2-3.png';
import icon2_4 from '../../img/sub/corporIntroIcon2-4.png';
import icon2_5 from '../../img/sub/corporIntroIcon2-5.png';
import icon2_6 from '../../img/sub/corporIntroIcon2-6.png';

import section1 from '../../img/sub/corporService1.png';
import sectionMb1 from '../../img/sub/corporServiceMb1.png';
import section2 from '../../img/sub/corporService2.png';
import section3 from '../../img/sub/corporService3.png';
import sectionMb3 from '../../img/sub/corporServiceMb3.png';
import section4 from '../../img/sub/corporService4.png';
import sectionMb4 from '../../img/sub/corporServiceMb4.png';

import security from '../../img/sub/security.png';
import news from '../../img/sub/corporNews.png';
import support from '../../img/sub/employment_support.png';
import policy from '../../img/sub/policy_fund.png';
import loan from '../../img/sub/corporate_loan.png';
import tax from '../../img/sub/labor_tax.png';
import certification from '../../img/sub/corporate_certification.png';

const icon = [
  {
    id: 0, 
    icons: icon1,
    title: '교통지원',
    class: 'one',
  },
  {
    id: 1, 
    icons: icon2,
    title: '정책자금',
    class: 'two',
  },
  {
    id: 2, 
    icons: icon3,
    title: '노무/세무',
    class: 'three',
  },
  {
    id: 3, 
    icons: icon4,
    title: '기업대출',
    class: 'four',
  },
  {
    id: 4, 
    icons: icon5,
    title: '기업인증',
    class: 'five'
  },
]

const icon_2 = [
  {
    id: 0, 
    icons: icon2_1,
    title: '상담신청',
    class: 'one',
  },
  {
    id: 1, 
    icons: icon2_2,
    title: '전문가배정',
    class: 'two',
  },
  {
    id: 2, 
    icons: icon2_3,
    title: '비밀유지\n서약서',
    class: 'three',
  },
  {
    id: 3, 
    icons: icon2_4,
    title: '분석보고서\n브리핑&제안',
    class: 'four',
  },
  {
    id: 4, 
    icons: icon2_5,
    title: '솔루션 제안',
    class: 'five',
  },
  {
    id: 5, 
    icons: icon2_6,
    title: '사후관리',
    class: 'six',
  },
];


const Contents = ({slogan, disc, disc2, intro, service, id}) => {

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
  }, []);

  return (
    <ContentsInner>
      <TextWrap slogan className='fade-el'>
        <h1>{slogan}</h1>
        <p>{disc}<span>{disc2}</span></p>
      </TextWrap>
      {intro && (
        <>
          <SectionWrap intro>
            <div>
              <TextWrap title>
                <h1><strong>{'중소기업의 문제를 집중\n연구합니다.'}</strong></h1>
                <p>
                 아이티엑스마케팅은 중소기업 경영 중<br className="mobile"/>발생할 수 있는 모든 문제들을<br className="pc"/>
                  신속하고 정확하게<br className="mobile"/>해결할 수 있도록 전문적으로 특화되어 있습니다.
                </p>
              </TextWrap>
              <IconWrap>
                {icon.map((ic) => (
                  <IconList key={ic.id} className='fade-el'>
                    <div className={ic.class}>
                      <img src={ic.icons} alt={ic.title} />
                    </div>
                    <h4>{ic.title}</h4>
                  </IconList>
                ))}
              </IconWrap>
            </div>
            <AsideBox>
              <h3>중소기업 전용<br />
              온라인 상담신청 Click</h3>
              <h3>상담전화 <strong>1588-1234</strong></h3>
            </AsideBox>
            <BottomContents>
              <LeftWrap>
                <h3>기밀유지<span>서</span><span>약</span></h3>
                <p>기밀유지와 정보 보안은 고객과의 가장<br />중요한 약속입니다.</p>
              </LeftWrap>
              <RightWrap>
                <h4>기밀유지 계약서 핵심내용</h4>
                <ul>
                  <ol>1. 컨설팅의 자세</ol>
                  <ol>2. 관련법 준수</ol>
                  <ol>3. 정보보호</ol>
                  <ol>4. 요청 시 파기 및 반환</ol>
                </ul>
              </RightWrap>
            </BottomContents>
          </SectionWrap>
          <SectionWrap intro id={id}>
            <div>
              <TextWrap title>
                <h1><strong>기업컨설팅 프로세스</strong></h1>
                <p>아이티엑스마케팅은 전문적인 프로세스에 <br className="mobile"/>의해 진행됩니다.</p>
              </TextWrap>
              <IconWrap>
                {icon_2.map((ic) => (
                  <IconList key={ic.id} className='fade-el'>
                    <div className={ic.class}><img src={ic.icons} alt={ic.title} /></div>
                    <h4>{ic.title}</h4>
                  </IconList>
                ))}
              </IconWrap>
            </div>
            <AsideBox className="style2">
              <h3>법인컨설팅 분야</h3>
              <div>
                <ul>
                  <li>기업인증</li>
                  <li>자금조달</li>
                  <li>법인전환/설립</li>
                  <li>자사주식취득</li>
                  <li>특허경영</li>
                  <li>가지급금</li>
                </ul>
                <ul>
                  <li>경영인증</li>
                  <li>M&A</li>
                  <li>부동산</li>
                  <li>재무/세무 개선</li>
                  <li>인사/노무제도</li>
                  <li>명의신착주식</li>
                </ul>
              </div>
            </AsideBox>
            <BottomContents>
              <AsideBox className="style2 style3">
                <h3>보도자료</h3>
                <NewsBox>
                  <div className="img-wrap">
                    <img src={news} alt='보도자료' />
                  </div>
                  <div className="text-wrap">
                    <h3>[보도기사] "세금 납부 위한 과정</h3>
                    <p>두번째로는  노무사, 법무사, 감정평가사, 경영지도사와 의 (2022.01.27 내외경제tv)</p>
                  </div>
                  <NewsLink to='#'>&#62;&#62;  더보기</NewsLink>
                </NewsBox>
              </AsideBox>
              <AsideBox className="style2 style3">
                <h3>컨설팅 사례</h3>
                <div>
                  <ul className="company">
                    <li>(주)아이***</li>
                    <li>팍스* ㈜</li>
                    <li>㈜글****</li>
                    <li>㈜효*</li>
                    <li>㈜라이**</li>
                    <li>인슈**㈜</li>
                  </ul>
                  <ul>
                    <li>기업인증</li>
                    <li>인사/노무제도</li>
                    <li>보험마케팅</li>
                    <li>법인전환</li>
                    <li>M&A</li>
                    <li>자금조달</li>
                  </ul>
                </div>
              </AsideBox>
              <AsideBox className="style2 style3">
                <h3>칼럼</h3>
                <div className="column">
                  <p><span>[칼럼_강세훈]</span></p>
                  <p>중견기업 컨설팅 현장의 이슈와 해결안에 대한 재고</p>
                </div>
                <div className="column">
                  <p><span>[칼럼_정의석]</span></p>
                  <p>중견기업 컨설팅 현장의 이슈와 해결안에 대한 재고</p>
                </div>
              </AsideBox>
            </BottomContents>   
          </SectionWrap>
        </>
      )}
      {service && (
        <>
          <SectionWrap>
            <IconWrap service >
              {icon.map((ic) => (
                <IconList key={ic.id} className='fade-el'>
                  <div className={ic.class}><img src={ic.icons} alt={ic.title} /></div>
                  <h4>{ic.title}</h4>
                </IconList>
              ))}
            </IconWrap>
          </SectionWrap>
          <SectionWrap service className="flex-style">
            <div className="img-wrap">
              <img src={support} alt='고용지원' />
            </div>
            <div className="text-wrap">
              <TextWrap title>
                <h1>사업주가 인건비를 아낄 수 있는&nbsp;<br className="mobile"/>
                  <span>고용촉진 지원금제도</span>
                </h1>
                <p>
                  고용촉진 지원금제도란?<br />
                  여성가장·장애인 등 취업이 특히 곤란한 취업 취약자의 <br className="mobile"/>고용촉진 도모하기 위하여<br className="pc"/>
                  취업 취약자를 채용한 <br className="mobile"/>사업주에게 지원금 지원해 주는 제도
                </p>
              </TextWrap>
              <CircleList>
                <li>
                  <img src={section1} alt='' className="pc"/>
                  <img src={sectionMb1} alt='' className="mobile" />
                </li>
              </CircleList>
            </div>
          </SectionWrap>
          <SectionWrap service>
            <div className="text-wrap small-busi large">
              <TextWrap title className="small-busi" >
                <h1>정부가 지원하는&nbsp;
                  <span>중소기업 정책자금!!</span>
                </h1>
                <ul className="list-style">
                  <li>정책자금 지원범위 : <br className="mobile"/>중소기업의 운영자금, 시설자금, 설립자금</li>
                  <li>정책자금 지원효과 : <br className="mobile"/>고용중대효과, 경영난 해소, 창업 초기기업의 <br className="mobile"/>집중 육성 등</li>
                </ul>
                <div className="circle-table">
                  <img src={section2} alt='' />
                </div>
              </TextWrap>
            </div>
            <div className="img-wrap center">
              <img src={policy} alt='정책자금' />
            </div>
          </SectionWrap>
          <SectionWrap service className="flex-style">
            <div className="img-wrap">
              <img src={loan} alt='기업대출' />
            </div>
            <div className="text-wrap">
              <TextWrap title>
                <h1>총액한도액 적용&nbsp;
                  <span>중소기업대출!!</span>
                </h1>
                <p>
                  총액한도대출 이란?<br />
                  한국은행이 시중은행을 통해 최저 0.5%의 이율로 <br className="mobile"/>12조원 규모 대출을 제공하는 제도
                </p>
              </TextWrap>
              <CircleList>
                <li>
                  <img src={section3} alt='' className="pc"/>
                  <img src={sectionMb3} alt='' className="mobile"/>
                </li>
              </CircleList>
            </div>
          </SectionWrap>
          <SectionWrap service>
            <div className="text-wrap small-busi">
              <TextWrap title className="small-busi">
                <h1>기업의 미래가치를 만들어 가는&nbsp;<br className="mobile"/>
                  <span>”기업인증제도”</span>
                </h1>
                <ul className="list-style">
                  <li>혁신형 기업인증 : 기업부설연구소, 벤쳐기업, 이<br className="mobile"/>노비즈, 메인비즈, 우수그린비즈</li>
                  <li>기업인증 : 부품소재전문기업, 뿌리기술전문기업, <br className="mobile"/>녹생인증, ISO인증, NEP인증</li>
                </ul>
                <div className="circle-table">
                  <img src={section4} alt='' className="pc" />
                  <img src={sectionMb4} alt='' className="mobile" />
                </div>
              </TextWrap>
              
            </div>
            <div className="img-wrap center">
              <img src={certification} alt='기업인증' />
            </div>
          </SectionWrap>
          <SectionWrap service>
            <div className="img-wrap">
              <img src={tax} alt='노무/세무' />
            </div>
            <div className="text-wrap last">
              <TextWrap title>
                <h1>인사관리의 법적 실무적 적절성을 판단&nbsp;<br className="mobile"/>
                  <span>”위반사항요소”</span>제거
                </h1>
                <ul className="list-style">
                  <li>취업규칙, 근로계약서, 포괄임금제(연봉제)합법적 개선</li>
                  <li>급여, 복리후생 등 인건비관련 효율적 적법처리방안</li>
                  <li>각종 인사조치에 대한 적법 행사방법</li>
                  <li>해고 또는 징계해고에 대한 적법 실행방법</li>
                  <li>평가보상체계 설계</li>
                  <li>노사협의회의 효과적 운영설계</li>
                </ul>
              </TextWrap>
            </div>
          </SectionWrap>
        </>
      )}
    </ContentsInner>    
  );
};

export default Contents;


const SectionWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
 
  &.flex-style {
    justify-content: flex-start;
  }
  ${props => props.intro && css`
    padding: 7.8% 0;

    > div:first-child {
      width: 69.1358024691358%;
    }
  `}

  ${props => props.service && css`
    padding: 5% 0;
    :nth-child(3),:nth-child(5) {
      border-bottom: 1px solid #444444;
    }
    > ul:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .img-wrap {
      align-self: flex-start;
      margin-right: 6%;
    }
    
    .img-wrap.center {
      display: flex;
      align-self: center;
      margin-right: 3%;
    }
    .text-wrap.small-busi.large {
      width: 70%
    }
    .text-wrap {
      align-self: flex-start;
      padding-left: 2%;
      

      &.text-wrap.last {
        > div {
          padding: 3% 0 20% 0;
        }
      }
    }
    .mobile {
      display: none;
    }
  `}

  @media(max-width: 700px) {

    ${props => props.intro && css`
      > div:first-child {
          width: 100%;
      }
    `}
    ${props => props.service && css`
      padding: 10% 0;
      .img-wrap { 
        > img {
          width: 200px;
          height: 300px;
        }
      }
      .text-wrap {
        width: 100%;
        align-self: flex-start;
        padding: 10% 0 0 0;
      }
      .text-wrap.small-busi.large {
        width: 100%
      }
      .text-wrap.small-busi {
        order: 2;
      }
      .img-wrap.center {
        order: 1;
        align-self: flex-end;
        margin: 10% 0 0 0;
      }
    `}
  }
`;

const TextWrap = styled.div`
  color: #444444;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    font-family: 'GoyangIlsan';
    font-weight: 400;
    color: #1A1A1A;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.8rem;
  }

  .list-style {
    > li {
      ::before {
        content: '';
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #444444;
        margin: 0 2%;
      }
    }
  }
  .circle-table {
    padding: 9% 0 0 0;
  }
  &.fade-el {
    h1 {
      opacity: 0;
      transition-delay: 0.5s;
      transition: 1s;
      padding: 7% 0 4.9% 0;
    
      > strong {
        font-family: 'GoyangDeogyang';
        color: #1a1a1a;
      }
    }
    > p {
      opacity: 0;
      transition-delay: 1.5s;
      transition: 2s;
      white-space: pre;
      padding-bottom: 7.5%;
    }
  }

  &.fade-el.show {
    > p, h1 {
      opacity: 1;
    }
  }
  .mobile {
    display: none;
  }

  ${props => props.title && css`
    padding: 0;
    text-align: start;

    > h1 {
      padding-bottom: 3.2%;
      
      > strong {
        font-family: 'GoyangDeogyang';
      }
      span {
        position: relative;
        font-family: 'GoyangDeogyang';
        ::after {
          content: '';
          display: inline-block;
          width: 100%;
          height: 3px;
          background-color: #1A1A1A;
          position: absolute;
          bottom: 15%;
          left: 0%;
          z-index: -1;
        }
      }
    }
    > p {
      display: flex;
      flex-flow: column;
    }
    
    ul {
      > li {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        padding-bottom: 1%;
      }
    }
  `}

  @media(max-width: 700px) {
    ${props => props.slogan && css`
      padding: 15% 0;
    `}
    .mobile {
      display: block;
    }
    .pc {
      display: none;
    }
    > h1 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      white-space: pre;
      span {
        ::after {
          height: 1px;
        }
      }
    }
    > p {
      font-size: 0.8125rem;
      line-height: 1.2rem;
      > span {
        display: block;
      }
    }
    &.fade-el {
      h1 {
        padding: 0;
      }
      > p {
        padding-bottom: 0;
      }
    }

    ul {
      > li {
        display: flex;
        align-items: flex-start;
        font-size: 1.25rem;
        padding-bottom: 5px;
        line-height: 1.3rem;
        
        ::before {
          width: 3px;
          height: 3px;
          margin: 7px 10px 0 0;
        }
      }
    }

    

  ${props => props.title && css`
    padding: 0;
    
    > h1 {
      line-height: 1.5rem;
      padding: 0 0 5% 0;
      
      > strong {
        white-space: pre;
      }
    }
    > p {
      display: flex;
      flex-flow: column;
    }
    ul {
      > li {
        font-size: 0.8125rem;
      }
    }
    .list-style {
    > li {
      ::before {
        width: 3px;
        height: 3px;
        margin: 2.3% 2% 0 2%;
      }
    }
  }
  .circle-table {
      padding: 9% 0 0 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `}
  }
`;

const IconWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 4%;
  align-self: flex-end;

  ${props => props.service && css`
    width: 100%;
    justify-content: center;
    padding: 3% 0 5% 0;
  `}

  @media(max-width: 700px) {
    padding: 13% 0;

    ${props => props.service && css`
      padding: 0;
      justify-content: flex-start;
    `}
  }
`;

const IconList = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 2.1%;

  &.fade-el {
    div {
      opacity: 0;
      transition: 1s;
    }
  }
  &.fade-el.show {
    div {
      opacity: 1;
    }
  }

  > div {
    width: 130px;
    height: 130px;
    background-color: #F8F8F8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.one {
      transition-delay: .3s;
    }
    &.two {
      transition-delay: .6s;
    }
    &.three {
      transition-delay: .9s;
    }
    &.four {
      transition-delay: 1.2s;
    }
    &.five {
      transition-delay: 1.5s;
    }
    &.six {
      transition-delay: 1.8s;
    }
  }

  > h4 {
    font-weight: 400;
    color: #1A1A1A;
    padding: 20% 0;
    white-space: pre;
  }

  @media(max-width: 700px) {
    width: 50%;
    > div {
      width: 90px;
      height: 90px;
      > img {
        height: 47px;
        width: auto;
      }
    }

    > h4 {
      font-size: 0.8125rem;
    }
  }
`;

const AsideBox = styled.div`
  width: 30.8641975308642%;
  background-color: #B8292D;
  padding: 0 2%;
  color: #FFFFFF;
  box-shadow: -18px 22px 45px rgba(0, 0, 0, 0.15);
  > h3 {
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: 400;
      padding: 9% 0;
      :first-child {
        border-bottom: 3px solid #FFFFFF;
      }
    > strong {
      font-size: 2rem;
      display: inline-block;
    }
  }
   div {
    display: flex;
    padding: 5% 0;
    > ul {
      padding-right: 10%;
      > li {
        line-height: 1.733333333333333rem;
      }
    }
   }

   &.style2 {
     width: 26.3855421686747%;
   }
   &.style3 {
     background-color: #F8F8F8;
     box-shadow: none;
     color: #1a1a1a;
     font-size: 0.8rem;
     > h3 {
        color: #444444;
        border-color: #444444;
     }
     .company {
        width: 50%;
        > li {
          display: flex;
          align-items: center;
         
          ::before {
            content: '';
            width: 5px;
            height: 5px;
            background-color: #1a1a1a;
            border-radius: 50%;
            display: block;
            margin: 10%;
          }
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        padding: 5% 2%;
        color: #444444;
        span {
          color: #1A1A1A;
        }
      }
   }

   @media(max-width: 700px) {
    width: 100%;
    box-shadow: -12px 11px 16px rgba(0, 0, 0, 0.15);
    padding: 0 10%;
    margin-bottom: 20%;
    > h3 {
      font-size: 1.25rem;
      > strong {
        font-size: 1.5625rem;
      }
    }
    
  
    &.style2 {
      width: 100%;
      padding: 0 8%;
      > h3 {
        padding: 5% 0 3% 0;
      }
      ul {
        li {
          font-size: 0.625rem;
        }
      }
    }
    &.style3 {
      padding: 0 5%;
      margin-bottom: 10%;
      > h3 {
        padding: 5.5% 0 2.5% 0;
      }
      div {
        padding: 5% 0;
      }
      ul > li {
        font-size: 0.8125rem;
      }
      .company {
        width: 50%;
        > li {     
          
          ::before {
            width: 2px;
            height: 2px;
            margin: 8%;
          }
        }
      }
      .column {
        > p {
          font-size: 0.8125rem;
          padding-bottom: 5%;
          :last-child {
            padding-bottom: 10%;
          }
        }
      }
    }

  }
`;

const BottomContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7.5% 0 5% 0;

  @media(max-width: 700px) {
    flex-flow: column;
  }
`;

const LeftWrap = styled.div`
  width: 25.98765432098765%;

  > h3 {
    font-size: 1.25rem;
    color: #1A1A1A;
    padding: 9% 0 6%;
    > span {
      position: relative;
      
      ::after {
        content: '';
        display: block;
        position: absolute;
        top: -50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background-color: #B8292D;
        border-radius: 50%;
      }
    } 
  }

  > p {
    font-size: 1.25rem;
    line-height: 2rem;
  }

  @media(max-width: 700px) {
    width: 100%;
    > h3 {
      font-size: 1rem;
      > span {
        ::after {
          width: 5px;
          height: 5px;
        }
      }
    }
    > p {
      font-size: 0.8125rem;
      line-height: 1.2rem;
    }
  }
`;

const RightWrap = styled.div`
  width: 65.06172839506173%;
  background-image: url(${security});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6.4% 0 1.5% 3%;
  transform: translateX(-13%);
  h4 {
    display: inline-flex;
    line-height: 2.65rem;
    color: #B8292D;
    border-top: 3px solid #B8292D;
    border-bottom: 3px solid #B8292D;
  }
  ul {
    padding: 2% 0;
    > ol {
      font-size: 1.25rem;
      color: #1A1A1A;
      font-weight: 400;
      text-indent: 10px;
      padding-bottom: 1.5%;
    }
   }

   @media(max-width: 700px) {
    width: 100%;
    transform: translateX(0);
    margin: 17% 0 0 0;
    background-position: center center;
    padding: 40% 0 0% 7%;

    h4 {
      display: inline-flex;
      line-height: 2.65rem;
      color: #B8292D;
      border-top-width: 2px;
      border-bottom-width: 2px;
      font-size: 0.8125rem;
      padding-right: 5%;
    }
    ul {
      padding: 8% 0 5% 0;
      > ol {
        font-size: 0.8125rem;
        text-indent: 5px;
        padding-bottom: 3%;
      }
    }
  }
`;

const NewsBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  > div {
    &.text-wrap {
      display: flex;
      flex-flow: column;
      width: 60%;
      font-size: 0.8rem;

      > h3 {
        font-size: 0.8rem;
      }
      
    }
  }

  @media(max-width: 700px) {
    justify-content: flex-start;
    .img-wrap {
      padding: 0;
      width: 100px;
      > img {
          width: 80px;
          height: 56px;
        }
      }
      .text-wrap {
        padding: 0;
        h3, p {
          font-size: 0.8125rem;
          line-height: 1.5rem;
        }
      }
  }
`;
const NewsLink = styled(Link)`
  display: block;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;

  @media(max-width: 700px) {
    font-size: 0.8125rem;
    padding: 7% 0 2% 0;
  }

`;
const CircleList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 5%;
  
  > li {
    display: flex;
    .mobile {
      display: none;
    }
  }
  @media(max-width: 700px) {
    width: 100%;
    padding-top: 7%;
    > li {
      .pc {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
    > li:last-child {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
 }
`;
