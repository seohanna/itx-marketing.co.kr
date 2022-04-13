import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import Title from './Title';
import  { ReactComponent as LinkBtn } from '../../img/common/LinkBtn.svg';
import  { ReactComponent as PlusBtn } from '../../img/common/PlusBtn.svg';

const News = [
  {
    id: 0,
    date: '2021-09-17',
    title: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    content: '보험전문대리점(GA)인 아이티엑스마케팅(대표이사 전병무)은 상속과 증여에 대한 전문적인 자산관리 서비스를 제공하기 위해 ‘건강한 상속·증여 연구소’를 출범한다고 13일에 밝혔다.',
    subCont: '세부, 법무, 노무, 부동산 등 각 분의 전문가들로 구성되며, 고객의 자산관리 전반에 걸쳐 밀착컨설팅을 제공할 예정이다.···'
  },
  {
    id: 1,
    date: '2021-07-23',
    title: '[조이뉴스24] 더 에이치 희망 플러스, ITX마케팅, ㈜케이닥, 국제의료봉사협력을 위한 업무협약(MOU) 체결',
    content: '국제의료봉사단체 ‘더 에이치 희망 플러스’ (이사장 에이티세콘 김형준 대표) 22일 ITX마케팅, ㈜케이닥과 업무협약(MOU)을 체결하였다고 밝혔다.',
    subCont: 'ITX마케팅 전병무 대표이사는 GA(General Agency)업을 추진하고 있으며, 국제의료본사단체···'
  },
  {
    id: 2,
    date: '2021-07-15',
    title: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    content: '독립법인보험대리점(GA)인 아이티엑스마케팅과 이달부터 보험전문 방문형점포 ‘보험플러스’를 운영한다고 7일 밝혔다.',
    subCont: '보험플러스는 보험 컨설팅·보험금 청구 등의 서비스를 이용할 수 있으며 관련 전문가가 항시 대기 중이다.···'
  },
  {
    id: 3,
    date: '2021-07-15',
    title: '[조이뉴스24] 인슈로보·아이티엑스마케팅, 인슈어테크 플랫폼과 오프라인 결합형 업무협약(MOU) 체결',
    content: 'AI기반의 차세대 지능형 인슈어테크 기업 (주)인슈로보(대표 서민)는 독립보험대리점(GA) (주)아이티엑스마케팅(대표 전병무)과 보험사업의 온오프라인 시너지 창출을 위한 전략적 업무 협약(MOU)을 체결했다고 밝혔다.',
    subCont: '이번 협약을 통해 양사는 상호 보험사업 성장동력을 확보하기 위한 전략적 협업을 본격적으로 진행해 나갈 방침이다.···'
  },
  {
    id: 4,
    date: '2021-07-05',
    title: '흥국생명 계약담당자 변경안내',
    content: '영업양도양수계약의 체결로 인해 흥국생명의 아래의 계약을 관리하게 되었습니다,',
    subCont: '고객님의 계약내용에는 변경사항이 없으며, 개인정보관리 및 계약 유지관리에 만전을 기하겠습니다.···'
  },
]

const ManageIdeaContainer = styled.section`
  padding: 6.54% 7.8%;

  @media (max-width: 700px) {
    padding: 14% 0 14% 6.2%;
  }
`;
const StyleSwiper = styled(Swiper)`
  padding: 15% 3.5%;
  margin: 0 1%;

  .swiper-slide{
    box-shadow: 0px 5px 48px rgba(0, 0, 0, 0.2);
    border-radius: 45px;
    padding: 3.2%;
    height: 640px;
    transition: transform 1s;
    
    @media (max-width: 1261px) {
      height: 400px;
      border-radius: 30px;
      padding: 3%;
      transition: all .3s;
      transform: scale(1);
      overflow: hidden;
      background-color: #FFFFFF;
    }
    @media (max-width: 700px) {
      height: 204px;
      width: 203px;
      border-radius: 9px;
      box-shadow: 6px 7px 14px rgba(0, 0, 0, 0.15);
      margin-right: 25px;
    } 
  }

@media (max-width: 700px) {
  margin: 0%;
  padding: 10% 0;
 
}
&#original-slide .swiper-slide-active{
  transform: scale(1.1);

  @media(max-width: 700px) {
    transform: scale(0.9);
  }
}
&#original-slide .swiper-slide:hover .hover,
&#original-slide .swiper-slide-active .hover{
   stroke: #B8292D;
}
`;

const TextContent = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;

  .top-txt {
    font-family: 'GoyangDeogyang';
    height: 52.5%;
    > span {
      font-size: 0.9rem;
      line-height: 1rem;
      color: #620406;
      border-bottom: 2px solid #620406;
    }
    > h3 {
      color: #323232;
      font-size: 1.25rem;
      padding-top: 36.4%;
    }
    @media (max-width: 1261px) {
      > span {
        border-bottom: 1px solid #620406;
      }
      > h3 {
        padding-top: 20%;
        font-size: 1rem;
      }
    }
    @media (max-width: 700px) {
      > span {
        font-size: 0.625rem;
      }
      > h3 {
        font-size: 0.625rem;
        height: 60px;
        text-overflow: ellipsis;
        white-space: pre;
        overflow: hidden;
      }
    }
    
  }
  .bottom-txt {
    font-size: 0.8rem;
    line-height: 0.8905rem;
    padding-top: 20%;
    > p {
      padding-bottom: 3%;
    }
    @media (max-width: 1261px) {
      padding-top: 0%;
      > p {
        font-size: 0.7rem;
      }
      > span {
        display: none;
      }
    }
    @media (max-width: 700px) {
      > p {
        font-size: 0.625rem;
        padding-bottom: 0%;
        line-height: 0.85rem;
      }
    }
  }
`;
const StyleA = styled(Link)`
  display: flex;
 align-items: center;
  justify-content: flex-end;

  .link-btn{
    width: 78.5px;
   height: 12.05px;

   @media (max-width: 700px) {
    width: 20.5px;
    height: 3.15px;
    }
  }
  .link-btn.hover{
   transition: all .3s;
   }

  .link-btn.static{
    stroke: #B8292D;
   }
`;

const MoreBtn = styled.button`
  position: absolute;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #323232;
  font-size: 1.25rem;
  font-family: 'GoyangDeogyang';
  cursor: pointer;
  > span {
    align-self: flex-end;
  }
 .toggle-btn{
   width: 30px;
   height: 30px;
   margin-right: 57px;
 }
 @media (max-width: 700px) {
   display: none;
 }
`;



const PressRoom = () => {
  SwiperCore.use([Autoplay]);

  const [isToggleOn, setToggleOn] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const handleClick = () => {
    setToggleOn(!isToggleOn);
    console.log(swiper)
  }
  const swiperParams = {
    onSwiper: setSwiper,
    loop: true,
    slidesPerColumn: 1,
    centeredSlides: false,
    slidesPerView: 'auto',
    loopedSlides: 4,
    slidesBetween:0,
    // slidesBetween: 23,
    speed: 1000,
    autoplay : {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      700: {
        slidesPerView: 3,
        spaceBetween: 100,
        slidesPerColumn: 1,
        centeredSlides: true,
        slidesPerColumnFill: 'row',
        direction: 'horizontal',
        allowTouchMove: false,
      }
    }
  }
  
  return (
    <ManageIdeaContainer>
      <Title en={'Press Room'} ko={'프레스 룸'} />
      {!isToggleOn && (
        <StyleSwiper 
          {...swiperParams} 
          ref={setSwiper}
          id="original-slide"
        >
        {News.map((nd) => (
          <SwiperSlide key={nd.id}>
            <TextContent>
              <div className='top-txt'>
                <span>{nd.date}</span>
                <h3>{nd.title}</h3>
              </div>
              <div className='bottom-txt'>
                <p>{nd.content}</p>
                <span>{nd.subCont}</span>
              </div>
            </TextContent>
            <StyleA to="#">
              <LinkBtn className='link-btn hover' stroke="#C4C4C4"/>
            </StyleA>
          </SwiperSlide>
          ))}
          </StyleSwiper>
        )}
        {isToggleOn && (
          <StyleSwiper id="more-slide" 
            slidesPerView={3}
            spaceBetween={100}
            slidesPerColumn={2}
            slidesPerColumnFill={'row'}
          >
          {News.map((nd) => (
            <SwiperSlide key={nd.id}>
              <TextContent>
              <div className='top-txt'>
                <span>{nd.date}</span>
                <h3>{nd.title}</h3>
              </div>
              <div className='bottom-txt'>
                <p>{nd.content}</p>
                <span>{nd.subCont}</span>
              </div>
              </TextContent>
              <StyleA to="#">
                <LinkBtn className='link-btn static'/>
              </StyleA>
            </SwiperSlide>
            ))}
            </StyleSwiper>)}

        <MoreBtn onClick={handleClick} isopen={isToggleOn}>
          <PlusBtn stroke="#323232" className='toggle-btn'/>
            {!isToggleOn && (<span>더 보기</span>)}
            {isToggleOn && (<span>다시 접기</span>)}
        </MoreBtn>
      </ManageIdeaContainer>
  )
}

export default PressRoom;