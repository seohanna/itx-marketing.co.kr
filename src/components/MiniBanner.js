import React from 'react'
import styled from 'styled-components'

const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;
  background-color: #B8292D;
  padding: 2.6% 0 3.5% 0;
  box-shadow: 0px 16px 21px rgba(0, 0, 0, 0.25);

  > p {
    font-family: 'GoyangDeogyang';
    position: relative;
    padding-bottom: 1.7%;
  }
  > p::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #620406;
    margin-top: 18%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > h2 {
    font-size: 1.5rem;
    padding-top: 1.7%;
    font-weight: 400;
  }
  @media (max-width: 700px) {
    padding: 7.8% 0 10.09% 0;
    > p {
      font-size: 0.625rem;
      padding-bottom: 3.8%;
    }
    > h2 {
      font-size: 0.8125rem;
      letter-spacing: 1%;
      padding-top: 4.5%;
    }
  }
`;

const MiniBanner = (props) => {
  return (
    <Board>
      <p>ITX Marketing</p>
      <h2>{props.desc}</h2>
    </Board>
  )
}

export default MiniBanner;
