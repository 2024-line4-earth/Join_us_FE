import React, { useState, useEffect } from "react";
import * as S from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const JoinButton = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 버튼의 인덱스
  const [monthLinks, setMonthLinks] = useState([]);
  const token = Cookies.get("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMonthLinks = async () => {
      try {
        const response = await apiCall("join/", "GET", null, token);
        setMonthLinks(response.data.month_links);
        console.log(response.data);
      } catch (error) {
        console.error("월 링크 데이터를 가져오는 중 오류 발생", error);
      }
    };

    fetchMonthLinks();
  }, []);

  const fetchMonthlyData = async (month) => {
    if (month === null) {
      // 예시 이미지를 표시하도록 설정
      window.randomImage = null; // 예시 이미지로 돌아가도록 설정
      window.selectedMonth = null;
      window.dispatchEvent(new Event("randomImageUpdate")); // 예시 이미지 표시 이벤트 발생
      return;
    }

    try {
      const response = await apiCall(`join/list`, "GET", { monthly: month }, token);
      const data = response.data;
      console.log(response);
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        window.randomImage = data[randomIndex].image;
        window.selectedMonth = month;
        window.dispatchEvent(new Event("randomImageUpdate"));
      }
    } catch (error) {
      console.error(`${month}월 데이터를 가져오는 중 오류 발생`, error);
    }
  };

  const handleClick = (index, month) => {
    setActiveIndex(index);
    fetchMonthlyData(month);
  };

  return (
    <S.ScrollContainer>
      <S.ExButton
        isClicked={activeIndex === 0}
        onClick={() => handleClick(0, null)}
      >
        예시
      </S.ExButton>
      {monthLinks.map((link, index) => (
        <S.ExButton
          key={index + 1}
          isClicked={activeIndex === index + 1}
          onClick={() => handleClick(index + 1, link.month)}
        >
          {link.month}월
        </S.ExButton>
      ))}
    </S.ScrollContainer>
  );
};

export default JoinButton;
