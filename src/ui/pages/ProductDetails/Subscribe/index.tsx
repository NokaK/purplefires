import Image from "next/image";
import { SubscribeWrapper } from "./SubscribeStyles";
import SubscribePicture from "../../../../assets/details-page/images/Subscribe.png";
import SubscribeForm from "../../../details-page-components/SubscribeForm";

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <div className="overlay"></div>
      <Image src={SubscribePicture.src} alt="subscribe" layout="fill" />
      <div className="container">
        <div className="content">
          <div>
            <h4>Join our newsletter and get offers</h4>
            <p>Sign up our newsletter</p>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </SubscribeWrapper>
  );
};

export default Subscribe;
