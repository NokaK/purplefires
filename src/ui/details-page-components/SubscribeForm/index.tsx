import styled from "styled-components";
import Input from "../Input";
import React, { useState } from "react";
import Button from "../Button";

const SubscribeFormWrapper = styled.form`
  display: flex;
  align-items: stretch;
`;
const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [buttonState, setButtonState] = useState("SUBSCRIBE");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonState("SUBSCRIBED!");
    setTimeout(() => {
      setButtonState("SUBSCRIBE");
      setEmail("");
    }, 3000);
  };
  return (
    <SubscribeFormWrapper onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        background="#fff"
      />
      <Button
        type="submit"
        look={buttonState === "SUBSCRIBE" ? "primary" : "subscribed"}
      >
        {buttonState}
      </Button>
    </SubscribeFormWrapper>
  );
};

export default SubscribeForm;
