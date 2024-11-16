import React, { useEffect, useState } from "react";
import * as S from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const JoinKeyMain = ({ month, selectedKeywordId }) => {
  const [image, setImage] = useState([]);
  const token = Cookies.get("access_token");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = selectedKeywordId === null
          ? `join/list/?monthly=${month}` // 전체 이미지를 가져오는 URL
          : `join/list/?monthly=${month}&category_id=${selectedKeywordId}`; // 특정 키워드로 필터링된 URL

        console.log("Fetching images with URL:", url);

        const response = await apiCall(url, "GET", null, token);
        console.log("API Response:", response);
        
        if (response.data) {
          setImage(response.data.images);
        }
      } catch (error) {
        console.error("이미지 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (month) {
      fetchImages();
    }
  }, [month, selectedKeywordId, token]);

  return (
    <S.KeyMainContainer>
      {image && image.map((imagesData, index) => (
        <S.ImageCard key={index}>
          <img src={imagesData.image_url} alt={`Images ${index + 1}`} style={{ width: "144px", height: "256px", objectFit: "cover", borderRadius: "8px" }}/>
        </S.ImageCard>
      ))}
    </S.KeyMainContainer>
  );
};

export default JoinKeyMain;
