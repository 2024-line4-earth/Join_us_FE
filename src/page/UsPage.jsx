import React from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
import UsHeader from "../component/us/UsHeader";
import UsRanking from "../component/us/UsRanking";
import UsLevel from "../component/us/UsLevel";
import UsBottom from "../component/us/UsBottom";

const Layout = styled.div`
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  max-height: calc(100vh - 78px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UsPage = () => {
  return (
    <Layout>
      <UsHeader />
      <UsRanking />
      <UsLevel />
      <UsBottom />
      <Footer />
    </Layout>
  );
};

export default UsPage;
