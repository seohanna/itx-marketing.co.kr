import React from 'react';
import Layout from '../Layouts/Layout';
import CommonBanner from '../components/CommonBanner';
import PlatFormMenu from '../components/PlatForm/PlatFormMenu';
import bannerImg from '../img/sub/platformbanner.png';
import Personal from '../components/PlatForm/Personal';
import InsuPlus from '../components/PlatForm/InsuPlus';
import Market from '../components/PlatForm/Market';
import { useLocation } from 'react-router-dom';

const PlatForm = () => {

  const location = useLocation();

  return (
    <Layout>
      <CommonBanner
        img={bannerImg}
        strong='B'
        title='usiness'
        subtxt='비즈니스 플랫폼'
        
      />
      <PlatFormMenu />
      {location.pathname === '/business/platform/insuplus' ? (<InsuPlus />)
      : location.pathname === '/business/platform/market' ? (<Market />)
      : (<Personal />)
      }
    </Layout>
  )
};
export default PlatForm;