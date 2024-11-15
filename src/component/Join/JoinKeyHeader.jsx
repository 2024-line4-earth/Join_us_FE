import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import LeftBtn from '../../assets/img/leftBtn.svg';
import down from '../../assets/img/down.svg';
import create from '../../assets/img/create.svg';
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

export const KEYWORD_CHOICES = [
  { id: 0, keyword: "DISPOSABLES", label: "일회용품" },
  { id: 1, keyword: "RECYCLING", label: "분리수거" },
  { id: 2, keyword: "TUMBLER", label: "텀블러" },
  { id: 3, keyword: "STANDBY_POWER", label: "대기전력" },
  { id: 4, keyword: "OTHER", label: "기타" },
];

const JoinKeyHeader = ({ onKeywordChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState("키워드 선택");
  const [tutorialCompleted, setTutorialCompleted] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("access_token");

  useEffect(() => {
    const fetchTutorialStatus = async () => {
      try {
        const response = await apiCall("join/tutorial/", "GET", null, token);
        setTutorialCompleted(response.data.tutorial_completed);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTutorialStatus();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectKeyword = (label) => {
    console.log("Selected Label:", label);
    const keywordData = KEYWORD_CHOICES.find((choice) => choice.label === label);
    const keywordId = keywordData ? keywordData.id : null;
    console.log("Keyword ID found:", keywordId);
    
    setSelectedKeyword(label);
    onKeywordChange(keywordId); // 선택된 id를 전달
    setIsDropdownOpen(false);
  };

  const handleCreateClick = () => {
    if (tutorialCompleted) {
      navigate("/create");
    } else {
      alert("튜토리얼을 완료해야 카드 작성이 가능합니다.");
    }
  };

  return (
    <S.KeyHeader>
      <S.HeaderBtn>
        <img src={LeftBtn} alt="Left Btn" />
      </S.HeaderBtn>
      <S.DropDownContainer>
        <S.HeaderRight>
          <S.Select onClick={toggleDropdown}>
            <span>{selectedKeyword}</span> <img src={down} alt="down toggle"/>
          </S.Select>
          <S.Create onClick={handleCreateClick}>
            <img src={create} alt="create btn" />
          </S.Create>
        </S.HeaderRight>
        {isDropdownOpen && (
          <S.DropdownMenu>
            <S.DropdownItem onClick={() => handleSelectKeyword("전체")}>전체</S.DropdownItem>
            <S.DropdownItem onClick={() => handleSelectKeyword("일회용품")}>일회용품</S.DropdownItem>
            <S.DropdownItem onClick={() => handleSelectKeyword("분리수거")}>분리수거</S.DropdownItem>
            <S.DropdownItem onClick={() => handleSelectKeyword("텀블러")}>텀블러</S.DropdownItem>
            <S.DropdownItem onClick={() => handleSelectKeyword("대기전력")}>대기전력</S.DropdownItem>
            <S.DropdownItem onClick={() => handleSelectKeyword("기타")}>기타</S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.DropDownContainer>
    </S.KeyHeader>
  );
};

export default JoinKeyHeader;
