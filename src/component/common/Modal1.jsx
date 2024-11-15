import React, { useState } from "react";
import * as S from "./styled";
import Button from "./Button";
import Modal_emoji from "../../assets/img/Modal_emoji.png";

const Modal1 = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <S.ModalBackground>
      <S.ModalTextContainer1>
        <S.MainText1 style={{ color: props.mainTextColor }}>
          {props.mainText}
        </S.MainText1>
        <S.Emoji src={Modal_emoji} />
        <S.SubText1 style={{ color: props.subTextColor }}>
          {props.subText}
        </S.SubText1>
      </S.ModalTextContainer1>
      <Button bgColor={props.buttonColor} onClick={handleClose}>
        확인했습니다
      </Button>
    </S.ModalBackground>
  );
};

export default Modal1;
