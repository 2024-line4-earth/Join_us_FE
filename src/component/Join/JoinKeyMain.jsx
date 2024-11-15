import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useLocation } from "react-router-dom";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
// import ExImage from "../../assets/img/ExImg.svg";

const KEYWORD_CHOICES = [
  { id: 0, keyword: "DISPOSABLES", label: "일회용품" },
  { id: 1, keyword: "RECYCLING", label: "분리수거" },
  { id: 2, keyword: "TUMBLER", label: "텀블러" },
  { id: 3, keyword: "STANDBY_POWER", label: "대기전력" },
  { id: 4, keyword: "OTHER", label: "기타" },
];

const JoinKeyMain = () => {
  const location = useLocation();
  const month = location.state?.month;
  const [selectedKeyword, setSelectedKeyword] = useState(KEYWORD_CHOICES[0].id);
  const [images, setImages] = useState([]);
  const token = Cookies.get("access_token");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await apiCall(`join/list/?monthly=${month}`, "GET", null , token);
        console.log(response);
        if (response.data) {
          setImages(response.data);
        }
      } catch (error) {
        console.error("이미지 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (month) {
      fetchImages();
    }
  }, [month, selectedKeyword, token]);

  const handleKeywordChange = (event) => {
    setSelectedKeyword(Number(event.target.value));
  };

  return (
    <>
      <S.KeyMainContainer>
        {images && images.map((imageData, index) => (
          <S.ImageCard key={index}>
            <img src={imageData.image} alt={`Image ${index + 1}`} />
          </S.ImageCard>
        ))}
      </S.KeyMainContainer>
    </>
  );
};

export default JoinKeyMain;
