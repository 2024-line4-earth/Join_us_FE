import React from "react";
import styled from "styled-components";
import MyDetailHeader from "../component/my_detail/MyDetailHeader";
import Footer from "../component/common/Footer";
import EditMyInfo from "../component/my_detail/EditMyInfo";

const Layout = styled.div`
  width: 100%;
`;

const EditMyInfoPage = () => {
  return (
    <Layout>
      <MyDetailHeader />
      <EditMyInfo />
      <Footer />
    </Layout>
  );
};

export default EditMyInfoPage;
