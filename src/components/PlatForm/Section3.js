import React, { useEffect }  from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { useLocation } from "react-router-dom";
import ScrollMagic from "scrollmagic";

const Section3 = (props) => {
  const location = useLocation();

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-el');
    fadeEls.forEach(function (fadeEl) {
      new ScrollMagic
        .Scene({
          triggerElement: fadeEl,
          triggerHook: .5
        })
        .setClassToggle(fadeEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })
  }, []);

  return (
    <Wrap>
      <SectionTitle>
        <span>{props.thin}</span>
        <span className="small">{props.small}</span>
        <strong>{props.strong1}</strong>
        {props.title1}
        <strong>{props.strong2}</strong>
        {props.title2}
      </SectionTitle>
      <Content>
        {props.data.map((dt) => (
          <li className='fade-el'
            key={dt.id} 
            style={{paddingBottom: `${props.bottom}`
          }}>
            <img src={dt.img} alt={dt.hashtag} />
            <TextWrap 
              style={{textAlign: `${props.left}`}}
            >
              <h2 className="hash-tag">{dt.hashtag}</h2>
              {location.pathname === '/business/platform' ?
              (<p className="sub-txt">{dt.content}</p>) :
              (<ul className="list-wrap sub-txt">
                <li>{dt.list1}</li>
                <li>{dt.list2}</li>
                <li>{dt.list3}</li>
                <li style={{ display: `${props.none}`}}>
                  {dt.list4}
                </li>
              </ul>)}  
            </TextWrap>
          </li>
        ))}
      </Content>
    </Wrap> 
  );
};

export default Section3;

const Wrap = styled.div`
  padding-left: 11.25%;

  @media (max-width: 700px) {
    padding-left: 6.2%;
  }
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 9.5% 12.87% 4% 0;

  > li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 1.9rem;
   
    .sub-txt {
      transform: translate3d(0px, 38.5393px, 0px);
      transition-duration: 0.6s;
      transition-delay: .3s;
      opacity: 0;
      font-size: 1.3vw;
    }
    &.show .sub-txt {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
    &.show .hash-tag {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }

    &.show > img {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    > img {
      width: 53.26160053799597%;
      opacity: 0;
      transform: translate(0px, 100px);
      transition-duration: 0.6s;
    }
    &:nth-child(2n-1) {
      text-align: right;
    }
    &:nth-child(2n) {
      > img {
        order: 2;
      }
    }
    &:last-child {
      padding-bottom: 0 !important;
    }
    .list-wrap {
      list-style: disc;
      padding-left: 3.2%;
    }
  }
  @media (max-width: 700px) {
    padding: 15.5% 8.2% 8% 2.2%;
    
    > li {
      flex-direction: column;
      line-height: 1rem;
      
      > img {
        width: 100%;
        padding-bottom: 9.7%;
      }
      &:nth-child(2n) {
        > img {
          order: 0;
        }
      }
      .list-wrap {
        padding-left: 5%;
        font-size: 0.625rem;
        padding-bottom: 6%;
      }
    }
  }
`;

const TextWrap = styled.div`
  /* width: 46.73839946200403%; */
  white-space: pre;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  > h2 {
    color: #b8292d;
    font-size: 1.25rem;
    padding-bottom: 4%;
    transform: translate3d(0px, 38.5393px, 0px);
    transition-duration: 0.6s;
    opacity: 0;
  }
  > p {
    line-height: 1.9rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 11%;

    > h2 {
      font-size: 0.8125rem;
      padding-bottom: 4.3%;
    }
    > p {
      font-size: 0.625rem;
      line-height: 0.9rem;
    }
  }
`;
