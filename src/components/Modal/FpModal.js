import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import selectIcon from '../../img/common/selectBoxIcon.svg';
import CheckBox from '../CheckBox';

function FpModal({onClick}) {
  
  const [checkModal, setCheckModal] = useState(false);

  const checkOpen = () => {
    setCheckModal(!checkModal);
  }
  return (
    <Modal recruit onClick={onClick}>
      <ModalHead>
        <h2>FP 입사 지원하기</h2>
      </ModalHead>
      <Form>
        <select name="branch">
          <option value="0">분야</option>
          <option value="corporate">법인컨설팅</option>
          <option value="db">DB영업</option>
        </select>
        <InputBox>
          <h3>지역</h3>
          <input type="text" name="area" />
        </InputBox>
        <InputBox>
          <h3>이름</h3>
          <input type="text" name="username" />
        </InputBox>
        <InputBox>
          <h3>연락처</h3>
          <input type="tel" name="phoneNum" placeholder="‘-’없이 번호만 입력해 주세요." />
        </InputBox>
        <InputBox>
          <h3>자유기술</h3>
          <textarea 
            type="text"
            name="free"
            placeholder="200자 이내로 적어주세요."
            maxLength={200}
          />  
        </InputBox>
        <CheckBoxWrapper>
          <CheckBox onClick={checkOpen} />
        </CheckBoxWrapper>
        <SubmitBox>
          <button type="submit">지원하기</button>
        </SubmitBox>
      </Form>
      {checkModal && (
        <>
          <div>개인정보수집이용동의</div>
          <button onClick={checkOpen}>X</button>
        </>
      )}
    </Modal>
  );
};

export default FpModal;



const ModalHead = styled.div`

  > h2 {
    font-size: 1.5rem;
    text-align: center;
    padding: 5% 0;
  }

  @media(max-width: 700px) {
    > button {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    > h2 {
      font-size: 1rem;
      padding: 2% 0 5% 0;
    }
  }
`;

const Form = styled.form`
  

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
`;
const InputBox = styled.div`
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
`;

const CheckBoxWrapper = styled.div`
  padding: 2% 0;
`;
const SubmitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

