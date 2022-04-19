import React from 'react';
import styled from "styled-components";
import SectionTitle from '../PlatForm/SectionTitle';

function BorderTitleSection({
 title, disc, img, subtext
}) {

  return (
    <Wrap>
      <SectionTitle>
        <span>+ </span>
        {title}
      </SectionTitle>
      <Content>
        <ImgWrap>
          <img src={img} alt={title}  />
        </ImgWrap>
        <TextWrap>
          <h3>{disc}</h3>
          {subtext && (<p>{subtext}</p>)}
        </TextWrap>
      </Content>
    </Wrap>
  );
};
export default BorderTitleSection;

const Wrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  
  @media (max-width: 700px) {
    padding-left: 6%;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.8% 0 4.07% 0;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 12.5% 8.2% 12.3% 2.2%;
  }
`;

const ImgWrap = styled.div`
  width: 35.54502369668246%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  @media (max-width: 700px) {
    width: 100%;
    box-shadow: none;
  }
`;

const TextWrap = styled.div`
  width: 64.45497630331754%;
  padding-left: 4.383886255924171%;
  
  > h3 {
    white-space: pre;
    line-height: 1.85rem;
    font-size: 1.5rem;
    color: #1A1A1A;
  }
  > p {
    padding-top: 3.2%;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 7.5% 0;
    h3 {
      font-size: 1rem;
    }
    > p {
      font-size: 0.625rem;
    }
  }
`;
