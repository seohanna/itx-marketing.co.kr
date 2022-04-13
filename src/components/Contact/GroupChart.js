import React from 'react';
import Title from '../Summary/Title';
import styled from 'styled-components';

const Container = styled.section`
  padding: 7% 8.3%;

  @media (max-width: 700px) {
    padding: 11.3% 6%;
    width: 100%;
  }
`;
const ChartWrap = styled.div`
  padding: 3.7% 0 4.4% 6.4%;
  display: flex;


  @media (max-width: 700px) {
    padding: 4.3% 0 6.4%;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
 .ceo-wrap {
   padding-right: 7%;
   align-self: flex-end;
 
   
   @media (max-width: 700px) {
    align-self: center;
    padding: 0 5% 8%;
  }
 }
  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #DCE6F2;
    border-radius: 50%;
    position: absolute;
    left: -8px;
    z-index: 3;
    @media (max-width: 700px) {
      width: 4px;
      height: 4px;
      left: 50%;
      top: -3px;
    }
  } 
`;
const Depth1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 405px;
  position: relative;

    @media (max-width: 700px) {
      height: 120px;
      margin: 0 15%;
      /* width: 100%; */
    }
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 268px;
    position: absolute;
    top: 27px;
    left: -27%;
    border-left: 3px solid #F0F0F0;
    border-top: 3px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;

    @media (max-width: 700px) {
      border-left: 1.5px solid #F0F0F0;
      border-top: 1.5px solid #F0F0F0;
      border-right: 1.5px solid #F0F0F0;
      border-bottom: 0;
      border-top: 1.5px solid #F0F0F0;
      left: 19%;
      top: -10.5%;
      height: 16px;
      width: 62%;
      background-color: #FFFFFF;
      z-index: 3;
    }
  }
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #F0F0F0;
    position: absolute;
    bottom: 26%;
    left: 0;
    z-index: 1;
  }
  @media (max-width: 700px) {
    flex-direction: row;
    ::before {
      display: none;
    }
  }
`;
const Depth2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 271px;
  align-self: flex-end;
  position: relative;
  padding-left: 2%;
  
  @media (max-width: 700px) {
    width: 65%;
    height: 51px;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
    height: 51px;
  }
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 217px;
    position: absolute;
    top: 24px;
    left: -1%;
    border-left: 3px solid #F0F0F0;
    border-top: 3px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;
    @media (max-width: 700px) {
      height: 16px;
      border-left: 1.5px solid #F0F0F0;
      border-right: 1.5px solid #F0F0F0;
      border-top: 1.5px solid #F0F0F0;
      border-bottom: 0;
      width: 137px;
      top: -20px;
      left: 24%;
    }
  }
   div:first-child {
    background-color: #A3CDFF;
    order: 2;
      @media (max-width: 700px) {
        transform: translateX(20%);
      }
    > span {
      background-color: #A3CDFF;
      @media (max-width: 700px) {
        left: 49%;

      }
    }
  }
`;
const Depth3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  position: relative;
  padding-left: 2%;
  margin-left: 2%;
  @media (max-width: 700px) {
    width: 65%;
    height: 51px;
    flex-direction: row;
    align-self: flex-start;
    padding-left: 2%;
    margin-left: 0%;
  }
  ::before {
    content: '';
    display: block;
    width: 50%;
    height: 100px;
    position: absolute;
    top: 24px;
    left: -1%;
    border-left: 3px solid #F0F0F0;
    border-top: 3px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;
    @media (max-width: 700px) {
      height: 27px;
      border-left: 0;
      border-top: 1.5px solid #F0F0F0;
      border-bottom: 0;
      border-right: 1.5px solid #F0F0F0;
      top: -20%;
      left: 25%;
      width: 120px;
    }
  }
  ::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    position: absolute;
    top: 73%;
    left: 0;
    transform: translate(-100%);
    background-color: #F0F0F0;
    @media (max-width: 700px) {
      transform: translate(0);
      display: none;
    }
  }
  > div:last-child {
    transform: translateY(100%);
    @media (max-width: 700px) {
      transform: translate(0);
    }
  }
`;
const Depth4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  padding-left: 2%;
  margin-left: 2%;
  position: relative;

  @media (max-width: 700px) {
    width: 65%;
    height: 51px;
    align-self: flex-start;
    flex-direction: row;
    padding-left: 2%;
    margin-left: 0;
  }
  ::before {
    content: '';
    display: block;
    width: 50%;
    height: 100px;
    position: absolute;
    top: -25%;
    left: -1%;
    border-left: 3px solid #F0F0F0;
    border-top: 3px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;
    @media (max-width: 700px) {
      border-left: 1.5px solid #F0F0F0;
      border-right: 1.5px solid #F0F0F0;
      border-top: 1.5px solid #F0F0F0;
      border-bottom: 0;
      top: -20%;
      left: 25%;
      width: 120px;
      height: 20px;
    }
  }
  ::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    position: absolute;
    top: 25%;
    left: 0;
    transform: translate(-100%);
    background-color: #F0F0F0;
    @media(max-width: 700px) {
      height: 100px;
      transform: translate(0);
      width: 1.5px;
      top: -150%;
      left: 25%;
    }
  }
  > div:first-child {
    transform: translateY(-100%);
    @media(max-width: 700px) {
      transform: translate(0);
      order: 1;
    }
    > div {
      ::before {
      content: '';
      display: block;
      width: 41px;
      height: 3px;
      position: absolute;
      top: 23px;
      left: -20%;
      background-color: #F0F0F0;
      @media(max-width: 700px) {
        height: 100px;
        width: 1.5px;
        top: -150%;
        left: -20%;
        }
      }
    }
  }
`;


const Circle = styled.div`
  width: 215px;
  height: 215px;
  border-radius: 50%;
  border: 2px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  align-self: flex-end;
  position: relative;
  z-index: 4;
  > p {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #444444;
    border-radius: 50%;
    z-index: 99;
  }
  span {
    display: inline-block;
    background-color: #444444;
    left: 101%;
    
      ::after {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 3px;
      background-color: #F0F0F0;
      z-index: 1;
      position: absolute;
      left: 9px;
      top: 4.5px;
      @media(max-width: 700px) {
        height: 1.5px;
      }
    }
  }
  @media (max-width: 700px) {
    width: 86px;
    height: 88px;
    border-width: 1px;
    > p {
      width: 80px;
      height: 80px;
      font-size: 0.625rem;
    }
    span {
      left: 49%;
      top: 85px;
      ::after {
      content: '';
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5px;
      height: 13px;
      left: 53%;
    }
  }
  }
`;
const Circle2 = styled.div`
  width: 165px;
  height: 165px;
  border-radius: 50%;
  border: 2px solid rgba(185, 205, 229, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  z-index: 4;
  order: 2;
  margin-bottom: 12%;
  > p {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B8292D;
    background-color: #F0F0F0;
    border-radius: 50%;
    position: relative;
  }
  span {
    background-color: #B9CDE5;
  }
  @media (max-width: 700px) {
    width: 86px;
    height: 88px;
    order: 1;
    border-width: 1px;
    position: relative;
    > p {
      width: 80px;
      height: 80px;
      font-size: 0.625rem;
    }
    span {
      left: 50%;
      top: -3px;
    }
    ::after{
      content: '';
      display: block;
      width: 1.5px;
      height: 12.5px;
      background-color: #F0F0F0;
      position: absolute;
      bottom: -13.5px;
    }
  }
`;
const Rectangle = styled.div`
  width: 208px;
  height: 58px;
  border-radius: 13px;
  border: 1px solid #FCB1B3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 4;
  background-color: #FFFFFF;
  order: 1;
  
  > p {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1A1A1A;
    background-color: #F0F0F0;
    border-radius: 10px;
    z-index: 3;
  }
  span {
    background-color: #FCB1B3;
  }
  @media (max-width: 700px) {
    width: 86px;
    height: 36px;
    border-radius: 6px;

    > p {
      width: 80px;
      height: 30px;
      font-size: 0.625rem;
      border-radius: 5px;
      order: 2;
    }
  }
`;
const Rectangle2 = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DCE6F2;
  position: relative;
  z-index: 3;
  @media (max-width: 700px) {
    width: 85px;
    height: 30px;
    font-size: 0.625rem;
    border-radius: 5px;
    
    span {
      margin-top: -3%;
    }
  }
`;


const GroupChart = () => {
 
  return (
    <Container>
      <Title en="Organization chart" ko="본사 조직도" />
      <ChartWrap>
        <div className='ceo-wrap'>
          <Circle className='item delay-1'>
            <span></span>
            <p>대표이사</p>
          </Circle>
        </div>
        <Depth1>
          <Circle2 className='item delay-2'><span></span><p>운영대표</p></Circle2>
          <Rectangle className='item delay-3'><span></span><p>대외협력실</p></Rectangle>
        </Depth1>
        <Depth2>
          <Rectangle2 className='item delay-4'><span></span><p>채널지원부문</p></Rectangle2>
          <Rectangle2 className='item delay-5'><span></span><p>경영지원부문</p></Rectangle2>
        </Depth2>
        <Depth3>
          <Rectangle2 className='item delay-6'>경영지원팀</Rectangle2>
          <Rectangle2 className='item delay-7'>고객지원팀</Rectangle2>
        </Depth3>
        <Depth4>
          <Rectangle2 className='item delay-8'>재무파트</Rectangle2>
          <Rectangle2 className='item delay-9'>영업지원파트</Rectangle2>
        </Depth4>
      </ChartWrap>
    </Container>
  )
}

export default GroupChart;
