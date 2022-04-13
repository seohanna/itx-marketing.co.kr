import React from 'react'
import styled from 'styled-components';

import abl from '../../img/sub/ci/abl.png';
import barunworld from '../../img/sub/ci/barunworld_hospital.png';
import birth from '../../img/sub/ci/birth_association.png';
import choiwonho from '../../img/sub/ci/choiwonho_hospital.png';
import dahoeun from '../../img/sub/ci/dahoeun_hospital.png';
import dain from '../../img/sub/ci/dain_hospital.png';
import db2 from '../../img/sub/ci/db-2.png';
import db from '../../img/sub/ci/db.png';
import dgb from '../../img/sub/ci/dgb.png';
import dongyang from '../../img/sub/ci/dongyang.png';
import gunnuri from '../../img/sub/ci/gunnuri_hospital.png';
import hanhwha2 from '../../img/sub/ci/hanhwha-2.png';
import hanhwha from '../../img/sub/ci/hanhwha.png';
import heungkuk2 from '../../img/sub/ci/heungkuk-2.png';
import heungkuk from '../../img/sub/ci/heungkuk.png';
import homeplus from '../../img/sub/ci/homeplus.png';
import hyundai from '../../img/sub/ci/hyundai.png';
import ibk from '../../img/sub/ci/ibk.png';
import infiniti from '../../img/sub/ci/infiniti.png';
import insurobo from '../../img/sub/ci/insurobo.png';
import kb from '../../img/sub/ci/kb.png';
import kdb from '../../img/sub/ci/kdb.png';
import lina from '../../img/sub/ci/lina.png';
import lotte2 from '../../img/sub/ci/lotte-2.png';
import lotte from '../../img/sub/ci/lotte.png';
import meritz from '../../img/sub/ci/meritz.png';
import metlife from '../../img/sub/ci/metlife.png';
import mg from '../../img/sub/ci/mg.png';
import nh2 from '../../img/sub/ci/nh-2.png';
import nh from '../../img/sub/ci/nh.png';
import okCare from '../../img/sub/ci/ok_care.png';
import okCheckUp from '../../img/sub/ci/ok_checkup.png';
import okDoctor from '../../img/sub/ci/ok_doctor.png';
import prudential from '../../img/sub/ci/prudential.png';
import saegyaro from '../../img/sub/ci/saegyaro_hospital.png';
import samsung2 from '../../img/sub/ci/samsung-2.png';
import samsung from '../../img/sub/ci/samsung.png';
import segang from '../../img/sub/ci/segang_hospital.png';
import seoulRH from '../../img/sub/ci/seoulRH_hospital.png';
import seouseok from '../../img/sub/ci/seouseok_hospital.png';
import sevarn from '../../img/sub/ci/sevarn_hospital.png';
import severance from '../../img/sub/ci/severance_hospital.png';
import shinhan from '../../img/sub/ci/shinhan.png';
import shintong from '../../img/sub/ci/shintong_hospital.png';
import sky from '../../img/sub/ci/sky_hospital.png';
import snu from '../../img/sub/ci/snu_hospital.png';
import theH from '../../img/sub/ci/theH.png';
import vibrant from '../../img/sub/ci/vibrant_hospital.png';

const CompanyConatiner = styled.section`
  padding: 8.333333333333333%;

  @media (max-width: 700px) {
    padding: 11.5% 6.9% 5.8%;
  }
`;
const Title = styled.div`
  padding-bottom: 8.7%;

  > h2 {
    color: #1A1A1A;
    font-size: 2.5rem;
    padding-bottom: 1.45%;
    > strong {
      color: #B8292D;
    }
  }
  > p {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    padding-bottom: 10%;
    > h2 {
    font-size: 1.25rem;
    padding-bottom: 3.3%;
   }
    > p {
      font-size: 0.8125rem;
    }
  }
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
      flex-flow: column;
  }
  
`;
const BoxWrap = styled.div`
  width: 46.93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const ListBox = styled.div`
  background-color: #F8F8F8;
  @media (max-width: 700px) {
    margin-bottom: 6.3%; 
  }
  > h3 {
    background-color: #B8292D;
    color: #FFFFFF;
    display: inline-block;
    /* width: 26.66666666666667%; */
    font-size: 0.8rem;
    line-height: 3rem;
    text-align: center;
    padding: 0 4.2%;
    margin-bottom: 5.9%;
    @media (max-width: 700px) {
      font-size: 0.625rem;
      /* width: 34.05572755417957%; */
      line-height: 1.875rem;
      padding: 0 6.5%;
    }
  }

  .financial-list > li{
     width: 33.33333333333333%;
  }
  .life-list {
    margin-bottom: 5.3%;

  }
  .divide-list {
    margin-bottom: 4%;
    @media (max-width: 700px) {
      > li {
        width: 33.33333333333333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-flow: row wrap;
    background-color: #FFFFFF;
    margin-left: 6.7%;
    margin-right: 6.7%;
    margin-bottom: 8.7%;
    

    > li {
      position: relative;
      width: 25%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      
      @media (max-width: 700px) {
        font-size: 0.5625rem;
        height: 30px;
        .front {
          width: 100%;
        }
        .back {
            width: 61.53846153846154%;
            height: auto;
          }  
      }
      :hover .front {
        transform: rotateY(-180deg);
      }

      :hover .back {
        transform: rotateY(0deg);
      }
      > div {
        position: absolute;
        backface-visibility: hidden;
        background-color: #FFFFFF;
        width: 100%;
        height: 100%;
        line-height: 70px;
        cursor: pointer;
        transition: .3s;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 700px) {
          line-height: 0.4rem;
          white-space: pre;
         
        
        }
      }
      .front {
        transform: rotateY(0deg);
      }
      .back {
        transform: rotateY(-180deg);
      }
      
    }
  }
`;


const Financial = [
  {
    id: 0,
    company: '한화생명',
    ci: hanhwha
  },
  {
    id: 1,
    company: '삼성생명 ',
    ci: samsung
  },
  {
    id: 2,
    company: 'IBK연금보험',
    ci: ibk
  },
  {
    id: 3,
    company: '흥국생명',
    ci: heungkuk
  },
  {
    id: 4,
    company: 'KDB생명',
    ci: kdb
  },
  {
    id: 5,
    company: 'DGB생명',
    ci: dgb
  },
  {
    id: 6,
    company: 'DB생명',
    ci: db
  },
  {
    id: 7,
    company: '동양생명',
    ci: dongyang
  },
  {
    id: 8,
    company: 'NH농협생명',
    ci: nh
  },
  {
    id: 9,
    company: 'ABL생명',
    ci: abl
  },
  {
    id: 10,
    company: '라이나생명',
    ci: lina
  },
  {
    id: 11,
    company: '푸르덴셜생명',
    ci: prudential
  },
  {
    id: 12,
    company: '신한라이프',
    ci: shinhan
  },
  {
    id: 13,
    company: '메트라이프생명',
    ci: metlife
  }
]

const Financial_2 = [
  {
    id: 14,
    company: '한화손해보험',
    ci: hanhwha2
  },
  {
    id: 15,
    company: '롯데손해보험',
    ci: lotte
  },
  {
    id: 16,
    company: 'MG손해보험',
    ci: mg
  },
  {
    id: 17,
    company: '삼성화재',
    ci: samsung2
  },
  {
    id: 18,
    company: '현대해상',
    ci: hyundai
  },
  {
    id: 19,
    company: 'KB손해보험',
    ci: kb
  },
  {
    id: 20,
    company: 'DB손해보험',
    ci: db2
  },
  {
    id: 21,
    company: 'NH농협손해보험',
    ci: nh2
  },
  {
    id: 22,
    company: '메리츠화재',
    ci: meritz
  },
  {
    id: 23,
    company: '흥국화재',
    ci: heungkuk2
  }
]
 
const Life= [
  {
    id: 24,
    company: '홈플러스',
    ci: homeplus
  },
  {
    id: 25,
    company: '롯데마트',
    ci: lotte2
  },
  {
    id: 26,
    company: '인슈로보 ',
    ci: insurobo
  },
  {
    id: 27,
    company: '인피니티케어 ',
    ci: infiniti
  },
  {
    id: 28,
    company: 'OK닥터',
    ci: okDoctor
  },
  {
    id: 29,
    company: 'OK케어',
    ci: okCare
  },
  {
    id: 30,
    company: 'OK검진 ',
    ci: okCheckUp
  },
  {
    id: 31,
    company: '활기찬병원',
    ci: vibrant
  },
  {
    id: 32,
    company: '건누리병원',
    ci: gunnuri
  },
  {
    id: 33,
    company: '세바른병원',
    ci: sevarn
  },
  {
    id: 34,
    company: '세강정형외과',
    ci: segang
  },
  {
    id: 35,
    company: '강남세브란스',
    ci: severance
  },
  {
    id: 36,
    company: '바른세상병원',
    ci: barunworld
  },
  {
    id: 37,
    company: '세계로병원',
    ci: saegyaro
  },
  {
    id: 38,
    company: '신통병원',
    ci: shintong
  },
  {
    id: 39,
    company: 'SNU서울병원',
    ci:snu
  },
  {
    id: 40,
    company: '다인이비인후과',
    ci: dain
  },
  {
    id: 41,
    company: '서울재활병원',
    ci: seoulRH
  },
  {
    id: 42,
    company: '하늘병원',
    ci: sky
  },
  {
    id: 43,
    company: '석병원',
    ci: seouseok
  },
  {
    id: 44,
    company: '다조은병원',
    ci: dahoeun
  },
  {
    id: 45,
    company: '최원호병원',
    ci: choiwonho
  }
]

const Divide = [
  {
    id: 46,
    company: '한국출산장려협회',
    ci: birth
  },
  {
    id: 47,
    company: '더희망플러스',
    ci: theH 
  }
]

const PartnerCompany = (props) => {
  return (
    <CompanyConatiner>
      <Title>
        <h2>
          <strong>P</strong>ar
          <strong>T</strong>ner
        </h2>
        <p>현재 ITX마케팅과 함께하는 기업</p>
      </Title>
      <BoxContainer>
        <BoxWrap>
          <ListBox>
            <h3>금융서비스 영역</h3>
            <ul>
            {Financial.map((fd) => (
              <li key={fd.id}>
                <div className='front'>{fd.company}</div>
                <div className='back'><img src={fd.ci} alt={fd.company} /></div>
              </li>
            ))}
          </ul>
          <ul className='financial-list'>
          {Financial_2.map((fd2) => (
            <li key={fd2.id}>
              <div className='front'>{fd2.company}</div>
              <div className='back'><img src={fd2.ci} alt={fd2.company} /></div>
            </li>
          ))}
          </ul> 
          </ListBox>
        </BoxWrap>
        <BoxWrap>
        <ListBox>
        <h3>생활서비스 영역</h3>
          <ul className='life-list'>
          {Life.map((ld) => (
            <li key={ld.id}>
              <div className='front'>{ld.company}
              </div>
              <div className='back'><img src={ld.ci} alt={ld.company} /></div>
            </li>
          ))}
          </ul>
        </ListBox>
        <ListBox>
        <h3>나눔서비스 영역</h3>
          <ul className='divide-list'>
          {Divide.map((dd) => (
            <li key={dd.id}>
              <div className='front'>{dd.company}</div>
              <div className='back'><img src={dd.ci} alt={dd.company} /></div>
            </li>
          ))}
          </ul>
        </ListBox>   
        </BoxWrap>
      </BoxContainer>
    </CompanyConatiner>
  )
}

export default PartnerCompany;