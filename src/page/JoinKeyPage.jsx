import React from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import JoinKeyHeader from "../component/Join/JoinKeyHeader";
import Footer from "../component/common/Footer";
import JoinKeyMain from "../component/Join/JoinKeyMain";
import { useLocation } from "react-router-dom"; // useLocation import 추가

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  height: 90vh; /* 전체 화면을 차지하도록 설정 */
`;

const Layout = styled.div`
  width: 100%;
  position: relative;
  max-height: calc(100vh - 78px);
  overflow-y: hidden; /* Layout 자체는 스크롤 되지 않도록 설정 */
  left: 0;
`;

// JoinKeyMain만 스크롤이 가능하도록 하는 컨테이너
const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto; /* 세로 스크롤 허용 */
  padding-bottom: 50px; /* 스크롤 끝의 사진이 잘리지 않도록 여백 추가 */
`;

const JoinKeyPage = () => {
  const location = useLocation();
  const month = location.state?.month || "월 선택 안 됨"; // 전달된 month 값이 없으면 기본 메시지 표시

  return (
    <>
      <Layout>
        <MainContainer>
          <JoinKeyHeader />
          <S.KeyTextContainer>
            <span>{`2024.${month}`}</span>
          </S.KeyTextContainer>
          <ScrollContainer>
            <JoinKeyMain month={month}/>
          </ScrollContainer>
        </MainContainer>
        <Footer />
      </Layout>
    </>
  );
};

export default JoinKeyPage;
