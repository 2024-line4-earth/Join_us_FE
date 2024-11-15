import React, { useState, useEffect } from "react";
import * as S from "./styled";
import EditMyinfo from "../../assets/img/MyEditMyinfo.svg";
import Button from "../../component/common/Button";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

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

  // 현재 닉네임
  const fetchUserInfo = async () => {
    try {
      const response = await apiCall("/us/us/", "GET", null, token);
      setCurrentUsername(response.data.my.username);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // 변경할 new 닉네임
  const handleSave = async () => {
    if (!newUsername) {
      setErrorMessage("변경할 닉네임을 입력해주세요.");
      return;
    }
    if (currentUsername == newUsername) {
      setErrorMessage("현재 닉네임과 같습니다.");
    }

    setIsLoading(true);
    try {
      const response = await apiCall(
        "users/profile/update/",
        "PATCH",
        { username: newUsername },
        token
      );

      if (response.data.username === newUsername) {
        setCurrentUsername(newUsername);
        setNewUsername("");
        alert("닉네임이 성공적으로 변경되었습니다 🪄");
      }
    } catch (error) {
      console.error("Error during save:", error);
      if (error.response && error.response.data.username) {
        setIsDuplication(true);
        setErrorMessage(error.response.data.username[0]);
      } else {
        setErrorMessage("중복된 닉네임입니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
            style={{ borderColor: isDuplication ? "#F66466" : "#e0e0e0" }}
            maxLength={5}
          />
          {errorMessage && (
            <S.DuplicationMessage>{errorMessage}</S.DuplicationMessage>
          )}
        </S.EditBox>
        <S.SaveBox>
          {isLoading || !newUsername ? (
            <Button bgColor="#747474" disabled={isLoading}>
              {isLoading ? "저장 중..." : "저장하기"}
            </Button>
          ) : (
            <Button bgColor="#000" onClick={handleSave} disabled={isLoading}>
              저장하기
            </Button>
          )}
        </S.SaveBox>
      </S.EditMain>
    </S.Container>
  );
};

export default EditMyInfo;
