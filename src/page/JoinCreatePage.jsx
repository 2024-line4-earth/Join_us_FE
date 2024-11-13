// JoinCreatePage.js
import React, { useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import JoinCreateHeader from "../component/Join/JoinCreateHeader";
import JoinCreateMain from "../component/Join/JoinCreateMain";
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";
import BackJoin from "../assets/img/backJoin.svg";
import apiCall from "../api/Api";

const Layout = styled.div`
  width: 100%;
  position: relative;
  max-height: calc(100vh - 78px);
  overflow-y: auto;
  left: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const JoinCreatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [image, setImage] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [inputStyle, setInputStyle] = useState({}); // 테두리 스타일 상태
  const navigate = useNavigate();

  const goToNextPage = async () => {
    // 비어 있는 필드에 스타일 적용
    const errorStyle = {
      borderRadius: "8px",
      border: "1px solid var(--Negative-Error-Cancel, #F66466)",
      background: "var(--Gray2, #E0E0E0)",
    };

    setInputStyle({
      selectedKeyword: selectedKeyword ? {} : errorStyle,
      image: image ? {} : errorStyle,
      explanation: explanation ? {} : errorStyle,
    });

    if (image && explanation && selectedKeyword) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("explanation", explanation);
      formData.append("keyword", selectedKeyword);

      try {
        const response = await apiCall("join/card_post/", "POST", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Response:", response);

        if (response.message) {
          alert(response.message);
        }
        if (response.redirect_url) {
          navigate(response.redirect_url);
        }

        setCurrentPage(2);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      alert("이미지, 설명, 키워드를 모두 입력해주세요.");
    }
  };

  const goBackToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      navigate("/key");
    }
  };

  const goToJoinPage = () => {
    navigate("/join");
  };

  return (
    <> 
      <Layout> 
        <MainContainer>
          <JoinCreateHeader 
            currentPage={currentPage}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
            inputStyle={inputStyle.selectedKeyword} // 키워드 선택 스타일 전달
            goBackToPreviousPage={goBackToPreviousPage} 
          />
          <JoinCreateMain 
            currentPage={currentPage}
            image={image}
            setImage={setImage}
            explanation={explanation}
            setExplanation={setExplanation}
            inputStyle={inputStyle} // 이미지와 설명 스타일 전달
          />
          <S.SBtn onClick={goToNextPage}>
            {currentPage === 1 && (
              <Button bgColor={image && explanation && selectedKeyword ? "#1A1E1B" : "#747474"}>
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
      </Layout>
      <Footer />
    </>
  );
};

export default JoinCreatePage;
