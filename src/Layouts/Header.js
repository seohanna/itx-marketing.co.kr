import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';
// import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { ReactComponent as TopLogo } from "../img/common/Logo.svg";
import { ReactComponent as MenuBtn } from "../img/common/MenuIcon.svg";
import submenuicon from "../img/common/listIcon.svg"
import { ReactComponent as CloseBtn } from "../img/common/closeBtn.svg";


const Headers =  styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  font-size: 1rem;
  width: 100%;
  height: 100px;
  
  &.primary-header {
    color: #FFFFFF;
  }
  &.black-font {
    color: #323232;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
  &#scroll-header{
    background-color: #FFFFFF;
    color: #323232;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.3));

    > a {
      color: #323232;
    }
  }

::after{
    width: 100%;
    content: "";
    position: absolute;
    top: 100%;
    height: 1px;
    background-color: #C4C4C4;
    z-index: 30;
}
`;
const Inner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 7.8125%;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
    background-repeat: no-repeat;
  }
`;
const Logo = styled.h2`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  z-index: 31;
  width: 19.2vw;
  margin-right: 5.208333333333333%;

  #scroll-logo {
    fill: #2D2D2D;
  }
  > .primary-logo {
    fill: #FFFFFF;
  }
  > .black-logo {
    fill: #2D2D2D;
  }
  @media (max-width: 700px) {
    padding-right: 0;
    margin-right: 0;
    width: 33.06666666666667vw;
    order: 1;
  }
`;

const Lnb = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    display: ${props => (props.isopen ? 'block' : 'none')};
    order: 3;
  }
  
> nav {
  position: relative;
  z-index: 30;
  @media(max-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 20px;
    padding-top: 100px;
    opacity: 1;
    width: 100%;
    height: 1000px;
    background-color: #FFFFFF;
  }
}
> nav:hover + div {
  height: 609px;
  opacity: 1;
  @media (max-width: 700px){
    height: 100%;
  }
}
 > nav + div {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 0;
  opacity: 0;
  background: #FFFFFF;
  transition: all 0.3s;
  z-index: 29;
}
> nav > .main-menu {
  display: flex;
  justify-content: space-between;
  height: 100px;
  overflow: hidden;

  @media (max-width: 700px) {
    display: block;
    height: 100%;
  }
}

 > nav > .main-menu:hover , nav > .main-menu:hover > a {
  color: #323232;
  overflow: visible;
}

 > nav > .main-menu > li{
  position: relative;
  width: 14%;
  text-align: center;
  line-height: 100px;
  white-space: nowrap;
  flex-grow: 1;
  cursor: pointer;

  @media (max-width: 700px){
    line-height: 22.26px;
    padding: 29px 0;
    color: #323232;
    font-size: 1.25rem;

    &.active > .sub-menu{
      display: block;
      height: 100%;
    }
  }
}
> nav > .main-menu > li:hover::after {
  width: 100%;
  @media (max-width: 700px) {
    content: none;
  }
}
 > nav > .main-menu > li::after {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  width: 0;
  height: 3px;
  background-color: #C22229;
  transition: all 0.4s;
  margin-top: 1px;
  @media (max-width: 700px){
    display: none;
  }
}
 > nav > .main-menu > li > .sub-menu {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 1;
  transition: all 0.3s;
  color: #444444;

  @media (max-width: 700px){
    position: relative;
    text-align: start;
    width: 100%;
    padding-top: 26px;
    display: none;
  }
}
 > nav > .main-menu:hover > li > .sub-menu {
  opacity: 1;
  
}

 > nav > .main-menu > li > .sub-menu > li {
  line-height: 22.26px;
  padding: 1.5rem 0;
  position: relative;


  @media (max-width: 700px) {
    line-height: 15px;
    padding: 10px 0;
    font-size: 0.9375rem;
  }
}
.sub-menu-dropdown {
  text-align: start;
  line-height: 30px;
  font-size: 15px;
  padding-left: 35%;
}
.sub-menu-dropdown > li {
  display: flex;
  align-items: center;
}
.sub-menu-dropdown > li::before {
  content: '';
  display: flex;
  justify-content: flex-start;
  padding-right: 11px;
  width: 8px;
  height: 8px;
  background-image: url(${submenuicon});
  background-repeat: no-repeat;
}
`;
const ToggleBtn = styled.div`
  width: 40px;
  height: 70px;
  cursor: pointer;
  display: none;
  z-index: 30;
  display: none;
  align-items: center;

  @media (max-width: 700px) {
    order: 2;
    display: flex;
    justify-content: flex-end;
  }

  .black-toggle {
    stroke: #1A1A1A;
  }
  #scroll-toggle {
    stroke: #1A1A1A;
  }
  .primary-toggle {
    stroke: #FFFFFF; 
  }
`;
 
const Header = (props) => {
  const [isHovering, setIsHovering] = useState(0);
  const [isToggleOn, setToggleOn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const activeMethod = (event) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf('active');

    closeMothodAll();

    if (chkActive === -1) {
      current.classList.add('active');
    }
  }
  const closeMothodAll = () => {
    let bx = document.getElementsByClassName('main-menu');
  
    for (let i = 0; i < bx[0].children.length; i++) {
      bx[0].children[i].classList.remove('active');
    }
   }

  // togglebtn 
  const handleClick = () => {
    setToggleOn(!isToggleOn);
  }

  const updeateScroll = () => {
    setScrollPosition(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener('scroll', updeateScroll);
  },[]);

  const location = useLocation();

  return (
    <Headers 
        isopen={isToggleOn}
        className={
          location.pathname === '/intro/summary' ||
          location.pathname === '/intro/partners' ?
          'black-font' : 'primary-header'
        }
        id={scrollPosition > 500 || isHovering ? 'scroll-header' : ''}
    >
      <Inner>
        <Logo as="a" href="/">
          <TopLogo 
            className={
              location.pathname === '/intro/summary' ||
              location.pathname === '/intro/partners' ?
              'black-logo' : 'primary-logo'
            }
            id={scrollPosition > 500 || isHovering || isToggleOn ? 'scroll-logo' : ''}
          />
        </Logo>
        <Lnb isopen={isToggleOn}>
          <nav>
            <ul
              className='main-menu'
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
              isopen={isToggleOn}
            >
              <li
                onClick={activeMethod}
              >
                ITX Marketing 
                <ul
                  className="sub-menu">
                  <li><a href='/intro/summary'>개요</a></li>
                  <li><a href='/intro/partners'>제휴사</a></li>
                  <li><a href='/intro/recruit'>채용</a></li>
                  <li><a href='/intro/contact'>Contact us</a></li>
                </ul>
              </li>
              <li
                onClick={activeMethod}
              >Business
                <ul className="sub-menu">
                  <li><a href='/business/platform'>플랫폼</a>
                    <ul className="sub-menu-dropdown">
                      <li><a href='/business/platform'>개인영업</a></li>
                      <li><a href='/business/platform/insuplus'>보험플러스</a></li>
                      <li><a href='/business/platform/market'>Market</a></li>
                    </ul>
                  </li>
                  <li><a href='/business/invest'>3분 재태크</a></li>
                  <li><a href='/business/apply'>상담신청</a></li>
                </ul>
              </li>
              <li 
              onClick={activeMethod}
              >기업컨설팅
                <ul className="sub-menu">
                  <li><a href='/corporation'>컨설팅 소개</a></li>
                  <li><a href='/corporation/service'>서비스</a></li>
                  <li><a href='/corporation/expert'>전문가 그룹</a></li>
                  <li><a href='/corporation/apply'>상담신청</a></li>
                </ul>
              </li>
              <li
                onClick={activeMethod}
              >상속증여연구소
                <ul className="sub-menu">
                  <li><a href='/inherit'>연구소 소개</a></li>
                  <li><a href='/inherit/service'>서비스</a></li>
                  <li><a href='/inherit/expert'>전문가 그룹</a></li>
                  <li><a href='/inherit/apply'>상담신청</a></li>
                </ul>
              </li>
              <li onClick={activeMethod}>
                고객센터
                <ul
                  className="sub-menu">
                  <li><a href='/intro/summary'>로그인</a></li>
                  <li><a href='/intro/partners'>회원가입</a></li>
                  <li><a href='/intro/recruit'>FAQ</a></li>
                  <li><a href='/intro/contact'>1:1 문의</a></li>
                  <li><a href='/intro/contact'>QnA</a></li>
                  <li><a href='/intro/contact'>사이트맵</a></li>

                </ul>
              </li>
            </ul>
          </nav>
          <div></div>
        </Lnb>
           <ToggleBtn onClick={handleClick} isopen={isToggleOn}>
             {isToggleOn && (
               <CloseBtn stroke='#B8292D'/>
             )}
              {!isToggleOn && (
                <MenuBtn
                  className={
                    location.pathname === '/intro/summary' ||
                    location.pathname === '/intro/partners' ?
                    'black-toggle' : 'primary-toggle'
                  }
                  id={scrollPosition > 500 || isHovering ? 'scroll-toggle' : ''}
                />
              )}
           </ToggleBtn>
      </Inner>
    </Headers>  
  )
}

export default Header;
