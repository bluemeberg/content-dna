import styled from "styled-components";

const DNAContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .category {
    border-radius: 90px;
    background: #7b61ff;
    width: 140px;
    height: 10px;
    padding: 20px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 20px;
    max-width: 160px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.14px;
    word-break: break-all;
    @media (max-width: 1200px) {
      height: 5px;
      width: 100px;
      font-size: 12px;
    }
  }
  .categoryNickname {
    color: #7b61ff;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-right: 8px;
    min-width: 180px;
    @media (max-width: 1200px) {
      max-width: 100px;
      min-width: 100px;
      font-size: 16px;
      margin-right: 8px;
    }
  }
  .contentRatio {
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 1200px) {
      font-size: 16px;
    }
  }
  @media (max-width: 1200px) {
  }
`;

export default DNAContent;
