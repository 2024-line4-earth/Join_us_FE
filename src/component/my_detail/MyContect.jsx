import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Contect from "../../assets/img/MyContect.svg"; // 수정

const MyContect = () => {
  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Contect} />
        문의하기
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Contect_text>문의는 이곳으로 해주세요!</S.Contect_text>
          <S.SNSBox>
            Instagram
            <S.Bold>joinusearth_24</S.Bold>
          </S.SNSBox>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyContect;
