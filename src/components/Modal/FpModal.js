import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { EmailSendForm } from '../../email/EmailSendForm';
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
      <EmailSendForm fpjoin onClick={checkOpen}/>
      {/* <Form>
        <select name="type">
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
      </Form> */}
      
      {checkModal && (
        <Private>
          <div>개인정보수집이용동의</div>
          <button onClick={checkOpen}>X</button>
        </Private>
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

const Private = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  right: 10%;
  background-color: aliceblue;
`;