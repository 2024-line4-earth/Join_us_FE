import React from "react";
import * as S from "./styled";
import Backbtn from "../../assets/img/leftBtn.svg";
import { Link } from "react-router-dom";

const MyDetailHeader = () => {
  return (
    <>
      <S.Header>
        <Link to="/my">
          <S.BackBtn alt="Backbtn" src={Backbtn} />
        </Link>
      </S.Header>
    </>
  );
};

export default MyDetailHeader;
