import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/customerBanner.png';
// import { useLocation } from 'react-router-dom';
// import { getPostByNo } from '../data/InvestData';
import SectionTitle from '../components/PlatForm/SectionTitle';

const Customer = ({ match }) => {
  // const [ data, setData ] = useState({});
  // const { id } = match.params;
  // const location = useLocation();

  useEffect(() => {
    
    // setData(getPostByNo(id));
  }, []);
  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        title='ITX 공지사항'
        customer
        subtxt='다양한 소식을 알려드립니다.'
      />
       <TitleWrap>
          <SectionTitle>
            <span>+ </span>
            공지사항
          </SectionTitle>
       </TitleWrap>
       <TitleBanner>
         <div className='img-wrap'>
          
         </div>
       </TitleBanner>
      </Layout>      
    );
  };

export default Customer;

const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
`;


const TitleBanner = styled.div`

`;
