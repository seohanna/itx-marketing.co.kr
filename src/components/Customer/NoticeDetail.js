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
         <Contents>
            {data.title}
            <p>{data.id}{data.contents}</p>
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

const Contents = styled.div`
  padding: 5% 0;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const BackButton = styled.button`
  background: #B8292D;
  width: 82px;
  height: 30px;
  color: #FFFFFF;
  font-size: 0.8rem;
`;

