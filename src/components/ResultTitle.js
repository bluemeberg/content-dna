import styled from "styled-components";

const Title = styled.div`
  font-size: ${(props) =>
    props.sub === "top5" ? `20px` : props.sub === "2" ? `24px` : `28px`};
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: ${(props) =>
    props.sub === "2" ? `200px` : props.sub === "3" ? `160px` : `0px`};
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
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
  .subTitleFirst {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.16px;
    color: var(--neutral-neutral-40, #ccd4df);
    display: flex;
    align-items: center;
    img {
      margin-left: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    width: 320px;
    font-size: 18px;
    margin-top: ${(props) =>
      props.sub === "2" ? `200px` : props.sub === "3" ? `160px` : `-20px`};
  }
`;

export default Title;
