import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import PageScrollToTop from './PageScrollToTop'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Layout = ({children, black, primary, overlap}) => {
  return (
    <>
      <PageScrollToTop />
      <Wrap className="wrap">
        <Header black={black} primary={primary} />
          {children}
        <Footer overlap={overlap}/>
      </Wrap>
    </>
  );
}

export default Layout;
