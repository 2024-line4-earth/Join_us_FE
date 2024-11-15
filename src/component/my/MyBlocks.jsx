import React from "react";
import * as S from "./styled";
import EditMyinfo from "../../assets/img/MyEditMyinfo.svg";
import Theme from "../../assets/img/MyTheme.svg";
import Shoppinglist from "../../assets/img/MyShoppinglist.svg";
import Contect from "../../assets/img/MyContect.svg";
import Logout from "../../assets/img/MyLogout.svg";
import Quit from "../../assets/img/MyQuit.svg";
import { Link } from "react-router-dom";

const MyBlocks = () => {
  return (
    <>
      <S.MyMain>
        <Link to="/editMyInfo">
          <S.Blocks>
            <S.BolckImg src={EditMyinfo} />
            회원정보 수정
          </S.Blocks>
        </Link>
        <S.Line />
        <Link to="/myTheme">
          <S.Blocks>
            <S.BolckImg src={Theme} />
            어스테마 바꾸기
          </S.Blocks>
        </Link>
        <S.Line />
        <Link to="/myShoppinglist">
          <S.Blocks>
            <S.BolckImg src={Shoppinglist} />
            구매목록
          </S.Blocks>
        </Link>
        <S.Line />
        <Link to="/myContect">
          <S.Blocks>
            <S.BolckImg src={Contect} />
            문의하기
          </S.Blocks>
        </Link>
        <S.Line />
        <Link to="/myLogout">
          <S.Blocks>
            <S.BolckImg src={Logout} />
            로그아웃
          </S.Blocks>
        </Link>
        <Link to="/myQuit">
          <S.Blocks>
            <S.BolckImg src={Quit} />
            탈퇴
          </S.Blocks>
        </Link>
      </S.MyMain>
    </>
  );
};

export default MyBlocks;
