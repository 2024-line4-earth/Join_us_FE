import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Contect from "../../assets/img/MyContect.svg"; // 수정

const MyContect = () => {
  const link =
    "https://www.instagram.com/joinusearth_official/profilecard/?igsh=aXlsaGJ4N3V3OGg3";
  const handleLinkClick = () => {
    window.open(link, "_blank");
  };
  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Contect} />
        문의하기
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Contect_text>문의는 이곳으로 해주세요!</S.Contect_text>
          <S.SNSBox onClick={handleLinkClick}>
            Instagram
            <S.Bold>joinusearth_24</S.Bold>
          </S.SNSBox>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyContect;
