import React, { useState, useEffect } from "react";
import Logout from "../../assets/img/MyLogout.svg"; // 수정
import Button from "../common/Button";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const MyLogout = () => {
  const token = Cookies.get("access_token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    setIsLoading(true);
    try {
      // 로그아웃 API 호출 (POST 요청)
      await apiCall("/users/logout/", "POST", null, token);

      // 쿠키에서 access_token 삭제
      Cookies.remove("access_token");

      // 로그아웃 후 로그인 화면으로 리디렉션
      navigate("/login");
      alert("로그아웃하였습니다 👋🏻");
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Logout} />
        로그아웃
      </S.Blocks>
      <S.GrayBoxContainer>
        <S.GrayBox>
          <S.Logout_text>로그아웃 하시겠습니까?</S.Logout_text>
          <Button bgColor="#000" onClick={handleLogout}>
            {isLoading ? "로그아웃 중 ..." : "로그아웃"}
          </Button>
        </S.GrayBox>
      </S.GrayBoxContainer>
    </S.Container>
  );
};

export default MyLogout;
