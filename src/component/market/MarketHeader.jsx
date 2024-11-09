import React from "react";
import * as S from "./styled";
const MarketHeader = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.HeaderText>마켓</S.HeaderText>
        <S.PointContainer>1000P</S.PointContainer>
      </S.Header>
      <S.EmptyDiv />
    </S.HeaderContainer>
  );
};

export default MarketHeader;
