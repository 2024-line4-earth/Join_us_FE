import React, { useState } from "react";
import * as S from "./styled";

const UsRanking = () => {
  const [myRanking, setMyRanking] = useState(50);
  const [myName, setMyName] = useState("조인어스");
  const [myLevel, setMyLevel] = useState(1);

  const level1 = 20;
  const name1 = "내가짱";

  const level2 = 19;
  const name2 = "난두번째";

  const level3 = 18;
  const name3 = "조인어스얍";

  return (
    <S.RankingContainer>
      {/* Top3 Ranking */}
      <S.Top3Ranking>
        <S.Ranking_1>
          <S.Ranking_num style={{ backgroundColor: "#66A776" }}>
            2
          </S.Ranking_num>
          <S.Ranking_square>
            <S.Ranking_level_n>{level2}</S.Ranking_level_n>
            <S.Ranking_level_t>Level</S.Ranking_level_t>
          </S.Ranking_square>
          <S.Ranking_name>{name2}</S.Ranking_name>
        </S.Ranking_1>
        <S.Ranking_2>
          <S.Ranking_num style={{ backgroundColor: "#417E59" }}>
            1
          </S.Ranking_num>
          <S.Ranking_square>
            <S.Ranking_level_n>{level1}</S.Ranking_level_n>
            <S.Ranking_level_t>Level</S.Ranking_level_t>
          </S.Ranking_square>
          <S.Ranking_name>{name1}</S.Ranking_name>
        </S.Ranking_2>
        <S.Ranking_3>
          <S.Ranking_num style={{ backgroundColor: "#66A776" }}>
            3
          </S.Ranking_num>
          <S.Ranking_square>
            <S.Ranking_level_n>{level3}</S.Ranking_level_n>
            <S.Ranking_level_t>Level</S.Ranking_level_t>
          </S.Ranking_square>
          <S.Ranking_name>{name3}</S.Ranking_name>
        </S.Ranking_3>
      </S.Top3Ranking>

      {/* My Ranking */}
      <S.Line />

      <S.MyRanking>
        <S.MyRanking_num>{myRanking}</S.MyRanking_num>
        <S.MyRanking_name>{myName}</S.MyRanking_name>
        <S.MyRanking_level>
          Level.<S.Bold>{myLevel}</S.Bold>
        </S.MyRanking_level>
      </S.MyRanking>
    </S.RankingContainer>
  );
};

export default UsRanking;
