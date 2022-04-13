import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import SearchGuide from './SearchGuide';
import searchIcon from '../../img/common/searchIcon.svg';
import searchMork from './searchMork.json';


const Container = styled.section`
  padding: 3% 8.333333333333333% 10%;
  
  @media(max-width: 700px) {
    padding: 8.5% 6.2% 10%;
  }
`;
const Search = styled.div`
  margin: 0 6.3% 2.8%;
  padding: 0 1%;
  border-bottom: 2px solid #444444;
  display: flex;
  align-items: center;
  
@media(max-width: 700px) {
  margin: 0 2%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
`;

const Input = styled.input`
    width: 100%;
    height: 48px;

  ::placeholder {
    color: #C4C4C4;
    font-size: 1rem;
  }
@media(max-width: 700px) {
    width: 100%;
    height: 40px;

  ::placeholder{
    font-size: 0.625rem;
  }
}
`;

const Button = styled.button`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
@media(max-width: 700px) {
  width: 18px;
  height: 18px;
}
`;
const SearchResult = styled.div`
  margin: 0 6.3% 3%;
  table {
    width: 100%;
    border-collapse: collapse;
  
    th {
      background-color: #F5F5F5;
      line-height: 50px;
      font-size: 0.8rem;
      color: #323232;
      border-top: 3px solid #323232;
      font-family: 'GoyangDeogyang';
    }
    th:first-child,th:last-child{
      width: 18.21428571428571%;
    }
    th:nth-child(2),td:nth-child(2) {
      border-left: 1px solid #F0F0F0;
      border-right: 1px solid #F0F0F0;
    }
    td {
      height: 70px;
      text-align: center;
      color: #323232;
    }
  }
  @media(max-width: 700px) {
    margin: 0 2% 2.23%;

    table {
      font-size: 0.625rem;
      th {
        font-size: 0.625rem;
      }
      th:nth-child(2),td:nth-child(2) {
        border-left: 0;
        border-right: 0;
        width: 22.8125%;
      }
    }
  }
`;

const SearchMap = () => {
  const [data, setData] = useState({
    hits: searchMork.item[7]
  });
  const [search, setSearch] = useState('');

  
  const handleClick = () => {
    for (let i = 0; searchMork.item.length > i; i++) {
      if (search === searchMork.item[i].name) {
        
        setData((prevState) => ({
          ...prevState,
          hits: searchMork.item[i]
        }))
        window.scrollTo(0, 3000);
      }

      // if (search !== searchMork.item[i].name) {
      //   alert('일치하는 사업단이 없습니다. 띄어쓰기 포함해서 입력해주세요! 수정예정입니다');
      //   return false;
      // }
    }
  }


  return (
    <Container>
      <Search>
        <Input
          type="text"
          placeholder='본부, 사업단, 지점명, 보험플러스 점포명 입력'
          onChange={(e) => setSearch(e.target.value)}
          // onKeyPress={handleClick}
        />
        <Button onClick={handleClick} />
      </Search>
      <SearchGuide />
      <SearchResult>
        <table>
          <thead>
            <tr>
              <th>{data.hits.team}</th>
              <th>주소</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data.hits.index}>
              <td>{data.hits.name}</td>
              <td>{data.hits.address}</td>
              <td>{data.hits.tel}</td>
            </tr>
          </tbody>
        </table>
      </SearchResult>
      <Map 
        address={data.hits.address}
        name={data.hits.name}
      />
    </Container>
  );
}


export default SearchMap;
