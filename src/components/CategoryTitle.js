import styled from "styled-components";

export const CategoryTitle = styled.div`
  color: var(--white-white-100, #fff);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.24px;
  border-radius: 90px;
  background: var(--white-white-025, rgba(255, 255, 255, 0.25));
  display: inline-flex;
  padding: 7px 24px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  margin-top: 120px;
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
`;
