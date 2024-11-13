import React from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
import MyHeader from "../component/my/MyHeader";
import MyBlocks from "../component/my/MyBlocks";

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

const MyPage = () => {
  return (
    <Layout>
      <MyHeader />
      <MyBlocks />
      <Footer />
    </Layout>
  );
};

export default MyPage;
