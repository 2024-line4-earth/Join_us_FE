import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Button from "../../component/common/Button";
import Theme from "../../assets/img/Mytheme.svg";
import BasicThemeImg from "../../assets/img/MyBasicTheme.svg";
import PinkThemeImg from "../../assets/img/MyPinkTheme.svg";
import My1 from "../../assets/img/My1.svg";
import My2 from "../../assets/img/My2.svg";
import SelectImg from "../../assets/img/MySelectImg.svg";
import NonSelectImg from "../../assets/img/MyNonSelectImg.svg";

const MyTheme = () => {
  const [myTheme, setMyTheme] = useState("기본 테마");
  const ThemeList = ["기본 테마", "벚꽃 테마"];

  const handleThemeChange = (theme) => {
    setMyTheme(theme);
  };

  // const handleSave = async () => {
  //   try {
  //     // 백엔드 API 엔드포인트 URL
  //     const apiUrl = 'https://your-backend-api.com/save-theme';

  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ theme: myTheme }),
  //     });

  //     if (response.ok) {
  //       console.log('테마가 성공적으로 저장되었습니다.');
  //       // 추가적인 성공 처리 (예: 사용자에게 알림)
  //     } else {
  //       console.error('테마 저장 실패');
  //       // 실패 처리 (예: 에러 메시지 표시)
  //     }
  //   } catch (error) {
  //     console.error('테마 저장 중 오류 발생:', error);
  //     // 오류 처리
  //   }
  // };

  return (
    <S.Container>
      <S.Blocks>
        <S.BolckImg src={Theme} />
        어스테마 바꾸기
      </S.Blocks>
      <S.ThemeMain>
        <S.ThemeBox alt="기본 테마 Box">
          <S.ThemeImg src={BasicThemeImg} />
          <S.ThemeTextBox>
            <S.ThemeText>
              <S.ThemeText_img src={My1} /> 기본 테마
            </S.ThemeText>
            <S.ThemeSelectBtn_img
              src={myTheme === "기본 테마" ? SelectImg : NonSelectImg}
              onClick={() => handleThemeChange("기본 테마")}
            />
          </S.ThemeTextBox>
        </S.ThemeBox>
        <S.Line />
        {ThemeList.length > 1 && (
          <S.ThemeBox alt="벚꽃 테마 Box">
            <S.ThemeImg src={PinkThemeImg} />
            <S.ThemeTextBox>
              <S.ThemeText>
                <S.ThemeText_img src={My2} /> 벚꽃 테마
              </S.ThemeText>
              <S.ThemeSelectBtn_img
                src={myTheme === "벚꽃 테마" ? SelectImg : NonSelectImg}
                onClick={() => handleThemeChange("벚꽃 테마")}
              />
            </S.ThemeTextBox>
          </S.ThemeBox>
        )}
      </S.ThemeMain>
      <S.SaveBox>
        <Button
          bgColor="#000"
          //onClick={handleSave}
        >
          저장하기
        </Button>
      </S.SaveBox>
    </S.Container>
  );
};

export default MyTheme;
