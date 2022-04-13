import React from "react";
import styled from "styled-components";
import Button from '../Button';
import checkIcon from "../../img/common/checkIcon.svg";
import checkedIcon from "../../img/common/checkedIcon.svg";
import scrollBtnTop from '../../img/sub/scrollBtnTop.svg';
import scrollBtndown from '../../img/sub/scrollBtndown.svg';

const Advice = () => {
  return (
    <Wrap>
      <Title>
        <h2>FP 지원상담</h2>
        <p>
          아이티엑스마케팅의 문은 <br /> 항상 열려 있습니다.
        </p>
      </Title>
      <div className="apply">
          <InputBox>
            <div>
              <p>
                <span>이</span>
                <span>름</span>
              </p>
              <input type="text" />
            </div>
          <div>
            <p>
              <span>연</span>
              <span>락</span>
              <span>처</span>
            </p>
            <input type="text" placeholder=" '-'없이 번호만 입력해 주세요." />
          </div>
          <div>
            <p>
              <span>지</span>
              <span>역</span>
            </p>
            <input  type="text" />
          </div>
        </InputBox>
        <InfoWrap>
          <Info>
            <li>개인정보 수집 및 이용 목적</li>
            <ul>
              <li>개인영업(FP) 입사지원</li>
            </ul>
            <li>개인정보 수집 및 이용 항목</li>
              <ul>
                <li>이름, 연락처, 지역</li>
              </ul>
            <li>개인정보 보유 및 이용기간</li>
            <ul>
              <li>동의일로부터 3년</li>
            </ul>
            <li>동의를 거부할 권리 불이익</li>
            <ul>
              <li>
                귀하는 개인정보 수집, 이용에 대한 동의를 거부할 권리가 있습니다.<br />
                동의 거부 시 입사지원 상담이 제한 될 수 있습니다.
              </li>
            </ul>
          </Info>
          <CheckBox>
            <input type="checkbox" id="agree" name="perInfo" />
            <label for="agree">개인정보수집 및 이용동의서</label>
          </CheckBox>
        </InfoWrap>
      </div>
      <div className="btn-wrap">
        <Button size="xl">
          <p>FP 상담 문의하기</p> 
        </Button>
      </div>
    </Wrap>
  );
};
export default Advice;

const Wrap = styled.div`
  padding: 5.2% 7.8125% 6.50% 7.8125%;

  > .apply {
    padding: 7% 0 5.55% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > .btn-wrap {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 700px) {
    padding: 14.9% 6.5% 15.2% 6.5%;

    > .apply {
      flex-direction: column;
      padding: 15.5% 0 0 0;
    }
    > .btn-wrap {
      display: flex;
      justify-content: center;
  }
  }
`;
const Title = styled.div`
  & > h2 {
    color: #1a1a1a;
    font-size: 1.5rem;
  }
  & > p {
    padding-top: 1.4%;
    line-height: 1.5rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    > h2 {
      font-size: 1rem;
    }
    > p {
      font-size: 0.8125rem;
    }
  }
`;

const InputBox = styled.div`
  width: 45.5%;

  > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    > p {
        padding: 5.44% 7.25%;
        width: 170px;
        display: flex;
        justify-content: space-between;
      }
      input {
        border-bottom: 1px solid #c4c4c4;
        height: 30px;
        width: 400px;
        padding-bottom: 11px;

        ::placeholder {
          color: #c4c4c4;
          font-size: 0.65rem;
          font-family: 'GoyangIlsan';
        }
      }
    }
    @media (max-width: 700px) {
      width: 100%;
        > div {
          > p {
            padding: 3.1% 9% 3.1% 0;
            width: 60px;
            font-size: 0.625rem;
          }
          input {
            width: 200px;
            height: 20px;
            padding-bottom: 3px;

            ::placeholder {
              font-size: 0.65rem;
            }
          }
        }
    }
`;
const InfoWrap = styled.div`
  width: 54.5%;
  padding: 1.5% 3.45% 2.65% 3.45%;
  @media (max-width: 700px) {
    width: 100%;
    padding: 11% 0 0 0;
  }
`;
const Info = styled.ol`
  height: 182px;
  padding: 3.4% 0%;
  background-color: #f0f0f0;
  overflow-y: scroll;
  list-style: decimal;

  ::-webkit-scrollbar {
    background-color: #F8F8F8;
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #F8F8F8;
  }
  ::-webkit-scrollbar-thumb {
    background: #C4C4C4;
    
  }
  ::-webkit-scrollbar-button:vertical:increment {
    background: url(${scrollBtndown}) no-repeat center 50%;
  }
  ::-webkit-scrollbar-button:vertical:decrement {
    background: url(${scrollBtnTop}) no-repeat center 50%;
  }
  
  li {
    font-size: 1.25rem;
    margin-left: 6%;
    color: #1A1A1A;
  }
  ul {
    list-style: disc;
    padding-left: 2%;
    > li {
      color: #767676;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
@media (max-width: 700px) {
  height: 162px;
  padding: 4.9% 0 0 5.5%;
  > li {
    font-size: 0.8125rem;
  }
  > ul {
    padding: 0 30% 0 8%;
    > li {
      font-size: 0.8125rem;
      line-height: 1.4rem;
    }
  }
}
`;


const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5%;
  @media (max-width: 700px) {
    padding: 2.6% 0 9% 0;
  }
  input[type="checkbox"] + label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #1a1a1a;
    width: 70%;
    @media (max-width: 700px) {
      font-size: 0.625rem;
      height: 30px;
    }
  }
  input[type="checkbox"] + label::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5%;
    @media (max-width: 700px) {
      width: 24px;
      height: 24px;
      margin-right: 12.5%;
    }
  }
  input[type="checkbox"]:checked + label::before {
    background-image: url(${checkedIcon});
  }

`;
