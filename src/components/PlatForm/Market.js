import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import market from '../../img/sub/market.png';
import customer1 from '../../img/sub/customer1.svg';
import customer2 from '../../img/sub/customer2.svg';
import customer3 from '../../img/sub/customer3.svg';
import customer4 from '../../img/sub/customer4.svg';
import kiosque from '../../img/sub/kiosque.svg';
import smallOwner from '../../img/sub/smallOwner.svg';
import traditionalMarket from '../../img/sub/traditionalMarket.svg';
import smallOwner2 from '../../img/sub/smallOwner2.svg';


const Data = [
  {
    id: 1,
    title: "보험금 청구고객",
    content: "보험 니즈 100% 회사가\n병원 전문 라운지 지원",
    img: customer1,
    className: 'delay-0',
  },
  {
    id: 2,
    title: "소상공인",
    content: "고객 컨택률 100%\n회사가 지자체별 소상공인\n고객 확보 및 공급",
    img: customer2,
    className: 'delay-1',
  },
  {
    id: 3,
    title: "마트(전통시장) 방문고객",
    content: "문진을 통한 보험 니즈 환기\n회사가 마트, 전통시장내\n보험플러스 공간 제공",
    img: customer3,
    className: 'delay-2',
  },
  {
    id: 4,
    title: "보장분석 동의고객",
    content: "전화 또는 온라인을\n통한 보장분석 니즈 환기\n회사는 제휴를 통해\n고효율 고객확보",
    img: customer4,
    className: 'delay-3',
  },
];

const Data2 = [
  {
    id: 1,
    hashtag: "#키오스크 #보험금 #청구대행",
    list1: "키오스크 기반 보험금 청구대행과 보험분석 서비스를 동시에 제공",
    list2: "보험금 청구에서 지급까지 전과정 피드백",
    list3: "보험금 청구 경험에서 비롯된 보험 니즈 확실",
    img: kiosque,
  },
  {
    id: 2,
    hashtag: "#소상공인 #의무/정책보험",
    list1: "소상공인 전용 의무/정책보험 기반의 고객 확보",
    list2: "정부와 지자체 등의 보험료 지원을 통해 확장성 보장",
    list3: "소상공인 보험료 절감을 위한 “보험 리모델링 캠페인”동시 진행",
    img: smallOwner,
  },
  {
    id: 3,
    hashtag: "#전통시장 #보험컨설팅 #O2O마케팅",
    list1: "보험컨설팅 전용 내방형 점포로서의 역할 수행",
    list2: "고객 친화적 서비스 제공을 통해 보험 니즈 고객 발굴 시장",
    list3: "다양한 온라인 플랫폼을 활용한 O2O 마케팅 → 세대별 고객 확보",
    img: traditionalMarket,
  },
  {
    id: 4,
    hashtag: "#보장분석 #보험서비스 #유통",
    list1: "Push(프로모션, 이벤트) 보장분석 고객 확보 후 공급",
    list2: "TM을 통한 보장분석, 재무설계, 보험비교 서비스 제공",
    list3: "보험 뿐만 아니라 금융대출(대출, 카드) 유통을 위한 채널로 활용",
    img: smallOwner2,
  }
];
const Market = () => {
  return (
    <>
      <Section1
        thin="+ 고객"
        strong1="M"
        title1="arket"
        img={market}
        subTitle={'보험영업을 위한 Market!'}
        description={'회사의 제휴역량을 통해 다양한 가망고객을 확보하여\nFP가 원하는 속성의 가망고객과 매칭해 드립니다.'}
    />
      <Section2
        small={"고객 확보로 고민하십니까?\n"}
        strong1="S"
        title1="ales to"
        strong2="M"
        title2="arket"
        data={Data}
      />
      <Section3
        small={"영업을 위한 특별한 공간!\n"}
        strong1="고"
        title1="객 "
        strong2="M"
        title2="arket"
        data={Data2}
        none="none"
        left="left"
        bottom="6.15%"
      />
    </>
  );
}

export default Market;
