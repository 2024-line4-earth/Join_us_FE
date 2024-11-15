import React, { useState, useEffect } from "react";
import * as S from "./styled";
import back from "../../assets/img/leftBtn.svg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import apiCall from "../../api/Api";

const MarketHeader = () => {
  const [point, setPoint] = useState([]);
  const token = Cookies.get("access_token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall("/market/market", "GET", null, token);
        setPoint(response.data.points.points);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <S.HeaderContainer>
      <S.Header>
        <Link to="/market">
          <S.BackBtn src={back}></S.BackBtn>
        </Link>
        <S.PointContainer>{point}P</S.PointContainer>
      </S.Header>
    </S.HeaderContainer>
  );
};

export default MarketHeader;
