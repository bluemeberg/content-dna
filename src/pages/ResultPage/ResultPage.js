import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { youtubeDataAPIInstacne, youtubeOauthAPI } from "../../api/axios";
import { CategoryTitle } from "../../components/CategoryTitle";
import Channel from "../../components/Channel";
import ChannelModal from "../../components/ChannelModal";
import ChannelThumbnail from "../../components/ChannelThumbnail";
import ChannelTitle from "../../components/ChannelTitle";
import DetailCategoryBox from "../../components/DetailCategoryBox";
import DNAContent from "../../components/DNAContent";
import DNAImage from "../../components/DNAImage";
import { DonwloadBox } from "../../components/DonwloadBox";
import DownloadTitle from "../../components/DownloadTitle";
import Nav from "../../components/Nav";
import Title from "../../components/ResultTitle";
import { UnknownChannelBlur } from "../../components/UnknownChannelBlur";
import UnknownChannelTitle from "../../components/UnknownChannelTitle";
import { dnaData } from "../../test/mock";
import { convertToShortNumber, formatNumber } from "../../ustils/FortmatNumber";

const ResultPage = () => {
  const location = useLocation();
  console.log(location.state);
  if (location.state === null) {
    location.state = dnaData;
  }
  location.state.dna = location.state.dna.sort(
    (a, b) => b.dnacount - a.dnacount
  );
  console.log(location.state.dna);

  // 오프라인
  for (let i = 0; i < location.state.dna.length; i++) {
    location.state.dna[i].dnasubTitle = location.state.unknown.dnasubTitle[i];
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [unknownChannelSelected, setUnknownChannelmovieSelected] = useState({});
  // detail info of unknown channel
  const handleUnknownClick = useCallback((channel) => {
    setModalOpen(true);
    setUnknownChannelmovieSelected(channel);
  });

  let favoriteChannels = [];
  const [favorite, setFavorite] = useState([]);

  async function getLikedChannelNumbers() {
    let videos = location.state.videoList;
    const channelCounts = videos.reduce((counts, video) => {
      const channelName = video.channelID;
      counts[channelName] = counts[channelName] || {
        count: 0,
        detailCategories: new Set(),
      };
      counts[channelName].count += 1;
      if (video.detailCategory) {
        if (Array.isArray(video.detailCategory)) {
          video.detailCategory.forEach((category) =>
            counts[channelName].detailCategories.add(category)
          );
        } else {
          counts[channelName].detailCategories.add(video.detailCategory);
        }
      }
      // counts[channelName] = (counts[channelName] || 0) + 1;

      return counts;
    }, {});
    const sortedFruits = Object.entries(channelCounts).sort(
      (a, b) => b[1] - a[1]
    );
    console.log(sortedFruits);
    // console.log(sortedFruits[0][1] / location.state.res.videoList.length);
    for (let i = 0; i < sortedFruits.slice(0, 6).length; i++) {
      console.log(sortedFruits[i][1].count);
      let channelId = sortedFruits[i][0];
      let detailCategories = sortedFruits[i][1].detailCategories;
      console.log(detailCategories);
      detailCategories = Array.from(detailCategories);
      console.log(detailCategories);
      const result = await youtubeDataAPIInstacne.get("/channels", {
        params: {
          key: youtubeOauthAPI,
          part: "snippet, statistics,contentDetails",
          id: channelId,
        },
      });
      console.log(result.data);
      let channelRatio = (
        (sortedFruits[i][1].count / location.state.videoList.length) *
        100
      ).toFixed(2);
      let channelInfo = {
        channelID: channelId,
        channelRatio: channelRatio,
        channelThumbnail: result.data.items[0].snippet.thumbnails.medium.url,
        channelName: result.data.items[0].snippet.title,
        channelSubs: result.data.items[0].statistics.subscriberCount,
        channelCategories: detailCategories,
      };
      favoriteChannels = [...favoriteChannels, channelInfo];
    }
    setFavorite(favoriteChannels);
  }
  console.log(favorite);
  const maxChannelsPerColumn = 3;
  useEffect(() => {
    const timer = setTimeout(() => {
      getLikedChannelNumbers();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Nav color="white" />
      <ContainerBox>
        <Title>
          {location.state.name}님의 콘텐츠 성향 레포트
          <div className="subTitleFirst">
            총 {location.state.videoList.length}개의 좋아한 유튜브 콘텐츠를 분석
            <img src="/images/Share.png" alt="share" width="16px" />
          </div>
        </Title>
        <Divider />
        <DNABox>
          <DNAImage>
            <img src="/images/Monkey_1.png" alt="DNAImage" />
            <div className="DNATitle">{location.state.unknown.dnatitle}</div>
          </DNAImage>
          <DNAType>
            {location.state.dna.slice(0, 3).map((item, index) => (
              <DNAContent key={index}>
                <div className="category">{item.dnatype}</div>
                <div className="categoryNickname">{item.dnasubTitle}</div>
                <div className="contentRatio">
                  {((item.dnacount / location.state.totalCount) * 100).toFixed(
                    1
                  )}
                  %
                </div>
              </DNAContent>
            ))}
            <DNADisclaimer>
              {location.state.unknown.dnadescription}
            </DNADisclaimer>
          </DNAType>
        </DNABox>
        <Title sub="top5">
          {location.state.name}님이 좋아요 누른 채널 Top6
        </Title>
        {/* Favorite Channels */}
        <ChannelBox>
          {favorite.map((item) => (
            <Channel key={item.channelID}>
              <ChannelThumbnail>
                <img src={item.channelThumbnail} alt="favorite" />
              </ChannelThumbnail>
              <ChannelTitle>
                <div className="channelTitle">{item.channelName}</div>
                <div className="channelSubscriber">
                  {convertToShortNumber(item.channelSubs)}
                </div>
                <div className="channelRatio">({item.channelRatio}%)</div>
                {item.channelCategories.map((item) => (
                  <div className="detailCategoryBox">{item}</div>
                ))}
              </ChannelTitle>
            </Channel>
          ))}
        </ChannelBox>
        <Title sub="2">
          {location.state.name}님이 아직 좋아하지 않지만 <br></br> 성향에 맞을
          수 있는 채널을 골라봤어
          <div className="subTitle">
            유튜브 인기 영상의 채널 그리고 당신과 동일한 성향을 가진 사람들이
            즐겨보는 채널입니다.<br></br>새로운 채널을 발견해보세요!
          </div>
        </Title>
        <UnknownChannelBox>
          {/* To do list */}
          {/* 1. Channel에서 카테고리 영역 추가 */}
          {/* 2. DNA 비중 높은 순으로 max3개씩 보여주고, 총 6개를 보여줌.
          카채널이 없을 시 다른 카테고리로 넘길 수 있는 기능  */}
          <div className="unknownChannelContainer">
            {location.state.unknown.unknown.map((item, index) => (
              <div className="channelContainer" key={index}>
                <div className="detailUnknownCategoryBox">
                  {item.detailCategory}
                </div>
                <div className="channelElement">
                  {item.channelList
                    .slice(0, maxChannelsPerColumn)
                    .map((channel, channelIndex) => (
                      <Channel
                        key={channelIndex}
                        onClick={() => handleUnknownClick(channel)}
                      >
                        <div className="unknownChannel">
                          <ChannelThumbnail>
                            <img
                              src={channel.channelThumbnail}
                              alt="favorite"
                            />
                          </ChannelThumbnail>
                          <ChannelTitle>
                            <div className="channelTitle">
                              {channel.channelTitle}
                            </div>
                            <div className="channelSubscriber">
                              {convertToShortNumber(
                                channel.channelSubscribeCount
                              )}
                            </div>
                          </ChannelTitle>
                        </div>
                      </Channel>
                    ))}
                </div>
                {item.channelList.length > maxChannelsPerColumn && (
                  <div className="moreChannelNoti">
                    + {item.channelList.length - maxChannelsPerColumn}개의 더
                    많은 채널이 있습니다.
                  </div>
                )}
              </div>
            ))}
          </div>
        </UnknownChannelBox>
        <BlurBox></BlurBox>
        <DownloadTitle>
          DOWNLOAD APP
          <div className="subTitle">TO FIND OUT MORE UNKNOWN CHANNELS</div>{" "}
          <Channel>
            <UnknownChannel>
              <UnknownChannelBlur>+120 more</UnknownChannelBlur>
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
      {modalOpen && (
        <ChannelModal
          unknownChannelSelected={unknownChannelSelected}
          setModalOpen={setModalOpen}
        />
      )}
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
    width: 340px;
    margin-top: 80px;
    height: 1440px;
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
    grid-template-columns: repeat(2, 1fr);
  }
  .unknownChannelContainer {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .channelContainer {
    display: flex;
    flex-direction: column;
  }
  .detailUnknownCategoryBox {
    font-size: 14px;
    background: var(--white-white-033, rgba(255, 255, 255, 0.33));
    border-radius: 8px;
    padding: 8px;
    margin-top: 12px;
    color: white;
    display: flex;
    justify-content: center;
  }
  .channelElement {
    display: flex;
  }
  .moreChannelNoti {
    color: white;
  }
`;

const UnknownChannelBox = styled.div`
  display: grid;
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
  .unknownChannelContainer {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
    justify-content: center;
  }
  .channelContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  .detailUnknownCategoryBox {
    font-size: 14px;
    background: var(--white-white-033, rgba(255, 255, 255, 0.33));
    border-radius: 8px;
    padding: 8px;
    margin-top: 12px;
    color: white;
    display: flex;
    justify-content: center;
    width: 280px;
  }
  .channelElement {
    display: flex;
    margin-top: 20px;
  }
  .moreChannelNoti {
    color: white;
    margin-top: 32px;
  }
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
    height: 3000px;
    font-size: 18px;
    margin-top: -2200px;
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
