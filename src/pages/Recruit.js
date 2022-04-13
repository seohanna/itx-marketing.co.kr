import React from 'react'
import Layout from '../Layouts/Layout';
import RecruitBanner from '../components/Recruit/RecruitBanner';
import RecruitTab from '../components/Recruit/RecruitTab';


const Recruit = () => {

  return (
    <Layout>
      <RecruitBanner />
      <RecruitTab />
    </Layout>
  )
}

export default Recruit;
