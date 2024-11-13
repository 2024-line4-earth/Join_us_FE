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

  @media (width>440px) {
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
  flex-wrap: wrap;
  align-content: center;
`;

export const FooterP = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
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
