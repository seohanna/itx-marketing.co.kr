import React from 'react';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import inherit from '../img/sub/inheritBanner.png';
import expert from '../img/sub/inheritExpertBanner.png';
import { useLocation } from 'react-router-dom';
import SubMenu from '../components/Inherit/SubMenu';
import BorderTitleSection from '../components/Corporation/BorderTitleSection';
import Contents from '../components/Inherit/Contents';

const Inherit = () => {
  const location = useLocation();
  return (
    <Layout primary>
      {location.pathname === '/inherit' ? (
        <>
          <CommonBanner
            img={inherit}
            title='상속증여연구소'
            subtxt='ITX 상속증여연구소 소개'
            inherit
          />
          <SubMenu 
            disc={'합법적인 상속증여 절세전략\n건강한 상속증여연구소'}
            inherit
          />
          <Contents intro id='process' />
        </>
      ) : 
        <>
          {location.pathname === '/inherit/expert' ? (
            <>
              <CommonBanner
                img={expert}
                title='전문가그룹'
                subtxt='ITX 상속증여연구소 전문가그룹'
                inherexpert
              />
              <BorderTitleSection disc={'건강한 상속증여연구소는\n'} span={'업계 최고의 전문가 그룹으로 구성되어 있습니다.'} />
            </>) : ('')
          }</>
        }
    </Layout>
  );
};

export default Inherit;