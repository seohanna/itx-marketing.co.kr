import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map';

import searchIcon from '../../img/common/searchIcon.svg';
import searchMork from '../../data/searchMork.json';

const SearchMap = () => {

  const [selected, setSelected] = useState('서울');
  let business = searchMork.item.filter((data => {
    if (selected === data.area1 && data.team === '사업단') {
      return data;
    }
    if (selected === data.area2 && data.team === '사업단') {
      return data;
    }

  }));

  let insuPlus = searchMork.item.filter((data => {
    if (selected === data.area1 && data.team === '보험플러스') {
      console.log(selected);
      return data;
      
    }
    if (selected === data.area2 && data.team === '보험플러스') {
      return data;
    }
  }));

  const [data, setData] = useState({
    hits: searchMork.item[7]
  });
  const [search, setSearch] = useState('');

  const handleListClick = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value)
  }

  const handleClick = (e) => {
    for (let i = 0; searchMork.item.length > i; i++) {
      // var str = searchMork.item[i].name;
      if (search === searchMork.item[i].name) {
        setData((prevState) => ({
          ...prevState,
          hits: searchMork.item[i]
        }));
        
        window.scrollTo(0, 2500);
      }  
      // if (str.includes(search)) {
      //   setData((prevState) => ({
      //     ...prevState,
      //     hits: searchMork.item[i]
      //   }));
        
      //   window.scrollTo(0, 2500);
      // }  
      if (e.target.value === searchMork.item[i].name) {
        setData((prevState) => ({
          ...prevState,
          hits: searchMork.item[i]
        }));

        window.scrollTo(0, 2500);
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
        <Button onClick={handleClick} onKeyPress={handleClick} />
   
      </Search>
      <SearchGuide>
        <h2>사업단 검색</h2>
        <div>
          <Area>
            <h3>지역구분</h3>
            <table>
              <tbody>
                <tr>
                  <th><input readOnly onClick={(e) => handleListClick(e)} value='서울'/></th>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='강남구'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='영등포구'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='강서구'/></td>
                </tr>
                <tr>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='은평구'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='동대문구'/></td>
                  <th><input readOnly onClick={(e) => handleListClick(e)} value='경기'/></th>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='고양'/></td>
                </tr>
                <tr>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='부천'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='남양주'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='용인'/></td>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='김포'/></td>
                </tr>
                <tr>
                  <th><input readOnly onClick={(e) => handleListClick(e)} value='인천'/></th>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='부평구'/></td>
                  <th><input readOnly onClick={(e) => handleListClick(e)} value='제주'/></th>
                  <td><input readOnly onClick={(e) => handleListClick(e)} value='제주시'/></td>
                </tr>
              </tbody>
            </table>
          </Area>
          <Target>
            <h3>검색대상</h3>
            <div>
            <table>
              <thead>
                <tr>
                  <th>사업단</th>
                  <th>보험플러스</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {business.map(dt => (
                      <input readOnly value={dt.name} onClick={(e) => handleClick(e)} />
                    ))}
                  </td>
                  <td>
                    {insuPlus.map(dt => (
                      <input readOnly value={dt.name} onClick={(e) => handleClick(e)} />
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </Target>
        </div>
      </SearchGuide>
      {data && <><SearchResult>
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
      /></>}
    </Container>
  );
}


export default SearchMap;

const Container = styled.section`
  padding: 4.5% 8.333333333333333% 10%;
  
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
  margin: 0;
  padding: 0 0 0 5%;
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

const SearchGuide = styled.div`
  padding: 8.7% 0 5% 0;

  > h2 {
    font-size: 2.5rem;
    color: #1A1A1A;
  }
  > div {
    display: flex;
    padding: 5% 0 0 0;
  }
  h3 {
      color: #222222;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      padding: 5% 0;

      ::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 10px solid #B8292D;
        box-sizing: border-box;
        margin-right: 3%;
      }
    }
  @media(max-width:700px){
    > h2 {
      font-size: 1rem;
      padding-bottom: 13.8%;
    }
    > div {
      flex-direction: column;
      padding: 0;
    }
    h3 {
      font-size: 1rem;
        padding: 0 0 8% 0;
        ::before{
          width: 20px;
          height: 20px;
          border: 5px solid #B8292D;
        }
    }
  }
`;

const Area = styled.div`
  width: 50%;
  margin-right: 13%;
  table {
    border-spacing: 2px;
    margin: 5% 9%;
    td,th {
      width: 25%;
      input {
        background-color: #F0F0F0;
        width: 100%;
        height: 40px;
        text-align: center;
        font-size: 0.8rem;
        transition: background 0.3s ease-in-out;
        :hover{
          background-color: #FCFCFC;
        }
      }
    }
    
    th {
      > input {
        text-align: center;
        background-color: #B8292D;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }
  @media(max-width:700px) {
    width: 100%;
    padding: 0;
    margin: 0 0 15% 0;
    table{
      width: 100%;
      margin: 0;
      td,th {
        width: 25%;
        > input {
          width: 100%;
          font-size: 0.625rem;
        }
      }
    }
  }
`;

const Target = styled.div`
 width: 50%;
> div{
  padding: 10% 9%;
> table {
    border-collapse: collapse;
    width: 100%;
    th,td{
      border: 1px solid #C4C4C4;
      font-size: 0.8rem;
      color: #323232;
      width: 50%;
    }
    th {
      background-color:  #F0F0F0;
      font-weight: 400;
      height: 50px;
    }
    td {
      padding: 3.9% 0 0 4.4%;
      height: 279px;
      vertical-align: top;
      line-height: 1.65rem;
      cursor: pointer;
      > input {
       
      }
    }
  }
  
}
@media(max-width: 700px) {
  width: 100%;
  padding: 0 2% 16.6%;

  > div{
    padding: 0;
    > table {
      margin-bottom: 15%;
      td,th {
        font-size: 0.625rem;
      }
      td {
        padding: 7.35% 0 0 5%;
        height: 200px;
        line-height: 0.625rem;
        > p {
          padding-bottom: 18%;
        }
      }
    }
  }
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
    margin: 0;

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

