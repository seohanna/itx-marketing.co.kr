import React from 'react'
import styled from 'styled-components';
import icon from '../img/common/preparePageIcon.png';


const PreparePage = () => {
  return (
    <Container>
      <img src={icon} alt='icon' />

    </Container>
  )
}

export default PreparePage;

const Container = styled.div`
  padding: 15.1% 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 50% 0 25% 0;
  }
`;