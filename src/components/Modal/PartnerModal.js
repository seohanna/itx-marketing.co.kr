import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { EmailSendForm } from '../../email/EmailSendForm';
import PrivateModal from './PrivateModal';

const data = [
  {
    id: 0,
    title: '제휴상담',
    article: '성명, 연락처'
  }
]

function PartnerModal({onClick, en, ko}) {
  const [checkModal, setCheckModal] = useState(false);

  const checkOpen = () => {
    setCheckModal(!checkModal);
  }
  return (
    <Modal recruit onClick={onClick}>
      <ModalHead>
        <p>{en}</p>
        <h2>{ko} 제휴상담문의</h2>
      </ModalHead>
      <EmailSendForm partners onClick={checkOpen} />     
      {checkModal && (
        <PrivateModal onClick={checkOpen} data={data[0]} />
      )}
    </Modal>
  );
};

export default PartnerModal;

const ModalHead = styled.div`

  > h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  > p {
    font-size: 1.25rem;
    color: #767676;
    text-align: center;
    padding-bottom: 10px;
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
