import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import MyTheme from "../component/my_detail/MyTheme";

const Layout = styled.div`
  width: 100%;
`;

const MyThemePage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <MyTheme />
      <Footer />
    </Layout>
  );
};

export default MyThemePage;
