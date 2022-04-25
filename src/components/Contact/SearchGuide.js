import React, { useState } from 'react'
import styled from 'styled-components';
import areaData from '../../data/searchMork.json';

const SearchGuide = () => {
  const Data = areaData.item; 
  const [selected, setSelected] = useState('경기');

  const handleClick = (e) => {
    setSelected(e.target.value);
    console.log(selected)
  }

  let business = Data.filter((data => {
    if (selected === data.area1 && data.team === '사업단') {
      return data;
    }
    if (selected === data.area2 && data.team === '사업단') {
      return data;
    }
  }));

  let insuPlus = Data.filter((data => {
    if (selected === data.area1 && data.team === '보험플러스') {
      return data;
    }
    if (selected === data.area2 && data.team === '보험플러스') {
      return data;
    }
  }));
  
  return (
    <Container>
      <h2>사업단 검색</h2>
        <div>
          <Area>
            <h3>지역구분</h3>
            <table>
              <tbody>
                <tr>
                  <th><input readOnly onClick={(e) => handleClick(e)} value='서울'/></th>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='강남구'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='영등포구'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='강서구'/></td>
                </tr>
                <tr>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='은평구'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='동대문구'/></td>
                  <th><input readOnly onClick={(e) => handleClick(e)} value='경기'/></th>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='고양'/></td>
                </tr>
                <tr>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='부천'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='남양주'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='용인'/></td>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='김포'/></td>
                </tr>
                <tr>
                  <th><input readOnly onClick={(e) => handleClick(e)} value='인천'/></th>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='부평시'/></td>
                  <th><input readOnly onClick={(e) => handleClick(e)} value='제주'/></th>
                  <td><input readOnly onClick={(e) => handleClick(e)} value='제주시'/></td>
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
                      <p>{dt.name}</p>
                    ))}
                  </td>
                  <td>
                    {insuPlus.map(dt => (
                      <p>{dt.name}</p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </Target>
        </div>
    </Container>
  )
}

export default SearchGuide;

const Container = styled.section`
  padding: 10% 0;

  @media(max-width:700px){
    padding: 19.5% 0 0 0;
  }
  > h2 {
    font-size: 2.5rem;
    color: #1A1A1A;
    
    @media(max-width:700px){
      font-size: 1rem;
      padding-bottom: 13.8%;
    }
  }
  > div {
    display: flex;
    padding: 5% 0 0 0;
    @media(max-width:700px){
      flex-direction: column;
      padding: 0;
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
      @media(max-width:700px){
        font-size: 1rem;
        padding: 0 0 8% 0;
        ::before{
          width: 20px;
          height: 20px;
          border: 5px solid #B8292D;
        }
      }
    }
  }
`;

const Area = styled.div`
  width: 50%;
  margin-right: 10%;
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
  padding: 5% 9%;
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