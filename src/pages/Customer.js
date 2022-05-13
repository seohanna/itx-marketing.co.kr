// import React, { useEffect, useState } from 'react';
import React from 'react';
import PreparePage from '../components/PreparePage';
// import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
// import bannerImg from '../img/sub/customerBanner.png';
// import customer from '../img/sub/customer.png';
// import BorderTitleSection from '../components/Customer/BorderTitleSection';
// import { useLocation } from 'react-router-dom';
// import Notice from '../components/Customer/Notice';
// import NoticeDetail from '../components/Customer/NoticeDetail';
// import { getPostByNo } from '../data/Notice';

const Customer = ({match}) => {
  // const location = useLocation();
  // const [ data, setData ] = useState({});
  // const { id } = match.params;

  // console.log(id)
  // useEffect(() => {
  //   setData(getPostByNo(id));
  //   window.scrollTo(0, 1000)
  // }, [id]);

  return (
      <Layout black>
        <PreparePage />
        {/* <>
          <CommonBanner
            img={bannerImg}
            title='ITX 공지사항'
            customer
            subtxt='다양한 소식을 알려드립니다.'
          />
          <BorderTitleSection 
            img={customer} 
            disc={'아이티엑스마케팅의\n다양한 소식을 전해 드립니다.'}
            title='공지사항'
          />
        </>
      {location.pathname === `/customer/${id}` ? (
        <NoticeDetail data={data} />
      ) : <Notice />} */}
      
    </Layout>
    );
  };

export default Customer;

