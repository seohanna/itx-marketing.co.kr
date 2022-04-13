import React from 'react';
import Layout from '../Layouts/Layout'
import SummaryBanner from '../components/Summary/SummaryBanner';
import History from '../components/Summary/History';
import ManageIdea from '../components/Summary/ManageIdea';
import PressRoom from '../components/Summary/PressRoom';


const Summary = () => {
  return (
    <Layout>
      <SummaryBanner />
      <History />
      <ManageIdea />
      <PressRoom />
    </Layout>
  )
};



export default Summary;
