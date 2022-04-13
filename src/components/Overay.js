import React from 'react'
import styled from 'styled-components';

const DarkBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3);
`;

const Overay = () => {
  return (
    <DarkBg />
  )
}
export default Overay;
