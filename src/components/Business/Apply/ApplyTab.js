import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



function ApplyTab() {
  const activeStyle = {
    color: '#FFFFFF',
    background: '#B8292D'
    
  }
  return (

      <ApplyMenu>
        <ul>
          <li>
            <StyledLink 
              to='/business/apply'
              exact
              activeStyle={activeStyle}
              isActive={(match, location) => {
                return match !== null && location.search === '';
              }}
            >법인컨설팅</StyledLink>
          </li>
          <li>
            <StyledLink 
              to='/business/apply?2'
              activeStyle={activeStyle}
              isActive={(match, location) => {
                return match !== null && location.search === '?2';
              }}
            >개인컨설팅</StyledLink>
          </li>
          <li>
            <StyledLink 
              to='/business/apply?3'
              activeStyle={activeStyle}
              isActive={(match, location) => {
                return match !== null && location.search === '?3';
              }}
            >전문가 입사문의</StyledLink>
          </li>
        </ul>
      </ApplyMenu>
      

  );
}

export default ApplyTab;


const ApplyMenu = styled.nav`
  width: 100%;
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
      width: 29.01234567901235%;
      height: 80px;
    }
  }

  @media(max-width: 700px) {
    > ul {
      > li {
        width: 33.33333333333333%;
        height: 50px;
      }
    }
  }
`;
const StyledLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: #444444;
  background: #F0F0F0;
  font-family: 'GoyangDeogyang';

  @media(max-width: 700px) {
    font-size: 0.8125rem;
  }
`;
