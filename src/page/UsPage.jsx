import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../component/common/Footer";
import UsHeader from "../component/us/UsHeader";
import UsRanking from "../component/us/UsRanking";
import UsLevel from "../component/us/UsLevel";
import UsBottom from "../component/us/UsBottom";
import apiCall from "../api/Api";
import Cookies from "js-cookie";
import Modal1 from "../component/common/Modal1";

const Layout = styled.div`
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  max-height: calc(100vh - 78px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UsPage = () => {
  const [isLevel_Downgrade, setIsLevel_Downgrade] = useState();
  const [myName, setMyName] = useState("");
  const token = Cookies.get("access_token");

  useEffect(() => {
    getIsLevelDowngrade();
  }, []);

  // us - level_downgrade 조회 함수
  const getIsLevelDowngrade = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    try {
      // us 조회 API 호출 (GET 요청)
      const response = await apiCall("us/us/", "GET", null, token);
      console.log("level Downgrade 조회 api 응답", response);

      const { my, level_downgrade } = response.data;

      setMyName(my.username);
      setIsLevel_Downgrade(level_downgrade);
    } catch (error) {
      console.error("level downgrade 조회 실패", error);
    }
  };

  return (
    <>
      {isLevel_Downgrade && (
        <Modal1
          mainTextColor="#2E302D"
          mainText={`${myName}님이 안 오신 동안 지구가 당신을 기다리고 있었어요.`}
          subTextColor="#F66466"
          subText="*안오신 날 동안 지구의 레벨이 2단계만큼 내려갔어요. 
다시 실천카드를 작성하며 지구 레벨을 올려봐요!"
          buttonColor="#1A1E1B"
        />
      )}
      <Layout>
        <UsHeader />
        <UsRanking />
        <UsLevel />
        <UsBottom />
        <Footer />
      </Layout>
    </>
  );
};

export default UsPage;
