import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Logout from "../../assets/img/MyLogout.svg"; // 수정
import Button from "../common/Button";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const MyLogout = () => {
  const token = Cookies.post("access_token");
  useEffect(() => {
    console.log(token);
    const fetchData = async () => {
      try {
        const response = await apiCall(
          "/users/order_detail",
          "GET",
          null,
          token
        );
        console.log(response.data.item);
        setItemData(response.data.item);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Logout} />
        로그아웃
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Logout_text>로그아웃 하시겠습니까?</S.Logout_text>
          <Button bgColor="#000" onClick={() => {}}>
            로그아웃
          </Button>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyLogout;
