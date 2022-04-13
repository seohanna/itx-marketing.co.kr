import React from 'react'
import styled from 'styled-components';
import linkBtn from "../img/common/halfArrow.svg";


const Container = styled.div`
  background-color: #F8F8F8;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24.8%;
  }
  @media(max-width: 700px){
    padding: 8.6% 5.6% !important;
    > div {
      align-items: flex-start;
      padding-bottom: 93.5%;
      .img-wrap {
        width: 49.8%;
        align-self: flex-end;
      }
    }
  }
`;
const TextWrap = styled.div`
  h2 {
    color: #1A1A1A;
    font-size: 2.5rem;
    padding-top: 8.7%;
  }
  p {
    font-size: 1.5rem;
  }
  @media(max-width: 700px){
    padding-left: 0 !important;
    h2 {
    font-size: 1.25rem;
    padding-top: 8%;
    padding-bottom: 84%;
    }
    p {
    font-size: 0.8125rem;
    }
  }
`;
const LinkWrap = styled.ul`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  color: #B8292D;
> li {
    &.none {
      display: none;
    }
    ::after {
    content: '';
    display: block;
    width: 235px;
    height: 12px;
    background-image: url(${linkBtn});
    background-size: contain;
    background-repeat: no-repeat;
  }
} 
@media(max-width: 700px){
  flex-direction: column;
  font-size: 0.8125rem;
  > li{
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  > li::after {
    width: 150px;

  }
}
`;

const SubBanner = (props) => {
  return (
    <Container
      style={{
        padding: `${props.padding}`
      }}
    >
      <div>
        <TextWrap
          style={{
            paddingLeft: `${props.leftpd}`
          }}
        >
          <p>{props.modifier}</p>
          <h2>아이티엑스마케팅</h2>
        </TextWrap>
        <div className='img-wrap'>
          <img src={props.image} alt='아이티엑스마케팅'/>
        </div>
      </div>
      <LinkWrap>
        <li><a href={props.id1}>{props.link1}</a></li>
        <li><a href={props.id2}>{props.link2}</a></li>
        <li><a href={props.id3}>{props.link3}</a></li>
        <li className={props.display}><a href={props.id4}>{props.link4}</a></li>
      </LinkWrap>
    </Container>
  )
}

export default SubBanner;
