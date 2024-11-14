import styled from "styled-components";

/* MyHeader.jsx */
export const PageName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  width: 100%;
  margin-bottom: 20px;
`;

/* MyBlocks.jsx */
export const MyMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Blocks = styled.button`
  margin: 30px 10px 0 0;
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
  cursor: pointer;
  width: fit-content;
`;
export const BolckImg = styled.img`
  margin-right: 10px;
`;

export const Line = styled.div`
  width: 393px;
  height: 1px;
  background: #e0e0e0;
  margin-top: 30px;
`;
