import React from 'react';
import CommonBanner from '../components/CommonBanner';
import Layout from '../Layouts/Layout';
import corporation from '../img/sub/corporationBanner.png';
import corporService from '../img/sub/corporServiceBanner.png';
import corporExpert from '../img/sub/coporExpertBanner.png';
import { useLocation } from 'react-router-dom';
import SubMenu from '../components/Corporation/SubMenu';
import Contents from '../components/Corporation/Contents';
import BorderTitleSection from '../components/Corporation/BorderTitleSection';

const Corporation = () => {
  const location = useLocation();
  return (
    <Layout>
      {location.pathname === '/corporation' ? (
        <>
          <CommonBanner
            img={corporation}
            title='기업컨설팅'
            subtxt='ITX 기업컨설팅 소개'
          />
          <SubMenu list4={'기업컨설팅 소개'} />
          <Contents
            slogan={'“ 중소기업은 더 탄탄해져야 합니다. ”'}
            disc={'중소기업의 경영혁신과 경쟁력 확보를 위한\n세계 최고 수준의 경영 자문그룹이 되겠습니다.'}
            intro 
            id='process'
          />
        </>
      ) : 
      <>
      {location.pathname === '/corporation/service' ? (
        <>
          <CommonBanner
            consulting
            img={corporService}
            title='기업컨설팅'
            subtxt='ITX 기업컨설팅 서비스'
          />
          <SubMenu list4={'기업컨설팅 서비스'} />
          <Contents
            slogan={'대한민국 법인컨설팅 전문가그룹\n“아이티엑스 마케팅”'}
            disc={'체계적이고 발 빠른 정보력으로 최고의 \n컨설팅 서비스를 제공합니다.'}
            service
          />
        </>
      ) : (
        <>
           <CommonBanner
              consulting
              img={corporExpert}
              title='전문가그룹'
              subtxt='ITX 전문가그룹'
              corporexpert
            />
            <BorderTitleSection disc={'아이티엑스마케팅에는\n'} span={'분야별 업계최고의 전문 컨설턴트로\n구성되어 있습니다.'}/>
          </>
        )}
      </>}
    </Layout>
  );
};

export default Corporation;


