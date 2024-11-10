import React from "react";
import * as S from "./styled";
import Button from "../common/Button";
import item from "../../assets/img/Market_Item_Frame_1.png";
const MarketItemMain = () => {
  return (
    <S.MainContainer>
      <S.ItemImgContainer>
        <S.Itemimg src={item}></S.Itemimg>
      </S.ItemImgContainer>
      <S.ItemInfoContainer>
        <S.ItemText>조인 어스 스티커</S.ItemText>
        <S.PointContainerWhite>1000P</S.PointContainerWhite>
      </S.ItemInfoContainer>
      <S.ItemDetailText>
        당신의 디지털 플래너를
        <br /> 한 층 더 풍성하게 해 줄 조인어스의 스티커!
        <br />
        <br /> <span>*다운받아 사용해주세요</span>
      </S.ItemDetailText>
      <Button bgColor="#000">구매하기</Button>
      <div style={{ marginBottom: "40px" }}></div>
    </S.MainContainer>
  );
};
export default MarketItemMain;
