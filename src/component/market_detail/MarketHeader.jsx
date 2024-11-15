import React from "react";
import * as S from "./styled";
import back from "../../assets/img/leftBtn.svg";
import { Link } from "react-router-dom";
const MarketHeader = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <Link to="/market">
          <S.BackBtn src={back}></S.BackBtn>
        </Link>
        <S.PointContainer>1000P</S.PointContainer>
      </S.Header>
    </S.HeaderContainer>
  );
};

export default MarketHeader;
