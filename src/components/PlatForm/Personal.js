import React from 'react';
import Section1 from './Section1';
import planner from '../../img/sub/planner.png'
import car from "../../img/sub/car.svg";
import care from "../../img/sub/care.svg";
import billing from "../../img/sub/billing.svg";
import guaranteed from "../../img/sub/guaranteed.svg";
import wise from "../../img/sub/wise.png";
import reasonable from "../../img/sub/reasonable.png";
import curriculum from "../../img/sub/curriculum.png";

import Section2 from './Section2';
import Section3 from './Section3';
import Consulting from './Consulting';
import Advice from './Advice';

const Data = [
  {
    id: 1,
    title: "보장분석 시스템",
    content: "성별, 연령별, 소득, 가족관계\n등을 고려한 맞춤형\n보험점검 시스템",
    img: guaranteed,
    className: 'delay-0',
  },
  {
    id: 2,
    title: "보험청구 시스템",
    content: "복잡하고 어려운 보험금 청구를\n대행해드리는 토탈보험금\n청구 시스템",
    img: billing,
    className: 'delay-1',
  },
  {
    id: 3,
    title: "자동차보험\n 자동차설계 시스템",
    content: "보험회사별 자동차보험료 비교를\n통해 가장 저렴한 자동차보험\n안내 시스템",
    img: car,
    className: 'delay-2',
  },
  {
    id: 4,
    title: "계약/고객관리 시스템",
    content: "DB분배, 계약관리, 고객관리,\n소득관리가 가능한 온라인 전용\n통합관리 시스템",
    img: care,
    className: 'delay-3',
  },
];

const Data2 = [
  {
    id: 1,
    hashtag: "#현명한 #컨설팅",
    content: "“상품기획연구소”에서 전문FP를 위한 경쟁력 있는 상품을\n제공해 드리기 때문에 고객 니즈를 맞는 현명한 컨설팅을\n제공받을 수 있습니다.",
    img: wise,
  },
  {
    id: 2,
    hashtag: "#커리큘럼 #자산관리서비스",
    content: "입사부터 전문가 단계까지 체계적인 교육과정,\nFP 레벨에 맞는 다양한 커리큘럼을 제공하고 있기 때문에 고객은\n전문적이고 종합적인 자산관리 서비스를 제공받을 수 있습니다.",
    img: curriculum,
  },
  {
    id: 3,
    hashtag: "#합리적인 #보험컨설팅",
    content: "보험회사의 상품 포트폴리오를 비교 분석하여 고객에게\n가장 합리적인 상품을 추천해 드리며 보험점검, 리모델링 등\n다양한 보험컨설팅을 무료 상담 후 보장분석\nReport를 제공받을 수 있습니다.",
    img: reasonable,
  }
];

const Personal = () => {
  return (
    <>
      <Section1
        thin="+ 개인영업"
        strong1="F"
        title1="inancial"
        strong2="P"
        title2="lanner"
        img={planner}
        subTitle={'아이티엑스마케팅의 보험전문\n컨설턴트 FP'}
        description={'고객 개인의 라이프사이클과 재무상태를 고려하여 원하는 시간!\n원하는 장소!!로 전문 FP가 직접 방문해서 1:1 맞춤형 컨설팅을\n무료로 제공해 드립니다.'}
      />
      <Section2
        thin={'영업경쟁력을 향상시켜 드리는\n'}
        strong1="IT"
        title1="지원 시스템"
        data={Data}
      />
      <Section3
        thin="차원이 다른 "
        title1="보험서비스의 실현"
        data={Data2}
        bottom="9.1%"
      />
      <Consulting
        thin="쉽고 빠르고 간편한"
        title1="맞춤형 보험컨설팅"
      />
      <Advice />
    </>
  );
}

export default Personal;
