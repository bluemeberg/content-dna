import styled from "styled-components";

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
    @media (max-width: 1200px) {
      width: 200px;
      height: 200px;
      margin-top: 0px;
      margin-right: 0px;
    }
  }
  .DNATitle {
    color: white;
    border-radius: 90px;
    border: 1px solid var(--white-white-010, rgba(255, 255, 255, 0.1));
    background: #7b61ff;
    box-shadow: 0px 0px 40px 0px #7b61ff;
    display: flex;
    width: 320px;
    height: 48px;
    padding: 6px 20px 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    margin-top: -20px;
    z-index: 2;
    @media (max-width: 1200px) {
      width: 200px;
      height: 32px;
      font-size: 18px;
      margin-top: -10px;
    }
  }
  @media (max-width: 1200px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`;

export default DNAImage;
