import React from 'react'
import styled from 'styled-components';


function HashTag({name, bg, color, width, mb}) {
  return (
    <HashBox bg={bg} color={color} width={width} mb={mb}>
      # {name}
    </HashBox>
  )
}

export default HashTag;

const HashBox = styled.h4`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  font-size: 0.75rem;
  line-height: 1.75rem;
  background: ${props => props.bg || '#F8F8F8'};
  color: ${props =>  props.color || '#444444'};
  width: ${props => props.width};
  height: 35px;

  @media (max-width: 700px) {
    font-size: 0.625rem;
    width: ${props => props.mb};
  }
`;