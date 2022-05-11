import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AwardDetail({ data }) {
  const history = useHistory();


  const goList = () => {
    history.push('summary?veiw');
  }

   
  return (
    <>
      {data && (
        <DetailContainer>
          <Header>
            <img src={data.icon} alt='icon' />
            <div>
              <p>{data.lounge}</p>
              <h2>{data.award}</h2>
            </div>
          </Header>
          <ImageWrap>
            <img src={data.img} alt='' className={data.class} />
          </ImageWrap>
          <TextWrap>
            <p>{data.content}</p>
            <p>{data.content2}</p>
          </TextWrap>
          <ButtonWrap>
            <Button onClick={goList}>목록</Button>
          </ButtonWrap>
          <PageNavigation>
            <div className={data.class}>
              <div><p>다음글</p><span>▲</span></div>
              <p><Link to={`/business/platform/insuplus?veiw=${parseInt(data.id) + 1}`}>{data.next}</Link></p>
            </div>

            <div className={data.class2}>
              <div><p>이전글</p><span>▼</span></div>
              <p><Link to={`/business/platform/insuplus?veiw=${parseInt(data.id) - 1}`}>{data.prev}</Link></p>
            </div>
          </PageNavigation>
        </DetailContainer>
      )}      
    </>
    ); 
}
export default AwardDetail;

const DetailContainer = styled.div`
  width: 100%;
  padding: 5.7% 7%;

  @media (max-width: 700px) {
    padding: 20% 7.1% 20% 0;
  }
`;
const Header = styled.div`
  padding: 3.5% 0 2%;
  border-bottom: 1px solid #D7D7D7;
  color: #323232;
  > h2 {
    font-size: 1.25rem;
  }
  > p {
    font-size: 0.8rem;
    padding-top: 1.9%;
  }

  @media (max-width: 700px) {
    padding: 7.5% 0;
    > h2 {
      width: 300px;
      padding-right: 10%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.625rem;
    }
    > p {
      font-size: 0.625rem;
      padding-top: 5%;
    }
  }
`;
const ImageWrap = styled.div`
  padding: 4% 0;
  &.none {
    display: none;
  }
  @media (max-width: 700px) {
    padding: 9.2% 0 11.9% 0;
    > img {
      width: 80%;
    }
  }
`;
const TextWrap = styled.div`
  padding-right: 18%;
  
  > p {
    padding-bottom: 5%;
    line-height: 1.25rem;
  }
  @media (max-width: 700px) {
    padding-right: 0;
    > p {
      padding-bottom: 7%;
      line-height: 1rem;
      font-size: 0.625rem;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5% 0;
  @media (max-width: 700px) {
    padding: 8% 0;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #B8292D;
  color: #FFFFFF;
  font-size: 0.65rem;

  @media (max-width: 700px) {
    width: 50px;
    height: 20px;
    font-size: 0.5625rem;
  }
`;

const PageNavigation = styled.div`
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
    > div {
      border-bottom: 1px solid #F0F0F0;
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


