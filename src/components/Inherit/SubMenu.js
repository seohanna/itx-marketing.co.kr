import React from "react";
import styled from "styled-components";
import TopBox from "../Corporation/TopBox";
import TitleBox from "../TitleBox";


const SubMenu = ({list4, disc, inherit}) => {
  return (
    <Container>
      <BannerContain>
        <TopBox 
          disc={disc}
          link1='/inherit/service'
          link2='/inherit/expert'
          link3='/inherit/ddd'
          inherit={inherit}
        />
        <TitleBox title={"건간항\n상속증여연구소"} left="0" list4={list4} inherit />
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