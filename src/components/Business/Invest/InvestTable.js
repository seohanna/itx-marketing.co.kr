import React, { useState } from 'react'
import styled from 'styled-components';
import selectBoxIcon from '../../../img/sub/selectboxIcon.svg';

function InvestTable({data}) {
  const [selected, setSelected] = useState('total');
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  let inquiries = data.filter((data => {
    if (selected === 'writer' && data.writer === '강세훈' && input === '강세훈') {
      return data;
    }
    if (selected === 'writer' && data.writer === '정의석' && input === '정의석') {
      return data;
    }
    if (selected === 'title' && data.title.includes(input)) {
      return data;
    }
    else if (selected === 'total') {
      return data;
    }
    
  }));
  
  return (
    <Layout>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>구분</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        {inquiries.map((dt) => (
        <tbody>
          <tr>
            <td className='index'>{dt.idx}</td>
            <td>{dt.type}</td>
            <td className='title'>{dt.title}</td>
            <td>{dt.writer}</td>
            <td>{dt.date}</td>
            <td>{dt.hit}</td>
          </tr>
        </tbody>
        ))}
      </Table>
      <SearchBox>
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value='total'>전체</option>
          <option value='writer'>작성자</option>
          <option value='title'>제목</option>
        </select>
        <input type='text' onChange={handleChange} />
        {/* <button onClick={onClick}>검색</button> */}
        
      </SearchBox>
    </Layout>
  )
}

export default InvestTable;

const Layout = styled.div`
  padding: 7.8% 6.790123456790123%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Table = styled.table`
  width: 100%;
  border-top: 3px solid #323232;
  border-collapse: collapse;
  margin-bottom: 10%;
  thead {
    height: 50px;
    background-color: #F5F5F5;
    color: #323232;

    th {
      font-size: 0.6rem;
    }
  }
  tbody {
    td{
      text-align: center;
      border: 1px solid #F0F0F0;
      font-weight: 400;
      color: #323232;
      height: 70px;
      width: 11.14285714285714%;
    }
    .title {
      text-align: start;
      width: 45.69444444444444%;
      padding-left: 1.2%;
      white-space: wrap;
    }
    .index {
      width: 8.194444444444444%;
    }
  }

`;

const SearchBox = styled.div`
  display: flex;
  select {
    border: 1px solid #BEBEBE;
    width: 142px;
    height: 30px;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 0.75rem;
    font-weight: 300;
    color: #444444;
    padding: 1% 3%;
    background: url(${selectBoxIcon}) calc(100% - 15px) center no-repeat;
  }
  input {
    border: 1px solid #BEBEBE;
    width: 212px;
    height: 30px;
    margin: 0 2.8%;
  }
  button {
    border: 1px solid #BEBEBE;
    width: 78px;
    height: 30px;
    font-size: 0.75rem;
    color: #444444;
  }
`;