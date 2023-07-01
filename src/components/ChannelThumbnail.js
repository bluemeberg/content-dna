import styled from "styled-components";

const ChannelThumbnail = styled.div`
  img {
    border-radius: 60px;
    width: 120px;
    height: 120px;
    @media (max-width: 1200px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export default ChannelThumbnail;
