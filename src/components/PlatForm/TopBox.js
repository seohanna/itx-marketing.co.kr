import React from "react";
import styled,{ css } from "styled-components";
import { NavLink } from 'react-router-dom';
import flatformLink from '../../img/sub/flatformLink.svg';


const TopBox = () => {
  const activeStyle = { background: "#C22229" };

  return (
    <Container>
      <GrayBox>
        <div>
          <p>아이티엑스마케팅은<br />
            차별화된 다양한 비즈니스 플랫폼을 제공합니다.
          </p>
        </div>
        <ListBox>
          <li>
            <StyledLink
              exact
              to='/business/platform'
              activeStyle={activeStyle}
            >
              <h3>개인영업(FP)</h3>
              <img src={flatformLink} alt="개인영업" />
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to='/business/platform/insuplus'
              activeStyle={activeStyle}
            >
              <h3>보험플러스</h3>
              <img src={flatformLink} alt="보험플러스" />
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to='/business/platform/market'
              activeStyle={activeStyle}
            >
              <h3>DB Market</h3>
              <img src={flatformLink} alt="DB Market" />
          </StyledLink>
          </li>
        </ListBox>
      </GrayBox>
    </Container>
  );
};
export default TopBox;

const Container = styled.section`
  position: relative;
  padding-left: 12.96875%;
  @media (max-width: 700px) {
    padding-left: 0%;
  }
`;


const GrayBox = styled.div`
  background-color: #f8f8f8;
  > div {
    padding: 7.7% 0 10.29% 15%;
    
    p {
      font-size: 1.25rem;
      line-height: 1.775rem;
    }
  }
  @media (max-width: 700px) {
    > div {
      padding: 16.8% 0 0 6.2%;
     
      > p {
        width: 45%;
        font-size: 0.8125rem;
      }
    }
  }
`;

const ListBox = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0 9% 4.3% 0;

  > li {
    width: 13.99%;
    margin-right: 1.75%;
    :last-child{
      margin-right: 0;
    }
  }

  /* ${props => props.expert && css`
    display: none;
  `} */
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 100% 0 10.5% 6%;

    > li {
      width: 120px;
      margin-right: 0%;
      margin-bottom: 5.4%;
    }
  }
`;
const StyledLink = styled(NavLink)`
  background-color: #B8292D;
  color: #FFFFFF;
  height: 60px;
  padding: 8.095238095238095%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    height: 30px;
    > h3 {
      font-size: 0.625rem;
    }
  }
`;