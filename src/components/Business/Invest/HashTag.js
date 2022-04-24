import React from 'react'
import styled, { css } from 'styled-components';


function HashTag({name, link}) {
  return (
    <HashBox link={link}>
      <p># {name}</p>
    </HashBox>
  )
}

export default HashTag;

const HashBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  background-color: #F8F8F8;
  font-size: 0.75rem;
  padding: 0 1.5%;
  margin-right: 25px;
   > p {
     padding-top: 0;
     font-family: 'GoyangDeogyang';
     line-height: 1.75rem;
   }
  
  ${props => props.link && css`
    height: 35px;
    width: 180px;
    background-color: #C22229;
    color: #FFFFFF;

    @media (max-width: 700px) {
      width: 114px;
    }
  `}
  @media (max-width: 700px) {
    font-size: 0.625rem;
    padding: 1.8% 4%;
    margin-right: 15px;
    height: 25px;    
  }
`;