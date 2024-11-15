import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import us from "../../assets/img/Footer_Earth.svg";
import join from "../../assets/img/Footer_Join.svg";
import market from "../../assets/img/Footer_Market.svg";
import my from "../../assets/img/Footer_My.svg";
import selected_us from "../../assets/img/Footer_selected_Us.svg";
import selected_join from "../../assets/img/Footer_selected_Join.svg";
import selected_market from "../../assets/img/Footer_selected_Market.svg";
import selected_my from "../../assets/img/Footer_selected_My.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // 현재 경로에 따라 selected 상태 설정
    switch (location.pathname) {
      case "/join":
        setSelected("join");
        break;
      case "/us":
        setSelected("us");
        break;
      case "/market":
        setSelected("market");
        break;
      case "/my":
        setSelected("my");
        break;
      default:
        setSelected("");
    }
  }, [location.pathname]);

  return (
    <S.FooterContainer>
      <S.FooterButton
        onClick={() => {
          navigate("/join");
        }}
      >
        <S.FooterImg
          src={selected === "join" ? selected_join : join}
          alt="조인"
        />
        <S.FooterP style={{ color: selected === "join" ? "white" : "#747474" }}>
          조인
        </S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/us");
        }}
      >
        <S.FooterImg src={selected === "us" ? selected_us : us} alt="어스" />
        <S.FooterP style={{ color: selected === "us" ? "white" : "#747474" }}>
          어스
        </S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/market");
        }}
      >
        <S.FooterImg
          src={selected === "market" ? selected_market : market}
          alt="마켓"
        />
        <S.FooterP
          style={{ color: selected === "market" ? "white" : "#747474" }}
        >
          마켓
        </S.FooterP>
      </S.FooterButton>
      <S.FooterButton
        onClick={() => {
          navigate("/my");
        }}
      >
        <S.FooterImg src={selected === "my" ? selected_my : my} alt="마이" />
        <S.FooterP style={{ color: selected === "my" ? "white" : "#747474" }}>
          마이
        </S.FooterP>
      </S.FooterButton>
    </S.FooterContainer>
  );
};

export default Footer;
