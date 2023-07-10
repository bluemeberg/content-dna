import React, { useEffect } from "react";
import styled from "styled-components";
import { youtubeDataAPIInstacne, youtubeOauthAPI } from "../../api/axios";
import Banner from "../../components/Banner";
import MainImage from "../../components/MainImage";
import Nav from "../../components/Nav";

const MainPage = () => {
  return (
    <Container>
      <Nav color="white" />
      <Banner />
      <MainImage />
    </Container>
  );
};

export default MainPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  background: #1c1e27;
  height: 100vh;
`;
