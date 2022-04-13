import React, { useState } from 'react';
import styled from "styled-components";
import { ReactComponent as EndPageBtn } from "../../../img/sub/pagination.svg";
function Pagination({ 
  postPerPage, totalPosts, paginate }) {
  const [active, setActive] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  
  console.log(totalPosts)
  const activeStyle = (n) => {
    paginate(n);
    setActive(n);
  }

  return (
    <Nav>
      <ButtonUl>
        {pageNumbers.map((number) => (
          <ButtonLi key={number}>
            <Button
              onClick={(n) => activeStyle(number)}
              style={{
                color: active === number ? '#444444' : '#B7B7B7'
              }}
            >
              {number}
            </Button>
          </ButtonLi>
        ))}
        <LastButton onClick={(n) => activeStyle(totalPosts / 3)}>
          <EndPageBtn />
        </LastButton>
      </ButtonUl>
    </Nav>
  )
}

export default Pagination;

const Nav = styled.div`
  padding: 0% 0 3% 0;
  width: 100%;

  @media(max-width: 700px) {
    padding: 11% 0;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #B7B7B7;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  border: none;
  @media(max-width: 700px) {
    width: 25px;
    height: 27px;
    font-size: 0.65rem;
  }
`;

const ButtonUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const ButtonLi = styled.li`

`;

const LastButton = styled.button`
  width: 30px;
  height: 30px;
`;