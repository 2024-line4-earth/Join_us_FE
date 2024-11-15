import React, { useState, useEffect } from "react";
import * as S from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const MarketMain = () => {
  const [itemData, setItemData] = useState([]);
  const token = Cookies.get("access_token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall("/market/market", "GET", null, token);
        console.log(response.data);
        console.log(response.data.item);
        setItemData(response.data.item);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
            <S.Point>{item.price}</S.Point>
          </S.ItemPointContainer>
        </S.CardContainer>
      ))}
    </S.MainContainer>
  );
};

export default MarketMain;
