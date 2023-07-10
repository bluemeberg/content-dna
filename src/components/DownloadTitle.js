import styled from "styled-components";

const DownloadTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  /* margin-top: -140px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .subTitle {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.16px;
    color: var(--neutral-neutral-40, #ccd4df);
    margin-top: 20px;
    margin-bottom: 80px;
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    width: 320px;
    font-size: 18px;
    /* margin-top: -240px; */
  }
`;

export default DownloadTitle;
