import React from 'react';
import Layout from '../Layouts/Layout';
import PartnerBanner from '../components/Partners/PartnerBanner';
import PartnerCompany from '../components/Partners/PartnerCompany';
import PartnerType from '../components/Partners/PartnerType';

const Partners = () => {
  return (
    <Layout>
      <PartnerBanner />
      <PartnerType />
      <PartnerCompany />
    </Layout>
  )
};
export default Partners;