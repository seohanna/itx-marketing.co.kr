import CANCER_DETAIL from '../img/sub/webtoon/cancer_detail.png';
import CANCER_LIST from '../img/sub/webtoon/cancer_list.png';
import INJURY_DETAIL from '../img/sub/webtoon/injury_detail.png';
import INJURY_LIST from '../img/sub/webtoon/injury_list.png';
import INSURANCE_PLUS_DETAIL from '../img/sub/webtoon/insurancePlus_detail.png';
import INSURANCE_PLUS_LIST from '../img/sub/webtoon/insurancePlus_list.png';
import PET_DETAIL from '../img/sub/webtoon/pet_detail.png';
import PET_LIST from '../img/sub/webtoon/pet_list.png';
import PLUMMY_DETAIL from '../img/sub/webtoon/plummy_detail.png';
import PLUMMY_LIST from '../img/sub/webtoon/plummy_list.png';
import STROKE_DETAIL from '../img/sub/webtoon/stroke_detail.png';
import STROKE_LIST from '../img/sub/webtoon/stroke_list.png';
import TOOTH_DETAIL from '../img/sub/webtoon/tooth_detail.png';
import TOOTH_LIST from '../img/sub/webtoon/tooth_list.png';
import TRAVELER_DETAIL from '../img/sub/webtoon/traveler_detail.png';
import TRAVELER_LIST from '../img/sub/webtoon/traveler_list.png';

export const Data = [
  {
    id: '8',
    idx: '8',
    banner: STROKE_LIST,
    title: '보험웹툰_뇌졸중',
    contents: STROKE_DETAIL,
    tag: '# 건강검진 # 프롬이 보험이야기 # 뇌졸중 # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: 'none'
  },
  {
    id: '7',
    idx: '7',
    banner: INSURANCE_PLUS_LIST,
    title: '보험웹툰_보험플러스 소개',
    contents: INSURANCE_PLUS_DETAIL,
    tag: '# 프롬이 보험이야기 # 보험플러스소개 #웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '6',
    idx: '6',
    banner: INJURY_LIST,
    title: '보험웹툰_상해보험',
    contents: INJURY_DETAIL,
    tag: '# 프롬이 보험이야기 # 상해보헠험 # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '5',
    idx: '5',
    banner: CANCER_LIST,
    title: '보험웹툰_암보험',
    contents: CANCER_DETAIL,
    tag: '#프롬이 보험이야기 #암보험 #웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '4',
    idx: '4',
    banner: TRAVELER_LIST,
    title: '보험웹툰_여행자 보험',
    contents: TRAVELER_DETAIL,
    tag: '# 프롬이 보험이야기 # 여행자보험 # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '3',
    idx: '3',
    banner: TOOTH_LIST,
    title: '보험웹툰_치아보험',
    contents: TOOTH_DETAIL,
    tag: '# 프롬이 보험이야기 # 보험플러스소개 # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '2',
    idx: '2',
    banner: PET_LIST,
    title: '보험웹툰_펫보험',
    contents: PET_DETAIL,
    tag: '# 프롬이 보험이야기 # 펫보험 # 강아지 # 고양이 # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: '',
    next: ''
  },
  {
    id: '1',
    idx: '1',
    banner: PLUMMY_LIST,
    title: '보험웹툰_플러미 소개',
    contents: PLUMMY_DETAIL,
    tag: '# 프롬이 보험이야기  # 플러미소개  # 웹툰',
    keyword1: '보험플러스',
    keyword2: '대장내시경',
    keyword3: '건강검진',
    prev: 'none',
    next: ''
  },
];


export const getPostByNo2 = id => {
  const array = Data.filter(x => x.id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}