import React,{ useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import {ReactComponent as ToTopIcon} from "../img/common/toTopBtn.svg";

const ToTopButton = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  background-color: #444444;
  width: 50px;
  height: 50px;
  z-index: 29;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all .4s;
  display: flex;
  &.show{
    opacity: 1;
  }
`;

const PageScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const topBtnRef = useRef(null);
  const topScroll = () => {
    setScrollPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', topScroll);
  })
  const toTop = () => {
    window.scrollTo(0,0);
  }

 
return (
  <ToTopButton 
    ref={topBtnRef}
    onClick={toTop}
    className={scrollPosition > 700 ? 'show' : null}
  >
    <ToTopIcon />
  </ToTopButton>
  );
}
    
export default PageScrollToTop;