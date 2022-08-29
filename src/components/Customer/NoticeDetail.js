import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ContentsInner from '../ContentsInner';

function NoticeDetail({ data }) {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }

  return (
    <>
      {data && (
       <ContentsInner>
        <Title>
          <h2>{data.title}</h2>
          <p>{data.date}</p>
        </Title>
         <Contents>
            {data.img && (<img src={data.img} alt={data.id} />)}
            {data.contents && (<p>{data.contents}</p>)}
         </Contents>
       <ButtonWrap>
          <BackButton onClick={goBack}>뒤로가기</BackButton>
       </ButtonWrap>
       </ContentsInner>
      )}
    </>
    ); 
}
export default NoticeDetail;

const Title = styled.div`
  background-color: #F8F8F8;
  padding: 6.5% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    font-size: 1.5rem;
    color: #1a1a1a;
  }
  > p {
    font-size: 1rem;
    color: #444444;
  }
`;
const Contents = styled.div`
  padding: 5% 0;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 5% 0;
  justify-content: flex-end;
`;
const BackButton = styled.button`
  background: #B8292D;
  width: 82px;
  height: 30px;
  color: #FFFFFF;
  font-size: 0.8rem;
`;

