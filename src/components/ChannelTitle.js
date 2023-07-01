import styled from "styled-components";

const ChannelTitle = styled.div`
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
    }
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
`;

export default ChannelTitle;
