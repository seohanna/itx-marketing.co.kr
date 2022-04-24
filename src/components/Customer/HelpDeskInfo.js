import React from 'react';
import styled from 'styled-components';
import icon1 from '../../img/sub/helpDeskIcon1.png';
import icon2 from '../../img/sub/helpDeskIcon2.png';
import icon3 from '../../img/sub/helpDeskIcon3.png';

const infoList = [
  {
    id: 1,
    icon: icon1,
    title: '문의상담',
    contact: '02 - 6952 - 2957'
  },
  {
    id: 2,
    icon: icon2,
    title: '팩스',
    contact: '02 - 2068 - 8896'
  },
  {
    id: 3,
    icon: icon3,
    title: '이메일',
    contact: 'coolqui@wehaqo.com'
  },
]

const HelpDesk = () => {
  return (
      <Container>
        <Discription>
          아이티엑스마케팅<br />관련 문의사항이 있다면<br />아래 연락처로 상담받을 수 있습니다.
        </Discription>
        <IconList>
          {infoList.map((dt) => (
            <Item key={dt.id}>
              <div className='img-wrap'><img src={dt.icon} alt={dt.title} /></div>
              <div className='text-wrap'>
                <h3>{dt.title}</h3>
                <h4>{dt.contact}</h4>
              </div>
            </Item>
          ))}
        </IconList>
      </Container>
    );
  };

export default HelpDesk;


const Container = styled.div`
  padding: 9% 7.8125% 11.5%;
  @media (max-width: 700px) {
    padding: 20% 7.2%;
  }
`;

const Discription = styled.h3`
  font-size: 2rem;
  line-height: 2.7rem;
  padding-bottom: 9%;
  color: #1A1A1A;
  @media (max-width: 700px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;
const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  width: 30.8641975308642%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-wrap {
    @media (max-width: 700px) {
      margin-top: 13%;
    }
  }
  .text-wrap {
    margin-top: 12.3%;
    background-color: #F8F8F8;
    text-align: center;
    width: 100%;
    padding: 9.7% 0;
    border-radius: 10px;
    > h3 {
      font-size: 1rem;
      padding-bottom: 5%;
    }
    > h4 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    .img-wrap {
      width: 50px;
    }
    .text-wrap {
      margin-top: 4.6%;
      padding: 7.6% 0;
      > h3 {
        font-size: 0.8125rem;
      }
      > h4 {
        font-size: 0.8125rem;
      }
    }
  }
  
  
`;