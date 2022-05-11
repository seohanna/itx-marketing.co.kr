import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Layout from '../Layouts/Layout';
import CommonBanner from '../components/CommonBanner';
import PlatFormMenu from '../components/PlatForm/PlatFormMenu';
import bannerImg from '../img/sub/platformbanner.png';
import Personal from '../components/PlatForm/Personal';
import InsuPlus from '../components/PlatForm/InsuPlus';
import Market from '../components/PlatForm/Market';
import SectionTitle from '../components/PlatForm/SectionTitle';
import queryString from "query-string";
import InsuSlider from '../components/PlatForm/InsuSlider';
import { Data, getPostByNo } from '../data/SuccessfulCase';
import AwardDetail from '../components/PlatForm/AwardDetail';

const PlatForm = ({ match, location }) => {
  const query = queryString.parse(location.search);
  const [ data, setData ] = useState({});

  useEffect(() => {
    setData(getPostByNo(query.veiw));
  }, [query.veiw]);

  console.log(data)
  console.log(query.veiw)
  return (
    <Layout primary>
      <CommonBanner
        img={bannerImg}
        strong='B'
        title='usiness'
        subtxt='비즈니스 플랫폼'
        
      />
      <PlatFormMenu />
      {location.pathname === '/business/platform/insuplus' ? (
        <>
          <InsuPlus />
          <TitleWrap>
            <SectionTitle>
              <span>보험플러스는</span>
                &nbsp;성공사례
              <span>를 만들어 갑니다.</span>
            </SectionTitle>
          </TitleWrap>
          {location.search === '' && (<InsuSlider data={Data}/>)}
          {location.search === `?veiw=${query.veiw}` && (<AwardDetail data={data} />)}
        </>
        )
      : location.pathname === '/business/platform/market' ? (<Market />)
      : (<Personal />)
      }
    </Layout>
  )
};
export default PlatForm;

const TitleWrap = styled.div`
  padding-right: 11.05%;
  text-align: right;

  @media (max-width: 700px) {
    padding-right: 6%;
  }
`;