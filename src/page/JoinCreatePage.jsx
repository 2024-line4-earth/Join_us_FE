import React, { useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import JoinCreateHeader from "../component/Join/JoinCreateHeader";
import JoinCreateMain from "../component/Join/JoinCreateMain";
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const JoinCreatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지가 다음 페이지로 넘어가는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 2 ? prevPage + 1 : prevPage));
  };

  // LeftBtn 클릭 시 currentPage를 1로 설정하는 함수
  const goBackToPreviousPage = () => {
    setCurrentPage(1);  // currentPage를 1로 설정
  };

  return (
    <>  
      <MainContainer>
        {/* goBackToPreviousPage를 Header에 전달 */}
        <JoinCreateHeader currentPage={currentPage} goBackToPreviousPage={goBackToPreviousPage} />
        <JoinCreateMain currentPage={currentPage} />
        <S.SBtn onClick={goToNextPage}>
          <Button bgColor="#747474">
            {currentPage === 1 ? "프레임 고르기" : "실천카드 만들기"}
          </Button>
        </S.SBtn>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinCreatePage;
