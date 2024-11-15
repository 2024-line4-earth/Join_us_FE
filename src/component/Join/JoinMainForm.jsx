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
    // randomImageUpdate 이벤트가 발생할 때마다 image 업데이트
    const handleImageUpdate = () => {
      if (window.randomImage) {
        setImage(window.randomImage); // 랜덤 이미지로 설정
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener("randomImageUpdate", handleImageUpdate);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("randomImageUpdate", handleImageUpdate);
    };
  }, []);

  const handleImageClick = () => {
    // 선택한 월 정보와 함께 /key 페이지로 이동
    navigate("/key", { state: { month: window.selectedMonth } });
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
          {/* 업데이트된 image를 표시 */}
          <img src={image} alt="Random or Example Image" 
          style={{ width: "216px", height: "384px", borderRadius: "8px"}} 
          onClick={handleImageClick}
          />
        </S.WrapperImage>
      </S.JoinFormWrapper>
    </S.JoinFormContainer>
  );
};

export default JoinMainForm;
