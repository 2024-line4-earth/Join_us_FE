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

// Modal1
export const ModalBackground = styled.div`
  position: absolute;
  top: -1em;
  left: -1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh + 1em);
  background-color: rgba(0, 0, 0, 0.5);
  width: calc(100% + 1em);
  @media (width > 440px) {
    width: 440px;
  }
  margin: 0 auto;
`;
export const ModalTextContainer1 = styled.div`
  margin: 285px auto 30px;
  width: 313px;
  height: 201px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--White, #fff);
  text-align: center;
`;

export const MainText1 = styled.div`
  margin: 33px auto 0;
  width: 200px;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
`;

export const Emoji = styled.img`
  margin: 4px auto;
`;

export const SubText1 = styled.div`
  margin-top: 5px;
  color: var(--Gray5, #2e302d);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.48px;
`;

//Modal2
export const ModalTextContainer2 = styled.div`
  margin: 336px auto 16px;
  width: 313px;
  height: 94px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--White, #fff);
`;
export const MainText2 = styled.div`
  color: var(--Gray5, #2e302d);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
`;
export const ModalButtonContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const ModalButton2 = styled.button`
  width: 148px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 94px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  border: none;
`;
