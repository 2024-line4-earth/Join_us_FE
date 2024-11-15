import React from "react";
import * as S from "./styled";

const Modal2 = (props) => {
  return (
    <S.ModalBackground>
      <S.ModalTextContainer2>
        <S.MainText2 style={{ color: props.mainTextColor }}>
          구매하시겠습니까?
        </S.MainText2>
      </S.ModalTextContainer2>
      <S.ModalButtonContainer2>
        <S.ModalButton2 style={{ backgroundColor: "#66A776", color: "white" }}>
          확인
        </S.ModalButton2>
        <S.ModalButton2 style={{ backgroundColor: "white", color: "#2E302D" }}>
          취소
        </S.ModalButton2>
      </S.ModalButtonContainer2>
    </S.ModalBackground>
  );
};

export default Modal2;
