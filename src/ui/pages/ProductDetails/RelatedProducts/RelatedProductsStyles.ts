import styled from "styled-components";

export const RelatedProductsWrapper = styled.div`
  padding: 50px 0;
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
        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: contain;
        }
        .button-wrapper {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
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
    .swiper {
      .swiper-slide {
        width: 132px !important;
        height: 186px !important;
      }
      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
      }
    }
  }
`;
