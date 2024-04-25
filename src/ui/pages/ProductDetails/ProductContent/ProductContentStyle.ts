import styled from "styled-components";

export const ProductDetailsWrapper = styled.div``;

export const InfoWrapper = styled.div`
  background-color: #f4f5f8;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 48.41px;
    color: #191919;
  }
  p {
    margin-top: 20px;
    color: #191919;
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.2em;
  }
  @media (max-width: 1024px) {
    padding: 30px 0;
    h1 {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.78px;
    }
    p {
      font-size: 10px;
      font-weight: 300;
      line-height: 12.1px;
    }
  }
`;

export const ProductContentWrapper = styled.div`
  padding: 50px 0;
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 1024px) {
    padding: 30px 0 0;
    .grid-wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: hidden;

  .main-image {
    background-color: #f1f1f1;
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      width: 50% !important;
      height: 50% !important;
      left: 50% !important;
      top: 50% !important;
      transform: translate(-50%, -50%);
      object-fit: contain;
    }
    p {
      color: #6f6f6f;
      font-size: 15px;
      font-weight: 300;
      line-height: 18.15px;
      position: absolute;
      bottom: -40px;
      left: 0;
    }
  }
  .swiper-slide {
    width: 110px;
  }
  .image {
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid #f0f0f0;
    transition: border 0.3s linear;
    &.active {
      border: 1px solid #e73c17;
    }
    &:hover {
      border: 1px solid #e73c17;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;

    .main-image {
      background-color: #fff;
      height: 250px;
      p {
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;
        width: 100%;
        font-size: 10px;
        font-weight: 300;
        line-height: 12.1px;
        text-align: center;
      }
    }
  }
`;

export const ProductInfoWrapper = styled.div`
  .basic-info {
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    margin-bottom: 10px;
  }
  .name {
    font-weight: 300;
  }
  .main-info {
    h2 {
      font-size: 32px;
      font-weight: 500;
      line-height: 38.73px;
      color: #191919;
    }
    .rate {
      margin: 10px 0;
    }
    ul {
      margin-bottom: 20px;
      li {
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        margin-bottom: 10px;
        &::before {
          content: "•";
          margin-right: 2px;
          display: inline-block;
        }
      }
    }

    .size-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      padding: 30px 0;
      margin-bottom: 30px;
    }
    .price-wrapper {
      margin: 30px 0;
      .flex {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }
      .price-info {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        color: #191919;
      }
      .prices {
        display: flex;
        gap: 20px;
        align-items: flex-end;
        margin: 20px 0;
        .price {
          font-size: 32px;
          font-weight: 500;
          line-height: 38.78px;
          color: #191919;
        }
        .old-price {
          font-size: 24px;
          font-weight: 500;
          line-height: 29.36px;
          color: #d7d7d7;
          text-decoration: line-through;
        }
      }
      .quantity-wrapper {
        display: flex;
        border: 1px solid #f0f0f0;

        > div {
          height: 60px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 400;
          line-height: 38.73px;
          color: #191919;
          border-right: 1px solid #f0f0f0;
          cursor: pointer;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .mobile-price-info {
      width: 100%;
      background-color: #fff;
      padding: 20px 30px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
      .flex {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .price {
        font-size: 18px;
        font-weight: 500;
        line-height: 21.78px;
        color: #191919;
      }
      .old-price {
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        color: #d7d7d7;
        text-decoration: line-through;
      }
      .quantity-wrapper {
        display: flex;
        border: 1px solid #f0f0f0;

        > div {
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 500;
          line-height: 12.1px;
          color: #191919;
          border-right: 1px solid #f0f0f0;
          cursor: pointer;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
    p {
      font-size: 10px;
    }
    .main-info {
      h2 {
        font-size: 14px;
        line-height: 17px;
      }
      ul {
        li {
          font-size: 11px;
          line-height: 13px;
        }
      }
      .size-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        button {
          width: 70px;
          padding: 5px 10px;
          font-size: 12px;
          &.active {
            color: #e73c17;
          }
        }
      }

      .price-wrapper {
        display: none;
      }
    }
  }
`;
