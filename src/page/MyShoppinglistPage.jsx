import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import MyShoppinglist from "../component/my_detail/MyShoppinglist";

const Layout = styled.div`
  width: 100%;
`;

const MyShoppinglistPage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <MyShoppinglist />
      <Footer />
    </Layout>
  );
};

export default MyShoppinglistPage;
