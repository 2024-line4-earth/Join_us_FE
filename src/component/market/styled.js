import styled from "styled-components";

// Market Header
export const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 78px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  z-index: 10;
`;
export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const PointContainer = styled.div`
  background-color: #66a776;
  border-radius: 34px;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const EmptyDiv = styled.div`
  background-color: #d9d9d9;
  margin-top: 30px;

  width: 100%;
  height: 100px;
`;

// MarketMain

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 25px;
  background-color: red;
  width: 100%;
  height: 300px;
  margin-top: 200px;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  background-color: blue;
  width: calc(50% - 12.5px);
  height: 161px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImgContainer = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarketItemImg = styled.img`
  /* width: 100%; */
  height: 90%;
`;

export const ItemNameContainer = styled.div`
  display: inline-flex;
  height: 24px;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: #fff;
`;

export const ItemName = styled.p`
  margin: 0;
  color: #2e302d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const Point = styled.p`
  color: #417e59;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: var(--Primary-color, #417e59);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
