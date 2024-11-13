import React, { useState, useEffect } from "react";
import * as S from "./styled";
import stiker from "../../assets/img/Market_Item_stiker.png";
import Theme from "../../assets/img/Market_Item_theme_cherryblossom.png";
import Frame1 from "../../assets/img/Market_Item_Frame_1.png";
import Frame2 from "../../assets/img/Market_Item_Frame_2.png";
import apiCall from "../../api/Api";

const MarketMain = () => {
  const [itemData, setItemData] = useState([]);
  const token = Cookies.get("access_token");
  console.log(token);
  useEffect(() => {
    console.log(token);
    const fetchData = async () => {
      try {
        const response = await apiCall("/market/market", "GET", null, token);
        console.log(response);
        setItemData(response.data);
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
          <S.ImgContainer>
            <S.MarketItemImg src={item.item.item_image} />
          </S.ImgContainer>
          <S.ItemNameContainer>
            <S.ItemName>{item.item.item_name}</S.ItemName>
          </S.ItemNameContainer>
          <S.ItemPointContainer>
            <S.Point>{item.item.item_price}</S.Point>
          </S.ItemPointContainer>
        </S.CardContainer>
      ))}
    </S.MainContainer>
  );
};

export default MarketMain;
