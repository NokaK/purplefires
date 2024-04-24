import styled from "styled-components";

export const TrendsSectionWrapper = styled.section`
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: #706458e5;
    margin: 10px 0;
  }
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 15px;
  }
`;
export const TextContent = styled.div`
  h3 {
    font-family: "Merriweather", serif;
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.3px;
    color: #121212;
  }
`;

export const SubscribeForm = styled.form`
  > div {
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #706458e5;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  .sent {
    opacity: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    button {
      width: 90%;
    }
  }
`;

export const SliderWrapper = styled.div`
  padding-bottom: 50px;
  max-width: 1700px;
  margin: 0 auto;
  .extra-content {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    h3 {
      font-family: "Merriweather", serif;
      font-size: 45px;
      font-weight: 300;
      line-height: 40px;
      letter-spacing: -0.3px;
      color: #534b42;
    }
    p {
      max-width: 359px;
      margin: 0;
    }

    .buttons {
      display: flex;
      gap: 10px;

      right: 0;
      > div {
        cursor: pointer;
      }
    }
    .slider-length {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      color: #706458e5;
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 0;
      margin-bottom: 50px;
      padding: 0 15px;
      h3 {
        margin-bottom: 20px;
      }
      p {
        max-width: 100%;
      }
      .buttons,
      .slider-length {
        display: none;
      }
    }
  }

  .mySwiper {
    width: 100%;
  }
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    width: 250px !important;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    .buttons,
    .slider-length {
      display: none;
    }
  }
`;
