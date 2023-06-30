import React from "react";
import styled from "styled-components";

const MainImage = () => {
  return (
    <Container>
      <img src="/images/main-image.png" alt="thumbnail" />
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
  justify-content: space-between;
  img {
    width: 40%;
    border-radius: 20px;
    margin-right: 60px;
    margin-left: 60px;
  }
`;
