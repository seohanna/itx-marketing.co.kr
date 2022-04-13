import React, { useState } from 'react';
import styled from 'styled-components';
import Fp from './Fp';
import Permanent from './Permanent';
import RightPeople from './RightPeople';
import System from './System';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.7% 13.54166666666667% 2.1%;

  @media (max-width: 700px) {
    padding: 8.2% 5.4%;
  }
  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    > li {
      width: 25%;
      text-align: center;
      border: 1px solid #C4C4C4;
      border-right-width: 0;
      color: #767676;
      @media (max-width: 700px) {
        border: 0;
        
      } 
  
      &.active{
        border: 2px solid #B8292D;
        border-right-width: 2px;
        color: #B8292D;
        font-family: 'GoyangDeogyang';
        @media (max-width: 700px) {
          border: 0;
        } 
      }
      > a {
        display: block;
        line-height: 3.5rem;
        @media (max-width: 700px) {
          font-size: 0.8125rem;
          line-height: 2.5rem;
        } 
      }
      :last-child {
        border-right-width: 1px;
      }
      :last-child.active {
        border-right-width: 2px;
      }
    }
  }
`;
const TabContent = styled.div`

  .block{
    display: block;
  }
  .hidden{
    display: none;
  }
`;

const RecruitTab = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
    <NavContainer>
      <ul>
        <li className={openTab === 1 ? 'active' : '' }>
          <a
            onClick={(e) => {
            e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#cont1"
            role="tablist"
          >인재상</a>
        </li>
        <li className={openTab === 2 ? 'active' : '' }>
          <a
           onClick={(e) => {
            e.preventDefault();
              setOpenTab(2)}}
            data-toggle="tab"
            href="#cont2"
            role="tablist"
          >인사제도</a>
        </li>
        <li className={openTab === 3 ? 'active' : '' }>
          <a
            onClick={(e) => {
            e.preventDefault();
              setOpenTab(3)}}
            data-toggle="tab"
            href="#cont3"
            role="tablist"
          >FP채용</a>
        </li>
        <li className={openTab === 4 ? 'active' : '' }>
          <a
            onClick={(e) => {
            e.preventDefault();
              setOpenTab(4)}}
            data-toggle="tab"
            href="#cont4"
            role="tablist"
          >정규직<sapn>채용</sapn></a>
        </li>
      </ul>
    </NavContainer>
    <TabContent>
      <div className={openTab === 1 ? 'block' : 'hidden'} id="#cont1">
        <RightPeople />
      </div>
      <div className={openTab === 2 ? 'block' : 'hidden'} id="#cont2">
        <System />
      </div>
      <div className={openTab === 3 ? 'block' : 'hidden'} id="#cont3">
        <Fp />
      </div>
      <div className={openTab === 4 ? 'block' : 'hidden'} id="#cont4">
        <Permanent />
      </div>
    </TabContent>
  </>
  )
}

export default RecruitTab;
