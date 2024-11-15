import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Button from "../../component/common/Button";
import Theme from "../../assets/img/MyTheme.svg";
import BasicThemeImg from "../../assets/img/MyBasicTheme.svg";
import PinkThemeImg from "../../assets/img/MyPinkTheme.svg";
import My1 from "../../assets/img/My1.svg";
import My2 from "../../assets/img/My2.svg";
import SelectImg from "../../assets/img/MySelectImg.svg";
import NonSelectImg from "../../assets/img/MyNonSelectImg.svg";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import Loading from "../Loading/Loading";

const MyTheme = () => {
  const [myTheme, setMyTheme] = useState("");
  const [themeList, setThemeList] = useState([]);
  const [isCheckLoading, setIsCheckLoading] = useState(false);
  const [isChangeLoading, setIsChangeLoading] = useState(false);
  const token = Cookies.get("access_token");

  useEffect(() => {
    // 처음 컴포넌트가 마운트 될 때 테마 조회
    checkTheme();
  }, []);

  // 테마 선택 함수
  const handleThemeSelection = (theme) => {
    setMyTheme(theme); // 테마 선택만 업데이트
  };

  // 테마 조회 함수
  const checkTheme = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    setIsCheckLoading(true);
    try {
      // 테마 조회 API 호출 (GET 요청)
      const response = await apiCall("users/my_theme/", "GET", null, token);

      // 응답 데이터에서 'is_selected'가 true인 테마 찾기
      const selectedTheme = response.data.find(
        (theme) => theme.is_selected === true
      );

      if (selectedTheme) {
        setMyTheme(selectedTheme.theme_name);
      }

      setThemeList(response.data);
    } catch (error) {
      console.error("조회 실패:", error);
      alert("조회에 실패했습니다. 다시 시도해주세요. ");
    } finally {
      setIsCheckLoading(false);
    }
  };

  // 테마 변경 함수
  const changeTheme = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    if (!myTheme) {
      alert("테마가 선택되지 않았습니다.");
      return;
    }

    setIsChangeLoading(true);
    try {
      // 테마 변경 API 호출 (POST 요청)
      const response = await apiCall(
        "users/my_theme/",
        "POST",
        { selected_theme: myTheme },
        token
      );

      // 서버에서 최신 데이터를 가져오기
      await checkTheme();
    } catch (error) {
      console.error("변경 실패:", error);
      alert("변경에 실패했습니다. 다시 시도해주세요. ");
    } finally {
      setIsChangeLoading(false);
    }
  };

  return (
    <>
      <div>{isChangeLoading || isCheckLoading ? <Loading /> : null}</div>
      <S.Container>
        <S.Blocks>
          <S.BolckImg src={Theme} />
          어스테마 바꾸기
        </S.Blocks>
        <S.ThemeMain>
          <S.ThemeBox alt="기본 테마 Box">
            <S.ThemeImg src={BasicThemeImg} />
            <S.ThemeTextBox>
              <S.ThemeText>
                <S.ThemeText_img src={My1} /> 기본 테마
              </S.ThemeText>
              <S.ThemeSelectBtn_img
                src={myTheme === "기본 테마" ? SelectImg : NonSelectImg}
                onClick={() => handleThemeSelection("기본 테마")}
              />
            </S.ThemeTextBox>
          </S.ThemeBox>
          <S.Line />
          {/* 테마 목록이 2개 이상 있을 때만 벚꽃 테마 박스 렌더링 */}
          {themeList.length > 1 && (
            <S.ThemeBox alt="어스 벚꽃테마 Box">
              <S.ThemeImg src={PinkThemeImg} />
              <S.ThemeTextBox>
                <S.ThemeText>
                  <S.ThemeText_img src={My2} /> 벚꽃 테마
                </S.ThemeText>
                <S.ThemeSelectBtn_img
                  src={myTheme === "어스 벚꽃테마" ? SelectImg : NonSelectImg}
                  onClick={() => handleThemeSelection("어스 벚꽃테마")}
                />
              </S.ThemeTextBox>
            </S.ThemeBox>
          )}
        </S.ThemeMain>
        <S.SaveBox>
          {isChangeLoading ? (
            <Button bgColor="#747474" disabled={isChangeLoading}>
              저장 중...
            </Button>
          ) : (
            <Button
              bgColor="#000"
              onClick={changeTheme}
              disabled={isChangeLoading}
            >
              저장하기
            </Button>
          )}
        </S.SaveBox>
      </S.Container>
    </>
  );
};

export default MyTheme;
