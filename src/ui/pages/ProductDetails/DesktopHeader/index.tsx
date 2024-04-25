import Link from "next/link";
import Select from "../../../details-page-components/Select";
import {
  HeaderWrapper,
  HeaderTopWrapper,
  FlexWrapper,
  MiddleBlockWrapper,
  NavigationBlockWrapper,
} from "./HeaderStyles";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../assets/details-page/icons/logo.svg";
import Input from "../../../details-page-components/Input";
import SearchIcon from "../../../../assets/details-page/icons/srch.svg";
import HeartIcon from "../../../../assets/details-page/icons/hrt.svg";
import MenuIcon from "../../../../assets/details-page/icons/mn.svg";
import ChatIcon from "../../../../assets/details-page/icons/cht.svg";
import CartIcon from "../../../details-page-components/CartIcon";
const LANGUAGES = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
  { value: "fr", label: "FR" },
  { value: "de", label: "DE" },
  { value: "it", label: "IT" },
  { value: "pt", label: "pt" },
];

const CURRENCIES = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  { value: "JPY", label: "JPY" },
  { value: "CAD", label: "CAD" },
  { value: "AUD", label: "AUD" },
];
const CATEGORY = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
];
const NAVIGATION = [
  { path: "/", name: "Home" },
  { path: "/", name: "About" },
  { path: "/", name: "Product" },
  { path: "/", name: "Pages" },
  { path: "/", name: "Contact" },
];

const DesktopHeader = () => {
  return (
    <HeaderWrapper>
      <TopBlock />
      <MiddleBlock />
      <NavigationBlock />
    </HeaderWrapper>
  );
};
export default DesktopHeader;

const TopBlock = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].value);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0].value);

  return (
    <HeaderTopWrapper>
      <div className="container">
        <FlexWrapper>
          <p>Welcome to Needus & Get the best product</p>
          <div className="select-wrapper">
            <Select
              options={LANGUAGES}
              value={selectedLanguage}
              onChange={(value: string) => {
                setSelectedLanguage(value);
              }}
              design="light"
            />
            <span className="divider"></span>
            <Select
              options={CURRENCIES}
              value={selectedCurrency}
              onChange={(value: string) => {
                setSelectedCurrency(value);
              }}
              design="light"
            />
          </div>
        </FlexWrapper>
      </div>
    </HeaderTopWrapper>
  );
};

const MiddleBlock = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY[0].value);
  return (
    <MiddleBlockWrapper>
      <div className="container">
        <FlexWrapper>
          <Link href="/details">
            <Image src={Logo} alt="logo" width={168} height={50} />
          </Link>
          <div className="filters">
            <div className="search-wrapper">
              <Input
                placeholder="Search Products"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
              />
              <div className="search-icon">
                <Image
                  src={SearchIcon}
                  alt="search"
                  width={24}
                  height={24}
                  layout="fixed"
                />
              </div>
            </div>
            <div className="select-wrapper">
              <Select
                options={CATEGORY}
                value={selectedCategory}
                onChange={(value: string) => {
                  setSelectedCategory(value);
                }}
                design="dark"
              />
              <div className="action-buttons">
                <span>Login</span>
                <span>Signup</span>
              </div>
            </div>
          </div>
          <div className="icons">
            <Image
              src={HeartIcon}
              alt="heart"
              width={24}
              height={24}
              layout="fixed"
            />
            <CartIcon size={24} />
          </div>
        </FlexWrapper>
      </div>
    </MiddleBlockWrapper>
  );
};

const NavigationBlock = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY[0].value);
  return (
    <NavigationBlockWrapper>
      <div className="dropdown">
        <Image
          src={MenuIcon}
          alt="menu"
          width={30}
          height={30}
          layout="fixed"
        />
        <Select
          options={CATEGORY}
          value={selectedCategory}
          onChange={(value: string) => {
            setSelectedCategory(value);
          }}
          design="light"
        />
      </div>
      <nav>
        <ul>
          {NAVIGATION.map((item, index) => (
            <li key={index} className="li">
              <Link href={item.path}>
                {item.name}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_750)">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_750">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="chat-wrapper">
        <Image
          src={ChatIcon}
          alt="chat"
          width={40}
          height={40}
          layout="fixed"
        />
        <div>
          <span className="contact">Contact US 24/7</span>
          <span className="number">+12012987481</span>
        </div>
      </div>
    </NavigationBlockWrapper>
  );
};
