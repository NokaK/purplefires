import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  img {
    object-fit: cover !important;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .content {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    gap: 20px;
    h4 {
      font-size: 28px;
      font-weight: 500;
      line-height: 33.89px;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 24.2px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
  }
`;
