import React, { useState } from "react";
import * as S from "./styled";
import LeftBtn from '../../assets/img/leftBtn.svg';
import down from '../../assets/img/down.svg';

const JoinCreateHeader = ({ currentPage, goBackToPreviousPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return ( 
    <>
      <S.KeyHeader currentPage={currentPage}>
        {/* LeftBtn 클릭 시 goBackToPreviousPage 실행 */}
        <S.HeaderBtn onClick={goBackToPreviousPage}>
          <img src={LeftBtn} alt="Left Btn" />
        </S.HeaderBtn>
        <S.HeaderRight>
          {currentPage === 1 && (
            <S.Select>
              <span>키워드 선택</span> 
              <img src={down} alt="down toggle" onClick={toggleDropdown} />
            </S.Select>
          )}
        </S.HeaderRight>
        {currentPage === 1 && isDropdownOpen && (
          <S.DropdownMenu>
            <S.DropdownItem>전체</S.DropdownItem>
            <S.DropdownItem>일회용품</S.DropdownItem>
            <S.DropdownItem>분리수거</S.DropdownItem>
            <S.DropdownItem>텀블러</S.DropdownItem>
            <S.DropdownItem>대기전력</S.DropdownItem>
            <S.DropdownItem>기타</S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.KeyHeader>
    </>
  );
};

export default JoinCreateHeader;
