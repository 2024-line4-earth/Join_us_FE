import React, { useState, useEffect } from "react";
import * as S from "./styled";
import card from "../../assets/img/card.svg";
import LevelGraph from "../../assets/img/LevelGraph.svg";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const UsBottom = () => {
  const [myCard, setMyCard] = useState();
  const [point, setPoint] = useState();
  const [myLevel, setMyLevel] = useState();
  const [barWidth, setBarWidth] = useState("");
  const [myStep, setMyStep] = useState();
  const token = Cookies.get("access_token");

  const stepFunc = (myStep) => {
    if (myStep === 1) return "23%";
    else if (myStep === 2) return "48%";
    else if (myStep === 3) return "71%";
    else return "95%";
  };

  useEffect(() => {
    setBarWidth(stepFunc(myStep));
  }, [myStep]);

  useEffect(() => {
    // 처음 컴포넌트가 마운트 될 때 step 조회
    getUs();
  }, []);

  // us 조회 함수
  const getUs = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    try {
      // us 조회 API 호출 (GET 요청)
      const response = await apiCall("us/us/", "GET", null, token);
      console.log("가운데 level 조회 api 응답", response);

      const { my } = response.data;

      setMyCard(my.total_cards);
      setPoint(my.points);
      setMyLevel(my.level);
      setMyStep(my.step);
    } catch (error) {
      console.error("bottom 조회 실패:", error);
      alert("bottom 조회에 실패했습니다. 다시 시도해주세요. ");
    }
  };

  const myLevelPlus1 = myLevel + 1;
  return (
    <S.UsBottom>
      <S.Bottom1>
        <S.Card>
          <S.CardImg src={card} />
          누적 실천카드 개수 : <S.Bold>{myCard}</S.Bold>
        </S.Card>
        <S.Point>
          <S.Bold>{point}</S.Bold>P
        </S.Point>
      </S.Bottom1>
      <S.Bottom2>
        <S.LevelGraph>
          <S.LevelBar width={barWidth} />
          <S.LevelImg src={LevelGraph} />
        </S.LevelGraph>
        <S.Level_t>
          <S.LevelLow>
            <S.Bold>{myLevel}</S.Bold>.Lv
          </S.LevelLow>
          <S.LevelHigh>
            <S.Bold>{myLevelPlus1}</S.Bold>.Lv
          </S.LevelHigh>
        </S.Level_t>
      </S.Bottom2>
    </S.UsBottom>
  );
};

export default UsBottom;
