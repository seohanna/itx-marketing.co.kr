import React from 'react';
import styled from 'styled-components';
import { Data } from '../../data/FaqData';
import ContentsInner from '../ContentsInner';

function FaqList() {
  const activeMethod = (event) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf('active');

    closeMothodAll();

    if (chkActive === -1) {
      current.classList.add('active');
    }
  }
  const closeMothodAll = () => {
    let bx = document.getElementsByClassName('accordion');
  
    for (let i = 0; i < bx[0].children.length; i++) {
      bx[0].children[i].classList.remove('active');
    }
   }
     
  return (
    <ContentsInner>
      <DataList className='accordion'>
        {Data.map((dt) => (
          <li key={dt.id} onClick={activeMethod}>
            <div className='title'>
              <div>
                <h4>Q.</h4>
                <p>{dt.title}</p>
              </div>
            </div>
            <div className='answer'>
              <p>{dt.answer}</p>
              <div className='sub-answer'>
                {dt.a1 && (<span>{dt.a1}</span>)}
                {dt.a2 && (<span>{dt.a2}</span>)}
                {dt.a3 && (<span>{dt.a3}</span>)}
                {dt.a4 && (<span>{dt.a4}</span>)}
                {dt.a5 && (<span>{dt.a5}</span>)}
                {dt.a6 && (<span>{dt.a6}</span>)}
                {dt.coment && (<span className='coment'>{dt.coment}</span>)}
              </div>
            </div>
          </li>
        ))}
      </DataList>
    </ContentsInner>
    ); 
}
export default FaqList;

const DataList = styled.ul`
  padding: 8% 0 10.8% 0;
  
  > li {
    display: flex;
    flex-direction: column;
    
    &.active .answer {
      height: 50vh;
      transition: all 0.2s;
    }
    &.active .title::after {
      content: '-';
      color: #444444;
    }
    :last-child > div {
      border-bottom: 1px solid #C4C4C4;
    }
    > .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #C4C4C4;
      height: 100px;
      div {
        display: flex;
        width: 95%;
        > h4 {
          font-size: 1.25rem;
          color: #B8292D;
        }
        > p {
          padding-left: 2.7%;
          font-size: 1.25rem;
        }
      }
      ::after {
        content: '+';
        display: block;
        width: 5%;
        font-size: 1.5rem;
        color: #C4C4C4;
      }
    }
    
    .answer {
      background-color: #F3F7F9;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding-left: 3%;
      > p {
        font-weight: 500;
        white-space: pre;
        line-height: 1.5rem;
      }
    }
    .sub-answer {
      display: flex;
      flex-direction: column;
      padding-top: 1%;
        > span {
          display: flex;
          font-size: 0.9rem;
          line-height: 1.4rem;
          
          &.coment {
            padding-top: 1%;
            white-space: pre;
          }
        }
      }
  }
  @media (max-width: 700px) {
    padding: 15% 0 20% 0;
    > li {
    
      &.active .answer {
        height: 12vh;
      }
      > .title {
          height: 60px;
        div {
        > h4 {
          font-size: 0.8125rem;
        }
        > p {
          padding-left: 4.4%;
          font-size: 0.8125rem;
        }
      }
      ::after {
        font-size: 1.25rem;
        display: flex;
        justify-content: center;
      }
    }
    
    .answer {
      padding-left: 6.4%;
      > p {
        font-size: 0.625rem;
      }
    }
  }
  }
`;





