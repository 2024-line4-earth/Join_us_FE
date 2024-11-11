import React, { useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import JoinCreateHeader from "../component/Join/JoinCreateHeader";
import JoinCreateMain from "../component/Join/JoinCreateMain";
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";
import BackJoin from "../assets/img/backJoin.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const JoinCreatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // 페이지가 다음 페이지로 넘어가는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
  };

  // LeftBtn 클릭 시 currentPage를 1로 설정하는 함수
  const goBackToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToJoinPage = () => {
    navigate("/join")
  };

  return (
    <>  
        <MainContainer>
          {/* goBackToPreviousPage를 Header에 전달 */}
          <JoinCreateHeader currentPage={currentPage} goBackToPreviousPage={goBackToPreviousPage} />
          <JoinCreateMain currentPage={currentPage} />
          <S.SBtn onClick={goToNextPage}>
            {currentPage === 1 && (
            <Button bgColor="#747474">
              프레임 고르기
            </Button>
            )}
            {currentPage === 2 && (
            <Button bgColor="#747474">
              실천카드 만들기
            </Button>
            )}
            {currentPage === 3 && (
              <>
                <S.SaveImg>
                  <span>50 point</span>
                  <Button bgColor="#000000">
                    이미지 저장하기
                  </Button>
                </S.SaveImg>
                <S.Insta>
                  <span>200 point</span>
                  <Button bgColor="#000000">
                    인스타그램 스토리 공유하기
                  </Button>
                </S.Insta>
                <S.BackContainer onClick={goToJoinPage}>
                  <S.BackJoin>
                    <img src={BackJoin} alt="backjoin" />
                    <span>조인으로 돌아가기</span>
                  </S.BackJoin>
                </S.BackContainer>
              </>
            )}
          </S.SBtn>
        </MainContainer>
      <Footer />
    </>
  );
};

export default JoinCreatePage;
