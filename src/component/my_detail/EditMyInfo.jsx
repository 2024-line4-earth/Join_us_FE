import React, { useState, useEffect } from "react";
import * as S from "./styled";
import EditMyinfo from "../../assets/img/MyEditMyinfo.svg";
import Button from "../../component/common/Button";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import Loading from "../Loading/Loading";

const EditMyInfo = () => {
  const [currentUsername, setCurrentUsername] = useState(""); // 현재 닉네임
  const [newUsername, setNewUsername] = useState(""); // 변경할 닉네임
  const [isDuplication, setIsDuplication] = useState(false); // 중복 확인
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = Cookies.get("access_token");

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    setErrorMessage("");
    setIsDuplication(false);
  }, [newUsername]);

  // 현재 닉네임
  const fetchUserInfo = async () => {
    try {
      setIsLoading(true);
      const response = await apiCall("/us/us/", "GET", null, token);
      setCurrentUsername(response.data.my.username);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setIsLoading(false);
    }
  };

  // 변경할 new 닉네임
  const handleSave = async () => {
    if (!newUsername) {
      setErrorMessage("변경할 닉네임을 입력해주세요.");
      return;
    }
    if (currentUsername === newUsername) {
      setErrorMessage("현재 닉네임과 같습니다.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiCall(
        "users/profile/update/", // 올바른 URL
        "PATCH",
        { username: newUsername },
        token
      );

      if (response.data.username === newUsername) {
        // 닉네임 변경 성공
        setCurrentUsername(newUsername);
        setNewUsername("");
        setErrorMessage(""); // 에러 메시지 초기화
        setIsDuplication(false); // 중복 상태 초기화
      } else if (response.data.errors?.username) {
        setErrorMessage("중복된 닉네임입니다.");
        setIsDuplication(true);
      }
    } catch (error) {
      console.error("변경 실패:", error);
      setErrorMessage("알 수 없는 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>{isLoading ? <Loading /> : null}</div>
      <S.Container>
        <S.Blocks>
          <S.BolckImg src={EditMyinfo} />
          회원정보 수정
        </S.Blocks>
        <S.EditMain>
          <S.EditBox>
            <S.Username_t>현재 닉네임</S.Username_t>
            <S.Username_current>{currentUsername}</S.Username_current>
            <S.Username_t style={{ color: "#2E302D" }}>
              변경할 닉네임
            </S.Username_t>
            <S.Username_input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              style={{
                borderColor:
                  isDuplication || errorMessage ? "#F66466" : "#e0e0e0",
              }}
              maxLength={5}
            />
            {errorMessage && (
              <S.DuplicationMessage>{errorMessage}</S.DuplicationMessage>
            )}
          </S.EditBox>
          <S.SaveBox>
            <Button
              bgColor={isLoading || !newUsername ? "#747474" : "#000"}
              onClick={handleSave}
              disabled={isLoading || !newUsername}
            >
              {isLoading ? "저장 중..." : "저장하기"}
            </Button>
          </S.SaveBox>
        </S.EditMain>
      </S.Container>
    </>
  );
};

export default EditMyInfo;
