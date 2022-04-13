import React from 'react';
import Business from '../components/Business';
import MainBanner from '../components/MainBanner';
import Layout from '../Layouts/Layout'
import RecruitSlider from '../components/RecruitSlider'
import NewsMarketing from '../components/NewsMarketing';



const Home = () => {
  return (
      <Layout>
      <MainBanner />
      <Business />
      <RecruitSlider />
      <NewsMarketing />
    </Layout>
 
  )
}

export default Home;
