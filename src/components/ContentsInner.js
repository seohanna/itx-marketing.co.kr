import React from 'react'
import styled from 'styled-components'

function ContentInner({
  children,
}) {
  
  return (
    <Inner>
      {children}
    </Inner>
  );
}

export default ContentInner;

const Inner = styled.div`
  width: 100%;
  padding: 0 7.49%;

  @media (max-width: 700px) {
    padding: 0 5.6%;
  }

  
`;



