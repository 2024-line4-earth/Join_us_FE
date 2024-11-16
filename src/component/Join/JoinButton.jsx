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
      // API 호출 전 콘솔 로그
      console.log(`API 호출 시작: join/list?monthly=${month}`);
    
      // API 요청
      const response = await apiCall(`join/list`, "GET", { monthly: month }, token);
    
      // 응답 데이터 로그
      console.log("API 응답 데이터:", response);
    
      // response에서 data 추출
      const data = response.data;
    
      // 데이터 확인 로그
      console.log(`응답 data 확인:`, data);
    
      // 조건 확인 및 데이터 처리
      if (data && data.images && data.images.length > 0) {
        window.randomImage = data.images[0].image_url;
        window.selectedMonth = month;
        console.log(`선택된 월:`, window.selectedMonth);
        window.dispatchEvent(new Event("randomImageUpdate"));
        console.log(`randomImageUpdate 이벤트 디스패치 완료`);
      } else {
        console.log(`${month}월 데이터가 존재하지 않거나 이미지가 없습니다.`);
      }
    } catch (error) {
      // 에러 로그
      console.error(`${month}월 데이터를 가져오는 중 오류 발생:`, error);
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
