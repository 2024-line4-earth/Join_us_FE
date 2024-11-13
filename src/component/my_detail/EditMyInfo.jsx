import React, { useState, useEffect } from "react";
import * as S from "./styled";
import EditMyinfo from "../../assets/img/MyEditMyinfo.svg";
import Button from "../../component/common/Button";

const EditMyInfo = () => {
  const username = "조인어스"; // 현재 닉네임
  const [changename, setChangename] = useState(""); // 변경할 닉네임
  const [isDuplication, setIsDuplication] = useState(false); // 중복 확인

  // 임시로 중복 검사하는 함수 (백엔드 연동 전 테스트용)
  const checkDuplication = (name) => {
    // 예시: 'test'라는 닉네임이 중복된다고 가정
    if (name === "test") {
      return true; // 중복된 닉네임
    }
    return false; // 중복되지 않은 닉네임
  };

  // useEffect를 사용하여 changename이 바뀔 때마다 중복 확인
  useEffect(() => {
    if (changename) {
      const isDuplicate = checkDuplication(changename); // 임시 중복 확인 함수 호출
      setIsDuplication(isDuplicate);
    } else {
      setIsDuplication(false); // changename이 빈 문자열이면 중복 확인하지 않음
    }
  }, [changename]); // changename 값이 변경될 때마다 실행

  //   useEffect(() => {
  //     const checkDuplication = async () => {
  //       if (changename) {
  //         try {
  //           const response = await fetch(`/api/checkNickname?nickname=${changename}`);
  //           const data = await response.json();
  //           setIsDuplication(data.isDuplicate);
  //         } catch (error) {
  //           console.error("Error checking nickname duplication:", error);
  //         }
  //       }
  //     };

  //     checkDuplication();
  //   }, [changename]); // changename이 변경될 때마다 중복 확인을 실행

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={EditMyinfo} />
        회원정보 수정
      </S.Blocks>
      <S.EditMain>
        <S.EditBox>
          <S.Username_t>현재 닉네임</S.Username_t>
          <S.Username_current>{username}</S.Username_current>
          <S.Username_t style={{ color: "#2E302D" }}>
            변경할 닉네임
          </S.Username_t>
          <S.Username_input
            type="text"
            value={changename}
            onChange={(e) => setChangename(e.target.value)}
            style={{ borderColor: isDuplication ? "#F66466" : "#e0e0e0" }}
            maxLength={4}
          ></S.Username_input>
          {isDuplication && (
            <S.DuplicationMessage>중복된 닉네임입니다.</S.DuplicationMessage>
          )}
        </S.EditBox>
        <S.SaveBox>
          <Button bgColor="#000">저장하기</Button>
        </S.SaveBox>
      </S.EditMain>
    </S.Container>
  );
};

export default EditMyInfo;
