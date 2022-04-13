import React from 'react'
import styled, { css } from 'styled-components'

const BoxContain = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #B8292D;
  width: 23.69791666666667%;
  height: 316px;
  color: #FFFFFF;
  box-shadow: 10px 11px 14px rgba(0, 0, 0, 0.15);
  > h2 {
    line-height: 5.25rem;
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 3px solid #FFFFFF;
    
  }
  ul {
    padding: 0 0 5% 8.2%;

    > li {
      font-size: 1.25rem;
      line-height: 1.666666666666667rem;
    }
  }
  @media(max-width: 700px){
    top: 47%;
    width: 55.9%;
    height: 250px;
    transform: translateY(-50%);
    right: 5.6% !important;
    left: auto !important;
    > h2 {
      font-size: 1.25rem;
      line-height: 5rem;
      white-space: pre;
    }
    > ul {
      padding: 0 0 8.5% 10.5%;
    > li {
      line-height: 1.583333333333333rem;
      font-size: 1rem;
    }
  }

  ${props => props.expert && css`
    transform: translateY(-20%);
  `}

  ${props => props.inherit && css`
    transform: translateY(-100%);
    > h2 {
      line-height: 1.8rem;
      height: 103px;
      display: flex;
      align-items: center;
      justify-content: center;
       
    }
  `}
}  
`;
const TitleBox = (props) => {
  return (
    <BoxContain
      inherit={props.inherit}
      expert={props.expert}
      style={{
        right: `${props.right}`,
        left: `${props.left}`
      }}
    >
      <h2>{props.title}</h2>
      <ul>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
      </ul>
    </BoxContain>
  )
}

export default TitleBox;
