import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';

import Pagination from './Pagination';
// import { useLocation } from 'react-router-dom';
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
                  <Link to={`/business/invest/${dt.id}`}>
                    <div className='img-wrap'>
                      <img src={dt.img} alt='보험' />
                    </div>
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
        <HashWrap>
          <StyledLink to='#'>
            <HashTag name='프롬이 보험이야기' link/>
          </StyledLink>
          <HashTag name='보험칼럼' />
          <HashTag name='병원라운지' />
          <HashTag name='보험플러스' />
          <HashTag name='재테크' />
        </HashWrap>
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
    width: 30.8641975308642vw;
    .img-wrap {
      max-width: 100%;
      height: 320px;
    }
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
   width: 400px;
   cursor: pointer;
   
`;

const HashWrap = styled.div`
  display: flex;
  padding: 5% 0;
`;

const StyledLink = styled(Link)`
  display: flex;
`;