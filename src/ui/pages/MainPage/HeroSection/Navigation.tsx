import Link from "next/link";
import {
  NavigationWrapper,
  MobileNavigationWrapper,
} from "./HeroSectionStyles";
import { NAV_DATA, NavDataProps } from "./NavData";
import Menu from "../../../../assets/landing-page/icons/mn.svg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };
  return (
    <>
      {isMobile ? (
        <MobileNavigationWrapper>
          <div className="menu" onClick={handleMenuClick}>
            <Image
              src={Menu.src}
              layout="fixed"
              alt="menu-icon"
              height={12}
              width={24}
            />
          </div>

          <div
            className={`mobile-menu
            ${isMenuOpen ? "isMenuOpen" : ""}
            `}
          >
            <div className="close" onClick={() => setIsMenuOpen(false)}>
              X
            </div>
            <ul>
              {NAV_DATA.map((item: NavDataProps) => (
                <li key={item.id}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </MobileNavigationWrapper>
      ) : (
        <NavigationWrapper>
          <ul>
            {NAV_DATA.map((item: NavDataProps) => (
              <li key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </NavigationWrapper>
      )}
    </>
  );
};
export default Navigation;
