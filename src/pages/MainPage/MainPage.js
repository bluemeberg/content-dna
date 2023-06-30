import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import MainImage from "../../components/MainImage";
import Nav from "../../components/Nav";

const MainPage = () => {
  return (
    <Container>
      <Nav />
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
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
