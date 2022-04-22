import React from 'react'
import styled,{ css } from 'styled-components'


function ContentInner({
  children, none
}) {
  
  return (
    <Inner none={none}>
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

    ${props => props.none && css`
      padding: 0;
    `}
  }

  
`;



