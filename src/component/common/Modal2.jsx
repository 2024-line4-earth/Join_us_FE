import React, { useState } from "react";
import * as S from "./styled";
import Cookies from "js-cookie";
import apiCall from "../../api/Api";
import axios from "axios";
import Loading from "../Loading/Loading";
import Modal1 from "./Modal1";

const Modal2 = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const [loading, setLoading] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(false);

  const token = Cookies.get("access_token");
  const url = window.location.href;
  const parts = url.split("/");
  const goods_id = parts[parts.length - 1];
  const goods_id_num = Number(goods_id);
  const purchase = async () => {
    try {
      setLoading(true);
      const response = await apiCall(
        `market/item/${goods_id}/`,
        "post",
        { item: goods_id_num },
        token
      );

      if (response.status === 201) {
        alert(response.data.message);
        window.location.reload();
      } else if (response.status === 202) {
        setIsModal1Open(true); // Modal1을 열기 위해 상태 업데이트
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {isModal1Open ? (
          <Modal1
            mainTextColor="#F66466"
            mainText="포인트가 부족해서
  상품을 구매할 수 없습니다."
            subTextColor="#2E302D"
            subText="*포인트는 실천카드를 통해 모을 수 있습니다!"
            buttonColor="#66A776"
          />
        ) : (
          <>
            {loading && <Loading />}
            <S.ModalBackground>
              <S.ModalTextContainer2>
                <S.MainText2 style={{ color: props.mainTextColor }}>
                  구매하시겠습니까?
                </S.MainText2>
              </S.ModalTextContainer2>
              <S.ModalButtonContainer2>
                <S.ModalButton2
                  style={{ backgroundColor: "#66A776", color: "white" }}
                  onClick={purchase}
                >
                  확인
                </S.ModalButton2>
                <S.ModalButton2
                  style={{ backgroundColor: "white", color: "#2E302D" }}
                  onClick={handleClose}
                >
                  취소
                </S.ModalButton2>
              </S.ModalButtonContainer2>
            </S.ModalBackground>
          </>
        )}
      </div>
    </>
  );
};

export default Modal2;
