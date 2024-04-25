import styled from "styled-components";

export const HeaderWrapper = styled.header``;
export const HeaderTopWrapper = styled.div`
  background-color: #2f333a;
  padding: 10px 0;
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 19.36px;
    color: #ffffff;
  }
  .select-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    .divider {
      width: 1px;
      height: 20px;
      background-color: #fff;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const MiddleBlockWrapper = styled.div`
  padding: 30px 0;
  .filters {
    display: flex;
    align-items: baseline;
    border: 2px solid #f0f0f0;
    padding: 2px 0;
    .search-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-right: 2px solid #f0f0f0;
      .search-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 66px;
        height: 63px;
        background-color: #2f333a;
      }
    }
    .select-wrapper {
      width: 320px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .action-buttons {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          font-family: "Inter", sans-serif;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #191919;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          line-height: 24.2px;
          &:first-child {
            &::after {
              display: block;
              content: "";
              width: 1px;
              height: 20px;
              background-color: #f0f0f0;
            }
          }
        }
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const NavigationBlockWrapper = styled.div`
  display: flex;
  .dropdown {
    min-width: 220px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    background-color: #e73c17;
    padding: 10px 20px;
  }
  nav {
    flex: 2;
    background-color: #2f333a;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      li {
        a {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: "Inter", sans-serif;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.36px;
          color: #ffffff;
          transition: all 0.3s linear;
          path {
            transition: all 0.3s linear;
          }
          &:hover {
            color: #e73c17;
            path {
              stroke: #e73c17;
            }
          }
        }
      }
    }
  }
  .chat-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;
    background-color: #2f333a;
    gap: 20px;
    margin-left: 2px;
    color: #ffffff;
    .contact {
      font-size: 15px;
      font-weight: 300;
      line-height: 18.15px;
      text-align: center;
    }
    .number {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.78px;
    }
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
