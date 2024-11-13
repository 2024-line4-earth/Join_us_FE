import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import EditMyinfo from "../../assets/img/MyEditMyinfo.svg";
import Theme from "../../assets/img/Mytheme.svg";
import Shoppinglist from "../../assets/img/MyShoppinglist.svg";
import Contect from "../../assets/img/MyContect.svg";
import Logout from "../../assets/img/MyLogout.svg";
import Quit from "../../assets/img/MyQuit.svg";

const MyBlocks = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.MyMain>
        <S.Blocks>
          <S.BolckImg src={EditMyinfo} />
          회원정보 수정
        </S.Blocks>
        <S.Line />
        <S.Blocks>
          <S.BolckImg src={Theme} />
          어스테마 바꾸기
        </S.Blocks>
        <S.Line />
        <S.Blocks>
          <S.BolckImg src={Shoppinglist} />
          구매목록
        </S.Blocks>
        <S.Line />
        <S.Blocks>
          <S.BolckImg src={Contect} />
          문의하기
        </S.Blocks>
        <S.Line />
        <S.Blocks>
          <S.BolckImg src={Logout} />
          로그아웃
        </S.Blocks>
        <S.Blocks>
          <S.BolckImg src={Quit} />
          탈퇴
        </S.Blocks>
      </S.MyMain>
    </>
  );
};

export default MyBlocks;
