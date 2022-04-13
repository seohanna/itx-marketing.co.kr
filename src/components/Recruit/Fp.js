import React,{ useState } from "react";
import styled from "styled-components";
import Highfive from "../../img/sub/Highfive.svg";
import SubBanner from "../SubBanner";
import TitleBox from "../TitleBox";
import SubTitle from "./SubTitle";
import Button from "../Button";
import MiniBanner from "../MiniBanner";
import Info from "./Info";
import FpModal from "../Modal/FpModal";

const Container = styled.section`
 > .sub-banner {
   position: relative;
   padding-right: 12.96875%;
   @media(max-width: 700px){
    padding-right: 0;
   }
 }
`;
const SupportContainer = styled.section`
  padding: 0 11.61458333333333% 0 8.020833333333333%;
  .title-box{
    line-height: 1.056375rem;
    font-size: 0.8rem;
    > p {
      padding-top: 20%;
    }
  }
  @media(max-width: 700px){
    padding: 0 7.89%;
    .title-box{
      line-height: 1rem;
      font-size: 0.625rem;
      align-self: flex-start;
      > p {
        padding-top: 10.4%;
      }
    }
  }
`;

const Contents1 = styled.div`
  padding-top: 13.61%;
  display: flex;
  justify-content: space-between;
  > table{
    border-collapse: collapse;
    th:last-child{
        width: 50%;
    }
    th:first-child{
        width: 25%;
    }
    th:nth-child(2){
      width: 25%;
    }
  }
  @media(max-width: 700px) { 
    flex-direction: column;
    padding-top: 10.5%;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
      }
      th:last-child{
        width: 56.25%;
      }
      th:first-child,th:nth-child(2){
        width: 21.875%;
      }
    }
  }
`;
const Contents2 = styled.div`
  padding-top: 9.81%;
  display: flex;
  justify-content: space-between;
  table{
    border-collapse: collapse;
    th:last-child{
        width: 75%;
    }
    th:first-child{
        width: 25%;
    }
    br {
      display: none;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
        /* height: 2.5rem; */
        br {
          display: block;
        }
      }
      th:last-child{
        width: 78.125%;
      }
      th:first-child{
        width: 21.875%;
      }
    }
  }
`;
const Contents3 = styled.div`
  padding-top: 9.81%;
  display: flex;
  justify-content: space-between;
  table{
    border-collapse: collapse;
    th:last-child{
      width: 75%;
    }
    th:first-child{
      width: 25%;
    }
  }
  @media(max-width: 700px) {
    flex-direction: column;
    > table{
      width: 100%;
      th,td {
        font-size: 0.625rem;
        height: 40px;
        line-height: 1rem;
        /* height: 2.5rem; */
        br {
          display: block;
        }
      }
      th:last-child{
        width: 78.125%;
      }
      th:first-child{
        width: 21.875%;
      }
    }
  }
`;
const Table = styled.table`
  align-self: flex-end;
  width: 62.21646143875567%;
  line-height: 3rem;
  margin-top: 6.99999%;
  
  td {
    border-top: 2px solid #C4C4C4;
  }
  th {
    color: #1A1A1A;
    font-family: 'GoyangDeogyang';
    font-size: 1.25rem;
    text-align: start;
  }
`;
const BottomWrap = styled.div`
  width: 100%;
  padding: 0 13.64583333333333%;
  display: flex;
  flex-direction: column;
  > .btn-box{
    width: 100%;
    padding: 15.62% 0 14.024% 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media(max-width: 700px) {
    padding: 0 5%;
    > .btn-box {
      padding: 17%  0;
    }
  }
`;


const Fp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => { 
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }
  return (
    <>
      <Container>
      <div className="sub-banner">
        <SubBanner
          padding="4.3% 16.75643327348893% 3.8% 9.275882704967086%"
          modifier="FP가 주인인 회사" 
          image={Highfive}
          link1='교육지원'
          link2='DB지원'
          link3='전산지원'
          id1="#part1"
          id2="#part2"
          id3="#part3"
          display='none'
        />
        <TitleBox  
          title="FP채용"
          list1="개인영업"
          list2="법인컨설팅"
          list3="DB영업"
          right='0'
        />
      </div>
      <SupportContainer>
        <Contents1 id="part1">
        <div className="title-box">
          <SubTitle 
            title="교육지원"
          />
          <p>"신입과 경력의 눈높이를 고려한 맞춤형<br />교육과정을 통하여 고객이 원하는 서비스를<br />제공하기 위한 능력을 배양합니다.</p>
          </div>
           <Table>
            <thead>
              <tr>
                <th>교육과정</th>
                <th>대상</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>입문교육</td>
              <td>신입 FP</td>
              <td>정규과정 : 입사 시 / 심화과정 : 13차 월</td>
            </tr>
            <tr>
              <td>상품교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 매월 1회 / 심화과정 : 요청 시</td>
            </tr>
            <tr>
              <td>보상교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 매월 1회 / 심화과정 : 요청 시</td>
            </tr>
            <tr>
              <td>Sales 교육</td>
              <td>소속 FP전체</td>
              <td>정규과정 : 분기 1회</td>
            </tr>
            </tbody>
          </Table> 
        </Contents1>
        <Contents2 id="part2" title="DB지원">
          <div className="title-box">
            <SubTitle 
              title="DB지원"
            />
            <p>보장분석 고객, 보험금청구, 고객, 무료보험<br />가입고객, 이벤트 참여고객등 FP가 원하는<br />양질의 DB를 재공함으로써 영업활동을<br />활성화 시켜드립니다.</p>
          </div>
          <Table>
            <tr>
              <th>속성</th>
              <th
              >채널</th>
            </tr>
            <tr>
              <td>보장분석</td>
              <td>홈페이지, SNS, 방송, 블로그, 내방형점포<br />(마트, 샵인샵, 로드샵)</td>
            </tr>
            <tr>
              <td>보험금청구</td>
              <td>병원, 키오스크, 어플리케이션</td>
            </tr>
            <tr>
              <td>특화DB</td>
              <td>소상공인, 박람회, 이벤트, 세미나, 캠페인, 퍼미션</td>
            </tr>
          </Table>
        </Contents2 >
        <Contents3 id="part3">
          <div className="title-box">
            <SubTitle 
              title="전산지원"
            />
            <p>PC와 모바일을 통해 보장분석, 보험료 산출,<br />보험금 청구는 물론 계약 / 소득 / 고객관리<br />솔루션을 제공하며 특히, 설계 난읻이도가 높은<br />일반보험 영역까지도 간편설계가 가능하도록<br />지원해 드립니다.</p>
          </div>
          <Table>
            <tr>
              <th>솔루션</th>
              <th>지원내용</th>
            </tr>
            <tr>
              <td>OK 마이보험</td>
              <td>보장분석, 보험료 비교, 상품정보 제공</td>
            </tr>
            <tr>
              <td>OK 일반보험</td>
              <td>자동차보험, 화재보험, 의무/정책보험 간편설계</td>
            </tr>
            <tr>
              <td>ERP</td>
              <td>고객관리, 계약관리, 소득관리 등 통합관리시스템</td>
            </tr>
          </Table>
        </Contents3>
      </SupportContainer>
      <BottomWrap>
        <div className="btn-box">
          <Button size="lg" onClick={openModal}>
            <p style={{width: '100%', lineHeight: '100%'}}>
              입사지원
            </p>
          </Button>
        </div>
        <MiniBanner desc="FP채용 문의" />
          <Info email="이메일 : kkang933@wehago.com" keeper="담당자 : 강세훈 부장" />
      </BottomWrap>
    </Container>
    <>
      {
        modalVisible && 
        <FpModal  onClick={closeModal}/>
      }
    </>
  </>
  );
}

export default Fp;



