import React, { useState } from "react";
import * as S from "./styled";
import level0 from "../../assets/img/level0.png";
import step1 from "../../assets/img/step1.png";
import step2 from "../../assets/img/step2.png";
import step3 from "../../assets/img/step3.png";
import step4 from "../../assets/img/step4.png";
import step1_pink from "../../assets/img/step1_pink.png";
import step2_pink from "../../assets/img/step2_pink.png";
import step3_pink from "../../assets/img/step3_pink.png";
import step4_pink from "../../assets/img/step4_pink.png";

const UsLevel = () => {
  const [myLevel, setMyLevel] = useState(0);
  const [myStep, setMyStep] = useState(1);

  return (
    <S.Level>
      <S.LevelImage src={level0} />
      <S.LevelCircle>
        Lv. <S.MyLevel>{myLevel}</S.MyLevel>
      </S.LevelCircle>
    </S.Level>
  );
};

export default UsLevel;
