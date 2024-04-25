import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 296px;

  input {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 24.2px;
    color: #969696;
    padding: 15px;
    border: none;

    background: transparent;

    &::placeholder {
      color: #969696;
    }
  }
  input.focus {
    border: transparent;
  }
  & input:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
    border: transparent;
  }
  @media (max-width: 768px) {
    min-width: 200px;
    input {
      font-size: 12px;
      padding: 10px;
    }
  }
`;

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  background?: string;
}

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  name,
  background,
}: InputProps) => {
  return (
    <InputWrapper>
      <input
        style={{ background: background }}
        className={`${value && "focus"}`}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
