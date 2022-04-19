import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Data } from '../../data/Notice';
import ContentsInner from '../ContentsInner';

function Notice() {
  
  return (
    <ContentsInner>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>채널</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((dt, i) => (
            <tr key={dt.id}>
              <Index>{i + 1}</Index>
              <Title><Link to={`/customer/${dt.id}`}>{dt.title}</Link></Title>
              <Writer>{dt.writer}</Writer>
              <Date>{dt.date}</Date>
              <Hits>{dt.hits}</Hits>
            </tr>
          ))}
        </tbody>
      </Table>  
    </ContentsInner>
  );
};

export default Notice;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5% 0 10% 0;

  th {
    background-color: #F8F8F8;
    font-size: 1.25rem;
    color: #1A1A1A;
  }

  th, td {
    border: 1px solid #C4C4C4;
    border-top-width: 0;
    border-left-width: 0;
    height: 70px;
    text-align: center;
    :last-child {
      border-right-width: 0;
    }
  }
  @media (max-width: 700px) {
    margin: 15% 0;

    th {
      font-size: 0.625rem;
    }

    th, td {
      font-size: 0.625rem;
      height: 40px;
    }
  }
`;

const Index = styled.td`
  width: 12.40740740740741%;
  @media (max-width: 700px) {
    width: 9.375%;
  }
`;

const Title = styled.td`
  width: 48.02469135802469%;
  text-align: start !important;
  padding-left: 2%;
  @media (max-width: 700px) {
    width: 51.875%;
    padding-left: 0;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
  }
`;

const Writer = styled.td`
  width: 12.34567901234568%;
  @media (max-width: 700px) {
    width: 11.875%;
  }
`;

const Date = styled.td`
  width: 14.87654320987654%;
  @media (max-width: 700px) {
    width: 16.25%;
  }
`;

const Hits = styled.td`
  width: 12.34567901234568%;
  @media (max-width: 700px) {
    width: 10.625%;
  }
`;


