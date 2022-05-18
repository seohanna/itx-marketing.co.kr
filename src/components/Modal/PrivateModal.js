import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function PrivateModal({onClick, data}) {
  return (
      <Modal apply onClick={onClick}>
        {data && (
          <>
            <ModalTitle>{data.title}</ModalTitle>
            <TextWrapper>
              <p>회사는 ｢개인정보 보호법｣ 및 ｢정보통신망 이용촉진 및 정보보호 등에 관한 법률｣ 등에 관련 법령을 준수하며 보험 상담 및 보험 서비스 제공 등의 업무처리를 위하여 귀하로부터 최소한의 필수정보를 수집합니다. 제공된 모든 개인정보는 별도의 동의가 없는 한 임의의 다른 용도로 사용하지 않습니다.</p>
              <ul>
                <li><span>[개인정보 수집 이용동의]</span></li>
                <li>1) 수집하는 개인정보 항목</li>
                <li>{` - 필수항목 : ${data.article}`}</li>
                <li> 2) 수집 및 이용목적</li>
                <li>{`- 회사가 제공하는 ${data.title} 신청에 대한 응대`}</li>
                <li>3) 개인정보 보유기간</li>
                <li>- 동의한 날로부터 1년 이내 또는 동의를 철회하는 때까지</li>
                <li>4) 동의를 거부할 권리 및 그에 따른 불이익</li>
                <li>-귀하는 개인정보의 수집 및 이용에 관하여 동의를 거부할 권리가 있습니다.</li>
              </ul>
              <p>{`다만, 위 동의절차는 필수적인 항목으로 부동의 하는 경우 ${data.title} 진행이 불가능할 수 있음을 알려드립니다. 본 동의를 하시더라도, 당사 고객센터를 통해 동의를 철회하실 수 있습니다.\n (고객센터: 02-6925-1027)`}</p>
              <p>※ 회사는 원칙적으로 귀하의 개인정보를 동의 없이 타 기업 또는 기관에 제공하지 않습니다. 다만 관계 법령의 규정에 의하거나 수사기관의 요구가 있을 경우 예외적으로 동의 없이 귀하의 개인정보를 제공할 수 있습니다.</p>
            </TextWrapper>
          </>
        )}
      </Modal>
  );
};

export default PrivateModal;


const ModalTitle = styled.h3`
  background-color: #B8292D;
  color: #FFFFFF;
  font-size: 1.25rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 700px) {
    height: 50px;
  }
`;

const TextWrapper = styled.div`
  padding: 6% 5%;
  color: #1A1A1A;
  font-size: 0.8rem;
  p {
    padding-bottom: 5%;
    line-height: 1rem;
  }
  ul {
    padding-bottom: 4%;
    li {
      padding-bottom: 3%;
      span {
        font-weight: 700;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 6.7% 6.8% 20%;
    font-size: 0.625rem;
    p {
      padding-bottom: 3%;
      line-height: 0.8rem;
    }
    ul {
      li {
        
        line-height: 0.8rem;
      }
    }
  }
`;