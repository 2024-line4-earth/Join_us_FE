import { styled } from "styled-components";

export const JoinFormText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  height: 30px;
  padding-top: 15px;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 10;
  background: #FFFFFF;
`;

export const JoinFormContainer = styled.div`
  
`;

export const JoinFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  width: 272.047px;
  height: 420px;
`;

export const BottomWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

export const MiddleWrapper = styled.div`
  position: absolute;
  z-index: 2;
`;

export const WrapperImage = styled.div`
  position: absolute;
  z-index: 3;
  border-radius: 8px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.20);
`;


export const ExampleButton = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
  width: 100%;
`;

export const ExButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: ${(props) => (props.isClicked ? "var(--Primary-color, #417E59)" : "var(--Gray1, #F1F1F1)")};
  border: 1px solid ${(props) => (props.isClicked ? "var(--Sub-color, #66A776)" : "var(--Gray2, #E0E0E0)")};
  transition: background-color 0.3s; /* 배경색 전환 애니메이션 */

  color: ${(props) => (props.isClicked ? "var(--White, #FFF)" : "var(--Gray5, #2E302D)")};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const ButtonContainer = styled.div`

`;

export const TextContainer = styled.div`
  width: 313px;
  height: 419px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const TextHeader = styled.div`
  color: var(--Black, #1A1E1B);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;

  padding: ${(props) =>
    props.currentPage === 2 ? "36px 0px 16px 20px" : "36px 0px 36px 20px"};
`;

export const TextBody = styled.div`
  color: var(--Gray5, #2E302D);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;

  padding: 0px 0px 0px 20px;

  span {
    font-weight: 700;
  }
`;

export const TextImg = styled.div` 
  padding-left : 250px;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`

export const LeftBtnContainer = styled.div`
  color: #E0E0E0;
`

export const ExContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-top: 50px;
  width: 100%;
  height: 420px;
`;

export const ExTextContainer = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 34px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);

  span {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.68px;
  }
`;


export const ExImage = styled.div`
  display: flex;
  justify-content: center;
`
export const ExBottom = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-evenly;
`
export const BottomText = styled.div`
  span {
    color: var(--Primary-color, #417E59);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
  }
`

export const CheckCircle = styled.div`

`;

export const ExLastContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 100%;
  height: 70vh;
`;

export const ExLastText = styled.div`
  color: var(--Gray5, #2E302D);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;
  span{
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.64px;
  }
`;

export const Vector = styled.div`
  width: 15.762px;
  height: 52.754px;
  flex-shrink: 0;
  margin: 15px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto; // 가로 방향의 스크롤을 활성화
  width: 100%;
  padding: 8px 0px 30px 0px;
  gap: 16px; // 버튼 사이의 간격 조정
  scrollbar-width: none; // 스크롤바 숨기기
  ::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

export const KeyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 ${(props) => (props.currentPage > 2 ? "10px" : "30px")} 0;
`;

export const HeaderBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Select = styled.button`
  width: 118px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;

  span {
    white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 */
  }
`;

export const DropDownContainer = styled.div`
  position: relative; 
  display: inline-block;
`;

export const DropdownMenu = styled.div`  
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  margin-top: 5px;  /* 약간의 간격 추가 */
  padding: 8px 0;
  width: 98px;
  height: 132px;
  flex-shrink: 0;
  cursor: pointer;
  z-index: 4;

  border-radius: 16px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);
`;

export const DropdownItem = styled.div`
  z-index: 1;
  padding: 3px 8px;
  text-align: center;

  color: var(--Gray5, #2E302D);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Create = styled.div`
  cursor: pointer;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
`;

export const KeyMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 열로 구성 */
  gap: 16px; /* 카드 간격 설정 */
  padding: 0px 16px 16px 16px;
  overflow-y: auto;
  scrollbar-width: none; /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }

  /* 홀수 개의 이미지일 때 마지막 이미지를 첫 번째 열 아래로 배치 */
  & > :nth-child(odd):last-child {
    grid-column: span 2; 
  }
`;

export const ImageCard = styled.div`
  width: 144px;
  height: 256px;
  flex-shrink: 0;
  flex: 1 1 calc(50% - 16px); /* 한 줄에 두 개씩 배치되도록 너비 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  
  img {
    width: 144px;
    height: 256px;
    flex-shrink: 0;
    /* width: 100%;
    max-width: 300px;
    height: auto; */
  }
`;

export const KeyTextContainer = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 2px 8px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--White, #FFF);

  span {
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;

export const CreateMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  width: 269px;
  height: 478px;
`;

export const CreateFrame = styled.div`
  position: absolute;
  z-index: 1;
  width: 269px;
  height: 478px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray2, #E0E0E0);

  margin-bottom: 5px;
`;

export const CreateBtn = styled.div`
  position: absolute;
  z-index: 2;
`

export const SBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CautionText = styled.div`
  display: flex;
  align-items: center;
  width: 313px;
  margin-bottom: 4px;
  span{
    color: var(--Negative-Error-Cancel, #F66466);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const CreateText = styled.input`
  display: flex;
  width: 313px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray1, #F1F1F1);
  margin-bottom: 15px;
  border: none;
  outline: none;

  ::placeholder {
    color: var(--Gray3, #B2B3B2);
    font-family: Pretendard;
    font-size: 5px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const CreateBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  margin: 0 auto;
  width: 313px;
`;

export const FrameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개씩 */
  gap: 10px; /* 아이템 간격 */
  justify-items: center; /* 아이템을 가운데 정렬 */
  padding: 10px;
`;

export const FrameItem = styled.img`
  width: 144px;
  height: 256px;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.14));
`;

export const FrameText = styled.div`
  span {
    display: flex;
    justify-content: center;
    color: var(--Gray4, #747474);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
    margin: 15px 0;
  }
`;

export const MadeImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const BackContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 313px;
  cursor: pointer;
`;

export const BackJoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  padding: 4px 12px;
  gap: 8px;

  border-radius: 34px;
  border: 1px solid var(--Gray2, #E0E0E0);
  background: var(--Gray1, #F1F1F1);

  span {
    color: var(--Gray5, #2E302D);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;

export const SaveImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    border-radius: 34px;
    background: #DADADA;
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.68px;
    padding: 2px 8px;
  }
`;

export const Insta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 15px 0 15px 0;

  span {
    border-radius: 34px;
    background: #DADADA;
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.68px;
    padding: 2px 8px;
  }
`;

export const UploadedImg = styled.img`
  width: 269px;
  height: 478px;
  object-fit: cover; /* 이미지가 프레임을 꽉 채우도록 설정 */
  border-radius: 8px; /* CreateFrame과 동일하게 설정 */
  position: absolute; /* CreateFrame과 동일한 위치에 이미지 배치 */
  z-index: 3; /* CreateFrame과 동일한 z-index 설정 */
`;

