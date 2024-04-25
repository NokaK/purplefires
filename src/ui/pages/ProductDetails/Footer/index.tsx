import { FooterWrapper } from "./FooterStyles";
import Facebook from "../../../../assets/details-page/icons/fb.svg";
import Whatsapp from "../../../../assets/details-page/icons/wa.svg";
import Instagram from "../../../../assets/details-page/icons/ig.svg";
import Youtube from "../../../../assets/details-page/icons/tb.svg";
import Image from "next/image";
import Link from "next/link";
import Location from "../../../../assets/details-page/icons/lc.svg";
import Phone from "../../../../assets/details-page/icons/mb.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-grid">
          <div className="item">
            <h6>About us</h6>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
              laoreet.{" "}
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank">
                <Image
                  src={Facebook}
                  layout="fixed"
                  alt="facebook"
                  height={30}
                  width={30}
                />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank">
                <Image
                  src={Whatsapp}
                  layout="fixed"
                  alt="whatsapp"
                  height={30}
                  width={30}
                />
              </a>
              <a href="https://instagram.com" target="_blank">
                <Image
                  src={Instagram}
                  layout="fixed"
                  alt="instagram"
                  height={30}
                  width={30}
                />
              </a>
              <a href="https://youtube.com" target="_blank">
                <Image
                  src={Youtube}
                  layout="fixed"
                  alt="youtube"
                  height={30}
                  width={30}
                />
              </a>
            </div>
          </div>
          <div className="item">
            <h6>Information</h6>
            <ul>
              <li>
                <Link href="/" className="text">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text">
                  Delivery information
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Sales
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Terms & Conditions
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  EMI Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6>ACCOUNT</h6>
            <ul>
              <li>
                <Link href="/" className="text">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/" className="text">
                  My Orders
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Returns
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Shipping
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/" className="text">
                  Account Details
                </Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6>STORE</h6>
            <ul>
              <li>
                <Link href="/" className="text">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link href="/" className="text">
                  Discounts
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Sale
                </Link>
              </li>{" "}
              <li>
                <Link href="/" className="text">
                  Contact
                </Link>
              </li>{" "}
            </ul>
          </div>

          <div className="item">
            <h6>Contact us</h6>
            <p className="text">If you have any query, please contact us</p>
            <p className="text red">needus24@gmail.com </p>
            <div className="info-wrapper">
              <Image
                src={Location}
                layout="fixed"
                alt="location"
                height={40}
                width={40}
              />
              <p>California, USA</p>
            </div>
            <div className="info-wrapper">
              <Image
                src={Phone}
                layout="fixed"
                alt="phone"
                height={40}
                width={40}
              />
              <p> +12012987481</p>
            </div>
          </div>
        </div>
        <div className="copy">Copyright. 2023 All Right Reserved</div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
