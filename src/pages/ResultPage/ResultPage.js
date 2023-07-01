import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CategoryTitle } from "../../components/CategoryTitle";
import Channel from "../../components/Channel";
import ChannelThumbnail from "../../components/ChannelThumbnail";
import ChannelTitle from "../../components/ChannelTitle";
import DNAContent from "../../components/DNAContent";
import DNAImage from "../../components/DNAImage";
import { DonwloadBox } from "../../components/DonwloadBox";
import DownloadTitle from "../../components/DownloadTitle";
import Nav from "../../components/Nav";
import Title from "../../components/ResultTitle";
import { UnknownChannelBlur } from "../../components/UnknownChannelBlur";
import UnknownChannelTitle from "../../components/UnknownChannelTitle";
import { convertToShortNumber, formatNumber } from "../../ustils/FortmatNumber";

const ResultPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <Nav color="white" />
      <ContainerBox>
        <Title>KHGM님의 콘텐츠 성향 레포트</Title>
        <Divider />
        <DNABox>
          <DNAImage>
            <img src="/images/Monkey_1.png" alt="DNAImage" />
            <div className="DNATitle">꽃장이들의 농구경영</div>
          </DNAImage>
          <DNAType>
            <DNAContent>
              <div className="category">Basketball</div>
              <div className="categoryNickname">슛팅 미친이</div>
              <div className="contentRatio">24%</div>
            </DNAContent>
            <DNAContent>
              <div className="category">Business</div>
              <div className="categoryNickname">비즈니스 중독자</div>
              <div className="contentRatio">19%</div>
            </DNAContent>
            <DNAContent>
              <div className="category">
                {/* <div className="categoryName">SelfImprovement&Motivation</div> */}
                SelfImprovement&Motivation
              </div>
              <div className="categoryNickname">꽃을 사랑하는 플로러</div>
              <div className="contentRatio">11%</div>
            </DNAContent>
            <DNADisclaimer>
              뜨거운 경기에 푹 빠지는 동안 창의적인 비즈니스 아이디어를
              고민하며, 꽃을 피우며 세상을 아름답게 만들기 위한 비전을 꿈꾸는
              사람입니다.
            </DNADisclaimer>
          </DNAType>
        </DNABox>
        <Title sub="top5">KHGM님이 좋아하는 채널 Top6</Title>
        {/* Favorite Channels */}
        <ChannelBox>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">감스트</div>
              <div className="channelSubscriber">24.5만</div>
            </ChannelTitle>
          </Channel>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">식물집사 독일 카씨</div>
              <div className="channelSubscriber">24.5만</div>
            </ChannelTitle>
          </Channel>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">식물집사 독일 카씨</div>
              <div className="channelSubscriber">
                {convertToShortNumber(48500)}
              </div>
            </ChannelTitle>
          </Channel>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">식물집사 독일 카씨</div>
              <div className="channelSubscriber">24.5만</div>
            </ChannelTitle>
          </Channel>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">식물집사 독일 카씨</div>
              <div className="channelSubscriber">24.5만</div>
            </ChannelTitle>
          </Channel>
          <Channel>
            <ChannelThumbnail>
              <img
                src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                alt="favorite"
              />
            </ChannelThumbnail>
            <ChannelTitle>
              <div className="channelTitle">식물집사 독일 카씨</div>
              <div className="channelSubscriber">24.5만</div>
            </ChannelTitle>
          </Channel>
        </ChannelBox>
        <Title sub="2">
          KHGM님이 아직 좋아하지 않지만 <br></br> 성향에 맞을 수 있는 채널을
          골라봤어
          <div className="subTitle">
            유튜브 인기 영상의 채널 그리고 당신과 동일한 성향을 가진 "157"명의
            사람들이 구독하고 있는 채널입니다.<br></br>새로운 채널을
            발견해보세요!
          </div>
        </Title>
        <UnknownChannelBox>
          <CategoryTitle>Flower</CategoryTitle>
          <ChannelBox>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <UnknownChannel>
                <UnknownChannelBlur>
                  UNKNOWN
                  <div className="locked">
                    <img src="/images/lock.png" alt="lock" />
                    LOCKED
                  </div>
                </UnknownChannelBlur>
                <ChannelThumbnail>
                  <img
                    src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                    alt="favorite"
                  />
                </ChannelThumbnail>
                {/* <UnknownChannelTitle></UnknownChannelTitle> */}
                <UnknownChannelTitle>
                  <div className="question">?????</div>
                  <div className="channelTitle">식물집사 독일 카씨</div>
                  <div className="channelSubscriber">24.5만</div>
                </UnknownChannelTitle>
              </UnknownChannel>
            </Channel>
          </ChannelBox>
          <CategoryTitle>IT/Tech</CategoryTitle>
          <ChannelBox>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
          </ChannelBox>
          <CategoryTitle>IT/Tech</CategoryTitle>
          <ChannelBox>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
            <Channel>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </ChannelTitle>
            </Channel>
          </ChannelBox>
        </UnknownChannelBox>
        <BlurBox></BlurBox>
        <DownloadTitle>
          DOWNLOAD APP
          <div className="subTitle">TO FIND OUT MORE UNKNOWN CHANNELS</div>{" "}
          <Channel>
            <UnknownChannel>
              <UnknownChannelBlur>+21 more</UnknownChannelBlur>
              <ChannelThumbnail>
                <img
                  src="https://i.ytimg.com/vi/RU8jSdvcpc8/sddefault.jpg"
                  alt="favorite"
                />
              </ChannelThumbnail>
              {/* <UnknownChannelTitle></UnknownChannelTitle> */}
              <UnknownChannelTitle>
                <div className="question">?????</div>
                <div className="channelTitle">식물집사 독일 카씨</div>
                <div className="channelSubscriber">24.5만</div>
              </UnknownChannelTitle>
            </UnknownChannel>
          </Channel>
          <DonwloadBox></DonwloadBox>
          <DonwloadAPPImage>
            <img src="/images/AppStore.png" alt="apple" />
            <img src="/images/Google.png" alt="google" />
          </DonwloadAPPImage>
        </DownloadTitle>
      </ContainerBox>
      {/* 내가 좋아할 만한 채널 알려주기 */}
      {/* 카테고리 베이스 */}
    </Container>
  );
};

export default ResultPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  height: 100vh;
  background: #24242d;
`;

const ContainerBox = styled.div`
  padding: 48px 0px 96px 0px;
  flex-direction: column;
  border-radius: 24px;
  margin-top: 120px;
  height: 780px;
  width: 1200px;
  background: linear-gradient(
    132deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.03) 66.53%,
    rgba(255, 255, 255, 0.15) 100%
  );
  box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.75) inset;
  @media (max-width: 1200px) {
    width: 320px;
    margin-top: 80px;
    height: 1060px;
  }
`;

const Divider = styled.div`
  height: 0.05px;
  margin: 20px 100px;
  display: flex;
  background: gray;
`;

const DNABox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media (max-width: 1200px) {
    width: 320px;
    flex-direction: column;
  }
`;

const DNAType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const DNADisclaimer = styled.div`
  color: white;
  max-width: 380px;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.16px;
  margin-top: 20px;
  @media (max-width: 1200px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const ChannelBox = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const UnknownChannelBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const UnknownChannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const UnknownChannelTitle = styled.div`
//   position: absolute;
//   width: 120px;
//   height: 60px;
//   border-radius: 10px;
//   background: rgba(0, 0, 0, 0.2);
//   backdrop-filter: blur(10px);
// `;

const BlurBox = styled.div`
  width: 1440px;
  height: 400px;
  margin-top: -481px;
  background: linear-gradient(0deg, #24242d 0%, rgba(36, 36, 45, 0.9) 100%);
  position: relative;
  @media (max-width: 1200px) {
    height: 450px;
    font-size: 18px;
    margin-top: -500px;
  }
`;

const DonwloadAPPImage = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 200px;
  img {
    margin-right: 40px;
    margin-left: 40px;
    @media (max-width: 1200px) {
      margin-right: 20px;
      margin-left: 20px;
    }
  }
`;
