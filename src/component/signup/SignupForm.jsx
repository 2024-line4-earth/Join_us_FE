import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Loading from "../Loading/Loading";
import {
  LoginFormContainer,
  LoginInput,
  PasswordWrapper,
  ButtonContainer,
} from "../login/styled";
import { ErrorText } from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import * as S from "./styled";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const isPasswordChecked = password === confirmPassword;
  const isFormComplete = username && userId && password && confirmPassword;
  const Register = async () => {
    if (formRef.current.checkValidity()) {
      const data = {
        username: username,
        userid: userId,
        password: password,
        password2: confirmPassword,
      };
      try {
        setLoading(true);
        const response = await apiCall("users/register/", "POST", data, null);
        if (response.data.token) {
          setLoading(false);
          navigate("/");
        } else if (response.data.errors.password) {
          setLoading(false);
          alert(response.data.errors.password[0]);
        } else if (response.data.errors.username) {
          setLoading(false);
          setIsDuplicate("red");
        } else if (response.data.errors.userid) {
          console.log("실행됨?");
          setLoading(false);
          setIsDuplicate("red");
        }
      } catch (error) {
        console.log("에러발생s", error);
      }
    }
  };
  return (
    <>
      <div>{loading ? <Loading /> : null}</div>
      <LoginFormContainer ref={formRef}>
        <PasswordWrapper>
          <LoginInput
            placeholder="닉네임을 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: isDuplicate }}
          ></LoginInput>
          {isDuplicate === "red" && (
            <ErrorText style={{ color: "red" }}>
              중복된 닉네임입니다. 다른 닉네임를 사용해주세요.
            </ErrorText>
          )}
        </PasswordWrapper>
        <PasswordWrapper>
          <LoginInput
            placeholder="아이디를 입력해주세요"
            value={userId}
            required
            onChange={(e) => setUserId(e.target.value)}
            style={{ borderColor: isDuplicate }}
          ></LoginInput>
          {isDuplicate === "red" && (
            <ErrorText style={{ color: "red" }}>
              중복된 아이디입니다. 다른 아이디를 사용해주세요.
            </ErrorText>
          )}
        </PasswordWrapper>
        <LoginInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></LoginInput>
      </LoginFormContainer>
      <ButtonContainer>
        <Button
          bgColor={isFormComplete && isPasswordChecked ? "#1A1E1B" : "#747474"}
          type="button"
          onClick={Register}
        >
          회원가입
        </Button>

        <Link to={"/"}>
          <S.ToLogin>로그인 하러 가기</S.ToLogin>
        </Link>
      </ButtonContainer>
    </>
  );
};
export default SignupForm;
