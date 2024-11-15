import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Shoppinglist from "../../assets/img/MyShoppinglist.svg";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const MyShoppinglist = () => {
  const [itemData, setItemData] = useState([]);
  const token = Cookies.get("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall(
          "/users/order_detail",
          "GET",
          null,
          token
        );
        setItemData(response.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Shoppinglist} />
        구매목록
      </S.Blocks>
      <S.ShoppinglistMain>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <S.CardContainer key={index}>
              <Link
                to={`/market/detail/${item.item}`}
                style={{ textDecoration: "none" }}
              >
                <S.ImgContainer>
                  <S.MarketItemImg src={item.item_image} alt={item.item_name} />
                </S.ImgContainer>
                <S.ItemNameContainer>
                  <S.ItemName>{item.item_name}</S.ItemName>
                </S.ItemNameContainer>
                <S.ItemPointContainer>
                  <S.Point>{item.price}</S.Point>
                </S.ItemPointContainer>
              </Link>
            </S.CardContainer>
          ))
        ) : (
          <S.Quit_Warning>구매한 아이템이 없습니다.</S.Quit_Warning>
        )}
      </S.ShoppinglistMain>
    </S.Container>
  );
};

export default MyShoppinglist;
