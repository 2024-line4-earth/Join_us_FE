import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import TextImg from "../assets/img/TextImg.svg";
import ExImg from "../assets/img/ExImg.svg";
import Check from "../assets/img/check.svg";
import Vector from "../assets/img/ExVector.svg";
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";
import JoinHeader from "../component/Join/JoinHeader";
import LeftBtn from "../assets/img/leftBtn.svg";
import RightBtn from "../assets/img/rightBtn.svg";
import preLeftBtn from "../assets/img/preLeftBtn.svg";
import apiCall from "../api/Api";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`;

const JoinExPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(null); // 사용자 ID 상태
  const navigate = useNavigate(); 

  useEffect(() => {
    // 페이지가 로드될 때 사용자 ID와 tutorial_completed 상태 가져오기
    const fetchTutorialStatus = async () => {
      try {
        const response = await apiCall("join/tutorial", "GET", null, null);
        setUserId(response.id); // 서버로부터 받은 id 값을 저장
      } catch (error) {
        console.error("Error fetching tutorial status:", error);
      }
    };

    fetchTutorialStatus();
  }, []);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 4 ? prevPage + 1 : prevPage));
  };

  const goToCreatePage = async () => {
    try {
      // POST 요청을 보내 tutorial_completed 값을 true로 업데이트
      const data = {
        id: userId, // id 포함
        tutorial_completed: true,
      };
      const response = await apiCall("join/tutorial", "POST", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response) {
        navigate("/create"); // POST 요청 성공 후 /create 페이지로 이동
      }
    } catch (error) {
      console.error("Error updating tutorial status:", error);
    }
  };

  return (
    <>
      <MainContainer>
        <JoinHeader />
        {currentPage < 3 && (
          <S.TextContainer>
            {currentPage === 1 && (
              <>
                <S.TextHeader currentPage={currentPage}>실천 카드가 무엇인가요?</S.TextHeader>
                <S.TextBody>
                  실천카드는 환경을 보호하는<br />
                  우리의 모습을 담은<br />
                  한 장의 이미지 카드에요!<br />
                  <br />
                  환경보호를 위한 안 쓰는 코드 빼기나,<br />
                  분리수거하는 등의 작은 행동들을<br />
                  사진을 찍어 간단한 글과 함께 올리면<br />
                  이를 <span>프레임</span>에 담아<br />
                  <span>하나의 카드</span>로 만들어<br />
                  실천 카드로 저장하게 된답니다!<br />
                </S.TextBody>
              </>
            )}
            {currentPage === 2 && (
              <>
                <S.TextHeader currentPage={currentPage}>실천 카드 만들면 뭐가 좋아요?</S.TextHeader>
                <S.TextBody>
                  실천카드를 통해 우리가 지구를 지키는<br />
                  작은 습관들을 만들 수 있어요!<br />
                  만들어진 <span>실천카드를</span><br />
                  <span>SNS에 공유하거나 이미지로</span> <br />
                  <span>저장하기만 해도 포인트가 적립</span>돼요!<br />
                  <br />
                  이렇게 모인 포인트로 <br />
                  디지털 스티커나 다양한 프레임, <br />
                  어스 테마 등을 구매할 수 있어요!<br />
                  <br />
                  그리고, 실천카드를 통해<br />
                  '어스' 카테고리 속 지구의 레벨을 올려<br />
                  지구를 더 푸르게 만들어보세요!
                </S.TextBody>
              </>
            )}
            {currentPage === 1 && (
              <S.TextImg>
                <img src={TextImg} alt="Text Image" />
              </S.TextImg>
            )}
          </S.TextContainer>
        )}
        {currentPage === 3 && (
          <S.ExContainer>
            <S.ExTextContainer>
              <span>실천 카드 예시안 입니다.</span>
            </S.ExTextContainer>
            <S.ExImage>
              <img src={ExImg} alt="Example Image" />
            </S.ExImage>
            <S.ExBottom>
              <S.BottomText>
                <span>간단한 글과 사진을</span> <br />
                <span>이렇게 실천 카드로 만들어드려요!</span>
              </S.BottomText>
              <S.CheckCircle>
                <div onClick={goToNextPage}>
                  <img src={Check} alt="Check Image" />
                </div>
              </S.CheckCircle>
            </S.ExBottom>
          </S.ExContainer>
        )}
        {currentPage === 4 && (
          <S.ExLastContainer>
            <S.ExLastText>
              그럼 한 번 <span>나만의 실천카드</span>를 만들어볼까요?
            </S.ExLastText>
            <S.Vector>
              <img src={Vector} alt="Vector Image" />
            </S.Vector>
            <Button bgColor="#417E59" onClick={goToCreatePage}>실천 카드 만들러가기</Button>
          </S.ExLastContainer>
        )}
        {currentPage < 3 && ( 
          <S.BtnContainer>
            <S.LeftBtnContainer onClick={goToPreviousPage}>
              <img src={currentPage === 1 ? preLeftBtn : LeftBtn} alt="LeftBtn" />
            </S.LeftBtnContainer>
            <div onClick={goToNextPage}>
              <img src={RightBtn} alt="RightBtn" />
            </div>
          </S.BtnContainer>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default JoinExPage;
