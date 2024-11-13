import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Shoppinglist from "../../assets/img/MyShoppinglist.svg"; // 수정
import Button from "../../component/common/Button";

const MyShoppinglist = () => {
  return (
    <S.Contanier>
      <S.Blocks>
        <S.BolckImg src={Shoppinglist} />
        구매목록
      </S.Blocks>
      <S.EditMain></S.EditMain>
    </S.Contanier>
  );
};

export default MyShoppinglist;
