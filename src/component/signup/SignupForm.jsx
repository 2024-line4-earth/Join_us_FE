import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import {
  EyeContainer,
  LoginFormContainer,
  LoginInput,
  PasswordWrapper,
  ButtonContainer,
} from "../login/styled";
import { DuplicateCheckBtn, ErrorText } from "./styled";
import apiCall from "../../api/Api";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(null);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const handleDuplicateCheck = () => {
    // 특정 조건에 따라 실행
    setIsDuplicate("red");
    setIsDuplicate("green");
    console.log(formRef.current);
  };

  const isPasswordChecked = password === confirmPassword;
  const isFormComplete = username && userId && password && confirmPassword;
  const Register = async () => {
    const data = {
      username: username,
      userid: userId,
      password: password,
      password2: confirmPassword,
    };
    try {
      const response = await apiCall("users/register/", "POST", data, null);
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
        navigate("/join");
      } else {
        alert("아이디/비밀번호를 다시 확인해주세요!");
      }
    } catch (error) {
      console.log("에러발생");
    }
  };
  return (
    <>
      <LoginFormContainer ref={formRef}>
        <PasswordWrapper>
          <LoginInput
            placeholder="닉네임을 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: isDuplicate }}
          ></LoginInput>
          <EyeContainer>
            <DuplicateCheckBtn type="button" onClick={handleDuplicateCheck}>
              중복확인
            </DuplicateCheckBtn>
          </EyeContainer>
          {isDuplicate === "green" && (
            <ErrorText style={{ color: "green" }}>
              사용 가능한 아이디입니다.
            </ErrorText>
          )}
          {isDuplicate === "red" && (
            <ErrorText style={{ color: "red" }}>
              중복된 아이디입니다. 다른 아이디를 사용해주세요.
            </ErrorText>
          )}
        </PasswordWrapper>

        <LoginInput
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></LoginInput>
      </LoginFormContainer>
      <ButtonContainer>
        <Button
          bgColor={isFormComplete && isPasswordChecked ? "#1A1E1B" : "#747474"}
          type="button"
          disabled={!isFormComplete}
          onClick={Register}
        >
          회원가입
        </Button>
      </ButtonContainer>
    </>
  );
};
export default SignupForm;
