import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import earth from "../../assets/img/Footer_Earth.svg";
import join from "../../assets/img/Footer_Join.svg";
import market from "../../assets/img/Footer_Market.svg";
import my from "../../assets/img/Footer_My.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.FooterContainer>
      <Link to={`/join`}>
        <S.FooterButton>
          <img src={join} alt="조인" />
          <S.FooterP>조인</S.FooterP>
        </S.FooterButton>
      </Link>
      <Link to={"/us"}>
        <S.FooterButton>
          <img src={earth} alt="어스" />
          <S.FooterP>어스</S.FooterP>
        </S.FooterButton>
      </Link>
      <Link to={`/market`}>
        <S.FooterButton>
          <img src={market} alt="마켓" />
          <S.FooterP>마켓</S.FooterP>
        </S.FooterButton>
      </Link>
      <Link to={`/my`}>
        <S.FooterButton>
          <img src={my} alt="마이" />
          <S.FooterP>마이</S.FooterP>
        </S.FooterButton>
      </Link>
    </S.FooterContainer>
  );
};

export default Footer;
