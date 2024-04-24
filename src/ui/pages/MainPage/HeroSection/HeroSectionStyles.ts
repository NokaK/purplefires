import styled from "styled-components";

export const HeroWrapper = styled.section`
  background-color: #f3eee8;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    .container {
      padding: 0;
    }
  }
`;

export const BlockWrapper = styled.div`
  height: 100vh;
  max-height: 900px;
  width: 50%;
  @media (max-width: 1024px) {
    position: absolute;
    width: 100%;
    z-index: 10;
    left: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  max-height: 900px;
  width: 50%;
  overflow: hidden;
  max-width: 1100px;

  img {
    height: 100% !important;
    width: 100% !important;
    object-fit: cover;
  }
  .overlay {
    display: none;
  }
  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    .overlay {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #70645833;
    }
  }
`;
export const ChatIconWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 50px 0;
  position: relative;

  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 50px 30px;
    .logo {
      color: #ffffff;
    }
  }
`;

export const NavigationWrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    top: 2px;
    a {
      color: #706458;
      font-size: 18px;
      line-height: 25px;
      transition: opacity 0.3s linear;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const MobileNavigationWrapper = styled.nav`
  cursor: pointer;

  .mobile-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    background-color: #f3eee8;
    padding: 20px;
    border-radius: 5px;
    z-index: 100;
    transition: right 0.3s linear;
    ul {
      display: flex;
      flex-direction: column;
      gap: 50px;
      text-align: center;
      a {
        color: #706458;
        font-size: 34px;
        line-height: 25px;
        transition: opacity 0.3s linear;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  .close {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .isMenuOpen {
    right: 0;
  }
`;

export const InfoWrapper = styled.div`
  max-width: 60%;
  height: calc(100vh - 125px);
  max-height: calc(900px - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    max-width: 87%;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
    align-items: center;
  }
`;

export const PrimaryTitle = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 50px;
  font-weight: 300;
  line-height: 70px;
  letter-spacing: -0.4px;
  color: #a06056;
  margin-top: 50px;
  @media (max-width: 1024px) {
    font-size: 35px;
    line-height: 40px;
    letter-spacing: -0.3px;
    color: #fff;
  }
`;
export const SecondaryTitle = styled.h6`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  color: #a06056;
  @media (max-width: 1024px) {
    color: #fff;
  }
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 30.8px;
  color: #706458e5;
  margin-top: 20px;
  @media (max-width: 1024px) {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
`;
export const ScrollIconWrapper = styled.div`
  margin-top: 50px;
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    rect {
      stroke: #fff;
    }
    path {
      stroke: #fff;
    }
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 50px 30px;
  }
`;

export const Title = styled.h2`
  font-family: "Merriweather", serif;
  font-size: 55px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.6px;
  color: #706458;
  margin-bottom: 40px;
  max-width: 70%;
  flex: 1;
  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.3px;
  }
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 1024px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TextBlockWrapper = styled.div`
  h5 {
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.2px;
    color: #a06056;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: #706458;
  }
`;
