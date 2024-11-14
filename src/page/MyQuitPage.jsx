import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import MyQuit from "../component/my_detail/MyQuit";

const Layout = styled.div`
  width: 100%;
`;

const MyQuitPage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <MyQuit />
      <Footer />
    </Layout>
  );
};

export default MyQuitPage;
