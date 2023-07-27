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
    max-width: 200px;
    font-weight: 500;
    text-align: center;
    margin-left: 20px;
    margin-bottom: 8px;
    @media (max-width: 1200px) {
      font-size: 16px;
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
  .channelRatio {
    font-size: 12px;
    font-weight: 100;
    line-height: 12px;
    text-align: center;
    margin-top: 8px;
    @media (max-width: 1200px) {
      margin-top: 4px;
    }
  }
  .detailCategoryBox {
    font-size: 8px;
    background: var(--white-white-033, rgba(255, 255, 255, 0.33));
    border-radius: 8px;
    padding: 8px;
    margin-top: 12px;
  }
`;

export default ChannelTitle;
