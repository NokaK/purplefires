import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 296px;

  input {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: #706458e5;
    padding: 15px;
    border: none;
    border-radius: 1px;
    background: #f3eee84d;
    border-radius: 1px;

    &::placeholder {
      color: #706458e5;
    }
  }
  input.focus {
    border: 1px solid #706458;
  }
  &:focus-visible {
    outline: none;
    border: 1px solid #706458;
  }
`;

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  required: boolean;
}

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  name,
  required,
}: InputProps) => {
  return (
    <InputWrapper>
      <input
        className={`${value && "focus"}`}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
