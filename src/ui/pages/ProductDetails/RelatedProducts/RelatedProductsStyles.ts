import styled from "styled-components";

export const RelatedProductsWrapper = styled.div`
  padding-bottom: 50px;
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
    color: #191919;
  }
  .swiper {
    margin-top: 50px;
    .swiper-wrapper {
      margin-bottom: 170px;
    }
    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      background-color: #ccc;
      margin: 0 5px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }

    .swiper-pagination-bullet-active {
      background-color: #e73c17;
      opacity: 1;
    }
    .swiper-slide {
      width: 260px !important;
      height: 350px !important;
      .card {
        height: 100%;
        width: 100%;
        background-color: #f1f1f1;
        padding: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .image {
          img {
            height: 100% !important;
            width: 100% !important;
            object-fit: contain;
          }
        }

        .button-wrapper {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
        }
        .favorite {
          width: 60px;
          height: 60px;
          border: 1px solid #d7d7d7;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          position: absolute;
          right: 20px;
          top: 20px;
          z-index: 10;
        }
      }
      h6 {
        font-size: 20px;
        font-weight: 400;
        line-height: 24.2px;
        color: #191919;
        text-align: center;
        margin: 20px 0;
      }
      .price {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        p {
          font-size: 20px;
          font-weight: 600;
          line-height: 24.2px;
          color: #191919;
        }
        .old-price {
          color: #d9d9d9;
          text-decoration: line-through;
        }
      }
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
      line-height: 21.78px;
    }
    .swiper {
      margin-top: 30px;
      .swiper-slide {
        width: 150px !important;
        height: 230px !important;
        h6 {
          font-size: 11px;
          margin: 5px 0;
        }
        .price {
          font-size: 12px;
        }
        .card {
          .favorite {
            width: 20px;
            height: 20px;
            right: 10px;
            top: 10px;
            img {
              width: 10px !important;
              height: 12px !important;
            }
          }
          .button-wrapper {
            bottom: 20px;
            button {
              padding: 10px;
            }
          }
        }
      }
      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
      }
    }
  }
`;

export const Tag = styled.div`
  border-radius: 100px;
  padding: 5px 10px;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  position: absolute;
  top: 20px;
  left: 20px;
  &.new {
    background-color: #12a05c;
  }
  &.sale {
    background-color: #e73c17;
  }
  &.hot {
    background-color: #ff9900;
  }
  &.warranty {
    background-color: #7f7cf6;
  }
  @media (max-width: 768px) {
    padding: 0 5px;
    top: 10px;
    left: 10px;
    font-size: 6px;
  }
`;
