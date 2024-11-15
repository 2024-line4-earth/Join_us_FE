import React, { useState, useEffect } from "react";
import * as S from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const JoinButton = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 버튼의 인덱스
  const [tutorialCompleted, setTutorialCompleted] = useState(null); // tutorial_completed 상태
  const [monthLinks, setMonthLinks] = useState([]);
  const [userId, setUserId] = useState(null); // 사용자 ID 상태
  const token = Cookies.get("access_token");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 tutorial_completed와 id 상태를 가져오기
    const fetchTutorialStatus = async () => {
      try {
        const response = await apiCall("join/tutorial/", "GET", null, token); // API 호출
        setTutorialCompleted(response.tutorial_completed); // tutorial_completed 값 설정
        setUserId(response.id); // id 값 설정
      } catch (error) {
        console.error("튜토리얼을 완료해야 카드 작성이 가능합니다.", error); // 에러 로그 출력
      }
    };

    fetchTutorialStatus();
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 month_links 데이터를 가져오기
    const fetchMonthLinks = async () => {
      try {
        const response = await apiCall("join/", "GET", null, token); // API 호출
        console.log(response);
        setMonthLinks(response.data.month_links); // 응답으로부터 month_links 설정
      } catch (error) {
        console.error("월 링크 데이터를 가져오는 중 오류 발생", error); // 에러 로그 출력
      }
    };

    fetchMonthLinks();
  }, []);

  // 현재 월 가져오기 (0: 1월, 1: 2월, ..., 11: 12월)
  // const currentMonth = new Date().getMonth();
  
  // // 현재 월부터 시작하는 월 배열 생성
  // const months = [
  //   ...Array.from({ length: 12 - currentMonth }, (_, i) => `${currentMonth + i + 1}월`),
  //   ...Array.from({ length: currentMonth }, (_, i) => `${i + 1}월`)
  // ];

  // 버튼 클릭 시 클릭된 버튼의 인덱스를 activeIndex로 설정
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <S.ScrollContainer>
      <S.ExButton
        isClicked={activeIndex === 0}
        onClick={() => handleClick(0)}
      >
        예시
      </S.ExButton>
      {monthLinks.map((link, index) => (
        <S.ExButton
          key={index + 1}
          isClicked={activeIndex === index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {link.month}월
        </S.ExButton>
      ))}
    </S.ScrollContainer>
  );
};

export default JoinButton;
