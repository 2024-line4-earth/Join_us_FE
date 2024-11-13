import React from "react";
import styled from "styled-components";
import MarketHeader from "../component/market/MarketHeader";
import Footer from "../component/common/Footer";
import MarketMain from "../component/market/MarketMain";

const Layout = styled.div`
  width: 100%;
`;

const MarketPage = () => {
  return (
    <Layout>
      <MarketHeader />
      <MarketMain />
      <Footer />
    </Layout>
  );
};

export default MarketPage;
