import React from "react";
import * as S from "./styled";
import stiker from "../../assets/img/Market_Item_stiker.png";
import Theme from "../../assets/img/Market_Item_theme_cherryblossom.png";
import Frame1 from "../../assets/img/Market_Item_Frame_1.png";
import Frame2 from "../../assets/img/Market_Item_Frame_2.png";

const MarketMain = () => {
  return (
    <S.MainContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={stiker} />
        </S.ImgContainer>
        <S.ItemNameContainer>
          <S.ItemName>조인 어스 스티커</S.ItemName>
        </S.ItemNameContainer>
        <S.ItemNameContainer>
          <S.Point>1000p</S.Point>
        </S.ItemNameContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Theme} />
        </S.ImgContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Frame1} />
        </S.ImgContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Frame2} />
        </S.ImgContainer>
      </S.CardContainer>
    </S.MainContainer>
  );
};

export default MarketMain;
