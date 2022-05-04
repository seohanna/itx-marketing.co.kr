import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../Layouts/Layout'
import SummaryBanner from '../components/Summary/SummaryBanner';
import History from '../components/Summary/History';
import ManageIdea from '../components/Summary/ManageIdea';
import Title from '../components/Summary/Title';
import { getPostByNo, Data } from '../data/PressRoom';
import PressList from '../components/Summary/PressList';
import PressDetail from '../components/Summary/PressDetail';
import queryString from "query-string";

const Summary = ({ match, location }) => {
  console.log(location)
  const [ data, setData ] = useState({});
  const pressRef = useRef(null);
  const query = queryString.parse(location.search);
  console.log(data)
  console.log(query.veiw)
  console.log(match);
  console.log(query);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (location.search === '?veiw') {
      pressRef.current.scrollIntoView();
    }
    setData(getPostByNo(query.veiw));
  }, [location.search]);
  
  return (
    <Layout black>
      <SummaryBanner />
      <History />
      <ManageIdea />
      <PressRoom>
        <div ref={pressRef}>
          <Title en={'Press Room'} ko={'프레스 룸'} />
          {location.search === '' && (
            <PressList data={Data} /> 
          )}
          {location.search === '?veiw' && (
            <PressList data={Data} />
          )}
          {location.search === `?veiw=${query.veiw}` && (
            <PressDetail data={data} />
          )}
      </div>
      </PressRoom>
    </Layout> 
  )
};



export default Summary;

const PressRoom = styled.div`
  padding: 6.54% 7.8%;
  @media (max-width: 700px) {
    padding: 14% 0 14% 6.2%;
  }
`;

