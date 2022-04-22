import React from 'react'
import styled, { css } from 'styled-components';
import checkIcon from "../img/common/checkIcon.svg";
import checkedIcon from "../img/common/checkedIcon.svg";

function CheckBox({onClick, apply, fpadvice, name }) {
  
  return (
    <InputWrap apply={apply}>
      <input type="checkbox" id="agree" name={name} />
      <label for="agree">개인정보수집 및 이용동의서</label>
      <Button apply fpadvice={fpadvice} onClick={onClick}>보기</Button>
    </InputWrap>
  )
}

export default CheckBox;


const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input[type="checkbox"] + label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #1A1A1A;
    width: 70%;
    @media(max-width: 700px) {
      font-size: 0.625rem;
      line-height: 1.25rem;

      ${props => props.apply && css`
        font-size: 0.8125rem;
        line-height: 1.5rem;
      `}
    }
  }
  input[type="checkbox"] + label::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5%;
    @media(max-width: 700px) {
      width: 20px;
      height: 20px;

      ${props => props.apply && css`
        width: 22px;
        height: 24px;
      `}
    }
  }
  input[type="checkbox"]:checked + label::before{
    background-image: url(${checkedIcon});
  }


`;

const Button = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background-color: #B8292D;
  font-size: 0.8rem;
  cursor: pointer;

  ${props => props.fpadvice && css`
    display: none;
  `}
  
  @media(max-width: 700px) {
    width: 40px;
    height: 20px;
    font-size: 0.625rem;

    ${props => props.apply && css`
      width: 51px;
      height: 30px;
      font-size: 0.8125rem;
    `}

    
  }
`;