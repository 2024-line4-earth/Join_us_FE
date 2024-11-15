import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import earth from "../../assets/img/Footer_Earth.svg";
import join from "../../assets/img/Footer_Join.svg";
import market from "../../assets/img/Footer_Market.svg";
import my from "../../assets/img/Footer_My.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <S.FooterContainer>
      <S.FooterButton
        onClick={() => {
          navigate("/join");
        }}
      >
        <img src={join} alt="조인" />
        <S.FooterP>조인</S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/us");
        }}
      >
        <img src={earth} alt="어스" />
        <S.FooterP>어스</S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/market");
        }}
      >
        <img src={market} alt="마켓" />
        <S.FooterP>마켓</S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/my");
        }}
      >
        <img src={my} alt="마이" />
        <S.FooterP>마이</S.FooterP>
      </S.FooterButton>
    </S.FooterContainer>
  );
};

export default Footer;
