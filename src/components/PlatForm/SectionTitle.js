import React from "react";
import styled from "styled-components";
import insuplusLogo from '../../img/sub/insuplusLogo.png';

const Title = styled.h2`
  border-bottom: 3px solid #1a1a1a;
  font-size: 2.5rem;
  color: #1A1A1A;
  padding: 8.07% 0 0.7% 0;

  > strong {
      color: #C22229;
    }
  > span {
      font-family: 'GoyangIlsan';
      font-weight: 400;
      &.small {
      font-size: 1.5rem;
      }
      &.insuplus {
        display: inline-flex;
        width: 250px;
        height: 119.66px;
        margin-left: 1%;
        background-image: url(${insuplusLogo});
        background-size: cover;
        transform: translateY(25%);
      }
    }
  
  @media (max-width: 700px) {
    padding: 20% 0 3% 0;
    border-bottom: 2px solid #1a1a1a;
    font-size: 1.25rem;
    > span {
      white-space: pre;
      &.small {
        font-size: 1.25rem;
      }
      &.insuplus {
        width: 65px;
        height: 31.11px;
        transform: translateY(30%);
        margin-left: 4%;
      }
    }
  }
`;

const SectionTitle = ({children}) => {
  return (
    <Title>
      {children}
    </Title>
  );
};

export default SectionTitle;