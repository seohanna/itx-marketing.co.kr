import React from 'react';
import styled from 'styled-components';

const TextWrap = styled.div`
  
`;
const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 2.75rem;
 
  ::before{
    content: '';
    width: 30px;
    height: 30px;
    border: 5px solid #B8292D;
    border-radius: 50%;
    display: inline-block;
    margin-right: 16px;
    box-sizing: border-box;
  }
  @media(max-width: 700px){
    font-size: 1.25rem;
    line-height: 0;
    ::before {
      width: 20px;
      height: 20px;
      border: 5px solid #B8292D;
      display: inline-flex;
      margin-right: 9px;
    }
  }
`;

const SubTitle = (props) => {
  return(
    <TextWrap>
      <Title>{props.title}</Title>
    </TextWrap>
  );
}

export default SubTitle;
