import React, { useState } from "react";
import * as S from "./styled";
import LeftBtn from '../../assets/img/leftBtn.svg';
import down from '../../assets/img/down.svg';
import create from '../../assets/img/create.svg';

const JoinKeyHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedKeyword, setSelectedKeyword] = useState("키워드 선택");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectKeyword = (keyword) => {
    setSelectedKeyword(keyword);
    setIsDropdownOpen(false); 
  };

  return ( 
    <>
      <S.KeyHeader>
        <S.HeaderBtn>
          <img src={LeftBtn} alt="Left Btn" />
        </S.HeaderBtn>
        <S.DropDownContainer>
          <S.HeaderRight>
            <S.Select onClick={toggleDropdown}>
              <span>{selectedKeyword}</span> <img src={down} alt="down toggle"/>
            </S.Select>
            <S.Create>
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
    </>
  );
};

export default JoinKeyHeader;
