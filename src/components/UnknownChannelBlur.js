import styled from "styled-components";

export const UnknownChannelBlur = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid var(--white-white-100, #fff);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 16px;
  .locked {
    font-weight: 100;
    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      @media (max-width: 1200px) {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
    @media (max-width: 1200px) {
    }
  }
  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
  }
`;
