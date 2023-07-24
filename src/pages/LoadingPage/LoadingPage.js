import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  localServerInstance,
  serverInstance,
  youtubeDataAPIInstacne,
  youtubeOauthAPI,
} from "../../api/axios";
import Nav from "../../components/Nav";
import ProgressBar from "../../components/Progressbar";

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [dna, setDNA] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [progressValue, setProgressValue] = useState(0);
  // useCallback
  const [resultNoti, setResultNoti] = useState();
  const handleProcessBatch = async (data, batchSize) => {
    const batches = [];
    const numBatches = Math.ceil(data.length / batchSize);
    console.log(numBatches);
    for (let i = 0; i < numBatches; i++) {
      const start = i * batchSize;
      const end = start + batchSize;
      const batch = data.slice(start, end);
      // const result = await fetchData(batch);
      const result = await serverInstance.post("/chatgpt/content/dna", {
        dnaData: batch,
      });
      batches.push(result.data);
      setProgressValue((prevValue) => i);
      setProgressData([...progressData, result.data]);
    }
    return batches;
  };

  const handleYoutubeInformation = useCallback(async (accessToken, email) => {
    let allVideos = [];
    let allDNAData = [];
    let shortVideos = [];
    let allShortDNAData = [];
    try {
      const result = await youtubeDataAPIInstacne.get("/videos", {
        params: {
          key: youtubeOauthAPI,
          part: "snippet, statistics, status,contentDetails",
          myRating: "like",
          maxResults: 20,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      for (let i = 0; i < result.data.items.length; i++) {
        if (result.data.items[i].snippet.tags != null) {
          // To do list
          // 1. 영상 길이를 통해 쇼츠 영상 구분

          console.log("hi zoo");
          console.log(
            result.data.items[i].contentDetails.duration.includes("M")
          );
          if (
            (result.data.items[i].contentDetails.duration.includes("M") ===
              true ||
              result.data.items[i].contentDetails.duration.includes("H") ===
                true) &&
            result.data.items[i].contentDetails.duration.includes("PT1M") ===
              false
          ) {
            console.log("hi zoo non filtering");
            allVideos = [...allVideos, result.data.items[i]];
            const tags = result.data.items[i].snippet.tags.slice(0, 10);
            let data = {
              agentId: email,
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
          } else {
            console.log("hi zoo filtering");
            shortVideos = [...shortVideos, result.data.items[i]];
            const tags = result.data.items[i].snippet.tags.slice(0, 10);
            let data = {
              agentId: email,
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
            allShortDNAData = [...allShortDNAData, data];
          }
        }
      }
      console.log(shortVideos);
      // allVideos = [...allVideos, result.data.items];
      let nextPageToken = result.data.nextPageToken;
      console.log(nextPageToken);
      let cnt = 0;
      // if (nextPageToken !== undefined) {
      //   while (true) {
      //     const result = await youtubeDataAPIInstacne.get("/videos", {
      //       params: {
      //         key: youtubeOauthAPI,
      //         part: "snippet, statistics, status,contentDetails",
      //         myRating: "like",
      //         maxResults: 50,
      //         pageToken: nextPageToken,
      //       },
      //       headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //       },
      //     });
      //     for (let i = 0; i < result.data.items.length; i++) {
      //       if (result.data.items[i].snippet.tags != null) {
      //         allVideos = [...allVideos, result.data.items[i]];
      //         const tags = result.data.items[i].snippet.tags.slice(0, 10);
      //         let data = {
      //           videoID: result.data.items[i].id,
      //           videoTitle: result.data.items[i].snippet.title,
      //           videoThumbnail:
      //             result.data.items[i].snippet.thumbnails.medium.url,
      //           videoDuration: result.data.items[i].contentDetails.duration,
      //           uploadDate: result.data.items[i].snippet.publishedAt,
      //           categoryID: result.data.items[i].snippet.categoryId,
      //           channelID: result.data.items[i].snippet.channelId,
      //           channelTitle: result.data.items[i].snippet.channelTitle,
      //           description: result.data.items[i].snippet.description,
      //           videoTags: tags,
      //         };
      //         allDNAData = [...allDNAData, data];
      //       }
      //     }
      //     console.log(result.data.nextPageToken);
      //     console.log(result.data.items);
      //     if (!result.data.nextPageToken) {
      //       break;
      //     } else if (cnt > 0) {
      //       // cnt 3 범위가 200개 영상
      //       break;
      //     }
      //     nextPageToken = result.data.nextPageToken;
      //     cnt += 1;
      //   }
      // }
      // 서버 송신
      setVideos(allVideos);
      setDNA(allDNAData);
      let anaylzedDNA = [];
      // 클라이언트에서 1개씩 쪼개서 응답 받아오기
      const batches = await handleProcessBatch(allDNAData, 1);
      const shortBatches = await handleProcessBatch(allShortDNAData, 1);
      // 카테고리 분석
      console.log(batches);
      console.log(shortBatches);
      // dna 비중
      let dnaCustom = [];

      // 내가 좋아하는 채널 ID
      let channelIds = [];
      let totalCount = 0;
      // 내가 좋아하는 영상 정보
      let videoList = [];
      for (let i = 0; i < batches.length; i++) {
        console.log(batches[i].dna);
        console.log(batches[i].videoList);
        for (let j = 0; j < batches[i].dna.length; j++) {
          dnaCustom = [...dnaCustom, batches[i].dna[j]];
        }
        for (let j = 0; j < batches[i].videoList.length; j++) {
          channelIds = [...channelIds, batches[i].videoList[j].channelID];
        }
        totalCount += batches[i].dnatotalCount;
        for (let j = 0; j < batches[i].videoList.length; j++) {
          videoList = [...videoList, batches[i].videoList[j]];
        }
      }
      console.log(dnaCustom);
      console.log(channelIds);
      console.log(totalCount);
      console.log(videoList);
      let channelIdds = [];
      for (let i = 0; i < channelIds.length; i++) {
        console.log(channelIds[i]);
        channelIdds = [...channelIdds, channelIds[i]];
      }
      console.log(channelIdds);
      // dna type 중복 처리해서 리턴하기
      let processedData = dnaCustom.reduce((result, item) => {
        if (item.dnatype) {
          const existingItem = result.find((x) => x.dnatype === item.dnatype);
          if (existingItem) {
            existingItem.dnacount += item.dnacount;
          } else {
            result.push({ dnatype: item.dnatype, dnacount: item.dnacount });
          }
        }
        return result;
      }, []);
      // 1. Todolist process data 정렬 필요
      console.log(processedData);
      processedData = processedData.sort((a, b) => b.dnacount - a.dnacount);

      let processedDataName = [];
      for (let i = 0; i < processedData.length; i++) {
        processedDataName = [...processedDataName, processedData[i].dnatype];
      }
      // DNA 정렬 후 명칭 리턴
      console.log(processedDataName);
      let DNATypeList = processedDataName;
      let channelIDList = channelIds;
      DNATypeList = DNATypeList.join(",");
      channelIDList = channelIDList.join(",");
      // DNATypeList =  {
      //   DNATypeList: DNATypeList.join(","),
      // };
      // channelIDList = {
      //   c hannelIDList: channelIDList.join(","),
      // };
      setProgressValue(100);
      const result22 = await serverInstance.get("/chatgpt/unknown", {
        params: {
          DNATypeList,
          channelIDList,
        },
      });
      console.log(result22.data);

      // 쇼츠 영상 분석
      // dna 비중
      let shortDnaCustom = [];

      // 내가 좋아하는 채널 ID
      let shortChannelIds = [];
      let shortTotalCount = 0;
      // 내가 좋아하는 영상 정보
      let shortVideoList = [];
      for (let i = 0; i < shortBatches.length; i++) {
        console.log(shortBatches[i].dna);
        console.log(shortBatches[i].videoList);
        for (let j = 0; j < shortBatches[i].dna.length; j++) {
          shortDnaCustom = [...shortDnaCustom, shortBatches[i].dna[j]];
        }
        for (let j = 0; j < shortBatches[i].videoList.length; j++) {
          shortChannelIds = [
            ...shortChannelIds,
            shortBatches[i].videoList[j].channelID,
          ];
        }
        shortTotalCount += shortBatches[i].dnatotalCount;
        for (let j = 0; j < shortBatches[i].videoList.length; j++) {
          shortVideoList = [...shortVideoList, shortBatches[i].videoList[j]];
        }
      }
      console.log(shortDnaCustom);
      console.log(shortChannelIds);
      console.log(shortTotalCount);
      console.log(shortVideoList);
      let shortChannelIdds = [];
      for (let i = 0; i < channelIds.length; i++) {
        console.log(channelIds[i]);
        shortChannelIdds = [...channelIdds, channelIds[i]];
      }
      console.log(shortChannelIdds);
      // dna type 중복 처리해서 리턴하기
      let shortProcessedData = dnaCustom.reduce((result, item) => {
        if (item.dnatype) {
          const existingItem = result.find((x) => x.dnatype === item.dnatype);
          if (existingItem) {
            existingItem.dnacount += item.dnacount;
          } else {
            result.push({
              dnatype: item.dnatype,
              dnacount: item.dnacount,
            });
          }
        }
        return result;
      }, []);
      // 1. Todolist process data 정렬 필요
      console.log(shortProcessedData);
      shortProcessedData = shortProcessedData.sort(
        (a, b) => b.dnacount - a.dnacount
      );
      console.log(shortProcessedData);
      navigate(`/result`, {
        state: {
          dna: processedData,
          totalCount: totalCount,
          unknown: result22.data,
          name: location.state.name,
          videoList: videoList,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(videos);
  console.log(dna);
  console.log(progressData);
  useEffect(() => {
    console.log(location.state);
    handleYoutubeInformation(location.state.token, location.state.email);
  }, []);
  return (
    <Container>
      <Nav color="white" />
      <Image>
        <img src="/images/LoadingYoutube.png" alt="loading" />
      </Image>
      <Title>Loading DNA...</Title>
      <SubTitle>
        {videos.length}개의 콘텐츠를 분석중입니다. <br />
        최대 1분 정도가 소요될 수 있습니다.
      </SubTitle>
      <div>
        <ProgressBar value={progressValue} max={100} />
      </div>
      {progressValue === 100 ? (
        <SubTitle>분석 결과를 불러오고 있습니다. 잠시만 기다려주세요</SubTitle>
      ) : (
        progressData.map((item) => <SubTitle>{item.dna[0].dnatype}</SubTitle>)
      )}
      <Error>진행이 멈춰있으면 다시 시작하기 버튼을 눌러주세요.</Error>
      <Button onClick={handleYoutubeInformation}>다시 분석하기</Button>
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
  margin-bottom: 10px;
`;

const Error = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-top: 12px;
  color: white;
  margin-top: 200px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  img {
    width: 60%;
  }
`;

const Button = styled.button`
  @media (max-width: 1440px) {
    display: flex;
    width: 160px;
    height: 40px;
    padding: 6px 30px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 126px;
    background: #050505;
    color: var(--white-white-100, #fff);
    text-align: center;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0.22px;
    margin-left: 90px;
    margin-top: 10px;
  }
`;
