import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MarketHeader from "../component/market/MarketHeader";
import Footer from "../component/common/Footer";
import MarketMain from "../component/market/MarketMain";
import Cookies from "js-cookie";
import apiCall from "../api/Api";

const Layout = styled.div`
  width: 100%;
`;

const MarketPage = () => {
  const [itemData, setItemData] = useState([]);
  const [point, setPoint] = useState([]);
  const token = Cookies.get("access_token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall("/market/market", "GET", null, token);
        setItemData(response.data.item);
        setPoint(response.data.points.points);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <MarketHeader point={point} />
      <MarketMain itemData={itemData} />
      <Footer />
    </Layout>
  );
};

export default MarketPage;
