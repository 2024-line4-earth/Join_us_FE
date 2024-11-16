import React, { useState, useEffect } from "react";
import * as S from "./styled";
import firstLevel from "../../assets/img/firstLevel.svg";
import step1 from "../../assets/img/step1.svg";
import step2 from "../../assets/img/step2.svg";
import step3 from "../../assets/img/step3.svg";
import step4 from "../../assets/img/step4.svg";
import step1Pink from "../../assets/img/step1Pink.svg";
import step2Pink from "../../assets/img/step2Pink.svg";
import step3Pink from "../../assets/img/step3Pink.svg";
import step4Pink from "../../assets/img/step4Pink.svg";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import Loading from "../Loading/Loading";

const UsLevel = () => {
  const [myCard, setMyCard] = useState();
  const [myLevel, setMyLevel] = useState();
  const [myStep, setMyStep] = useState();
  const [currentTheme, setCurrentTheme] = useState();
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("access_token");

  useEffect(() => {
    // 처음 컴포넌트가 마운트 될 때 us level 조회
    getUs();
  }, []);

  // us 조회 함수
  const getUs = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    try {
      setLoading(true);
      // us 조회 API 호출 (GET 요청)
      const response = await apiCall("us/us/", "GET", null, token);

      const { current_theme, my } = response.data;

      setCurrentTheme(current_theme);
      setMyCard(my.total_cards);
      setMyLevel(my.level);
      setMyStep(my.step);

      if (response.data) {
        setLoading(false);
      }
    } catch (error) {
      console.error("가운데 level 조회 실패:", error);
      alert("가운데 level 조회에 실패했습니다. 다시 시도해주세요. ");
      setLoading(false);
    }
  };

  const getStepImage = () => {
    if (myCard == 0) return firstLevel;

    const themeImages =
      currentTheme == "어스 벚꽃테마"
        ? [step1Pink, step2Pink, step3Pink, step4Pink]
        : [step1, step2, step3, step4];

    return themeImages[myStep - 1] || step1;
  };

  return (
    <>
      <div>{loading ? <Loading /> : null}</div>
      <S.Level>
        <S.LevelImage src={getStepImage()} />
        <S.LevelCircle>
          Lv. <S.MyLevel>{myLevel}</S.MyLevel>
        </S.LevelCircle>
      </S.Level>
    </>
  );
};

export default UsLevel;
