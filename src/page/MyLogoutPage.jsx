import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import MyLogout from "../component/my_detail/MyLogout";

const Layout = styled.div`
  width: 100%;
`;

const MyLogoutPage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <MyLogout />
      <Footer />
    </Layout>
  );
};

export default MyLogoutPage;
