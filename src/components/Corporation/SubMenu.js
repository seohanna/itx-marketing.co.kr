import React from "react";
import styled from "styled-components";
import TopBox from "./TopBox";
import TitleBox from "../TitleBox";


const SubMenu = ({list4}) => {
  return (
    <Container>
      <BannerContain>
        <TopBox 
          disc={'대기업의 경영전략실 그 이상의 전략과 솔루션\n성공하는 기업의 winning 파트너\n아이티엑스마케팅 기업컨설팅'}
          link1='/corporation/service'
          link2='/corporation/expert'
          link3='/corporation/ddd'
        />
        <TitleBox title="기업컨설팅" left="0" list4={list4} />
      </BannerContain>
    </Container>
  );
};

export default SubMenu;

const BannerContain = styled.div`
  position: relative;
`;

const Container = styled.div`
  padding: 4.33% 0 4.16% 0;

  @media (max-width: 700px) {
    padding: 0;
  }
`;
