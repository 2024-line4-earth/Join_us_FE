import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import back from "../../assets/img/leftBtn.svg";

const MyDetailHeader = () => {
  //이전 페이지로 이동 버튼
  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/my"); // navigate("/my/id");
  };

  return (
    <>
      <S.Header>
        <S.BackBtn alt="back" src={back} onClick={BackButton}></S.BackBtn>
      </S.Header>
    </>
  );
};

export default MyDetailHeader;
