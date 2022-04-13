import React from 'react'
import styled from "styled-components";


const Container = styled.section`
  position: relative;
  padding-left: 12.96875%;
  @media(max-width:700px){
    padding-left: 0%;
  }
`;
const GrayBox = styled.div`
  background-color: #F8F8F8;
> div {
    padding: 7.7% 0 21% 15%;
    > h2 {
    font-family: 'GoyangDeogyang';
    color: #1A1A1A;
    font-size: 2.5rem;
    padding-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
  }
}
@media(max-width:700px){
  > div {
    padding: 7.7% 0 7% 7%;
    > h2 {
        font-size: 1.375rem;
    }
    > p {
        font-size: 0.8125rem;
        padding-bottom: 115%;
      }
    }
  } 
`;

const TopBox = (props) => {
  return (
    <Container>
      <GrayBox>
        <div>
          <h2>아이티엑스마케팅(주)</h2>
          <p>{props.title}</p>
        </div>
      </GrayBox>
    </Container>
  )
}

export default TopBox;
