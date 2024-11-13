// JoinCreateMain.js
import React from "react";
import * as S from "./styled";
import Plus from "../../assets/img/plus.svg";

const JoinCreateMain = ({ currentPage, image, setImage, explanation, setExplanation, inputStyle }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleExplanationChange = (event) => {
    const text = event.target.value;
    setExplanation(text);
  };

  const handlePlusClick = () => {
    document.getElementById("image-upload-input").click();
  };

  return (
    <>
      {currentPage === 1 && (
        <>
          <S.CreateMainContainer>
            {image ? (
              <S.UploadedImg src={URL.createObjectURL(image)} alt="Uploaded" style={inputStyle.image} />
            ) : (
              <S.CreateFrame style={inputStyle.image} />
            )}
            <S.CreateBtn onClick={handlePlusClick}>
              <img src={Plus} alt="Plus" />
            </S.CreateBtn>
            <input
              type="file"
              id="image-upload-input"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </S.CreateMainContainer>
          <S.CreateBottomContainer>
            <S.CautionText>
              <span>*사진은 16:9 비율로 찍어주세요!</span>
            </S.CautionText>
            <S.CreateText
              placeholder="사진에 대한 설명을 간단히 써주세요."
              type="text"
              value={explanation}
              onChange={handleExplanationChange}
              style={inputStyle.explanation} // 조건부 스타일 적용
            ></S.CreateText>
          </S.CreateBottomContainer>
        </>
      )}
    </>
  );
};

export default JoinCreateMain;
