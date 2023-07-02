import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  localServerInstance,
  youtubeDataAPIInstacne,
  youtubeOauthAPI,
} from "../../api/axios";
import Nav from "../../components/Nav";

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [dna, setDNA] = useState([]);

  async function processBatch(data, batchSize) {
    const batches = [];
    const numBatches = Math.ceil(data.length / batchSize);

    for (let i = 0; i < numBatches; i++) {
      const start = i * batchSize;
      const end = start + batchSize;
      const batch = data.slice(start, end);
      // const result = await fetchData(batch);
      const result = await localServerInstance.post("/chatgpt/content/dna", {
        dnaData: batch,
      });
      batches.push(result.data);
    }
    return batches;
  }

  const handleYoutubeInformation = async (accessToken, email) => {
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
            agentId: email,
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
      let cnt = 0;
      // while (true) {
      //   const result = await youtubeDataAPIInstacne.get("/videos", {
      //     params: {
      //       key: youtubeOauthAPI,
      //       part: "snippet, statistics, status,contentDetails",
      //       myRating: "like",
      //       maxResults: 50,
      //       pageToken: nextPageToken,
      //     },
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   });
      //   for (let i = 0; i < result.data.items.length; i++) {
      //     if (result.data.items[i].snippet.tags != null) {
      //       allVideos = [...allVideos, result.data.items[i]];
      //       const tags = result.data.items[i].snippet.tags.slice(0, 10);
      //       let data = {
      //         videoID: result.data.items[i].id,
      //         videoTitle: result.data.items[i].snippet.title,
      //         videoThumbnail:
      //           result.data.items[i].snippet.thumbnails.medium.url,
      //         videoDuration: result.data.items[i].contentDetails.duration,
      //         uploadDate: result.data.items[i].snippet.publishedAt,
      //         categoryID: result.data.items[i].snippet.categoryId,
      //         channelID: result.data.items[i].snippet.channelId,
      //         channelTitle: result.data.items[i].snippet.channelTitle,
      //         description: result.data.items[i].snippet.description,
      //         videoTags: tags,
      //       };
      //       allDNAData = [...allDNAData, data];
      //     }
      //   }
      //   console.log(result.data.nextPageToken);
      //   console.log(result.data.items);
      //   if (!result.data.nextPageToken) {
      //     break;
      //   } else if (cnt > 0) {
      //     // cnt 3 범위가 200개 영상
      //     break;
      //   }
      //   nextPageToken = result.data.nextPageToken;
      //   cnt += 1;
      // }
      // 서버 송신
      setVideos(allVideos);
      setDNA(allDNAData);
      let anaylzedDNA = [];

      // 클라이언트에서 5개씩 쪼개서 응답 받아오기
      const batches = await processBatch(allDNAData, 3);
      console.log(batches);
      let dnaCustom = [];
      let channelIds = [];
      let totalCount = 0;
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
      // let channelIdds = [];
      // for (let i = 0; i < channelIds.length; i++) {
      //   console.log(channelIds[i]);
      //   channelIdds = [...channelIdds, channelIds[i]];
      // }
      // console.log(channelIdds);
      const processedData = dnaCustom.reduce((result, item) => {
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

      console.log(processedData);
      let processedDataName = [];
      for (let i = 0; i < processedData.length; i++) {
        processedDataName = [...processedDataName, processedData[i].dnatype];
      }
      console.log(processedDataName);
      let DNATypeList = processedDataName;
      let channelIDList = channelIds;
      DNATypeList = DNATypeList.join(",");
      channelIDList = channelIDList.join(",");
      // DNATypeList = {
      //   DNATypeList: DNATypeList.join(","),
      // };
      // channelIDList = {
      //   channelIDList: channelIDList.join(","),
      // };
      const result22 = await localServerInstance.get("/chatgpt/unknown", {
        params: {
          DNATypeList,
          channelIDList,
        },
      });
      console.log(result22.data);
      // location.state.res = location.state.dna.sort(
      //   (a, b) => b.dnacount - a.dnacount
      // );
      // 클라이언트에서 100개 한번에 응답 받아오기
      // const reponse = await localServerInstance.post("/chatgpt/content/dna", {
      //   dnaData: allDNAData,
      // });

      // for (let i = 0; i < allDNAData.length; i++) {
      //   const reponse = await localServerInstance.post("/chatgpt/content/dna", {
      //     dnaData: allDNAData.slice(i, i + 5),
      //   });
      //   i += 5;
      // }
      // anaylzedDNA = [...anaylzedDNA, reponse.data.dna];
      // const reponse1 = await localServerInstance.post("/chatgpt/content/dna", {
      //   dnaData: allDNAData.slice(6, 10),
      // });
      // anaylzedDNA = [...anaylzedDNA, reponse1.data.dna];
      // const reponse2 = await localServerInstance.post("/chatgpt/content/dna", {
      //   dnaData: allDNAData.slice(11, 15),
      // });
      // anaylzedDNA = [...anaylzedDNA, reponse2.data.dna];
      // const reponse3 = await localServerInstance.post("/chatgpt/content/dna", {
      //   dnaData: allDNAData.slice(11, 15),
      // });
      // anaylzedDNA = [...anaylzedDNA, reponse2.data.dna];
      // const reponse3 = await localServerInstance.post("/chatgpt/content/dna", {
      //   dnaData: allDNAData.slice(11, 15),
      // });
      // anaylzedDNA = [...anaylzedDNA, reponse2.data.dna];

      // console.log(reponse.data);
      // console.log(reponse1.data);
      // console.log(reponse2.data);

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
  };
  console.log(videos);
  console.log(dna);
  useEffect(() => {
    console.log(location.state);
    // handleYoutubeInformation(location.state.token, location.state.email);
  }, []);
  return (
    <Container>
      <Nav color="white" />
      <Image>
        <img src="/images/LoadingYoutube.png" alt="loading" />
      </Image>
      <Title>Loading DNA...</Title>
      <SubTitle>최대 1분 정도가 소요될 수 있습니다.</SubTitle>
      <button
        onClick={() =>
          handleYoutubeInformation(location.state.token, location.state.email)
        }
      >
        버튼
      </button>
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
