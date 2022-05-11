import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';

function PressList({data}) {
  const [dataList, setDataList] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLast = currentPage * postsPerPage; 
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = data.slice(indexOfFirst, indexOfLast);

 
  useEffect(() => {
    
    setDataList(data);
  }, [data]);

  return (
    <Layout>
      <>
        <DataList>
          <tr>
             <th>번호</th>
             <th>제목</th>
             <th>작성자</th>
             <th>등록일</th>
           </tr>
          {dataList ? (
            <>{currentPosts.map((dt) => (
              <tr key={dt.id}>
                <td className='index'>{dt.idx}</td>
                <td className='title'>
                  <Link to={`/intro/summary?veiw=${dt.id}`}>{dt.title}</Link>
                </td>
                <td className='writer'>{dt.writer}</td>
                <td className='date'>{dt.date}</td>
                <td className='date mobile'>{dt.date.substr(2, 8)}</td>
              </tr>
            ))}</>) : ''
          }
        </DataList>
        <Pagination
          news
          postPerPage={postsPerPage} 
          totalPosts={data.length} 
          paginate={setCurrentPage} 
        />
      </>
    </Layout>
  );
}
export default PressList;

const Layout = styled.div`
  padding: 8.4% 2% 0;

  @media (max-width: 700px) {
    padding: 25% 7.1% 0 0;
  }

`;

const DataList = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 3px solid #323232;
  th, td {
    color: #323232;
    font-size: 0.8rem;
  }
  th {
    background-color: #F5F5F5;
    font-family: 'GoyangDeogyang';
    height: 50px;
  }
  td {
    border: 1px solid #F0F0F0;
    text-align: center;
    height: 70px;
    
    &.title {
      text-align: start;
      width: 56.52777777777778%;
      padding-left: 18px;
      
    }
    &.date {
      width: 22.28571428571429%;
    }
    &.date.mobile {
      display: none;
    }
    &.writer {
      width: 10.83333333333333%;
    }
    &.index {
      width: 8.194444444444444%;
    }
  }
  @media (max-width: 700px) {
    border-top: 1px solid #323232;
    th, td {
      font-size: 0.625rem;
    }
    th {
      height: 40px;
    }
    td {
      height: 40px;
    
      &.title {
        padding-left: 0;
        > a {
          width: 172px;
          padding: 0 26px 0 4px;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      &.date {
        display: none;
      }
      &.date.mobile {
        width: 60px;
        display: table-cell;
      }
      &.index {
        width: 34px;
      }
      &.writer {
        width: 54px;
      }
    }
  }
`;


