export const Data = [
  {
    id: '8',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '7',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '6',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '5',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '4',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '3',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '2',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
  {
    id: '1',
    title: '내용전달 받을 예정입니다.',
    contents: '내용',
  },
];


export const getPostByNo = id => {
  const array = Data.filter(x => x.id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}