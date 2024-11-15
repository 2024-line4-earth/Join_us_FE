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
  const goods_id_num = Number(goods_id);
  const purchase = async () => {
    try {
      console.log("api 실행?");
      const response = await apiCall(
        `market/item/${goods_id}/`,
        "post",
        { item: goods_id_num },
        token
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const download = () => {
    console.log("다운로드 실행");
    // 여기에 다운로드 로직 추가
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("불러옴?");
        const response = await apiCall(
          `market/item/${goods_id}/`,
          "get",
          null,
          token
        );
        setDetailData(response);
        console.log(detailData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [goods_id]);
  const isPurchase = detailData.button_text === "구매하기";
  return (
    <S.MainContainer>
      <S.ItemImgContainer>
        {/* <S.Itemimg src={detailData.item.item_image}></S.Itemimg> */}
      </S.ItemImgContainer>
      <S.ItemInfoContainer>
        {/* <S.ItemText>{detailData.item.item_name}</S.ItemText> */}
        {/* <S.PointContainerWhite>{detailData.item.price}</S.PointContainerWhite> */}
      </S.ItemInfoContainer>
      <S.ItemDetailText>
        {/* {detailData.item.description} */}
        <br />
        <br /> <span>*다운받아 사용해주세요</span>
      </S.ItemDetailText>
      <Button
        bgColor={isPurchase ? "#000" : "#417E59"}
        onClick={isPurchase ? purchase : download}
      >
        {/* {detailData.button_text} */}
      </Button>
      <div style={{ marginBottom: "40px" }}></div>
    </S.MainContainer>
  );
};
export default MarketItemMain;
