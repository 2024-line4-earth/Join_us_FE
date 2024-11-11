import React from "react";
import * as S from "./styled";
import back from "../../assets/img/leftBtn.svg";
const MarketHeader = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.BackBtn src={back}></S.BackBtn>
        <S.PointContainer>1000P</S.PointContainer>
      </S.Header>
    </S.HeaderContainer>
  );
};

export default MarketHeader;
