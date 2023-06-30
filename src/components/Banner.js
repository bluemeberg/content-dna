import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  localServerInstance,
  youtubeDataAPIInstacne,
  youtubeOauthAPI,
} from "../api/axios";
const Banner = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
  const handleStart = () => {
    signInWithPopup(auth, provider)
      .then()
      .then(async (result) => {
        console.log(result._tokenResponse.oauthAccessToken);
        // await handleYoutubeInformation(result._tokenResponse.oauthAccessToken);
        navigate(`/loading`, {
          state: { test: result._tokenResponse.oauthAccessToken },
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <ContainerTitle>
        <Title>
          내 <span>콘텐츠 성향</span>알아보고,
        </Title>
        <Title>
          내가 아직 <span>모르지만</span>
        </Title>
        <Title>
          꼭 <span>봐야하는</span>유튜브 채널 발견하세요.
        </Title>
      </ContainerTitle>
      <ContainerButton>
        <Button onClick={handleStart}>시작하기</Button>
      </ContainerButton>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  color: white;
  height: 448px;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 20px;
`;
const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 72px;
  align-items: center;
  color: black;
  display: flex;
  font-weight: 400;
  span {
    color: #6e22fc;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 700;
  }
  @media (max-width: 1440px) {
    font-size: 60px;
  }
`;
const ContainerButton = styled.div`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 48px;
  font-weight: 900;
  padding: 0.4rem 1rem;
  margin-right: 1rem;
  height: 90px;
  width: 240px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  background: black;
  color: white;
  margin-top: 272px;
  @media (max-width: 1440px) {
    font-size: 60px;
    height: 90px;
    width: 200px;
    font-size: 36px;
  }
`;
