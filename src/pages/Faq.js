import React, { useEffect, useState } from 'react';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/faqBanner.png';
import faq from '../img/sub/faq.png';
import BorderTitleSection from '../components/Customer/BorderTitleSection';
import FaqList from '../components/Customer/FaqList';


const Faq = () => {

  return (
    <Layout>
      
        <>
          <CommonBanner
            img={bannerImg}
            title='FAQ'
            customer
            subtxt='궁금한 내용을 알려드립니다.'
          />
          <BorderTitleSection 
            img={faq} 
            disc={'아이티엑스마케팅에 궁금한점 많으셨죠?'}
            title='FAQ'
            subtext={'많은 분들이 궁금해 하는 질문만 모아보았습니다.'}
          />
          <FaqList />
        </>
      
    </Layout>
    );
  };

export default Faq;