import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HashTag from './HashTag';
import SectionTitle from '../../PlatForm/SectionTitle';
// import { ReactComponent as EndPageBtn } from "../../../img/sub/pagination.svg";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function InvestDetail({ data, data2, primary, webtoon }) {
  const copyUrlRef = React.useRef()
  const history = useHistory();
  const [toast, setToast] = useState(false);
  const goBack = () => {
    history.goBack();
  }

  const goList = () => {
    history.push('/business/invest');
  }

  const copyUrl = (e) => {
    copyUrlRef.current.select();
    document.execCommand('copy');
    e.target.focus()

    setTimeout(() => {
      setToast(true);
    }, 200)
     
    
  }
  useEffect(() => {
    window.scrollTo(0, 900)
  }, []);
  return (
    <>
      {/* {data && (
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
                <CopyUrlForm primary>
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
                </CopyUrlForm>
                <Nav>
                  <StyledLink prev className={data.prev} to={`/business/invest/${parseInt(data.id) - 1}`}><Pagination prev /></StyledLink>
                  <StyledLink className={data.next} to={`/business/invest/${parseInt(data.id) + 1}`}><Pagination next /></StyledLink>
                </Nav>
              </div>
            </ContentsWrap>
        </>
      )} */}
      {data && (
        <InvestContents>
          <MainTitle>
            <div>
              <h2>{data.title}</h2>
              <HashTag name='재테크' width={'116px'} mb={'64px'} />
            </div>
            <p>{data.date}</p>
          </MainTitle>
          <div className='list cont1'>
            <h3>{data.subtit1}</h3>
            <div className='sub-list'>
              {data.cont1_1 && (<p>{data.cont1_list1 && (<span>{data.cont1_list1}</span>)}{data.cont1_1}</p>)}
              {data.cont1_2 && (<p>{data.cont1_list2 && (<span>{data.cont1_list2}</span>)}{data.cont1_2}</p>)}
              {data.cont1_3 && (<p className={data.list_style1}>{data.cont1_list3 && (<span>{data.cont1_list3}</span>)}{data.cont1_3}</p>)}
              {data.cont1_4 && (<p className={data.list_style1}>{data.cont1_list4 && (<span>{data.cont1_list4}</span>)}{data.cont1_4}</p>)}
              {data.cont1_5 && (<p className={data.list_style1}>{data.cont1_list5 && (<span>{data.cont1_list5}</span>)}{data.cont1_5}</p>)}
            </div>
          </div>
          <div className='list cont2'>
            <h3>{data.subtit2}</h3>
            <ul className='sub-list'>
              {data.cont2_1 && (<li className={data.list_style2}>{data.cont2_list1 && (<span className={data.bold}>{data.cont2_list1}</span>)}{data.cont2_1}</li>)}
              {data.cont2_2 && (<li className={data.list_style2}>{data.cont2_list2 && (<span className={data.bold}>{data.cont2_list2}</span>)}{data.cont2_2}</li>)}
              {data.cont2_3 && (<li className={data.list_style2}>{data.cont2_list3 && (<span className={data.bold}>{data.cont2_list3}</span>)}{data.cont2_3}</li>)}
              {data.cont2_4 && (<li className={data.list_style2}>{data.cont2_list4 && (<span className={data.bold}>{data.cont2_list4}</span>)}{data.cont2_4}</li>)}
              {data.cont2_5 && (<li className={data.list_style2}>{data.cont2_list5 && (<span className={data.bold}>{data.cont2_list5}</span>)}{data.cont2_5}</li>)}
              {data.cont2_6 && (<li className={data.list_style2}>{data.cont2_list6 && (<span className={data.bold}>{data.cont2_list6}</span>)}{data.cont2_6}</li>)}
            </ul>
          </div>
          <div className='list cont3'>
            <h3>{data.subtit3}</h3>
            <ul className='sub-list'>
              {data.cont3_1 && (<li>{data.cont3_list1 && (<span>{data.cont3_list1}</span>)}{data.cont3_1}</li>)}
              {data.cont3_2 && (<li>{data.cont3_list2 && (<span>{data.cont3_list2}</span>)}{data.cont3_2}</li>)}
              {data.cont3_3 && (<li>{data.cont3_list3 && (<span>{data.cont3_list3}</span>)}{data.cont3_3}</li>)}
              {data.cont3_4 && (<li>{data.cont3_list4 && (<span>{data.cont3_list4}</span>)}{data.cont3_4}</li>)}
              {data.cont3_5 && (<li>{data.cont3_list5 && (<span>{data.cont3_list5}</span>)}{data.cont3_5}</li>)}
              {data.cont3_6 && (<li>{data.cont3_list6 && (<span>{data.cont3_list6}</span>)}{data.cont3_6}</li>)}
              {data.cont3_7 && (<li>{data.cont3_list7 && (<span>{data.cont3_list7}</span>)}{data.cont3_7}</li>)}
              {data.cont3_8 && (<li>{data.cont3_list8 && (<span>{data.cont3_list8}</span>)}{data.cont3_8}</li>)}
            </ul>
          </div>
          {data.subtit4 && (
            <div className='list cont4'>
              <h3>{data.subtit4}</h3>
              <ul className='sub-list'>
                {data.cont4_1 && (<li>{data.cont4_list1 && (<span>{data.cont4_list1}</span>)}{data.cont4_1}</li>)}
                {data.cont4_2 && (<li>{data.cont4_list2 && (<span>{data.cont4_list2}</span>)}{data.cont4_2}</li>)}
                {data.cont4_3 && (<li>{data.cont4_list3 && (<span>{data.cont4_list3}</span>)}{data.cont4_3}</li>)}
              </ul>
            </div>
          )}
           <PageNavigation>
            <div className={data.class}>
              <div><p>다음글</p><span>▲</span></div>
              <p><Link to={`/business/invest/${parseInt(data.id) + 1}`}>{data.next}</Link></p>
            </div>

            <div className={data.class2}>
              <div><p>이전글</p><span>▼</span></div>
              <p><Link to={`/business/invest/${parseInt(data.id) - 1}`}>{data.prev}</Link></p>
            </div>
            <ButtonWrap>
              <BackButton onClick={goList}><p>목록</p></BackButton>
            </ButtonWrap>
          </PageNavigation>
        </InvestContents>
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
                <div className='mobile'>
                  <HashTag name='프롬이 보험이야기' width={'163px'} mb={'114px'} />
                  <HashTag name={data2.title} width={data2.width} mb={data2.mb} />
                </div>
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
                <CopyUrlForm webtoon>
                  <input type='text' placeholder='광고성 배너'/>
                  <CopyButton onClick={copyUrl}>
                    {!toast && (<>공유하기</>)}
                    {toast && (<>url이 복사되었습니다.</>)}
                    <textarea name='textarea'
                      ref={copyUrlRef}
                      value={window.location.href} 
                    />
                  </CopyButton>
                  <div className='keyword'>
                    <span>키워드</span>
                    <div>
                      <HashTag name={data2.keyword1} width={'121px'} mb={'90px'} />
                      <HashTag name={data2.keyword2} width={'121px'} mb={'90px'} />
                      <HashTag name={data2.keyword3} width={'121px'} mb={'90px'} />
                    </div>
                  </div>
                  <p>금융상품판매업자 : 아이티엑스마케팅(주)  등록본호 : 제 20111201710호 </p>
                </CopyUrlForm>
                <ButtonWrap webtoon={webtoon}>
                  <BackButton onClick={goBack}><p>뒤로가기</p></BackButton>
                </ButtonWrap>
              </div>
            </ContentsWrap>
          </>
        )}      
      </>
    ); 
}
export default InvestDetail;

const InvestContents = styled.div`
  padding: 2.36% 8.7%;

  >.list {
    padding-top: 6.4%;
    > h3 {
      font-size: 1.25rem;
      color: #B8292D;
    }
    >.sub-list {
      padding-top: 2%;

      > li {
        white-space: pre-wrap;
        line-height: 1.7rem;
        padding-bottom: 3%;
        
        > span {
          font-family: 'GoyangDeogyang';
          display: block;

          &.bold {
            display: inline-block;
          }
        }
      }
      > li.list_style2{
        padding-bottom: 0;
      }
      > p {
        white-space: pre-wrap;
        line-height: 1.7rem;
        padding-bottom: 3%;
        > span {
          font-family: 'GoyangDeogyang';
          display: block;
        }
      }
      > p.list_style1{
        padding-bottom: 0;
      }
    }
  }

  >.cont3 .sub-list{
    > li {
      padding-bottom: 3%;
    }
  }

  @media (max-width: 700px) {
    padding: 14% 8%;

  >.list {
    padding-top: 14%;
    > h3 {
      font-size: 0.625rem;
    }
    >.sub-list {
      padding-top: 10%;

      > li {
        line-height: 1rem;
        font-size: 0.625rem;
        padding-bottom: 7%;
      }
      > p {
        line-height: 1rem;
        font-size: 0.625rem;
        padding-bottom: 7%;
      }
    }
  }

  > .cont3 .sub-list{
    > li {
      padding-bottom: 5%;
    }
  }
}
`;

const MainTitle = styled.div`
  padding: 4.1% 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E9E9E9;
  color: #323232;
  > div {
    display: flex;
    align-items: center;
    width: 80%;
    > h2 {
      font-size: 1.5rem;
      margin-right: 2.7%;
    }
    > p {
      line-height: 1.75rem;
    }
  }

  @media (max-width: 700px) {
    > div {
      > h2 {
        font-size: 0.625rem;
        margin-right: 6%;
      }
    }
    > p {
      font-size: 0.625rem;
      line-height: 1.5625rem;
    }
  }
`;


const TitleWrap = styled.div`
  padding-left: 11.25%;
  width: 100%;
  
  @media (max-width: 700px) {
    padding-left: 6%;
  }
`;

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
  /* ${props => props.primary && css`
    > div {
      padding: 5% 0%;
    }
  `} */
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

  @media (max-width: 700px) {
    > div {
      padding: 12.9% 0%;
    }
    /* ${props => props.primary && css`
      > div {
        width: 89%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `} */

    ${props => props.webtoon && css`
      .img-wrap {
        > img {width:80%;}
        display: flex;
        justify-content: center;
      }
    `}
    .text-wrap {
      width: 100%;
      padding: 8% 2%;
      > p {
        padding-bottom: 7%;
        font-size: 0.625rem;  
      }
    }
    .keyword {
      padding: 0 4%;
      margin-bottom: 4%;
      > div {
        width: 100%;
        > h4 {
          margin-bottom: 5%;
          :last-child {
            margin: 0;
          }
          > p {
            font-size: 0.625rem;
          }
        }
      }
      > span {
        font-size: 0.8rem;
        width: 50%;
      }
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

  @media (max-width: 700px) {
    align-items: center;
    > h2 {
      font-size: 1rem;
    }
    > p {
      font-size: 0.625rem;
    }
  }
`;

const CopyUrlForm = styled.form`
  width: 100%;
  padding: 15% 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${props => props.primary && css`
    padding: 0% 5% 5% 5%;
  `}

  ${props => props.webtoon && css`
    padding: 13% 5%;
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

  @media (max-width: 700px) {
    ${props => props.primary && css`
      padding: 0;
    `}
    > p {
      display: none;
    }
    input {
      font-size: 0.8125rem;
      padding-left: 4%;
    }
  }
`;

const CopyButton = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  align-items: center;
  border: 1px solid #BEBEBE;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #C4C4C4;
  font-size: 0.8rem;
  padding-left: 2%;
  cursor: pointer;

  textarea {
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
`;

// const Nav = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 5% 0;
// `;

// const StyledLink = styled(Link)`
//   width: 50px;
//   height: 50px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-right: 50%;

//   :last-child {
//     margin: 0;
//   }

//   &.none {
//     pointer-events: none;
//     cursor: default;
//   }

  
// `;


// const Pagination = styled(EndPageBtn)`
//   width: 20px;
//   height: 30px;
//   ${props => props.prev && css`
//     transform: rotate(180deg);
//   `}

//   @media (max-width: 700px) {
//     width: 9px;
//     height: 20px;
//   }
// `;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;

  .title {
    margin-right: 3.5%;
  }
  .mobile {
    display: flex;
    > h4 {
      margin-right: 25px;
    }
  }
  @media (max-width: 700px) {
  
    .title {
      margin-right: 0;
      
    }
    .mobile {
      flex-direction: column;
      > h4 {
        margin: 0 0 5px 20px;
        :last-child {
          margin-bottom: 0;
        }
      }
    }   
  } 
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 700px) {
    ${props => props.webtoon && css`
      width: 95%;
    `}
  }
`;
const BackButton = styled.button`
  background: #B8292D;
  width: 82px;
  height: 30px;
  color: #FFFFFF;
  font-size: 0.8rem;

  @media (max-width: 700px) {
    width: 50px;
    height: 20px;
    font-size: 0.625rem;
  }
`;

const PageNavigation = styled.div`
  margin: 6% 0 15% 0;
  border-top: 1px solid #D7D7D7;
  > div {
    display: flex;
    align-items: center;
    &.none {
      display: none;
      
    }

    :first-child {
      border-bottom: 1px solid #F0F0F0;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 10.41666666666667%;
      height: 100px;
    }
    > p {
      color: #767676;
      padding-left: 5%;
    }
  }

  @media (max-width: 700px) {
    margin: 20% 0 10% 0;
    > div {
      /* border-bottom: 1px solid #F0F0F0; */
      > div {
        width: 78px;
        height: 50px;
        > p {
          font-size: 0.8125rem;
        }
        > span {
          font-size: 0.8125rem;
        }
      }
      > p {
        font-size: 0.625rem;
        width: 250px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;