import React from "react";
import styled  from "styled-components";
import icon1 from '../../img/sub/inheritIcon1.png';
import icon2 from '../../img/sub/inheritIcon2.png';
import icon3 from '../../img/sub/inheritIcon3.png';
import bigArrow from '../../img/sub/bigArrowIcon.png';



const Contents = ({intro, service, id}) => {
  return (
    <Container>
      {intro && (
        <>
          <SectionContainer>
            <IconContainer>
              <img src={icon1} alt='상속/증여' />
              <h2>상속/증여</h2>
            </IconContainer>
            <div>
              <Discription>고객만을 위한 상속/증여 solution을 제공해 드립니다.</Discription>
              <Table>
                <tr>
                  <th>구분</th>
                  <th>주요내용</th>
                  <th>비고</th>
                </tr>
                <tr>
                  <td>의미</td>
                  <td>사망한 사람의 재산에 대한 권리의무를 상속인이 받는 것</td>
                  <td>사망 전에 다른 사람에게 재산을 무상으로 주는 것</td>
                </tr>
                <tr>
                  <td>세금</td>
                  <td>재산전체에 부과</td>
                  <td>증여 받은 사람에 따라 부과</td>
                </tr>
                <tr>
                  <td>재산이동</td>
                  <td>사후 한번에 이동</td>
                  <td>생전에 분할하여 이동 가능</td>
                </tr>
              </Table>
              <InheritList>
                <li>
                  <p>불필요한 분쟁예방</p>
                  <span>상속인의 관계와 의사를 확인하여 상속이 개시 되었을 경우 상속인이 누구이며,<br />상속재산이 어떻게 이전될 것인지 인지시킴으로 불필요한 분쟁이 발생하지 않도록 안내</span>
                </li>
                <li>
                  <p>상속세 절세 Plan 수립</p>
                  <span>상속재산의 종류와 정도를 파악하고 상속이 개시될 경우 최소한으로 상속재산 손실없이 다음세대로 이전될 수 있도록 Plan을 수립</span>
                </li>
                <li>
                  <p>상속세 신고 협조</p>
                  <span>전문가 그룹과 의논하여 산속세를 신고, 납부하도록 고객과 협력한다.</span>
                </li>
                <li>
                  <p>다양한 자료 제공</p>
                  <span>고객들에게 필요한 자료를 작성하고 제공하도록 한다.</span>
                </li>
                <li>
                  <p>유언장 작성 협조</p>
                  <span>법적 효력이 있는 유언장을 작성하여 불필요한 분쟁을 억제토록 한다.</span>
                </li>
              </InheritList>
            </div>
          </SectionContainer>
          <SectionContainer>
            <IconContainer>
              <img src={icon2} alt='종합재무설계' />
              <h2>종합재무설계</h2>
            </IconContainer>
            <div>
              <Discription className="section2"><span>재무설계란?</span>
                <br />단기간의 수익이 아닌 장기플랜을 통해 인생에서 목돈이 필요한 시기에 부족하지 않도록 일련의 과정
              </Discription>
              <Table className="section2">
                <tr>
                  <th>구분</th>
                  <th>주요내용</th>
                </tr>
                <tr>
                  <td>미혼<br className="mobile"/>고객</td>
                  <td>
                    <ul>
                      <li>단기자금 중점</li>
                      <li>수입지출의 불확실성으로 저축예산은 적정선을 유지</li>
                      <li>충동적 가입/해지가 빈번 과거 투자경험 참고 필수</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>기혼<br className="mobile"/>고객</td>
                  <td>
                    <ul>
                      <li>부부상담으로 유도</li>
                      <li>자녀계획이 있는 경우 출산 후 소득/지출 체크 필수</li>
                      <li>노후자금은 여성위주로 가입</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>직장인</td>
                  <td>
                    <ul>
                      <li>소득구조 파악 (1년 급여구조 파악)</li>
                      <li>투자목적이 가족과 연관되므로 상품소개시 반영</li>
                      <li>소득의 변화가 적기 때문에 저축원금 확보에 최대한 중점</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>자영<br className="mobile"/>업자</td>
                  <td>
                    <ul>
                      <li>사업자금과 가계자금의 분리가 중요</li>
                      <li>절세가능한 상품을 소개</li>
                      <li>연간 소득 편 차가 있는 경우 현실적인 평균예산을 설정</li>
                    </ul>
                  </td>
                </tr>
              </Table>
            </div>
          </SectionContainer>
          <SectionContainer id={id}>
            <IconContainer>
              <img src={icon3} alt='서비스 프로세스' />
              <h2>서비스 프로세스</h2>
            </IconContainer>
            <div>
              <ProcessList>
                <li>
                  <h2>Application</h2>
                  <p>담당 Partner를 통한 신청</p>
                </li>
                <li>
                  <h2>Facts & Needs</h2>
                  <p>가족간의 관계확인 및 상속인 관계 확인, <br className="mobile"/>구체적인 재무상황 파악</p>
                </li>
                <li>
                  <h2>Solution</h2>
                  <p>고객의 니즈와 상황을 분석하여 전문가 <br className="mobile"/>그룹을 통한 Solution 제공</p>
                </li>
                <li>
                  <h2>Report</h2>
                  <p>상속괂관련 보고서를 전달하고 설명</p>
                </li>
                <li>
                  <h2>Plan Do</h2>
                  <p>전문가 그룹을 통한 Plan 제공 및 실행</p>
                </li>
                <li>
                  <h2>Maintenance</h2>
                  <p>고객님의 환경변화에 따른 Plan <br className="mobile"/>유지관리</p>
                </li>
              </ProcessList>
            </div>
        </SectionContainer>
        </>
      )}
      {service && (
        <SectionContainer>
          서비스
        </SectionContainer>
      )}
    </Container>   
  );
};

export default Contents;

const Container = styled.div`
  width: 100%;
  padding: 0 7.49%;

  @media (max-width: 700px) {
    padding: 0%;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 0;
  > div:nth-child(2) {
    width: 76.54320987654321%;
  }

  @media(max-width: 700px) {
    flex-direction: column;
    position: relative;
    padding: 19.3% 0 0 0;
    > div:nth-child(2) {
      width: 100%;
      padding: 6.9% 7.4%;
    }
  }
`;

const IconContainer = styled.div`
  width: 20.98765432098765%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;

  > h2 {
    font-size: 1rem;
    padding-top: 10%;
  }

  @media(max-width: 700px) {
    width: 100%;
    padding: 8% 0;
    > img {
      max-height: 63px;
    }

    > h2 {
      font-size: 0.8125rem;
      padding-top: 5%;
    }
  }
`;

const Discription = styled.p`
  font-size: 1.25rem;
  padding: 2% 0;

  &.section2 {
    padding: 8% 0;
    line-height: 2.025rem;
  }

  @media(max-width: 700px) {
    font-size: 0.8125rem;
    width: 100%;
    padding: 8.1% 0 6.8% 0;

    &.section2 {
      padding: 8% 0;
      line-height: 1rem;
      > span {
        display: inline-block;
        padding-bottom: 10px;
      }
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 3%;
  th, td {
    height: 70px;
  }


  &.section2 {
    margin-bottom: 10%;
    td .mobile {
      display: none;
    }
   
    td > ul > li {
      display: flex;
      align-items: center;
      ::before {
        content: '';
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #444444;
        margin-right: 1%;
      }
    }
  }
  tr {
    border-bottom: 1px solid #C4C4C4;
  }
  
  td:first-child {
    text-align: center;
    padding: 0;
    width: 22.58064516129032%;
  }
  th:nth-child(2), td:nth-child(2) {
    border-left: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
  }
  th {
    background-color: #F8F8F8;
    color: #1A1A1A;
    font-size: 1.25rem;
    text-align: center;

  }
  td {
    padding-left: 2%;
    height: 110px;
  }

  @media(max-width: 700px) {
    margin-bottom: 14.5%;
    th, td {
      font-size: 0.625rem;
      height: 50px;
    }
    td {
      padding-left: 1%;
    }
    td:first-child {
      width: 17.1875%;
    }
    th:nth-child(2) {
      width: 45%;
    }
    th:nth-child(3) {
      width: 37.8125%;
    }
    &.section2 {
    margin-bottom: 0%;
    
    th {
      height: 40px;
    }
    td {
      height: 60px;
      .mobile {
        display: block;
      }
    }
    th:first-child {
      width: 17.1875%;
    }
    th:last-child {
      width: 82.8125%;
    }
    td > ul > li {
      ::before {
        width: 2px;
        height: 2px;
        margin: 0 2%;
      }
    }
  }
  }
  
`;

const InheritList = styled.ul`
  background-color: #F8F8F8;
  padding: 3% 5%;
  > li {
    padding-bottom: 2%;
    line-height: 1.5rem;
    > p {
      display: flex;
      align-items: center;
      color: #B8292D;
      ::before {
        content: '';
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #B8292D;
        margin-right: 1%;
      }
    }
    span {
      display: block;
      margin-left: 1%;
    }
  }

  @media(max-width: 700px) {
    padding: 11.3% 3%;
    
    > li {
      padding-bottom: 7%;
      line-height: 1.1rem;
      font-size: 0.8125rem;
      :last-child {
        margin-bottom: 0;
      }
    > p {
      padding-bottom: 1px;
      ::before {
        width: 3px;
        height: 3px;
        margin-right: 3%;
      }
    }
    span {
      margin-left: 4%;
    }
  }
}
`;

const ProcessList = styled.ul`
  width: 100%;
  margin: 2% 0;
 > li {
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin-bottom: 5%;
   position: relative;
   ::after {
     position: absolute;
     bottom: calc(-130% / 2);
     left: 50%;
     transform: translateX(calc(-50% / 2));
     content: '';
     display: flex;
     width: 10%;
     height: 39px;
     background-image: url(${bigArrow});
     background-size: contain;
     background-repeat: no-repeat;
     background-position: center;
   }
   :last-child {
     margin: 0;
     ::after {
       content: none;
     }
   }
   > h2 {
     background-color: #B8292D;
     color: #FFFFFF;
     font-size: 1rem;
     width: 22.58064516129032%;
     padding: 2.3% 0;
     text-align: center;
   }
   > p {
      background-color: #F8F8F8;
      width: 76.12903225806452%;
      display: flex;
      align-items: center;
      padding-left: 3%;
      > .mobile {
          display: none;
      }
   }
 }
  @media(max-width: 700px) {
    margin: 8% 0 10% 0;
    > li {
      margin-bottom: 17.9%;
      ::after {
        width: 81px;
        height: 20px;
        transform: translateX(calc(-81px / 2));
      }
      > h2 {
        font-size: 0.625rem;
        width: 30%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
      > p {
        width: 70%;
        font-size: 0.8125rem;
        padding-left: 1%;
        line-height: 1.03rem;
        > .mobile {
          display: block;
        }
      }
    }
  }
 
`;
