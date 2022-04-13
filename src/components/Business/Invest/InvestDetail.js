import React from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';
import SectionTitle from '../../PlatForm/SectionTitle';
function InvestDetail({data}) {
  return (
    <>
      {data ? (
        <>
        <TitleWrap>
          <SectionTitle>
            <span>+ </span>
            <strong>3분</strong> 재테크
          </SectionTitle>
        </TitleWrap>
        <ContentsWrap>
          <TopContents>
            <h2>{data.title}</h2>
            <p>{data.hash}</p>
          </TopContents>
            <div className='img-wrap'>
              <img src={data.img} alt={data.title} />
            </div>
            <div className='text-wrap'>
              <p>{data.contents}</p>
              <p>{data.contents2}</p>
            </div>
            <KakaoUrlForm>
              <input type='text' placeholder='광고성 배너'/>
              <InputWrap>
                <input type='text' placeholder='공유하기'/>
                <input type='text' placeholder='목록'/>
              </InputWrap>
              <div className='keyword'>
                <span>키워드</span>
                <HashTag name={data.keyword1} />
                <HashTag name={data.keyword2} />
                <HashTag name={data.keyword3} />
              </div>
            </KakaoUrlForm>
          </ContentsWrap>
        </>
      ) : null}
    </>
  ); 

}
export default InvestDetail;

const ContentsWrap = styled.div`
  width: 45.10416666666667%;
  transform: translateX(50%);
  margin: 4.8% 6.9%;
  padding: 0 6.4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 1307px; */
  /* overflow-y: scroll;
  ::-webkit-scrollbar { 
    width: 10px; 
  } 
  ::-webkit-scrollbar-track { 
    background-color: darkgrey; 
  } 
  ::-webkit-scrollbar-thumb { 
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); 
  } */


  
  .img-wrap {

  }
  .text-wrap {
    padding: 5% 14% 5% 0;
    > p {
      padding-bottom: 5%;
      font-size: 0.8rem;
    }
  }
  .keyword {
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    padding: 2.8% 2%;
    > span {
      display: inline-block;
      padding-right: 5%;
    }
  }
`;

const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    font-size: 2.5rem;
    white-space: pre-wrap;
  }
  > p {
    padding: 5.5% 0;
    margin: 1% 0;
  }
`;
const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  
  @media (max-width: 700px) {
    padding-left: 6%;
    background-color: #f8f8f8;
  }
`;
const KakaoUrlForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    padding: 2.8% 2%;
    margin-bottom: 10px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  input:first-child {
    margin-right: 7px;
  }
`;