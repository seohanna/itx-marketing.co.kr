import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import InvestTable from './InvestTable';
import { Link } from 'react-router-dom';

function InvestList({data}) {
  const [dataList, setDataList] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

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
          {dataList ? (
            <>{currentPosts.map((dt) => (
              <li key={dt.id}>
                <RouteImage>
                  <Link 
                    to={`/business/invest/${dt.id}`}>
                      <img src={dt.img} alt='보험' />
                  </Link>
                </RouteImage>
                <h2>{dt.title}</h2>
                <div>
                  <p>{dt.hash}</p>
                </div>
              </li>
            ))}</>) : ''
          }
        </DataList>
        <Pagination 
          postPerPage={postsPerPage} 
          totalPosts={data.length} 
          paginate={setCurrentPage} 
        />
        <InvestTable data={data} />
      </>
    </Layout>
  );
}
export default InvestList;

const Layout = styled.div`
  width: 100%;
  padding: 5% 7.8125% 0%;

`;

const DataList = styled.ul`
  display: flex;
  justify-content: space-between;

  > li {
    width: 30.8641975308642%;
    display: flex;
    flex-direction: column;
    
    > h2 {
      font-size: 1.25rem;
      white-space: pre;
      height: 70px;
    }
    > div {
      display: flex;
      
      > p {
        text-justify: inter-word;
        white-space: pre;
        display: flex;
        align-items: center;
        height: 80px;
      }
    }
  }
`;

const RouteImage = styled.div`
   display: flex;
   align-items: flex-start;
   height: 100%;
   padding-bottom: 5%;
   cursor: pointer;
   
`;

