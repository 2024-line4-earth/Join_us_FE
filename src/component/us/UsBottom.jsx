import React, { useState } from "react";
import * as S from "./styled";
import card from "../../assets/img/card.png";
import LevelGraph from "../../assets/img/LevelGraph.svg";

const UsBottom = () => {
  const [myCard, setMyCard] = useState(2);
  const [point, setPoint] = useState(1000);
  const [myLevel, setMyLevel] = useState(0);

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
