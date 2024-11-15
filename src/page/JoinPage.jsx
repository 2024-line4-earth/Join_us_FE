import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/common/Button";
import Footer from "../component/common/Footer";
import JoinMainForm from "../component/Join/JoinMainForm";
import JoinHeader from "../component/Join/JoinHeader";
import JoinButton from "../component/Join/JoinButton";
import apiCall from "../api/Api";
import Cookies from "js-cookie";

const Layout = styled.div`
  /* width: calc(100% - 2em); */
  width: 100%;
  position: relative;
  max-height : calc(100vh - 78px - 30px + 1em);
  overflow-y : auto;
  left: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`;

const Text = styled.div`
  margin-top: 8px;
  color: var(--Gray4, #747474);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.48px;

  span {
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.48px;
  }
`;

const JoinPage = () => {
  const [tutorialCompleted, setTutorialCompleted] = useState(false); // 기본값 false로 설정
  const navigate = useNavigate();
  const token = Cookies.get("access_token");

  useEffect(() => {
    // tutorial_completed 상태를 가져오는 함수
    const fetchTutorialStatus = async () => {
      try {
        const response = await apiCall("join/tutorial/", "GET", null, token);
        console.log(response);
        setTutorialCompleted(response.data.tutorial_completed); // tutorial_completed 값을 상태에 설정
      } catch (error) {
        console.error("Error fetching tutorial status:", error);
      }
    };

    fetchTutorialStatus();
  }, []);

  // 실천 카드 만들러가기 버튼 클릭 시 실행되는 함수
  const handleButtonClick = () => {
    if (tutorialCompleted) {
      navigate("/create"); // tutorial_completed가 true일 경우 /create로 이동
    } else {
      navigate("/ex"); // tutorial_completed가 false일 경우 /ex로 이동
    }
  };

  return (
    <>
      <JoinHeader />
      <Layout>
        <MainContainer>
          <JoinMainForm />
          <Text>
            카드를 <span>클릭해</span> 이번달 실천카드를 확인해보세요!
          </Text>
          <JoinButton tutorialCompleted={tutorialCompleted} />
          <Button bgColor="#1A1E1B" onClick={handleButtonClick}>
            실천 카드 만들러가기
          </Button>
        </MainContainer>
      </Layout>
      <Footer />
    </>
  );
};

export default JoinPage;