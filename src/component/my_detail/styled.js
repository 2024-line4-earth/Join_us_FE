import styled from "styled-components";

/* MyDetailHeader.jsx */
export const Header = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  width: 100%;
`;

export const BackBtn = styled.img`
  cursor: pointer;
`;

/* my_detail 기본 설정 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const Blocks = styled.div`
  margin: 36px 10px 0 0;
  display: inline-block;
  padding: 8px 16px;
  text-align: center;
  align-items: center;
  border-radius: 23px;
  border: 1px solid var(--Gray2, #e0e0e0);
  background: #fff;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  width: fit-content;
`;

export const BolckImg = styled.img`
  margin-right: 10px;
`;

export const SaveBox = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export const GrayBoxContainer = styled.div`
  margin: 120px auto;
`;

export const GrayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 353px;
  height: 232px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray1, #f1f1f1);
`;

/* EditMyInfo */
export const EditMain = styled.form``;
export const EditBox = styled.div`
  margin: 36px 0;
  width: 353px;
  height: 244px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray1, #f1f1f1);
  align-items: center;
  padding: 24px;
`;

export const Username_t = styled.div`
  color: var(--Gray4, #747474);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Username_current = styled.div`
  display: inline-flex;
  margin: 16px 0 36px 0;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 23px;
  border: 1px solid var(--Gray2, #e0e0e0);
  background: #fff;
  color: var(--Gray4, #747474);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Username_input = styled.input`
  display: inline-flex;
  margin: 16px 0 5px 0;
  width: 85px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 23px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const DuplicationMessage = styled.div`
  margin-left: 4px;
  color: var(--Negative-Error-Cancel, #f66466);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

/* MyTheme.jsx */
export const ThemeMain = styled.form``;

export const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0 0 40px;
`;
export const ThemeImg = styled.img`
  width: 134px;
`;
export const ThemeTextBox = styled.div`
  margin-top: 16px;
  display: inline-flex;
  gap: 24px;
`;
export const ThemeText = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  border: 1px solid var(--Gray2, #e0e0e0);
  background: var(--Gray1, #f1f1f1);
  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.68px;
`;
export const ThemeText_img = styled.img``;
export const ThemeSelectBtn_img = styled.img`
  cursor: pointer;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  margin: 30px auto 0;
`;

/* */

/* MyContect.jsx */
export const Contect_text = styled.h2`
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const SNSBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 8px 36px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 23px;
  border: 1px solid var(--Gray2, #e0e0e0);
  background: #fff;
  color: var(--Gray4, #747474);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
`;
export const Bold = styled.span`
  color: #2e302d;
  font-weight: 700;
`;

/* MyLogout.jsx */
export const Logout_text = styled.h2`
  margin-bottom: 30px;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

/* MyQuit.jsx */
export const Quit_text = styled.h2`
  margin-bottom: 5px;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Quit_Warning = styled.p`
  margin-bottom: 20px;
  color: var(--Negative-Error-Cancel, #f66466);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
