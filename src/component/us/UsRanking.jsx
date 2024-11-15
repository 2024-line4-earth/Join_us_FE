import React, { useState, useEffect } from "react";
import * as S from "./styled";
import apiCall from "../../api/Api";
import Cookies from "js-cookie";

const UsRanking = () => {
  const [myRanking, setMyRanking] = useState();
  const [myName, setMyName] = useState("");
  const [myLevel, setMyLevel] = useState();

  const [topUsers, setTopUsers] = useState([]);
  const token = Cookies.get("access_token");

  useEffect(() => {
    // 처음 컴포넌트가 마운트 될 때 us rank 조회
    getUs();
  }, []);

  // us 조회 함수
  const getUs = async () => {
    if (!token) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    try {
      // us 조회 API 호출 (GET 요청)
      const response = await apiCall("us/us/", "GET", null, token);

      const { my_rank, my, top_users } = response.data;

      setMyRanking(my_rank);
      setMyName(my.username);
      setMyLevel(my.level);
      setTopUsers(top_users);
    } catch (error) {
      console.error("랭킹 조회 실패:", error);
      alert("랭킹 조회에 실패했습니다. 다시 시도해주세요. ");
    }
  };

  // 2위 - 1위 - 3위 순으로 변경
  const reorderedTopUsers = [
    topUsers[1] || { level: "N/A", username: "N/A" },
    topUsers[0] || { level: "N/A", username: "N/A" },
    topUsers[2] || { level: "N/A", username: "N/A" },
  ];

  return (
    <S.RankingContainer>
      {/* Top3 Ranking */}
      <S.Top3Ranking>
        {reorderedTopUsers.map((user, index) => {
          const RankingComponent = S[`Ranking_${index + 1}`];
          return (
            <RankingComponent key={user.user}>
              <S.Ranking_num
                style={{ backgroundColor: index === 1 ? "#417E59" : "#66A776" }}
              >
                {index === 0 ? 2 : index === 1 ? 1 : 3} {/* 2-1-3 순서 */}
              </S.Ranking_num>
              <S.Ranking_square>
                <S.Ranking_level_n>{user.level}</S.Ranking_level_n>
                <S.Ranking_level_t>Level</S.Ranking_level_t>
              </S.Ranking_square>
              <S.Ranking_name>{user.username}</S.Ranking_name>
            </RankingComponent>
          );
        })}
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
