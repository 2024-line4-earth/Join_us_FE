import React from "react";
import * as S from "./styled";
import Backbtn from "../../assets/img/leftBtn.svg";

const MyDetailHeader = ({ onBack }) => {
  return (
    <>
      <S.Header>
        <S.BackBtn
          alt="Backbtn"
          src={Backbtn}
          onClick={() => {
            onBack;
          }}
        />
      </S.Header>
    </>
  );
};

export default MyDetailHeader;
