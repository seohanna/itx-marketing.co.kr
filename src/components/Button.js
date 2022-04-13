import React from 'react'
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  background-color: var(--button-bg-color, #B8292D);
 
  &:hover {
    background-color: var(--button-hover-bg-color, #C22229);
  }
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  color: #FFFFFF;
  box-shadow: -1px 6px 12px rgba(114, 0, 3, 0.25);
  opacity: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: bacground .3s ease-in-out;
  font-family: 'GoyangIlsan';
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 0.625rem;
    width: 85px;
    height: 25px;
    font-size: 0.625rem;
    box-shadow: none;
    .arrow-icon {
      display: none;
    }
    
  }
`;

const SIZES = {
  md: css`
    width: 200px;
    height: 60px;
    border-radius: 95px;
  `,
  md2: css`
  width: 250px;
  height: 60px;
  border-radius: 8px;
  @media (max-width: 700px) {
    width: 200px !important;
    height: 50px !important;
    font-size: 1rem !important;
  }
`,
  lg: css`
    width: 250px;
    height: 60px;
    border-radius: 95px;
  `,
  xl: css`
    width: 464px;
    height: 60px;
    border-radius: 7px;
    @media (max-width: 700px) {
      width: 100% !important;
      height: 50px !important;
      font-size: 0.8125rem !important;
      box-shadow: -1px 6px 12px rgba(114, 0, 3, 0.25) !important;
    }
`,
}
const VARIANTS = {
  hovering: css`
    --hover-bg-color: #C22229;
  `
}
const Button = ({children, size, variant, onClick}) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      onClick={onClick}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  )
}

export default Button;
