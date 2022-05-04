import React from "react";
import styled from "styled-components";
import { EmailSendForm } from "../../email/EmailSendForm";


const Advice = () => {
  return (
    <Wrap>
      <Title>
        <h2>FP 지원상담</h2>
        <p>
          아이티엑스마케팅의 문은 <br /> 항상 열려 있습니다.
        </p>
      </Title>
      <EmailSendForm fpadvice/>
    </Wrap>
  );
};
export default Advice;

const Wrap = styled.div`
  padding: 5.2% 7.8125% 6.50% 7.8125%;

  @media (max-width: 700px) {
    padding: 14.9% 6.5% 15.2% 6.5%;
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

