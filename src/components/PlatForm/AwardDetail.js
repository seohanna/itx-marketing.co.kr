import React from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AwardDetail({ data }) {
  // const history = useHistory();


  // const goList = () => {
  //   history.push('summary?veiw');
  // }

   
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
          <TextWrap>
            <li>
              <h3>{data.content1}</h3>
              <p>{data.content1_2}</p>
            </li>
            <li>
              <h3>{data.content2}</h3>
              <p>{data.content2_2}</p>
            </li>
            <li>
              <h3>{data.content3}</h3>
              <p>{data.content3_2}</p>
            </li>
            <li>
              <h3>{data.content4}</h3>
              <p>{data.content4_2}</p>
            </li>
            <li>
              <h3>{data.content5}</h3>
              <p>{data.content5_2}</p>
            </li>
            <li>
              <h3>{data.content5}</h3>
              <p>{data.content5_2}</p>
            </li>
          </TextWrap>
          {/* <ButtonWrap>
            <Button onClick={goList}>목록</Button>
          </ButtonWrap> */}
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
  padding: 2% 7.8125% 10%;

  @media (max-width: 700px) {
    padding: 10% 7.2%;
  }
`;
const Header = styled.div`
  padding: 3.5% 0;
  margin-bottom: 3%;
  border-bottom: 1px solid #D7D7D7;
  color: #323232;
  > img {
    padding-bottom: 2.9%;
  }
  > div {
    > p {
      font-size: 0.65rem;
      color: #C4C4C4;
      padding-bottom: 1%;
    }
    > h2 {
      font-size: 1.25rem;
      
    }
  }

  @media (max-width: 700px) {
    padding: 0;
    border-bottom: 1px solid #D7D7D7;
   
    > img {
      transform: scale(0.8) translateX(-20%);
      padding-bottom: 5%;
    }
    > div {
      > p {
        font-size: 0.625rem;
        padding-bottom: 5%;
      }
      > h2 {
        font-size: 0.8125rem;
        padding-bottom: 10%;
      }
    }
  }
`;

const TextWrap = styled.ul`
  padding-bottom: 10%;
  > li {
    padding-bottom: 3%;
    > h3 {
      font-size: 1.25rem;
      color: #B8292D;
    }
    > p {
      line-height: 1.25rem;
    }
  }

  
  @media (max-width: 700px) {
    padding: 10% 0;
    > li {
      padding-bottom: 6%;
    > h3 {
      font-size: 0.625rem;
      padding-bottom: 1%;
    }
    > p {
      font-size: 0.625rem;
      line-height: 0.9rem;
    }
  }
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


