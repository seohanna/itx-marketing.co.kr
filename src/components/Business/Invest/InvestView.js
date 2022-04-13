import React from 'react'
import styled from 'styled-components';

function InvestView({history, data}) {
  const handleClick = () => {
    history.goBack();
  }
  
  return (

    <Layout>
      {data.title}
       
      
      <button onClick={handleClick}>뒤로</button>
    </Layout>
  )
}

export default InvestView;

const Layout = styled.div`
`;