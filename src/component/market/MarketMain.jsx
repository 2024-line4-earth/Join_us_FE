import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const MarketMain = ({ itemData }) => {
  return (
    <S.MainContainer>
      {itemData.map((item, index) => (
        <S.CardContainer key={index}>
          <Link to={`/market/detail/${item.id}`}>
            <S.ImgContainer>
              <S.MarketItemImg src={item.item_image} />
            </S.ImgContainer>
          </Link>
          <S.ItemNameContainer>
            <S.ItemName>{item.item_name}</S.ItemName>
          </S.ItemNameContainer>
          <S.ItemPointContainer>
            <S.Point>{item.price}P</S.Point>
          </S.ItemPointContainer>
        </S.CardContainer>
      ))}
    </S.MainContainer>
  );
};

export default MarketMain;
