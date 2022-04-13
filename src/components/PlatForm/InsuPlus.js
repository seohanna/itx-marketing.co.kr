import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import InsuSlider from './InsuSlider';

import insuplus from '../../img/sub/insuplus.png';
import hospital from '../../img/sub/hospital.svg';
import mart from '../../img/sub/mart.svg';
import cart from '../../img/sub/cart.svg';
import carrier from '../../img/sub/carrier.svg';
import hospitalLounge from '../../img/sub/hospitalLounge.svg';
import martLounge from '../../img/sub/martLounge.svg';
import roadShop from '../../img/sub/roadShop.svg';

const Data = [
  {
    id: 1,
    title: "병원라운지",
    content: "병원방문 환자의 보험금청구 대행을\n통한 고객 유입 전문 FP트레이닝 후\n원스톱 보험금청구 서비스 제공",
    img: hospital,
    className: 'delay-0',
  },
  {
    id: 2,
    title: "마트라운지",
    content: "다양한 마케팅과 프로모션을 통한\n고객 유입 고객의 방문 빈도가\n높은 만큼 고정고객 확보가 강점",
    img: mart,
    className: 'delay-1',
  },
  {
    id: 3,
    title: "전통시장",
    content: "고객친화적 마케팅을 통한\n고객유입 고객과 상인의 쉼터\n공간에서 보험 컨설팅 진행",
    img: cart,
    className: 'delay-2',
  },
  {
    id: 4,
    title: "로드샵 / 샵인샵",
    content: "프랜 차이즈 기반의\n내방형 보험전문샵\n전국 네트워크로 확대가 가능",
    img: carrier,
    className: 'delay-3',
  },
];

const Data2 = [
  {
    id: 1,
    hashtag: "#병원라운지 #원스톱보험서비스",
    list1: "회사가 직접 제공하는 병원 인프라",
    list2: "키오스크 기반의 보험금 청구대행을 통한 보험 니즈 환기",
    list3: "환자 본인 뿐만 아니라 가족계약 유도",
    list4: "보험금 청구고객은 가망고객으로 관리가능",
    img: hospitalLounge,
  },
  {
    id: 2,
    hashtag: "#마트라운지 #원스톱보험서비스",
    list1: "생활서비스 기반의 고품격 내방형 점포",
    list2: "쉽고 빠르고 가까운 보험 컨설팅 공간",
    list3: "보험 뿐만 아니라 금융상품(대출,카드) 유통을 위한 채널로 활용",
    list4: "대형마트 제휴를 통한 지속적인 시장 제공",
    img: martLounge,
  },
  {
    id: 3,
    hashtag: "#전통시장 #로드샵 #원스톱보험서비스",
    list1: "생활밀착형 거점을 통한 고객친화적 보험컨설팅 공간",
    list2: "고객을 위한 다양한 이벤트와 프로모션 진행",
    list3: "O2O 연계된 다양한 이벤트와 프로모션 진행",
    list4: "최소 인력으로 전국 네트워크 구축이 가능한 플랫폼 역할",
    img: roadShop,
  }
];
const InsuPlus = () => {
  return (
    <>
      <Section1
        thin="+"
        logo='insuplus'
        strong1="I"
        title1="nsurance"
        strong2="P"
        title2="lus"
        img={insuplus}
        subTitle={'생활에 보험을 더하다!'}
        description={'마트, 병원, 전통시장 등 생활서비스 기반으로\n쉽고 빠르고 가까운 곳에서 원스톱 보험서비스를 받을 수 있습니다.'}
      />
      <Section2
        thin="FP를 위한"
        title1="최적의"
        strong2="영업공간"
        data={Data} 
      />
      <Section3
        thin="아주 특별한 공간 "
        title1="보험플러스"
        data={Data2}
        left="left"
        bottom="6.15%"
      />
      <InsuSlider
        thin="보험플러스는"
        title1="성공사례"
        thin2="를 만들어 갑니다."
        />
    </>
  );
}

export default InsuPlus;
