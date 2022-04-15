import React from 'react';
import styled, { css } from 'styled-components';
import HashTag from './HashTag';
import SectionTitle from '../../PlatForm/SectionTitle';
import { ReactComponent as EndPageBtn } from "../../../img/sub/pagination.svg";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function InvestDetail({ data, data2, primary, webtoon }) {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  return (
    <>
      {data && (
        <>
          <TitleWrap>
            <SectionTitle>
              <Wrap>
                <div className='title'>
                  <span>+ </span>
                  <strong>3분</strong> 재테크
                </div>
                <HashTag name='프롬이 보험이야기' />
              </Wrap>
            </SectionTitle>
          </TitleWrap>
          <ContentsWrap primary={primary}>
            <div>
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
                <KakaoUrlForm primary>
                  <input type='text' placeholder='광고성 배너'/>
                  <InputWrap>
                    <input type='text' placeholder='공유하기'/>
                    <input type='text' placeholder='목록'/>
                  </InputWrap>
                  <div className='keyword'>
                    <span>키워드</span>
                    <div>
                      <HashTag name={data.keyword1} />
                      <HashTag name={data.keyword2} />
                      <HashTag name={data.keyword3} />
                    </div>
                  </div>
                  <p>금융상품판매업자 : 아이티엑스마케팅(주)  등록본호 : 제 20111201710호 </p>
                </KakaoUrlForm>
                <Nav>
                  <StyledLink prev className={data.prev} to={`/business/invest/${parseInt(data.id) - 1}`}><Pagination prev /></StyledLink>
                  <StyledLink className={data.next} to={`/business/invest/${parseInt(data.id) + 1}`}><Pagination next /></StyledLink>
                </Nav>
              </div>
            </ContentsWrap>
          </>
        )}
        {data2 && (
          <>
            <TitleWrap>
              <SectionTitle>
                <Wrap>
                  <div className='title'>
                    <span>+ </span>
                    <strong>3분</strong> 재테크
                  </div>
                  <HashTag name='프롬이 보험이야기' />
                  <HashTag name={data2.title} />
                </Wrap>
              </SectionTitle>
            </TitleWrap>
            <ContentsWrap webtoon={webtoon}>
              <div>
                <TopContents webtoon>
                  <h2>{data2.title}</h2>
                  <p>{data2.tag}</p>
                </TopContents>
                  <div className='img-wrap'>
                    <img src={data2.contents} alt={data2.title} />
                  </div>
                  <KakaoUrlForm>
                    <input type='text' placeholder='광고성 배너'/>
                    <InputWrap>
                      <input type='text' placeholder='공유하기'/>
                      <input type='text' placeholder='목록'/>
                    </InputWrap>
                    <div className='keyword'>
                      <span>키워드</span>
                      <div>
                        <HashTag name={data2.keyword1} />
                        <HashTag name={data2.keyword2} />
                        <HashTag name={data2.keyword3} />
                      </div>
                    </div>
                    <p>금융상품판매업자 : 아이티엑스마케팅(주)  등록본호 : 제 20111201710호 </p>
                </KakaoUrlForm>
                {/* <Nav>
                  <StyledLink prev className={data2.prev} to={`/business/invest/story/${parseInt(data2.id) - 1}`}><Pagination prev /></StyledLink>
                  <StyledLink className={data2.next} to={`/business/invest/story/${parseInt(data2.id) + 1}`}><Pagination next /></StyledLink>
                </Nav> */}
                <ButtonWrap>
                  <BackButton onClick={goBack}>뒤로가기</BackButton>
                </ButtonWrap>
              </div>
            </ContentsWrap>
          </>
        )}      
    </>
    ); 
}
export default InvestDetail;

const ContentsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding: 5% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${props => props.primary && css`
    
    > div {
      width: 32%;
    }

  `}
  
  .img-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    
  }
  .text-wrap {
    padding: 5% 0;
    > p {
      padding-bottom: 5%;
      font-size: 0.8rem;
      
    }
  }
  .keyword {
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7% 0 3%;
    margin-bottom: 4%;
    > div {
      width: 81.95876288659794%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > div {
        padding: 0 3.5%;
        margin: 0;
      }
    }
    > span {
      display: inline-block;
      color: #C4C4C4;
      font-size: 0.8rem;
      width: 18.04123711340206%;
    }
  }

  
`;

const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
  padding: 15% 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${props => props.primary && css`
    padding: 0% 5% 5% 5%;

  `}
  input {
    width: 100%;
    border: 1px solid #BEBEBE;
    border-radius: 8px;
    height: 50px;
    padding-left: 2%;
    margin-bottom: 10px;
    ::placeholder {
      font-size: 0.8rem;
      color: #C4C4C4;
    }
  }

  p {
    font-size: 0.75rem;
  }
`;

const InputWrap = styled.div`
  display: flex;
  input:first-child {
    margin-right: 7px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  padding: 5% 0;
`;

const StyledLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50%;

  :last-child {
    margin: 0;
  }

  &.none {
    pointer-events: none;
    cursor: default;
  }
`;


const Pagination = styled(EndPageBtn)`
  width: 20px;
  height: 30px;
  ${props => props.prev && css`
    transform: rotate(180deg);
    
`}
`;
const Wrap = styled.div`
  display: flex;
  align-items: flex-end;

  .title {
    margin-right: 3.5%;
  }
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

