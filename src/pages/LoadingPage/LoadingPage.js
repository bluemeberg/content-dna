import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { youtubeDataAPIInstacne, youtubeOauthAPI } from "../../api/axios";
import Nav from "../../components/Nav";

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [dna, setDNA] = useState([]);
  const handleYoutubeInformation = async (accessToken) => {
    let allVideos = [];
    let allDNAData = [];
    try {
      const result = await youtubeDataAPIInstacne.get("/videos", {
        params: {
          key: youtubeOauthAPI,
          part: "snippet, statistics, status,contentDetails",
          myRating: "like",
          maxResults: 50,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      for (let i = 0; i < result.data.items.length; i++) {
        if (result.data.items[i].snippet.tags != null) {
          allVideos = [...allVideos, result.data.items[i]];
          const tags = result.data.items[i].snippet.tags.slice(0, 10);
          let data = {
            videoID: result.data.items[i].id,
            videoTitle: result.data.items[i].snippet.title,
            videoThumbnail: result.data.items[i].snippet.thumbnails.medium.url,
            videoDuration: result.data.items[i].contentDetails.duration,
            uploadDate: result.data.items[i].snippet.publishedAt,
            categoryID: result.data.items[i].snippet.categoryId,
            channelID: result.data.items[i].snippet.channelId,
            channelTitle: result.data.items[i].snippet.channelTitle,
            description: result.data.items[i].snippet.description,
            videoTags: tags,
          };
          allDNAData = [...allDNAData, data];
        }
      }
      // allVideos = [...allVideos, result.data.items];
      let nextPageToken = result.data.nextPageToken;
      while (true) {
        const result = await youtubeDataAPIInstacne.get("/videos", {
          params: {
            key: youtubeOauthAPI,
            part: "snippet, statistics, status,contentDetails",
            myRating: "like",
            maxResults: 50,
            pageToken: nextPageToken,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        for (let i = 0; i < result.data.items.length; i++) {
          if (result.data.items[i].snippet.tags != null) {
            allVideos = [...allVideos, result.data.items[i]];
            const tags = result.data.items[i].snippet.tags.slice(0, 10);
            let data = {
              videoID: result.data.items[i].id,
              videoTitle: result.data.items[i].snippet.title,
              videoThumbnail:
                result.data.items[i].snippet.thumbnails.medium.url,
              videoDuration: result.data.items[i].contentDetails.duration,
              uploadDate: result.data.items[i].snippet.publishedAt,
              categoryID: result.data.items[i].snippet.categoryId,
              channelID: result.data.items[i].snippet.channelId,
              channelTitle: result.data.items[i].snippet.channelTitle,
              description: result.data.items[i].snippet.description,
              videoTags: tags,
            };
            allDNAData = [...allDNAData, data];
          }
        }
        console.log(result.data.nextPageToken);
        console.log(result.data.items);
        if (!result.data.nextPageToken) {
          break;
        }
        nextPageToken = result.data.nextPageToken;
      }
      // 서버 송신
      setVideos(allVideos);
      setDNA(allDNAData);
      navigate(`/result`);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(videos);
  console.log(dna);
  useEffect(() => {
    console.log(location.state.test);
    handleYoutubeInformation(location.state.test);
  }, [location.state.test]);
  return (
    <Container>
      <Nav color="white" />
      <Image>
        <img src="/images/LoadingYoutube.png" alt="loading" />
      </Image>
      <Title>Loading DNA...</Title>
      <SubTitle>최대 1분 정도가 소요될 수 있습니다.</SubTitle>
    </Container>
  );
};

export default LoadingPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  background: #1c1e27;
  height: 100vh;
`;

const Title = styled.div`
  color: var(--white-white-100, #fff);
  text-align: center;
  /* Mobile_Font/Title03_20_R */
  font-size: 20px;
  font-family: Roboto;
  line-height: 30px;
  letter-spacing: 0.2px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-top: 12px;
  color: white;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  img {
    width: 60%;
  }
`;
