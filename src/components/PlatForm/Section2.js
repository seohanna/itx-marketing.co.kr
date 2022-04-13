import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ScrollMagic from "scrollmagic";

const Section2 = (props) => {
  const itemsRef = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
      new ScrollMagic
      .Scene({
        triggerElement: itemsRef.current,
        triggerHook: .8
      })
      .setClassToggle(itemsRef.current, 'show')
      .addTo(controller);
  });

  return (
    <Wrap>
      <SectionTitle>
        <span>{props.thin}</span>
        <span className="small">{props.small}</span>
        <strong>&nbsp;{props.strong1}</strong>
        {props.title1}
        <strong>&nbsp;{props.strong2}</strong>
        {props.title2}
      </SectionTitle> 
      <IconBox ref={itemsRef}>
        <ul>
          {props.data.map((dt) => (
            <DataContent key={dt.id} className={dt.className}> 
              <div className="img-wrap">
                <img src={dt.img} alt={dt.title} />
              </div>
              <div className="text-wrap">
                <h2>{dt.title}</h2>
                <p>{dt.content}</p>
              </div>
            </DataContent>
          ))}
        </ul>
      </IconBox>
    </Wrap>
  );
};

export default Section2;

const Wrap = styled.div`
  padding-right: 7.8125%;
  text-align: right;

  @media (max-width: 700px) {
    padding-right: 6.2%;
  }
`;

const IconBox = styled.div`
 &.show ul > li{
    opacity: 1;
    transform: translateY(0);
  } 
  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 7%;

    @media (max-width: 700px) {
      flex-flow: row wrap;
      padding-left: 6.2%;
    }
  }
`;

const DataContent = styled.li`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13% 0 8% 0;
  opacity: 0;
  transform: translateY(50%);
  transition-duration: 0.6s;

  &.delay-0 {
    transition-delay: 0;
  }
  &.delay-1 {
    transition-delay: .3s;
  }
  &.delay-2 {
    transition-delay: .4s;
  }
  &.delay-3 {
    transition-delay: .5s;
  }
  > .img-wrap {
    border-radius: 50%;
    background-color: #F8F8F8;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .text-wrap {
      text-align: center;

    > h2 {
      font-size: 1rem;
      color: #1a1a1a;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > p {
      font-size: 0.75rem;
      line-height: 1.45rem;
      text-align: center;
      white-space: pre;
      height: 120px;
    }
  }
  @media (max-width: 700px) {
    width: 50%;
    > .img-wrap {
      width: 80px;
      height: 80px;

      > img {
        max-width: 60px;
      }
    }
    > .text-wrap {
      > h2 {
        font-size: 0.8125rem;
        white-space: pre;
        align-items: flex-end;
        height: 45px;
      }
      > p {
        padding-top: 11.5%;
        font-size: 0.625rem;
        line-height: 0.9rem;
        
      }
    }
  }
`;
