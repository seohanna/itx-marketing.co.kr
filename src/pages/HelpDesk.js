import React from 'react';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import bannerImg from '../img/sub/helpDeskBanner.png';
import HelpDeskInfo from '../components/Customer/HelpDeskInfo';

const HelpDesk = () => {
  return (
    <Layout primary>
      <>
        <CommonBanner
          img={bannerImg}
          title='1:1 문의'
          customer
          subtxt='궁금한 내용을 알려드립니다.'
          helpdesk
        />
        <HelpDeskInfo />
      </>
    </Layout>
    );
  };

export default HelpDesk;