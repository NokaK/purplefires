import Link from "next/link";
import Logo from "../../../landing-page-components/Logo";
import { FooterWrapper, FlexWrapper, BottomWrapper } from "./FooterStyles";
import Image from "next/image";
import Planet from "../../../../assets/landing-page/images/footerpicture.png";
import Facebook from "../../../../assets/landing-page/icons/fb.svg";
import Instagram from "../../../../assets/landing-page/icons/ig.svg";
import Twitter from "../../../../assets/landing-page/icons/tw.svg";
import LinkedIn from "../../../../assets/landing-page/icons/lnkd.svg";
import TextLink from "../../../../ui/landing-page-components/TextLink";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FlexWrapper>
          <div className="logo">
            <Logo color="#534B42" />
          </div>

          <div className="list">
            <h5>Products</h5>
            <ul>
              <li>
                <Link href="/details">Furniture</Link>
              </li>
              <li>
                <Link href="/details">Decoration</Link>
              </li>
              <li>
                <Link href="/details">Storage</Link>
              </li>
              <li>
                <Link href="/details">Baby and child</Link>
              </li>
              <li>
                <Link href="/details">Connected home</Link>
              </li>
            </ul>
          </div>

          <div className="list">
            <h5>Rooms</h5>
            <ul>
              <li>
                <Link href="/details">Living room</Link>
              </li>
              <li>
                <Link href="/details">Dining room</Link>
              </li>
              <li>
                <Link href="/details">Cooked</Link>
              </li>
              <li>
                <Link href="/details">Bedroom</Link>
              </li>
              <li>
                <Link href="/details">Bathroom</Link>
              </li>
              <li>
                <Link href="/details">Office</Link>
              </li>
              <li>
                <Link href="/details">Laundry</Link>
              </li>
              <li>
                <Link href="/details">Garage</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h5>Services</h5>
            <ul>
              <li>
                <Link href="/details">Click and collect</Link>
              </li>
              <li>
                <Link href="/details">Conception</Link>
              </li>
              <li>
                <Link href="/details">Conception</Link>
              </li>
              <li>
                <Link href="/details">Advices</Link>
              </li>
              <li>
                <Link href="/details">Gift card</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h5>About</h5>
            <ul>
              <li>
                <Link href="/details">Our story</Link>
              </li>
              <li>
                <Link href="/details">Our story</Link>
              </li>
              <li>
                <Link href="/details">Our partners</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h5>We respect our planet</h5>
            <div className="footer-image">
              <Image
                src={Planet.src}
                layout="fixed"
                alt="planet"
                height={160}
                width={235}
              />
              <p>
                We’re taking positive steps to reduce our impact on the planet.
                For us, that means retailing responsibly.
              </p>
              <TextLink text="Learn more" href="/details" />
            </div>
          </div>
        </FlexWrapper>
        <BottomWrapper>
          <p className="secondary-text">© 2021 Agence Dnd</p>
          <ul className="flex social">
            <li>
              <a href="https://facebook.com" target="_blank">
                <Image
                  src={Facebook}
                  layout="fixed"
                  alt="facebook"
                  height={32}
                  width={32}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <Image
                  src={Twitter}
                  layout="fixed"
                  alt="twitter"
                  height={32}
                  width={32}
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <Image
                  src={Instagram}
                  layout="fixed"
                  alt="instagram"
                  height={32}
                  width={32}
                />
              </a>
            </li>

            <li>
              <a href="https://linkedin.com" target="_blank">
                <Image
                  src={LinkedIn}
                  layout="fixed"
                  alt="linkedin"
                  height={32}
                  width={32}
                />
              </a>
            </li>
          </ul>
          <ul className="flex links">
            <li>
              <Link href="/details" className="secondary-text">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/details" className="secondary-text">
                Term of service
              </Link>
            </li>
            <li>
              <Link href="/details" className="secondary-text">
                Language
              </Link>
            </li>
          </ul>
        </BottomWrapper>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
