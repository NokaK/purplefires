import styled from "styled-components";

const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  max-width: 175px;
  max-height: 60px;
  padding: 19px 51px 19px 51px;
  text-align: center;
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 30px;
  &.default {
    color: #6f6f6f;
    background-color: #fff;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #e73c17;
    }
  }
  &.active {
    border: 1px solid #e73c17;
  }
  &.primary {
    color: #fff;
    border: 1px solid #e73c17;
    background-color: #e73c17;
    &:hover {
      background-color: #c22900;
    }
  }
  &.secondary {
    color: #e73c17;
    background-color: #fff;
    border: 1px solid #e73c17;
    &:hover {
      background-color: #f3f3f3;
    }
  }
  &.cart {
    color: #6f6f6f;
    background-color: #fff;
    padding: 10px 50px;
    &:hover {
      background-color: #f3f3f3;
    }
  }
  &.subscribed {
    background-color: #191919;
    color: #fff;
  }
  @media (max-width: 1024px) {
    min-width: 120px;
    padding: 10px;
  }
`;

interface ButtonProps {
  type: "button" | "submit";
  look: "default" | "primary" | "secondary" | "cart" | "subscribed";
  onClick?: () => void | undefined;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ type, onClick, className, children, look }: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={[look, className].join(" ")}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
