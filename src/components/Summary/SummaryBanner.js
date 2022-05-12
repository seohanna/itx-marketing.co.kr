import React from 'react'
import styled from 'styled-components';
import summaryBanner from '../../img/sub/summaryBanner.png';
import summaryBannerMb from '../../img/sub/summaryBannerMb.png';
// import CircleFrame from '../../img/sub/circleFrame.svg';
// import CircleFrameMb from '../../img/sub/circleFrameMb.svg';
// import FpCircle from '../../img/sub/fpCircle.svg';
// import InsuranceCircle from '../../img/sub/insuranceCircle.svg';
// import inheritCircle from '../../img/sub/inheritCircle.png';
// import corporationCircle from '../../img/sub/corporationCircle.png';
// import personalCircle from '../../img/sub/personalCircle.png';


const VisualContainer = styled.section`
  width: 100%;
  padding: 9.8% 7.8125% 5.3%;
  background-color: #F8F8F8;

  @media (max-width: 700px) {
    padding: 53% 6.133333333333333% 10%; 
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  @media (max-width: 700px) {
    
    align-items: flex-start;
  }
`;
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    font-size: 2rem;
    color: #1A1A1A;
    line-height: 2.375rem;
    padding-bottom: 3%;
  }
  > p {
    text-align: center;
    line-height: 1.5rem;
  }
  .mobile {
    display: none;
  }

  @media (max-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
    > h1 {
      font-size: 1.75rem;
      line-height: 2.2rem;
      padding-bottom: 10%;
    }
    > p {
      font-size: 0.8125rem;
      text-align: start;
      line-height: 1.2rem;
    }
    .mobile {
      display: block;
    }
    
  }
`;

const ImageWrap = styled.div`
  > img {
    transform: translateY(5%);
  }
  > .mobile {
    display: none;
  }
  @media (max-width: 700px) {
    padding: 12% 0 15% 0;
    > img {
      transform: translateY(0);
    }
    > .pc {
      display: none;
    }
    > .mobile {
      display: block;
    }
  }
`;
// const CircleWrap = styled.div`
//   position: relative;
//   width: 39.44427083333333%;
//   height: 70.12314814814815%;
//   padding: 23.38%;
//   background-image: url(${CircleFrame});
//   background-repeat: no-repeat;
//   background-size: contain;

//   > img {
//     position: absolute;
//   }
//   .fp-circle{
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 26.40856693911505%;
//     height: 26.40856693911505%;
//   }
//   .floating1{
//     width: 17.42965417981593%;
//     height: 17.42965417981593%;
//     top: 12.8081549654708%;
//     left: 2.50881385921593%;
//   }
//   .floating2{
//     width: 17.42965417981593%;
//     height: 17.42965417981593%;
//     top: 2.509907529722589%;
//     right: 11.26721508457344%;
//   }
//   .floating3{
//     width: 17.42965417981593%;
//     height: 17.42965417981593%;
//     left: 22.44728189824779%;
//     bottom: 22.49085603369733%;
//   }
//   .floating4{
//     width: 17.42965417981593%;
//     height: 17.42965417981593%;
//     right: 6.249587366141576%;
//     bottom: 5.061201853881399%;
//   }
//   @media (max-width: 700px) {
//     background-image: url(${CircleFrameMb});
//     padding: 75%;
//     width: 120.8%;

//     > img{
//       display: none;
//     }
//   }
// `;


const Visual = () => {

  // const random = (min, max) => {
  //   return parseFloat((Math
  //     .random() * (max - min) + min)
  //     .toFixed(2))
  // }

// const floating1 = useRef(null);
// const floating2 = useRef(null);
// const floating3 = useRef(null);
// const floating4 = useRef(null);

// useEffect(() => {
//   const floatingObject = (selector, delay, size) => {
//     gsap.to(selector, random(1.5, 2.5), {
//       delay: random(0, delay),
//       y: size,
//       repeat: -1,
//       yoyo: true,
//       ease: 'Power1.easeInOut',
//     },[]);
//   };
 
 
//   floatingObject(floating1.current, 1, 5);
//   floatingObject(floating2.current, .5, 8);
//   floatingObject(floating3.current, 1.5, 12);
//   floatingObject(floating4.current, 1.5, 7);
// }, [])

  return (
    <VisualContainer>
      <ContentWrap>
        <TextWrap>
          <h1>
           보험을 넘어<br className='mobile'/> 금융으로의 도약!<br className='mobile'/> 아이티엑스 마케팅
          </h1>
          <p>
            “열린시장”을 통해 FP에게 다양한 영업채널을 제공하고<br />
            소비자가 쉽고&nbsp;빠르게 금융상품을 구매할 수 있는 채널을<br className='mobile'/>
            구축하고&nbsp;있습니다.
          </p>
        </TextWrap>
        {/* <CircleWrap>
          <img src={FpCircle} className='fp-circle' alt="FP" />
          <img src={personalCircle} ref={floating1} className='floating1'alt="개인영업" />
          <img src={InsuranceCircle} ref={floating2} className='floating2' alt="보험 플러스" />
          <img src={corporationCircle} ref={floating3} className='floating3' alt="기업법인 컨설팅" />
          <img src={inheritCircle} ref={floating4} className='floating4' alt="상속증여 솔루션" />
        </CircleWrap> */}
        <ImageWrap>
          <img src={summaryBanner} alt='fp' className='pc'/>
          <img src={summaryBannerMb} alt='fp' className='mobile'/>
        </ImageWrap>
      </ContentWrap>
    </VisualContainer>
  )
}

export default Visual;
