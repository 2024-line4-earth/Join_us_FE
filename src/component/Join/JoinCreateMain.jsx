// JoinCreateMain.js
import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import * as S from "./styled";
import Plus from "../../assets/img/plus.svg";
import cameraF from "../../assets/img/cameraFrame.svg"; 
import GreenF from "../../assets/img/greenFrame.svg";
import GrayF from "../../assets/img/grayFrame.svg";
import ExImg from "../../assets/img/ExImg.svg";

const JoinCreateMain = ({ currentPage, image, setImage, explanation, setExplanation, inputStyle, selectedFrame, handleFrameSelect, setImageBlob }) => {
  
  const madeImgRef = useRef(null);
  
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

  const ImgClick = () => {
    document.getElementById("image").click();
  };

  useEffect(() => {
    const captureImage = async () => {
      if (currentPage === 3 && madeImgRef.current) {
        const canvas = await html2canvas(madeImgRef.current, { scale: 2 });
        canvas.toBlob((blob) => {
          if (blob) {
            setImageBlob(blob); // 캡처한 이미지를 JoinCreatePage.js로 전달
          }
        });
      }
    };
    captureImage();
  },); 

  return (
    <>
      {currentPage === 1 && (
        <>
          <S.CreateMainContainer onClick={ImgClick}>
            {image ? (
              <S.UploadedImg src={URL.createObjectURL(image)} alt="Uploaded" style={inputStyle.image} />
            ) : (
              <S.CreateFrame style={inputStyle.image} />
            )}
            <S.CreateBtn>
              <img src={Plus} alt="Plus" />
            </S.CreateBtn>
            <input
              type="file"
              id="image"
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
      {currentPage === 2 && (
        <>
          <S.FrameContainer>
            <S.FrameItem
                src={cameraF}
                alt="camera"
                onClick={() => handleFrameSelect("cameraF")}
                style={{ border: selectedFrame === "cameraF" ? "4px solid var(--Sub-color, #66A776)" : "none" }}
              />
              <S.FrameItem
                src={GreenF}
                alt="green"
                onClick={() => handleFrameSelect("greenF")}
                style={{ border: selectedFrame === "greenF" ? "4px solid var(--Sub-color, #66A776)" : "none" }}
              />
              <S.FrameItem
                src={GrayF}
                alt="gray"
                onClick={() => handleFrameSelect("grayF")}
                style={{ border: selectedFrame === "grayF" ? "4px solid var(--Sub-color, #66A776)" : "none" }}
              />
          </S.FrameContainer>
          <S.FrameText>
            <span>원하는 프레임을 선택해주세요.</span>
          </S.FrameText>
        </>
      )}
      {currentPage === 3 && (
        <>
          <S.MadeImg ref={madeImgRef}>
            <div
              style={{
                position: "relative",
                width: "234px",
                height: "416px",
                flexShrink: 0, // 크기 고정
              }}
            >
              {/* 업로드된 이미지 */}
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 업로드된 이미지의 비율 유지
                    zIndex: 1,
                  }}
                />
              )}
              {/* 선택된 프레임 */}
              {selectedFrame && (
                <img
                  src={
                    selectedFrame === "cameraF"
                      ? cameraF
                      : selectedFrame === "greenF"
                      ? GreenF
                      : GrayF
                  }
                  alt="Selected Frame"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // 프레임 비율 유지
                    zIndex: 2,
                  }}
                />
              )}
            </div>
          </S.MadeImg>
        </>
      )}
    </>
  );
};

export default JoinCreateMain;
