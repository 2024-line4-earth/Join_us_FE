import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Quit from "../../assets/img/MyQuit.svg";
import Button from "../common/Button";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MyQuit = () => {
  const token = Cookies.get("access_token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // 탈퇴 처리 함수
  const handleQuit = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    setIsLoading(true);
    try {
      // 탈퇴 API 호출 (DELETE 요청)
      await apiCall("users/delete/", "DELETE", null, token);

      // 쿠키에서 access_token 삭제
      Cookies.remove("access_token");

      // 탈퇴 후 로그인 화면으로 리디렉션
      navigate("/login");
      alert("탈퇴하였습니다 🍃");
    } catch (error) {
      console.error("탈퇴 실패:", error);
      alert("탈퇴에 실패했습니다. 다시 시도해주세요. ");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Quit} />
        탈퇴
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Quit_text>탈퇴 하시겠습니까?</S.Quit_text>
          <S.Quit_Warning>*복구가 불가합니다.</S.Quit_Warning>
          <Button bgColor="#000" onClick={handleQuit}>
            {isLoading ? "탈퇴 중 ..." : "탈퇴하기"}
          </Button>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyQuit;
