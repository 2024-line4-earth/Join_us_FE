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

const MyPageDetail = () => {
  const [view, setView] = useState("");

  return (
    <Layout>
      <MyDetailHeader />
      <MyDetailMain />
      <Footer />
    </Layout>
  );
};

export default MyPageDetail;
