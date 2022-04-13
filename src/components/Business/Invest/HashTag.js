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
  `}

`;