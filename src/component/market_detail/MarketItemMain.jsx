import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Button from "../common/Button";
import Cookies from "js-cookie";
import apiCall from "../../api/Api";
const MarketItemMain = () => {
  const [detailData, setDetailData] = useState([]);
  const token = Cookies.get("access_token");
  const url = window.location.href;
  const parts = url.split("/");
  const goods_id = parts[parts.length - 1];

  const purchase = async () => {
    const data = { item: goods_id };
    try {
      const response = await apiCall(
        `market/item/${goods_id}/`,
        "post",
        data,
        token
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall(
          `market/item/${goods_id}/`,
          "get",
          null,
          token
        );
        setDetailData(response.data.item);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <S.MainContainer>
      <S.ItemImgContainer>
        <S.Itemimg src={detailData.item_image}></S.Itemimg>
      </S.ItemImgContainer>
      <S.ItemInfoContainer>
        <S.ItemText>{detailData.item_name}</S.ItemText>
        <S.PointContainerWhite>{detailData.price}</S.PointContainerWhite>
      </S.ItemInfoContainer>
      <S.ItemDetailText>
        {detailData.description}
        <br />
        <br /> <span>*다운받아 사용해주세요</span>
      </S.ItemDetailText>
      <Button bgColor="#000" onClik={purchase}>
        구매하기
      </Button>
      <div style={{ marginBottom: "40px" }}></div>
    </S.MainContainer>
  );
};
export default MarketItemMain;
