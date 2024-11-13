import React from "react";
import * as S from "./styled";
import Shoppinglist from "../../assets/img/MyShoppinglist.svg";
import { Link } from "react-router-dom";

const MyShoppinglist = () => {
  // 테스트용 더미 데이터
  const dummyItemData = [
    {
      id: 1,
      item_image: "https://via.placeholder.com/150",
      item_name: "상품 1",
      item_price: "1000 포인트",
    },
    {
      id: 2,
      item_image: "https://via.placeholder.com/150",
      item_name: "상품 2",
      item_price: "2000 포인트",
    },
    {
      id: 3,
      item_image: "https://via.placeholder.com/150",
      item_name: "상품 3",
      item_price: "3000 포인트",
    },
  ];

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Shoppinglist} />
        구매목록
      </S.Blocks>
      <S.ShoppinglistMain>
        {dummyItemData.map((item, index) => (
          <S.CardContainer key={index}>
            <Link to={`/market/detail/${item.id}`}>
              <S.ImgContainer>
                <S.MarketItemImg src={item.item_image} alt={item.item_name} />
              </S.ImgContainer>
              <S.ItemNameContainer>
                <S.ItemName>{item.item_name}</S.ItemName>
              </S.ItemNameContainer>
              <S.ItemPointContainer>
                <S.Point>{item.item_price}</S.Point>
              </S.ItemPointContainer>
            </Link>
          </S.CardContainer>
        ))}
      </S.ShoppinglistMain>
    </S.Container>
  );
};

export default MyShoppinglist;
