import React, { useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import JoinKeyHeader from "../component/Join/JoinKeyHeader";
import Footer from "../component/common/Footer";
import JoinKeyMain from "../component/Join/JoinKeyMain";
import { useLocation } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  height: 90vh;
`;

const Layout = styled.div`
  width: 100%;
  position: relative;
  max-height: calc(100vh - 78px);
  overflow-y: hidden;
  left: 0;
`;

const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px;
`;

const JoinKeyPage = () => {
  const location = useLocation();
  const month = location.state?.month || "월 선택 안 됨";
  
  const [selectedKeywordId, setSelectedKeywordId] = useState(null);

  const handleKeywordChange = (id) => {
    setSelectedKeywordId(id);
  };

  return (
    <>
      <Layout>
        <MainContainer>
          <JoinKeyHeader onKeywordChange={handleKeywordChange} />
          <S.KeyTextContainer>
            <span>{`2024.${month}`}</span>
          </S.KeyTextContainer>
          <ScrollContainer>
            <JoinKeyMain month={month} selectedKeywordId={selectedKeywordId} />
          </ScrollContainer>
        </MainContainer>
        <Footer />
      </Layout>
    </>
  );
};

export default JoinKeyPage;
