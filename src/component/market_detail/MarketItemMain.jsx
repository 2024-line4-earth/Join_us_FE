import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Button from "../common/Button";
import Cookies from "js-cookie";
import apiCall from "../../api/Api";
import axios from "axios";
import Loading from "../Loading/Loading";

const MarketItemMain = () => {
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("access_token");
  const url = window.location.href;
  const parts = url.split("/");
  const goods_id = parts[parts.length - 1];
  const goods_id_num = Number(goods_id);
  const purchase = async () => {
    try {
      setLoading(true);
      const response = await apiCall(
        `market/item/${goods_id}/`,
        "post",
        { item: goods_id_num },
        token
      );
      window.location.reload();
      if (response.status == "201") {
        alert(response.data.message);
        window.location.reload();
      } else if (response.status == "202") {
        alert(response.data.message);
        if (response.data) {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const download = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}market/item/download/${goods_id}/`,
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "image/png",
          },
          responseType: "blob",
        }
      );
      const blob = response.data;
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded_image.png";
      a.click();

      URL.revokeObjectURL(url);
      if (response.data) {
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
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
        setDetailData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [goods_id]);

  let isPurchase = detailData.button_text === "구매하기";

  if (!detailData) return <div>Loading...</div>;
  return (
    <>
      <div>{loading ? <Loading /> : null}</div>
      <S.MainContainer>
        <S.ItemImgContainer>
          <S.Itemimg src={detailData.item?.item_image}></S.Itemimg>
        </S.ItemImgContainer>
        <S.ItemInfoContainer>
          <S.ItemText>{detailData.item?.item_name}</S.ItemText>
          <S.PointContainerWhite>
            {detailData.item?.price}P
          </S.PointContainerWhite>
        </S.ItemInfoContainer>
        <S.ItemDetailText>
          {detailData.item?.description}
          <br />
          <br /> <span>{detailData.item?.note}</span>
        </S.ItemDetailText>
        <Button
          bgColor={isPurchase ? "#000" : "#417E59"}
          onClick={isPurchase ? purchase : download}
        >
          {detailData?.button_text}
        </Button>
        <div style={{ marginBottom: "40px" }}></div>
      </S.MainContainer>
    </>
  );
};
export default MarketItemMain;
