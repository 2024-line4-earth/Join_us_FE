import React from "react";
import spinner from "../../assets/img/Spinner.gif";
import { Background, LoadingText } from "./styled";

const Loading = () => {
  return (
    <>
      <Background>
        <img src={spinner} alt="로딩중" width="50px" />
        <LoadingText>로딩중</LoadingText>
      </Background>
    </>
  );
};

export default Loading;
