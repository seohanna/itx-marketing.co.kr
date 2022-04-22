import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled, { css } from 'styled-components';
import selectIcon from '../img/common/selectBoxIcon.svg';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import scrollBtnTop from '../img/sub/scrollBtnTop.svg';
import scrollBtndown from '../img/sub/scrollBtndown.svg';

export const EmailSendForm = ({
  fpjoin, fpadvice, onClick
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fkovx9j', form.current.name , form.current, 'eUYGVLXHP_B036Uyh')
      .then((result) => {
          console.log(result.text);
          alert('신청이 완료됬습니다.')
         	window.location.reload();
      }, (error) => {
          console.log(error.text);
          alert('정상적인 제출이 이루어지지 않았습니다. 다시 신청해주세요.');
          window.location.reload();
      });
  };

  return (
    <>
      {fpjoin && (
        <Form fpjoin ref={form} onSubmit={sendEmail} name='template_1tl7btw'>
          <select name="type">
            <option value="">분야</option>
            <option value="법인컨설팅">법인컨설팅</option>
            <option value="DB영업">DB영업</option>
          </select>
          <InputBox fpjoin>
            <h3>지역</h3>
            <input type="text" name="area" />
          </InputBox>
          <InputBox fpjoin>
            <h3>이름</h3>
            <input type="text" name="user_name" />
          </InputBox>
          <InputBox fpjoin>
            <h3>연락처</h3>
            <input type="tel" name="user_telNumber" placeholder="‘-’없이 번호만 입력해 주세요." />
          </InputBox>
          <InputBox fpjoin>
            <h3>자유기술</h3>
            <textarea 
              type="text"
              name="textarea"
              placeholder="200자 이내로 적어주세요."
              maxLength={200}
            />  
          </InputBox>
          <CheckBoxWrapper>
            <CheckBox onClick={onClick}  name={'private'} />
          </CheckBoxWrapper>
          <SubmitBox fpjoin>
            <button type="submit" value="Send">지원하기</button>
          </SubmitBox>
        </Form>
      )}
      {fpadvice && (
        <>
          <Form fpadvice ref={form} onSubmit={sendEmail} name='template_evvw7vb'>
            <InputBox fpadvice>
              <div>
                <p>
                  <span>이</span>
                  <span>름</span>
                </p>
                <input type='text' name="user_name" />
              </div>
              <div>
                <p>
                  <span>연</span>
                  <span>락</span>
                  <span>처</span>
                </p>
                <input type="tel" name="user_telNumber" placeholder=" '-'없이 번호만 입력해 주세요." />
              </div>
              <div>
                <p>
                  <span>지</span>
                  <span>역</span>
                </p>
                <input type="text" name="area" />
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
              <CheckBox onClick={onClick} name={'private'} fpadvice />
            </InfoWrap>
          </Form>
          <SubmitBox fpadvice>
            <Button size="xl" type="submit" value="Send" onClick={sendEmail}>
              <p>FP 상담 문의하기</p> 
            </Button>
          </SubmitBox>
        </>
      )}
    </>
  );
};
                                                                                                                                                           
const Form = styled.form`
  ${props => props.fpjoin && css`
    select {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #BEBEBE;
      font-size: 1rem;
      color: #C4C4C4;
      -o-appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url(${selectIcon}) calc(100% - 15px) center no-repeat;
      padding-left: 15px;
    }

    @media(max-width: 700px) {
      width: 100%;
      height: 100%;
      padding: 0%;
      border: 0;
    }
  `}

  ${props => props.fpadvice && css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7% 0 5.55% 0;
    @media(max-width: 700px){
      display: flex;
      justify-content: center;
    }
  `}
`;
const InputBox = styled.div`
  ${props => props.fpjoin && css`
    > h3 {
      line-height: 2.6rem;
      color: #1A1A1A;
      @media(max-width: 700px){
        font-size: 1rem;
        line-height: 2.25rem;
      }
    }
    input {
      border: 1px solid #BEBEBE;
      border-radius: 8px;
      height: 50px;
      width: 100%;
      padding: 0 20px;
      @media(max-width: 700px){
        border-radius: 5px;
      }
    }
    input::placeholder,
    textarea::placeholder {
      color: #C4C4C4;
      font-size: 0.8rem;
      font-family: 'GoyangIlsan';
      @media(max-width: 700px){
        font-size: 0.8125rem;
      }
    }
    textarea {
      height: 194px;
      width: 100%;
      border: 1px solid #BEBEBE;
      border-radius: 8px;
      padding: 24px 0 0 19px;
      outline: none;
      @media(max-width: 700px) {
        padding: 16px 0 0 16px;
        height: 169px;
      }
    }
  `}

  ${props => props.fpadvice && css`
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
  `}
`;

const CheckBoxWrapper = styled.div`
  padding: 2% 0;
`;

const SubmitBox = styled.div`
  ${props => props.fpjoin && css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3% 0;
    button {
      width: 250px;
      height: 50px;
      color: #FFFFFF;
      background-color: #B8292D;
      border-radius: 95px;
      font-size: 0.8125rem;
      cursor: pointer;

    }
    @media(max-width: 700px) {
      button {
        width: 100% ;
        border-radius: 3px;
        height: 30px;
      }
    }
  `}
  ${props => props.fpadvice && css`
    display: flex;
    justify-content: center;
    
    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
    }
  `}
`;

const InfoWrap = styled.div`
  width: 50%;
  padding: 0 5%;
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
  margin-bottom: 2%;
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
    font-size: 1rem;
    margin-left: 6%;
    color: #1A1A1A;
  }
  ul {
    list-style: disc;
    padding-left: 2%;
    > li {
      color: #767676;
      font-size: 0.9rem;
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


// const CheckBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 2.5%;
//   @media (max-width: 700px) {
//     padding: 2.6% 0 9% 0;
//   }
//   input[type="checkbox"] + label {
//     display: flex;
//     align-items: center;
//     font-size: 0.8rem;
//     color: #1a1a1a;
//     width: 70%;
//     @media (max-width: 700px) {
//       font-size: 0.625rem;
//       height: 30px;
//     }
//   }
//   input[type="checkbox"] + label::before {
//     content: "";
//     display: block;
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
//     background-image: url(${checkIcon});
//     background-repeat: no-repeat;
//     background-size: contain;
//     margin-right: 5%;
//     @media (max-width: 700px) {
//       width: 24px;
//       height: 24px;
//       margin-right: 12.5%;
//     }
//   }
//   input[type="checkbox"]:checked + label::before {
//     background-image: url(${checkedIcon});
//   }

// `;


