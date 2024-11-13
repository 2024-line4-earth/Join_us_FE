// JoinCreateHeader.js
import React, { useState } from "react";
import * as S from "./styled";
import LeftBtn from '../../assets/img/leftBtn.svg';
import down from '../../assets/img/down.svg';

const JoinCreateHeader = ({ currentPage, selectedKeyword, setSelectedKeyword, inputStyle, goBackToPreviousPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectKeyword = (keyword) => {
    setSelectedKeyword(keyword);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <S.KeyHeader currentPage={currentPage}>
        <S.HeaderBtn onClick={goBackToPreviousPage}>
          <img src={LeftBtn} alt="Left Btn" />
        </S.HeaderBtn>
        <S.DropDownContainer>
          <S.HeaderRight>
            <S.Select onClick={toggleDropdown} style={inputStyle}>
              <span>{selectedKeyword || "키워드 선택"}</span>
              <img src={down} alt="down toggle" />
            </S.Select>
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
    </>
  );
};

export default JoinCreateHeader;
