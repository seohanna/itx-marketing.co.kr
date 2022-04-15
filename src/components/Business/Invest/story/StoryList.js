import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Data } from '../../../../data/InvestStory';

function StoryList({data}) {
  // const [dataList, setDataList] = useState({});

  
  // useEffect(() => {
  //   setDataList(data);
  // }, [data]);

  return (
    <Layout>
      <>
        <DataList>
            {Data.map((dt) => (
              <li key={dt.id}>
                <RouteImage>
                  <Link to={`/business/invest/story/${dt.id}`}>
                    <div className='img-wrap'>
                      <img src={dt.banner} alt={dt.title} />
                    </div>
                  </Link>
                </RouteImage>
                <h2>#프롬이의 {dt.title}</h2>
              </li>
            ))}
        </DataList>
      </>
    </Layout>
  );
}
export default StoryList;

const Layout = styled.div`
  width: 100%;
  padding: 5% 7.8125%;

`;

const DataList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
> li {
  width: 21.60493827160494%;
  margin-bottom: 5%;
  > h2 {
    font-size: 1rem;
    padding-top: 5%;
  }
}
  
`;

const RouteImage = styled.div`
  
   cursor: pointer;
  
`;

const HashWrap = styled.div`
  display: flex;
  padding: 5% 0;
`;

const StyledLink = styled(Link)`
  display: flex;
`;