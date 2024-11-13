import React from "react";
import * as S from "./styled";
import back from "../../assets/img/leftBtn.svg";

const MyDetailHeader = ({ setSelectedBlock }) => {
  return (
    <>
      <S.Header>
        <S.BackBtn
          alt="back"
          src={back}
          onClick={() => setSelectedBlock(null)}
        ></S.BackBtn>
      </S.Header>
    </>
  );
};

export default MyDetailHeader;
