import sucCaseIcon1 from '../img/sub/sucCaseIcon1.png';
import sucCaseIcon2 from '../img/sub/sucCaseIcon2.png';
import sucCaseIcon3 from '../img/sub/sucCaseIcon3.png';
import sucCaseIcon4 from '../img/sub/sucCaseIcon4.png';
import sucCaseIcon5 from '../img/sub/sucCaseIcon5.png';

export const Data = [
  {
    id: '1',
    icon: sucCaseIcon1,
    img: '',
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more',
    next: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    prev: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    class: '',
    class2: ''
  },
  {
    id: '2',
    icon: sucCaseIcon2,
    img: '',
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more',
    next: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    prev: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    class: '',
    class2: ''
  },
  {
    id: '3',
    icon: sucCaseIcon3,
    img: '',
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more',
    next: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    prev: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    class: '',
    class2: ''
  },
  {
    id: '4',
    icon: sucCaseIcon4,
    img: '',
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more',
    next: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    prev: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    class: '',
    class2: ''
  },
  {
    id: '5',
    icon: sucCaseIcon5,
    img: '',
    lounge: '병원 Lounge',
    award: '12개월 연속 Top3 선정',
    content: '최초 입점 후 1개월 동안 10건이 넘는 신계약\n체결과 100명이 넘는 가맹고객 확보\n\n',
    content2: '보험금청구는 과제 개인영업을 하면서 가장\n어려웠던 보험니즈 환기를 가장 우월하게 만들어 줄···',
    linkBtn: '+ more',
    next: '[조이뉴스24] 아이티엑스마케팅 ‘건강한 상속·증여연구소’출범. 자산 관리 서비스의 차별화에 나선다!',
    prev: '[뉴데일리경제] GA업체 ‘아이티엑스마케팅’, 오프라인 보험플랫폼 ‘보험플러스’ 오픈',
    class: '',
    class2: ''
  },
];

export const getPostByNo = id => {
  const array = Data.filter(x => x.id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}