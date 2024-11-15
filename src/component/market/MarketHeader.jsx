import React from "react";
import banner from "../../assets/img/MarketAdvertiseBanner.png";
import * as S from "./styled";
const MarketHeader = ({ point }) => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <S.HeaderText>마켓</S.HeaderText>
        <S.PointContainer>{point}P</S.PointContainer>
      </S.Header>
      <S.EmptyDiv src={banner} />
    </S.HeaderContainer>
  );
};

export default MarketHeader;
