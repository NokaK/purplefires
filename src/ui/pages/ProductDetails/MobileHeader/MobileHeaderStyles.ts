import styled from "styled-components";

export const MobileHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  .burger-icon {
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e73c17;
  }
  .details-logo {
    position: relative;
    left: 40px;
  }
  .icons-wrapper {
    display: flex;
    gap: 10px;
  }
`;
