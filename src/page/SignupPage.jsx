import React from "react";
import Logo from "../assets/img/MainLogo.svg";
import styled from "styled-components";
import SignupForm from "../component/signup/SignupForm";

const Layout = styled.div`
  width: 100%;
  position: absolute;
  top: calc(50% - 253px);
  left: 0;
`;
const MainLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;
const Logoimg = styled.img``;
const SignupPage = () => {
  return (
    <Layout>
      <MainLogoContainer>
        <Logoimg src={Logo}></Logoimg>
      </MainLogoContainer>
      <SignupForm />
    </Layout>
  );
};

export default SignupPage;
