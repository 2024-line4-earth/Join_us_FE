import React, { useState } from "react";
import Cookies from "js-cookie";
import * as S from "./styled";
import Button from "../common/Button";
import eye from "../../assets/img/password_eye.svg";
import { Link } from "react-router-dom";
import apiCall from "../../api/Api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const Login = async () => {
    const data = {
      userid: userid,
      password: password,
    };
    try {
      const response = await apiCall("users/login/", "post", data, null);
      console.log(response.data);
      // const token = response.headers["authorization"];
      const token = response.data.token;

      if (token) {
        Cookies.set("access_token", token, {
          path: "/",
          secure: true,
          sameSite: "None",
        });
      }
      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
        navigate("/join");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <S.LoginFormContainer>
        <S.LoginInput
          placeholder="아이디를 입력해주세요"
          type="text"
          onChange={(e) => setUserid(e.target.value)}
          value={userid}
        ></S.LoginInput>
        <S.PasswordWrapper>
          <S.LoginInput
            placeholder="비밀번호를 입력해주세요"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></S.LoginInput>
          <S.EyeContainer>
            <S.EyeImg src={eye} onClick={togglePasswordVisibility}></S.EyeImg>
          </S.EyeContainer>
        </S.PasswordWrapper>
      </S.LoginFormContainer>
      <S.ButtonContainer>
        <Button bgColor="#417E59" onClick={Login}>
          로그인
        </Button>
        <Link to="/signup">
          <Button bgColor="#1A1E1B">회원가입</Button>
        </Link>
      </S.ButtonContainer>
    </>
  );
};

export default LoginForm;
