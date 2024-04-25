import styled from "styled-components";

export const ProductDescriptionWrapper = styled.div`
  padding: 50px 0;
  .content {
    max-width: 980px;
    margin: 0 auto;
  }
  .tabs {
    border-bottom: 0.6px solid #d9d9d9;
    .wrapper {
      display: flex;
      justify-content: center;
      gap: 270px;
    }
    .tab {
      cursor: pointer;
      padding: 20px 0;
      border-bottom: 0.6px solid transparent;
      transition: all 0.3s linear;
      font-size: 22px;
      line-height: 26.63px;
      font-weight: 500;
      &.active {
        border-bottom: 1px solid #e73c17;
      }
    }
  }
  .text-content {
    padding: 20px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.78px;
  }
  @media (max-width: 768px) {
    padding: 0;
    .tabs {
      .wrapper {
        gap: 50px;
      }
      .tab {
        font-size: 12px;
        line-height: 14.52px;
      }
    }
    .text-content {
      font-size: 10px;
      line-height: 12.1px;
    }
  }
`;
