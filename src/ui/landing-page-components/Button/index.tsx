import styled from "styled-components";

const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.3px;
  text-align: center;
  padding: 15px 30px;
  background: #534b42;
  color: #ffffff;
  border-radius: 1px;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
`;

interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void | undefined;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ type, onClick, disabled, children }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} type={type} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
