import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav";

const ResultPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <Nav color="white" />
      <ContainerBox>
        <Title>"구글 이름" 콘텐츠 성향 Report</Title>
        <Divider />
        <DNABox>
          <DNAImage>
            <img src="/images/Monkey_1.png" alt="DNAImage" />
            <div className="DNATitle">꽃장이들의 농구경영</div>
          </DNAImage>
          <DNAType>
            <DNAContent>
              <div className="content">Basketball</div>
              <div className="contentRatio">24%</div>
            </DNAContent>
            <DNAContent>
              <div className="content">Business</div>
              <div className="contentRatio">19%</div>
            </DNAContent>
            <DNAContent>
              <div className="content">Flower</div>
              <div className="contentRatio">11%</div>
            </DNAContent>
            <DNADisclaimer>
              그들은 뜨거운 경기에 푹 빠지는 동안 창의적인 비즈니스 아이디어를
              고민하며, 꽃을 피우며 세상을 아름답게 만들기 위한 비전을 꿈꾸는
              사람들이다.
            </DNADisclaimer>
          </DNAType>
        </DNABox>
        {/* DNATitle */}
        {/* DNAType */}
        {/* DNADisclaimer */}
        {/* Favorite Channels */}
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
display: flex;
  padding: 48px 0px 96px 0px;
  flex-direction : column;
  border-radius: 24px;
  margin-top : 78px
  height: 1200px;
  width: 1200px;
  margin-top : 78px;
  background: linear-gradient(
    132deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.03) 66.53%,
    rgba(255, 255, 255, 0.15) 100%
  );
  box-shadow: -4px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
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
`;

const DNAImage = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  img {
    border-radius: 10px;
    width: 324px;
    height: 324px;
  }
  .DNATitle {
    color: white;
    border-radius: 90px;
    border: 1px solid var(--white-white-010, rgba(255, 255, 255, 0.1));
    background: #7b61ff;
    box-shadow: 0px 0px 40px 0px #7b61ff;
    display: flex;
    width: 350px;
    height: 64px;
    padding: 6px 20px 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    margin-top: -20px;
    z-index: 2;
  }
`;

const DNAType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const DNAContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .content {
    border-radius: 90px;
    background: #7b61ff;
    width: 200px;
    height: 60px;
    flex-shrink: 0;
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.1px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 20px;
  }
  .contentRatio {
    color: white;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

const DNADisclaimer = styled.div`
  color: white;
  max-width: 380px;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.16px;
  margin-top: 20px;
`;
