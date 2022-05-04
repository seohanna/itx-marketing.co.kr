import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fp from './Fp';
import Permanent from './Permanent';
import RightPeople from './RightPeople';
import System from './System';
import { useLocation } from 'react-router-dom';

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
const TabContent = styled.div``;

const StyledLink = styled(Link)`
`;

const RecruitTab = () => {
  const location = useLocation();

  return (
    <>
    <NavContainer>
      <ul>
        <li className={location.search === '' && 'active'}>
          <StyledLink
            isActive={(match, location) => {
              return match !== null && location.search;
            }}
            to="/intro/recruit"
          >인재상</StyledLink>
        </li>
        <li className={location.search === '?system' && 'active'}>
          <StyledLink
           isActive={(match, location) => {
            return match !== null && location.search;
          }}
            to="/intro/recruit?system"
          >인사제도</StyledLink>
        </li>
        <li className={location.search === '?fp' && 'active'}>
          <StyledLink
            isActive={(match, location) => {
              return match !== null && location.search;
            }}
            to="/intro/recruit?fp"
          >FP채용</StyledLink>
        </li>
        <li className={location.search === '?perment' && 'active'}>
          <StyledLink
            isActive={(match, location) => {
              return match !== null && location.search;
            }}
            to="/intro/recruit?perment"
          >정규직<sapn>채용</sapn></StyledLink>
        </li>
      </ul>
    </NavContainer>
    <TabContent>
      {location.search === '' && (<div><RightPeople /></div>)}
      {location.search === '?system' && (<div><System /></div>)}
      {location.search === '?fp' && (<div><Fp /></div>)}
      {location.search === '?perment' && (<div><Permanent /></div>)}
    </TabContent>
  </>
  )
}

export default RecruitTab;


