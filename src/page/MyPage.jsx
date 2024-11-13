import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
import MyHeader from "../component/my/MyHeader";
import MyBlocks from "../component/my/MyBlocks";
import MyPageDetail from "./MyPageDetail";

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
  const [selectedBlock, setSelectedBlock] = useState(() => {
    return localStorage.getItem("selectedBlock") || null;
  });

  useEffect(() => {
    localStorage.setItem("selectedBlock", selectedBlock);
  }, [selectedBlock]);

  if (selectedBlock) {
    return (
      <MyPageDetail
        selectedBlock={selectedBlock}
        setSelectedBlock={setSelectedBlock}
      />
    );
  }

  return (
    <Layout>
      <MyHeader />
      <MyBlocks setSelectedBlock={setSelectedBlock} />
      <Footer />
    </Layout>
  );
};

export default MyPage;
