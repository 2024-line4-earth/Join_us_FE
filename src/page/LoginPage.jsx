import React from "react";
import Logo from "../assets/img/MainLogo.svg";
import styled from "styled-components";
import LoginForm from "../component/login/LoginForm";

const Layout = styled.div`
  /* width: calc(100% - 2em); */
  width: 100%;
  position: absolute;
  top: calc(50% - 247px);
  left: 0;
`;

const MainLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;
const Logoimg = styled.img``;
const LoginPage = () => {
  return (
    <Layout>
      <MainLogoContainer>
        <Logoimg src={Logo}></Logoimg>
      </MainLogoContainer>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
