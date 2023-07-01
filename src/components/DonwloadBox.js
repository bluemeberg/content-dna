import styled from "styled-components";

export const DonwloadBox = styled.div`
  display: flex;
  width: 200px;
  height: 260px;
  padding: 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  border-radius: 24px;
  background: var(--white-white-010, rgba(255, 255, 255, 0.1));
  margin-top: -260px;
  @media (max-width: 1200px) {
    width: 140px;
    font-size: 18px;
    height: 200px;
    margin-top: -200px;
  }
`;
