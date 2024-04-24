import { useState, FormEvent } from "react";
import Button from "../../../landing-page-components/Button";
import TextLink from "../../../landing-page-components/TextLink";
import {
  SubscribeWrapper,
  TextContent,
  SubscribeForm,
} from "./TrendsSectionStyles";
import Input from "../../../landing-page-components/Input";

const TrendsSectionWrapper = () => {
  const [state, setState] = useState("loaded");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribeClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setIsSubscribed(true);
    setTimeout(() => {
      setState("loaded");
      setEmail("");
      setIsSubscribed(false);
    }, 2000);
  };

  return (
    <SubscribeWrapper>
      <TextContent>
        <h3>Be aware of the latest trends</h3>
        <p>Stay informed of new trends, but also of our various offers.</p>
        <TextLink href="/details" text="Learn more" />
      </TextContent>
      <SubscribeForm onSubmit={handleSubscribeClick}>
        <div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required={true}
            placeholder="email@address.com"
          />
          <Button type="submit" disabled={state === "loading"}>
            Subscribe
          </Button>
        </div>

        <p className={`${isSubscribed ? "sent" : ""} `}>Email subscribed</p>
      </SubscribeForm>
    </SubscribeWrapper>
  );
};
export default TrendsSectionWrapper;
