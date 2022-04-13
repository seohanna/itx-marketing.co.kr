import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Section1 = (props) => {
  
  return (
    <Wrap>
      <SectionTitle>
        <span>{props.thin}</span>
        <span className={props.logo}></span>
        <strong>&nbsp;{props.strong1}</strong>
        {props.title1}
        <strong>&nbsp;{props.strong2}</strong>
        {props.title2}
      </SectionTitle>
        
      <Content>
        <img src={props.img} alt={props.title} />
        <div>
          <SubTitle>{props.subTitle}</SubTitle>
          <Discription>{props.description}</Discription>
        </div>
      </Content>
    </Wrap>
  );
};

export default Section1;

const Wrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  @media (max-width: 700px) {
    padding-left: 6%;
  }
`;

const Content = styled.div`
  white-space: pre;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.6% 0 3.6% 0;
  > img {
    width: 52.99260255548083%;
  }
  > div {
    padding-left: 4.03%;
    width: 47.00739744451917%;
  }
  @media (max-width: 700px) {
    padding: 12.5% 8.2% 18% 2.2%;
    flex-direction: column;
    
    > img {
      width: 100%;
    }
    > div {
      padding-left: 0;
      width: 100%;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #1A1A1A;
  padding-bottom: 11%;
  line-height: 1.95rem;

  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 9.4% 0 0 0;
    line-height: 1.125rem;
  }
`;

const Discription = styled.p`
  color: #444444;
  font-size: 1rem;
  line-height: 1.475rem;

  @media (max-width: 700px) {
    font-size: 0.625rem;
    line-height: 0.9rem;
    width: 85%;
    padding-top: 4.4%;
  }
`;