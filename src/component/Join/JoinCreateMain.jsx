import React from "react";
import * as S from "./styled";
import Plus from "../../assets/img/plus.svg";
import cameraF from "../../assets/img/cameraFrame.svg"; // 예시 파일 이름
import GreenF from "../../assets/img/greenFrame.svg";
import GrayF from "../../assets/img/grayframe.svg";
import ExImg from "../../assets/img/ExImg.svg";

const JoinCreateMain = ({ currentPage }) => {
  return (
    <>
      {currentPage === 1 && (
        <>
          <S.CreateMainContainer>
            <S.CreateFrame />
            <S.CreateBtn>
              <img src={Plus} alt="Plus" />
            </S.CreateBtn>
          </S.CreateMainContainer>
          <S.CreateBottomContainer>
            <S.CautionText>
              <span>*사진은 16:9 비율로 찍어주세요!</span>
            </S.CautionText>
            <S.CreateText
              placeholder="사진에 대한 설명을 간단히 써주세요."
              type="text"
            ></S.CreateText>
          </S.CreateBottomContainer>
        </>
      )}
      {currentPage === 2 && (
        <>
          <S.FrameContainer>
            <S.FrameItem src={cameraF} alt="camera" />
            <S.FrameItem src={GreenF} alt="green" />
            <S.FrameItem src={GrayF} alt="gray" />
          </S.FrameContainer>
          <S.FrameText>
            <span>원하는 프레임을 선택해주세요.</span>
          </S.FrameText>
        </>
      )}
      {currentPage === 3 && (
        <>
          <S.MadeImg>
            <img src={ExImg} alt="ExImg" />
          </S.MadeImg>
        </>
      )}
    </>
  );
};

export default JoinCreateMain;
