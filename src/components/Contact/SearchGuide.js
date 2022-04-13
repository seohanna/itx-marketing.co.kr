import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
  padding: 10% 0;

  @media(max-width:700px){
    padding: 19.5% 0 0 0;
  }
  > h2 {
    font-size: 2.5rem;
    color: #1A1A1A;
    padding-bottom: 8%;
    @media(max-width:700px){
      font-size: 1rem;
      padding-bottom: 13.8%;
    }
  }
  > div {
    display: flex;
    padding: 5% 0;
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
  table {
    border-spacing: 2px;
    margin: 5% 9%;
    td {
      background-color: #F0F0F0;
      width: 140px;
      height: 40px;
      text-align: center;
      font-size: 0.8rem;
      transition: background 0.3s ease-in-out;
      :hover{
        background-color: #FCFCFC;
        
      }
    }
    th {
      background-color: #B8292D;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
  @media(max-width:700px) {
    width: 100%;
    padding: 0 2% 16.6%;
    table{
      margin: 0;
      td,th {
        font-size: 0.625rem;
      }
    }
  }
`;
const Target = styled.div`
 width: 50%;
>div{
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
  
const SearchGuide = () => {
  return (
    <Container>
      <h2>사업단 검색</h2>
        <div>
          <Area>
            <h3>지역구분</h3>
            <table>
              <thead></thead>
              <tbody>
              <tr>
                <th>서울</th>
                <td>강남구</td>
                <td>영등포구</td>
                <td>강서구</td>
              </tr>
              <tr>
                <td>은평구</td>
                <td>동대문구</td>
                <th>경기</th>
                <td>고양</td>
              </tr>
              <tr>
                <td>부천</td>
                <td>남양주</td>
                <td>용인</td>
                <td>김포</td>
              </tr>
              <tr>
                <th>인천</th>
                <td>부평시</td>
                <th>제주</th>
                <td>제주시</td>
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
                <td>
                  <p>서울본부</p>
                  <p>자산관리본부</p>
                  <p>JJ파트너스</p>
                  <p>유니온지사</p>
                </td>
                <td>
                  <p>강남 세브란스병원</p>
                </td>
              </tbody>
            </table>
            </div>
          </Target>
        </div>
    </Container>
  )
}

export default SearchGuide;
