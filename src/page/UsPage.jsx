// src/page/UsPage.jsx
import React from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
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

const PageName = styled.div`
  // 조인, 마켓 페이지의 이름 위치로 수정
  margin-left: 30px;
  color: black;
  font-weight: bold;
  font-size: 25px;
`;

const UsPage = () => {
  return (
    <Layout>
      <PageName>어스</PageName>
      <UsRanking />
      <UsLevel />
      <UsBottom />
      <Footer />
    </Layout>
  );
};

export default UsPage;
