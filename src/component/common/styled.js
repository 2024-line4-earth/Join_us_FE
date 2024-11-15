import { styled } from "styled-components";

// Footer.jsx
// 푸터 디자인
export const FooterContainer = styled.div`
  width: 100%;
  height: 78px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  background-color: #1a1e1b;

  @media (width > 440px) {
    width: 440px;
    left: calc(50% - 220px);
  }
`;

export const FooterButton = styled.button`
  width: 25%;
  background-color: #1a1e1b;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 가운데 정렬을 위해 추가 */
  cursor: pointer;
`;

export const FooterImg = styled.img`
  margin-bottom: 5px; /* 이미지와 텍스트 간의 간격 추가 */
`;

export const FooterP = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

// Button.jsx
export const commonButton = styled.button`
  width: 313px;
  height: 60px;
  border-radius: 94px;
  border: 0;
  background-color: ${(props) => props.bgColor || "#333"};
  cursor: pointer;
`;

export const buttonText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  line-height: normal;
`;

// Modal
export const ModalBackground = styled.div`
  height: calc(100vh - 78px);
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalTextContainer = styled.img``;
