import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import * as S from "../component/Join/styled";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import JoinCreateHeader from "../component/Join/JoinCreateHeader";
import JoinCreateMain from "../component/Join/JoinCreateMain";
import Footer from "../component/common/Footer";
import Button from "../component/common/Button";
import BackJoin from "../assets/img/backJoin.svg";
import apiCall from "../api/Api";

const Layout = styled.div`
  width: 100%;
  position: relative;
  max-height: calc(100vh - 78px + 1em);
  height: calc(100vh - 78px  + 1em);
  overflow-y: auto;
  left: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 10px;
`;

const JoinCreatePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [cardPostId, setCardPostId] = useState(null);
  const [image, setImage] = useState("");
  const [explanation, setExplanation] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [selectedFrame, setSelectedFrame] = useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const navigate = useNavigate();
  const token = Cookies.get("access_token");
  const location = useLocation();
  const month = location.state?.month; // 선택된 월 가져오기

  const createSubmit = async () => {
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
      try {
        const keywordMap = {
          "전체": "ALL",
          "일회용품": "DISPOSABLES",
          "분리수거": "RECYCLING",
          "텀블러": "TUMBLER",
          "대기전력": "STANDBY_POWER",
          "기타": "OTHER"
        };
  
        // 선택한 한국어 키워드를 영어로 변환
        const englishKeyword = keywordMap[selectedKeyword] || selectedKeyword;
  
        const formData = new FormData();
        formData.append("image", image);
        formData.append("explanation", explanation);
        formData.append("keyword", englishKeyword);

        // axios로 FormData 전송
        const response = await axios.post(
          `https://port-0-gachi-be-m3b8fmw54d947a5b.sel4.cloudtype.app/join/card_post/`,
          formData,
          {
            headers: {
              Authorization: `token ${token}`, // 토큰 설정
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        console.log("Response:", response);
  
        if (response.data.message === "카드가 성공적으로 작성되었습니다.") {
          setCardPostId(response.data.card_post_id);  // card_post_id 저장
          setCurrentPage(2);
        }
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      alert("이미지, 설명, 키워드를 모두 입력해주세요.");
    }
  };

  // useEffect(() => {
  //   const frameSelect = async () => {
  //     try {
  //       const response = await apiCall(`join/frame_selection/?cardpost_id=${cardPostId}`, "GET", null, token);
  //       console.log(response);
  //     }
  //     catch(error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   frameSelect();
  // }, []);
  
  // const frameSubmit = async () => {
  //   try {
  //     const data = {
  //       cardpost_id: cardPostId,
  //       frame_completed: true,
  //     };
  //     const response = await apiCall("join/frame_selection/?cardpost_id=<int>", "POST", data, token);
  //     console.log("POST 요청 응답:", response); // POST 요청 응답 데이터 로그

  //     if (response.data.message === "프레임 잘 골랐습니다.") {
  //       setCurrentPage(3); 
  //     }
  //   } catch (error) {
  //     console.error("Error updating tutorial status:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (currentPage === 3) {
  //       try {
  //         const response = await axios.get(
  //           `https://port-0-gachi-be-m3b8fmw54d947a5b.sel4.cloudtype.app/join/completed/`,
  //           {
  //             headers: {
  //               Authorization: `token ${token}`,
  //             },
  //           }
  //         );
  //         console.log("GET 요청 성공:", response.data);
  //       } catch (error) {
  //         console.error("GET 요청 실패:", error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [currentPage, cardPostId]);

  // 이미지 저장하기 버튼 클릭 시 POST 요청
  const handleImageSave = async () => {
    if (!imageBlob) {
      alert("이미지를 캡처하는 데 실패했습니다.");
      return;
    }

    const fileWithExtension = new File([imageBlob], "decorated_image.png", {
      type: "image/png",
    });

    const formData = new FormData();
    formData.append("card_post_id", cardPostId);
    formData.append("decorated_image", fileWithExtension);

    try {
      const response = await axios.post(
        `https://port-0-gachi-be-m3b8fmw54d947a5b.sel4.cloudtype.app/join/completed/`,
        formData,
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("POST 요청 성공:", response);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const instaStory = async () => {
    const fileWithExtension = new File([imageBlob], "decorated_image.png", {
      type: "image/png",
    });
    
    const formData = new FormData();
    formData.append("card_post_id", cardPostId);
    formData.append("decorated_image", fileWithExtension)

    try {
      const response = await axios.post(
        `https://port-0-gachi-be-m3b8fmw54d947a5b.sel4.cloudtype.app/join/completed/${cardPostId}/`,
        formData,
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("POST 요청 성공:", response);
      window.location.href = `https://www.instagram.com`;
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };


  const goBackToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }else {
      navigate("/key", { state: { month: window.selectedMonth } }); // 선택된 월 정보를 함께 전달
    }
  };

  const goToJoinPage = () => {
    navigate("/join");
  };

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame); // 프레임 선택 상태 업데이트
  };

  return (
    <>
      <JoinCreateHeader
            currentPage={currentPage}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
            inputStyle={inputStyle.selectedKeyword}
            goBackToPreviousPage={goBackToPreviousPage}
          />
      <Layout>
        <MainContainer>
          
          <JoinCreateMain
            currentPage={currentPage}
            image={image}
            setImage={setImage}
            explanation={explanation}
            setExplanation={setExplanation}
            inputStyle={inputStyle}
            selectedFrame={selectedFrame}
            handleFrameSelect={handleFrameSelect}
            setImageBlob={setImageBlob}
          />
          <S.SBtn
            onClick={() => {
              if (currentPage === 1) {
                createSubmit();
              } else if (currentPage === 2) {
                setCurrentPage(3);
              }
            }}
          >
            {currentPage === 1 && (
              <Button
                bgColor={image && explanation && selectedKeyword ? "#1A1E1B" : "#747474"}
              >
                프레임 고르기
              </Button>
            )}
            {currentPage === 2 && (
              <Button bgColor={selectedFrame ? "#1A1E1B" : "#747474"}>실천카드 만들기</Button>
            )}
            {currentPage === 3 && (
              <>
                <S.SaveImg>
                  <span>50 point</span>
                  <Button bgColor="#000000" onClick={handleImageSave}>이미지 저장하기</Button>
                </S.SaveImg>
                <S.Insta>
                  <span>200 point</span>
                  <Button bgColor="#000000" onClick={instaStory}>인스타그램 스토리 공유하기</Button>
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
