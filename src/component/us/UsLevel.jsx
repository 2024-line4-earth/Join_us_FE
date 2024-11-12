import React, { useState } from "react"; // 연동 시 useEffect 추가
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

const UsLevel = () => {
  const [myLevel, setMyLevel] = useState(5);
  const [myStep, setMyStep] = useState(1);

  // 임시 데이터 설정
  const currentTheme = "어스 벚꽃테마";
  const myCard = 2;

  const getStepImage = () => {
    if (myCard == 0) return firstLevel;

    const themeImages =
      currentTheme == "어스 벚꽃테마"
        ? [step1Pink, step2Pink, step3Pink, step4Pink]
        : [step1, step2, step3, step4];

    return themeImages[myStep - 1] || step1;
  };

  return (
    <S.Level>
      <S.LevelImage src={getStepImage()} />
      <S.LevelCircle>
        Lv. <S.MyLevel>{myLevel}</S.MyLevel>
      </S.LevelCircle>
    </S.Level>
  );
};

export default UsLevel;
