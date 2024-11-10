import React, { useState } from "react";
import * as S from "./styled";
import Button from "../common/Button";
import eye from "../../assets/img/password_eye.svg";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <S.LoginFormContainer>
        <S.LoginInput
          placeholder="아이디를 입력해주세요"
          type="text"
        ></S.LoginInput>
        <S.PasswordWrapper>
          <S.LoginInput
            placeholder="비밀번호를 입력해주세요"
            type={passwordVisible ? "text" : "password"}
          ></S.LoginInput>
          <S.EyeContainer>
            <S.EyeImg src={eye} onClick={togglePasswordVisibility}></S.EyeImg>
          </S.EyeContainer>
        </S.PasswordWrapper>
      </S.LoginFormContainer>
      <S.FindBtnContainer>
        <S.FindBtn>비밀번호 찾기</S.FindBtn>
      </S.FindBtnContainer>
      <S.ButtonContainer>
        <Button bgColor="#417E59" onClick={Login}>
          로그인
        </Button>
        <Button bgColor="#1A1E1B">회원가입</Button>
      </S.ButtonContainer>
    </>
  );
};

export default LoginForm;
