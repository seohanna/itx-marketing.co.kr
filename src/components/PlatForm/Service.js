import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Service = (props) => {
  return (
    <Wrap>
      <SectionTitle>
        <span>{props.thin}</span>
        <strong>{props.strong1}</strong>
      </SectionTitle>
      <Content>
        {props.data.map((dt) => (
          <li key={dt.id}>
            <div className="img-wrap"><img src={dt.img} alt={dt.title} /></div>
            <TextWrap>
              <h3>{dt.title}</h3>
              <p>{dt.content}</p>
            </TextWrap>
          </li>
        ))}
      </Content>
    </Wrap> 
  );
};

export default Service;

const Wrap = styled.div`
  padding-right: 11.25%;
  text-align: right;

  @media (max-width: 700px) {
    padding-right: 6.2%;
  }
`;
const Content = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10% 7.8125% 4.7%;

  > li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.8%;

    .img-wrap {
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 700px) {
    padding-left: 6.2%;
    flex-flow: row wrap;
    
    > li {
      width: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 12.5%;

        .img-wrap {
        width: 80px;
        height: 80px;
        margin-bottom: 11.5%;
        > img {
          max-width: 60px;
        }
      }
    }
    
  }
`;

const TextWrap = styled.div`
  width: 79.3209876543209%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h3 {
    font-size: 1.25rem;
    
    }
  > p {
      text-align: start;
      width: 70.89494163424125%;
      font-size: 1.25rem;
      line-height: 2rem;
      white-space: pre;
    }
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    height : 117px;
    > h3 {
      font-size: 0.8125rem;
      
    }
    > p {
      font-size: 0.625rem;
      line-height: 1rem;
      width: 100%;
      white-space: normal;
      padding: 0 9%;
      text-align: center;
    }
    
  }
`;
