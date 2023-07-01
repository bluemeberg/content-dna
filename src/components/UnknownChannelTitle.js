import styled from "styled-components";

const UnknownChannelTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .channelTitle {
    margin-top: 12px;
    font-size: 20px;
    max-width: 120px;
    min-height: 48px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 14px;
      margin-top: 20px;
    }
    filter: blur(12px);
  }
  .channelSubscriber {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    text-align: center;
    margin-top: 8px;
    @media (max-width: 1200px) {
      margin-top: 0px;
    }
  }
  .question {
    color: white;
    position: relative;
    font-weight: 700;
    line-height: 24px;
    top: 40px;
    font-size: 20px;
    @media (max-width: 1200px) {
      line-height: 0px;
      font-size: 14px;
    }
  }
`;

export default UnknownChannelTitle;
