import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import flatformLink from '../../img/sub/flatformLink.svg';
import gear from '../../img/sub/gear.svg';

const TopBox = ({link1, link2, disc, inherit, coporation}) => {
  const activeStyle = { background: "#C22229" };

  return (
    <Container>
      <GrayBox>
        <div>
          <p>{disc}</p>
        </div>
        {inherit && (
        <>
          <div className="gear-contaienr">
            <GearIcon className="first-gear">
              <span>{'불필요한\n분쟁예방'}</span>
            </GearIcon>
            <GearIcon className="second-gear">
              <span>{'상속세\n절세'}</span>
            </GearIcon>
            <GearIcon className="three-gear">
              <span>{'상속세\n재원마련'}</span>
            </GearIcon>
          </div>
          <ListBox>
            <li>
              <StyledLink
                  to={link1}
                  activeStyle={activeStyle}
                >
                  <h3>전문가 그룹</h3>
                  <img src={flatformLink} alt="전문가 그룹" />
                </StyledLink>
            </li>
            <li>
              <a href='#process'>
                <h3>프로세스</h3>
                <img src={flatformLink} alt="프로세스" />
              </a>
            </li>
          </ListBox>
        </>
        )}
       {coporation && (
          <ListBox>
          <li>
              <StyledLink
                exact
                to={link1}
                activeStyle={activeStyle}
              >
                <h3>서비스</h3>
                <img src={flatformLink} alt="서비스" />
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to={link2}
                activeStyle={activeStyle}
              >
                <h3>전문가 그룹</h3>
                <img src={flatformLink} alt="전문가 그룹" />
              </StyledLink>
            </li>
            <li>
              <a href='#process'>
                <h3>프로세스</h3>
                <img src={flatformLink} alt="프로세스" />
              </a>
            </li>
        </ListBox>
       )}
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
    padding: 7.7% 0 7.6% 15%;
    
    p {
      font-size: 1.25rem;
      line-height: 1.775rem;
      white-space: pre;
    }
  }
  @media (max-width: 700px) {
    > div {
      padding: 16.8% 0 0 6.2%;
     
      > p {
        width: 45%;
        font-size: 0.8125rem;
        line-height: 1.1rem;
      }
    }
  }
  .gear-contaienr {
    display: flex;
    justify-content: flex-end;
    transform: translateX(-8.438061041292639%);
    padding: 0 0 3.3% 0;

    @media (max-width: 700px) {
      padding: 0;
    }
  }
`;

const ListBox = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0 9% 4.3% 0;

  > li {
    width: 20.34709754637941%;
    margin-right: 1.2%;
    :last-child{
      margin-right: 0;
    }

    > a {
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
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 100% 0 10.5% 6%;

    > li {
      width: 120px;
      margin-right: 0%;
      margin-bottom: 5.4%;

      > a {
        height: 30px;
        > h3 {
          font-size: 0.625rem;
        }
      }
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


const GearIcon = styled.div`
  width: 276px;
  height: 276px;
  background-image: url(${gear});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &.first-gear {
    transform: translateY(-30%);
  }
  &.second-gear {
    transform: translate(8%, -70%);
  }
  &.three-gear {
    
  }
  > span {
    white-space: pre;
    line-height: 1.5rem;
  }

  @media (max-width: 700px) {
    width: 150px;
    height: 150px;
    background-size: contain;
    background-position: center;

    &.first-gear {
      transform: translate(45%, 230%);
    }
    &.second-gear {
      transform: translate(46%, 200%);
    }
    &.three-gear {
      transform: translate(-10%, 280%);
    }

    > span {
      font-size: 0.8125rem;
      line-height: 1.1rem;
    }
  }
`;