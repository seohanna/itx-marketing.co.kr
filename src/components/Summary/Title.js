import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
  > h2 {
    white-space: pre;
    line-height: 2.8rem;
    font-size: 2.5rem;
    padding-bottom: 35px;
    color: #1A1A1A;
  }
  > p {
    font-size: 1.5rem;
  } 

@media(max-width: 700px) {
  h2 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-bottom: 4%;
  }
  > p {
    font-size: 0.8125rem;
  }
}
  
`;

const Title = (props) => {
  return (
  <TitleContainer style={{color: props.color}}>
    <h2>{props.en}</h2>
    <p>{props.ko}</p>
  </TitleContainer>
  )
}

export default Title