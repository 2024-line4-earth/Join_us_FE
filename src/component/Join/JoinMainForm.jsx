import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import BottomImage from "../../assets/img/BottomWrapper.svg";
import MiddleImage from "../../assets/img/MiddleWrapper.svg";
import ExImage from "../../assets/img/ExampleImage.svg";

const JoinMainForm = () => {
  const [image, setImage] = useState(ExImage); // 초기 이미지를 ExImage로 설정
  const navigate = useNavigate();

  useEffect(() => {
    const handleImageUpdate = () => {
      if (window.randomImage) {
        setImage(window.randomImage); // 랜덤 이미지로 설정
      } else {
        setImage(ExImage); // 예시 이미지로 복구
      }
    };

    window.addEventListener("randomImageUpdate", handleImageUpdate);

    return () => {
      window.removeEventListener("randomImageUpdate", handleImageUpdate);
    };
  }, []);

  const handleImageClick = () => {
    if (image !== ExImage) {
      navigate("/key", { state: { month: window.selectedMonth } });
    }
  };

  return (
    <S.JoinFormContainer>
      <S.JoinFormWrapper>
        <S.BottomWrapper>
          <img src={BottomImage} alt="Bottom Wrapper" />
        </S.BottomWrapper>
        <S.MiddleWrapper>
          <img src={MiddleImage} alt="Middle Wrapper" />
        </S.MiddleWrapper>
        <S.WrapperImage>
          <img
            src={image}
            alt="Random or Example Image"
            style={{ width: "216px", height: "384px", objectFit: "cover", borderRadius: "8px" }}
            onClick={handleImageClick}
          />
        </S.WrapperImage>
      </S.JoinFormWrapper>
    </S.JoinFormContainer>
  );
};

export default JoinMainForm;
