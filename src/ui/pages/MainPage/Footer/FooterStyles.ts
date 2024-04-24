import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f3eee8;
  padding: 50px 0;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    .logo {
      margin-bottom: 20px;
      position: relative;
      left: 50%;
      transform: translateX(-60%);
    }
  }
  h5 {
    white-space: nowrap;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.2px;
    color: #534b42;
  }
  .list {
    ul {
      margin-top: 20px;
      li {
        margin-bottom: 10px;
        a {
          font-size: 18px;
          font-weight: 400;
          line-height: 25px;
          color: #706458;
          transition: opacity 0.3s linear;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    .footer-image {
      margin-top: 20px;
      p {
        margin: 20px 0;
        color: #706458;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        max-width: 235px;
      }
    }
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  .secondary-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: #706458b2;
  }
  a {
    transition: opacity 0.3s linear;
    &:hover {
      opacity: 0.5;
    }
  }
  .flex {
    display: flex;
    gap: 20px;
  }
  .social {
    position: relative;
    top: -50px;
    left: 60px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 30px;
    gap: 20px;
    .social {
      order: 1;
      left: initial;
      top: initial;
    }
    .links {
      flex-wrap: wrap;
      order: 2;
    }
    p {
      order: 3;
    }
  }
`;
