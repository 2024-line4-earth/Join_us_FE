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

export const BackBtn = styled.img``;

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

// MarketItemMain
export const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  /* height: calc(100vh - 100px - 78px -1em); */
  max-height: calc(100vh - 100px - 78px - 1em);
  margin-top: 100px;
  padding: 0 calc((100% - 320px) / 2);
  overflow-y: auto;
`;

export const ItemImgContainer = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Itemimg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ItemText = styled.div`
  color: #1a1e1b;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const PointContainerWhite = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: #f1f1f1;
  color: var(--Primary-color, #417e59);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const ItemDetailText = styled.p`
  margin: 16px 0px 50px 0px;
  color: #2e302d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  span {
    color: #f66466;
  }
`;
