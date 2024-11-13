import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Quit from "../../assets/img/MyQuit.svg"; // 수정
import Button from "../common/Button";

const MyLogout = () => {
  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Quit} />
        탈퇴
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Quit_text>탈퇴 하시겠습니까?</S.Quit_text>
          <S.Quit_Warning>*복구가 불가합니다.</S.Quit_Warning>
          <Button bgColor="#000" onClick={() => {}}>
            탈퇴하기
          </Button>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyLogout;
