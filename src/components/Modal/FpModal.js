import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { EmailSendForm } from '../../email/EmailSendForm';
import PrivateModal from './PrivateModal';

const data = [
  {
    id: 0,
    title: '입사지원',
    article: '성명, 연락처'
  }
]

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
      {checkModal && (
        <PrivateModal onClick={checkOpen} data={data[0]} />
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

