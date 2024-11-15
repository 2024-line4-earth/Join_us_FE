import React from "react";
import * as S from "./styled";
import ExImage from "../../assets/img/ExImg.svg";

const JoinKeyMain = () => {
  return (
    <>
      <S.KeyMainContainer>
        {[...Array(8)].map((_, index) => (
          <S.ImageCard key={index}>
            <img src={ExImage} alt={`Example ${index + 1}`} />
          </S.ImageCard>
        ))}
      </S.KeyMainContainer>
    </>
  );
};

export default JoinKeyMain;
