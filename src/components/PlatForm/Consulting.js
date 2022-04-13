import React from "react";
import styled from "styled-components";

import personalArrow from "../../img/sub/personalArrow.svg";
import SectionTitle from "./SectionTitle";

const Data = [
  {
    id: 1,
    step: "STEP 01",
    title: "상담신청",
  },
  {
    id: 2,
    step: "STEP 02",
    title: "전담FP 배정\n고객상담",
  },
  {
    id: 3,
    step: "STEP 03",
    title: "보험분석",
  },
  {
    id: 4,
    step: "STEP 04",
    title: "맞춤형\n보험컨설팅",
  },
  {
    id: 5,
    step: "STEP 05",
    title: "보장분석\n결과제공",
  },
];

const Consulting = (props) => {
  return (
    <Wrap>
      <SectionTitle>
        <span>{props.thin}</span>
        <strong>&nbsp;{props.strong1}</strong>
        {props.title1}
      </SectionTitle>
      <ConsultingWrap>
        {Data.map((dt) => (
          <li key={dt.id}>
            <h3>{dt.step}</h3>
            <h2>{dt.title}</h2>
          </li>
        ))}
      </ConsultingWrap>
    </Wrap>
  );
};

export default Consulting;

const Wrap = styled.div`
  padding-right: 7.8%;
  text-align: right;

  @media (max-width: 700px) {
    padding-right: 6.2%;
  }
`;

const ConsultingWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 12.38% 4% 11.48% 12.56%;

  > li {
    box-shadow: 6px 9px 41px rgba(0, 0, 0, 0.15);
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 25px;
    color: #1A1A1A;
    width: 13.6%;
    height: 197px;
    position: relative;

    :last-child::after {
      display: none;
    }
    ::after {
      content: "";
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 50px;
      background-image: url(${personalArrow});
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      right: -35%;
      top: 37%;
    }
    > h3 {
      font-size: 0.8rem;
      padding: 19.28934010152284% 0 16.75126903553299% 0;
    }
    > h2 {
      white-space: pre;
      font-size: 1rem;
      
      ::after {
        content: '';
        display: block;
        width: 37%;
        height: 3px;
        background: #b8292d;
        position: relative;
        margin-top: 5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  @media (max-width: 700px) {
    flex-flow: row wrap;
    padding: 14% 6% 11.48% 13%;
    
    > li {
      width: 37%;
      height: 100px;
      border-radius: 15px;
      margin-bottom: 25.5%;
      > h3 {
        font-size: 0.625rem;
        padding: 19.28934010152284% 0 19.28934010152284% 0;
      }
      > h2 {
        font-size: 0.625rem;
        ::after {
          width: 40%;
          height: 2px;
          margin-top: 4px;
          right: -45%;
          top: 45%;
        }
      }
      :nth-child(1) {
        order: 1;
      }
      :nth-child(2) {
        order: 2;
      }
      :nth-child(3) {
        order: 4;
      }
      :nth-child(4) {
        order: 3;
      }
      :nth-child(5) {
        order: 5;
      }
      :nth-child(2)::after {
        left: 50%;
        top: 130%;
        transform: translateX(-50%) rotate(90deg);
      }
      :nth-child(3)::after {
        left: -40%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-180deg);
      }
      :nth-child(4)::after {
        left: 50%;
        top: 130%;
        transform: translateX(-50%) rotate(90deg);
      }
      ::after {
        width: 14px;
        height: 20px;
      }
    }
  }
`;

