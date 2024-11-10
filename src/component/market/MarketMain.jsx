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
        <S.ItemPointContainer>
          <S.Point>1000p</S.Point>
        </S.ItemPointContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Theme} />
        </S.ImgContainer>
        <S.ItemNameContainer>
          <S.ItemName>어스 벚꽃 테마</S.ItemName>
        </S.ItemNameContainer>
        <S.ItemPointContainer>
          <S.Point>1500p</S.Point>
        </S.ItemPointContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Frame1} />
        </S.ImgContainer>
        <S.ItemNameContainer>
          <S.ItemName>스페셜 프레임 2</S.ItemName>
        </S.ItemNameContainer>
        <S.ItemPointContainer>
          <S.Point>1000p</S.Point>
        </S.ItemPointContainer>
      </S.CardContainer>
      <S.CardContainer>
        <S.ImgContainer>
          <S.MarketItemImg src={Frame2} />
        </S.ImgContainer>
        <S.ItemNameContainer>
          <S.ItemName>스페셜 프레임 1</S.ItemName>
        </S.ItemNameContainer>
        <S.ItemPointContainer>
          <S.Point>1000p</S.Point>
        </S.ItemPointContainer>
      </S.CardContainer>
    </S.MainContainer>
  );
};

export default MarketMain;
