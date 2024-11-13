import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import MyDetailMain from "../component/my_detail/MyDetailMain";

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

const MyPageDetail = ({ selectedBlock, setSelectedBlock }) => {
  const handleBack = () => {
    setSelectedBlock(null);
    localStorage.removeItem("selectedBlock");
  };

  return (
    <Layout>
      <MyDetailHeader onBack={handleBack} />
      <MyDetailMain selectedBlock={selectedBlock} />
      <Footer />
    </Layout>
  );
};

export default MyPageDetail;
