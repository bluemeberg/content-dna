import React from "react";
import styled from "styled-components";

const MainImage = () => {
  return (
    <Container>
      <img src="/images/main-image.png" alt="thumbnail" />
    </Container>
  );
};

export default MainImage;

const Container = styled.div`
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  img {
    width: 80%;
    border-radius: 20px;
  }
`;
