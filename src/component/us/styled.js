import styled from "styled-components";

/* UsRanking.jsx -------- */
// Top3 Ranking
export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 440px;
`;

export const Top3Ranking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 380px;
`;

export const Ranking_1 = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;

export const Ranking_2 = styled.div`
  margin-top: 0;
`;

export const Ranking_3 = styled.div`
  margin-right: 30px;
  margin-top: 20px;
`;

export const Ranking_num = styled.div`
  top: 7px;
  left: -14px;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-align: center;
  align-content: center;
`;

export const Ranking_square = styled.div`
  z-index: -10;
  margin-top: -10px;
  width: 85px;
  height: 85px;
  background-color: white;
  box-shadow: 0 0 10px 0 #b2b3b2;
  border-radius: 20px;
  text-align: center;
`;
export const Ranking_level_n = styled.div`
  padding-top: 23px;
  font-size: 30px;
  font-weight: bold;
`;
export const Ranking_level_t = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #747474;
`;
export const Ranking_name = styled.div`
  margin-top: 9px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

// MyRanking
export const Line = styled.div`
  margin: 15px auto 0 auto;
  background-color: #e0e0e0;
  width: calc(100% - 40px);
  max-width: 380px;
  height: 1px;
  align-items: center;
`;

export const MyRanking = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 380px;
  height: 45px;
  background-color: #f1f1f1;
  border-radius: 70px;
`;

export const MyRanking_num = styled.div`
  margin-left: 10px;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  padding: 2px 0 0 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #417e59;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  align-content: center;
`;

export const MyRanking_name = styled.div`
  margin-left: -160px;
  color: #2e302d;
  font-size: 17px;
  font-weight: 700;
`;
export const MyRanking_level = styled.div`
  margin-right: 20px;
  padding: 6px 10px;
  background-color: white;
  border-radius: 70px;
  color: #2e302d;
  font-size: 16px;
  font-weight: 300;
`;
export const Bold = styled.span`
  font-weight: 700;
`;

/* UsLevel -------- */
export const Level = styled.div`
  margin: 40px auto 0 auto;
`;

export const LevelImage = styled.img`
  position: relative;
  margin: 0 auto;
  z-index: -10;
`;

export const LevelCircle = styled.div`
  margin: -215px auto 0 auto;
  width: 110px;
  height: 110px;
  box-shadow: 0 0 12px 0 #b2b3b2;
  background-color: white;
  color: #2e302d;
  border-radius: 100px;
  text-align: center;
  align-content: center;
`;
export const MyLevel = styled.span`
  font-weight: 700;
  font-size: 30px;
`;

/* UsBottom -------- */
export const UsBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0 30px 0;
`;

export const Bottom1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 380px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e0e0e0;
  border-radius: 34px;
  padding: 4px 12px;
  align-items: center;
  margin-right: 40px;
`;
export const CardImg = styled.img`
  margin-right: 3px;
  padding: 3px;
`;

export const MyCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 34px;
  padding: 4px 12px;
  align-items: center;
`;
export const Point = styled.div`
  background-color: #66a776;
  border-radius: 34px;
  padding: 7px 12px;
  color: white;
`;

export const Bottom2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 380px;
`;

export const LevelGraph = styled.div`
  margin-top: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 34px;
  padding: 5px 12px;
  width: calc(100% - 24px);
  align-items: center;
`;

export const LevelImg = styled.img``;

export const Level_t = styled.div`
  margin: 5px auto 20px auto;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
`;

export const LevelLow = styled.span`
  margin-right: 280px;
`;
export const LevelHigh = styled.span``;
