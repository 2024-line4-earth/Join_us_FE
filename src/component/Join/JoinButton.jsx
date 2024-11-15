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
    // 컴포넌트가 마운트될 때 month_links 데이터를 가져오기
    const fetchMonthLinks = async () => {
      try {
        const response = await apiCall("join/", "GET", null, token); // API 호출
        setMonthLinks(response.data.month_links); // 응답으로부터 month_links 설정
        console.log(response.data);
      } catch (error) {
        console.error("월 링크 데이터를 가져오는 중 오류 발생", error); // 에러 로그 출력
      }
    };

    fetchMonthLinks();
  }, []);

  const fetchMonthlyData = async (month) => {
    try {
      const response = await apiCall(`join/list`, "GET", { monthly: month }, token);
      const data = response.data;
      console.log(response);
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length); // 랜덤 인덱스 생성
        window.randomImage = response.data[randomIndex].image; // window 객체에 랜덤 이미지 저장
        window.selectedMonth = month; // 선택한 월을 전역 객체에 저장
        window.dispatchEvent(new Event("randomImageUpdate")); // 이벤트 발생
      }
    } catch (error) {
      console.error(`${month}월 데이터를 가져오는 중 오류 발생`, error); // 에러 로그 출력
    }
  };

  const handleClick = (index, month) => {
    setActiveIndex(index);
    if (month) {
      fetchMonthlyData(month); // 월별 데이터 가져오기
    }
  };

  return (
    <S.ScrollContainer>
      <S.ExButton
        isClicked={activeIndex === 0}
        onClick={() => handleClick(0, null)} // 예시 버튼 클릭 시 month 값 null로 전달
      >
        예시
      </S.ExButton>
      {monthLinks.map((link, index) => (
        <S.ExButton
          key={index + 1}
          isClicked={activeIndex === index + 1}
          onClick={() => handleClick(index + 1, link.month)} // 클릭된 월 전달
        >
          {link.month}월
        </S.ExButton>
      ))}
    </S.ScrollContainer>
  );
};

export default JoinButton;
