import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #2f333a;
  padding: 50px 0 0;
  .footer-grid {
    border-bottom: 1px solid #fff;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: #fff;
    gap: 20px;
    .item {
      h6 {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 500;
        line-height: 29.05px;
        color: #fff;
        margin-bottom: 20px;
      }
      li {
        margin-bottom: 10px;
      }
      a {
        transition: opacity 0.3s linear;
        &:hover {
          opacity: 0.5;
        }
      }
      .text {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        min-width: 250px;
      }
      .red {
        color: #e73c17;
      }
      .social-icons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      .info-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
      }
    }
  }
  .copy {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
    padding: 70px 0;
    text-align: center;
  }
  @media (max-width: 1024px) {
    padding: 30px 0;
    .footer-grid {
      grid-template-columns: 1fr;
      padding-bottom: 10px;
      border-bottom: 0;
      .item {
        ul,
        .text,
        .info-wrapper,
        .social-icons {
          display: none;
        }

        h6 {
          margin-bottom: 0;
          font-size: 10px;
          text-decoration: underline;
        }
      }
    }
    .copy {
      padding: 30px 0 0;
      font-size: 12px;
    }
  }
`;
