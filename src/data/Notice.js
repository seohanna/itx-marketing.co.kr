import SOURCE01 from '../img/notice/source01.png';
import SOURCE02 from '../img/notice/source02.png';

export const Data = [
  {
    id: '2',
    title: '공고문(3자배정 전환사채)',
    writer: '관리자',
    date: '2022. 08. 29',
    hits: '1,231',
    img: SOURCE02,
    contents: '',
  },
  {
    id: '1',
    title: '공고문(3자배정 유상증자)',
    writer: '관리자',
    date: '2022. 08. 29',
    hits: '1,231',
    img: SOURCE01,
    contents: '',
  },
];


export const getPostByNo = id => {
  const array = Data.filter(x => x.id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}