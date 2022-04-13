import React from 'react'
import infoInquiry from '../../img/sub/infoInquiry.svg';
import infoEmail from '../../img/sub/infoEmail.svg';
import infoKeeper from '../../img/sub/infoKeeper.svg';
import styled from 'styled-components';

const Wrap = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10.6% 0 11.67% 0;
  > li {
    display: flex;
    font-family: 'GoyangDeogyang';
    align-items: center;
    justify-content: center;
    line-height: 1.15rem;
    width: 33.33333333333333%;
    > div {
      width: 30px;
      height: 35px;
      margin-right: 3%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  @media(max-width: 700px) {
   flex-direction: column;
   > li {
      width: 80%;
      line-height: 1.875rem;
      justify-content: flex-start;
      font-size: 0.8125rem;
      margin-bottom: 5%;
    > div {
      margin-right: 6%;
      width: 25px;
      height: 30px;
    }
   }
  }
`;

const Info = (props) => {
  return (
    <Wrap>
        <li>
          <div style={{
            backgroundImage: `url(${infoInquiry})`
          }}></div>
          <p>문의처 : 02 - 222 - 2222</p>
        </li>
        <li>
          <div style={{
            backgroundImage: `url(${infoEmail})`
          }}></div>
          <p>{props.email}</p>
        </li>
        <li>
          <div style={{
            backgroundImage: `url(${infoKeeper})`
          }}></div>
          <p>{props.keeper}</p>
        </li>
    </Wrap>
  )
}

export default Info
