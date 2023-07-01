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
        {/* <img src="/images/Triangle.png" alt="thumbnail" width="400px" /> */}
        <Title>
          내 콘텐츠 <span>성향</span> 알아보고,
        </Title>
        <Title>
          새로운 유튜브 채널 <span>발견</span>하세요.
        </Title>
        <SubTitle>
          구글 접속을 통한 유튜브 데이터 연동 시, <br></br>좋아요한 콘텐츠
          데이터를 기반으로 당신의 콘텐츠 소비 성향을 분석하고 리포트를
          생성합니다.
        </SubTitle>
        {/* <Title>
          내가 아직 <span>모르지만</span>
        </Title>
        <Title>
          꼭 <span>봐야하는</span>유튜브 채널 발견하세요.
        </Title> */}
      </ContainerTitle>
      <ContainerButton>
        <Button onClick={handleStart}>시작하기</Button>
        <YoutubeButton onClick={handleStart}>
          <img
            src="/images/YoutubeButton.png"
            alt="youtube"
            width="28px"
            height="28px"
          />
        </YoutubeButton>
      </ContainerButton>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  color: white;
  width: 100%;
  display: flex;
  margin-left: 12px;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
`;
const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BlurBox = styled.div`
  width: 439px;
  height: 1080px;
  flex-shrink: 0;
  background: rgba(28, 30, 39, 0.9);
  filter: blur(30px);
`;
const Title = styled.div`
  font-size: 72px;
  align-items: center;
  color: white;
  display: flex;
  font-weight: 400;
  span {
    color: #ff2f9d;
    padding-left: 10px;
    padding-right: 4px;
    font-weight: 900;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
    font-weight: 900;
  }
`;

const SubTitle = styled.div`
  font-size: 72px;
  align-items: center;
  color: white;
  display: flex;
  font-weight: 400;
  span {
    color: #ff2f9d;
    padding-left: 10px;
    padding-right: 4px;
    font-weight: 900;
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    font-family: Roboto;
    margin-top: 20px;
    margin-right: 12px;
    line-height: 20px;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Button = styled.button`
  @media (max-width: 1440px) {
    display: flex;
    width: 200px;
    height: 60px;
    padding: 9.8px 36.4px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 126px;
    background: #050505;
    color: var(--white-white-100, #fff);
    text-align: center;
    font-size: 22px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0.22px;
  }
`;
const YoutubeButton = styled.div`
  @media (max-width: 1440px) {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white-white-100, #fff);
    img {
    }
  }
`;
