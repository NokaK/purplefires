import { MobileHeaderContainer } from "./MobileHeaderStyles";
import BurgerIcon from "../../../../assets/details-page/icons/bi.svg";
import Logo from "../../../../assets/details-page/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../../../../assets/details-page/icons/bs.svg";
import HeartIcon from "../../../../assets/details-page/icons/mh.svg";
import ProfileIcon from "../../../../assets/details-page/icons/pf.svg";
import CartIcon from "../../../details-page-components/CartIcon";

const MobileHeader = () => {
  return (
    <div className="container">
      <MobileHeaderContainer>
        <div className="burger-icon">
          <Image src={BurgerIcon} alt="logo" width={22} height={22} />
        </div>
        <Link href="/details" className="details-logo">
          <Image src={Logo} alt="logo" width={65} height={19} />
        </Link>
        <div className="icons-wrapper">
          <div className="search-icon">
            <Image src={SearchIcon} alt="search" width={20} height={20} />
          </div>
          <div className="profile-icon">
            <Image src={ProfileIcon} alt="profile" width={20} height={20} />
          </div>
          <div className="heart-icon">
            <Image src={HeartIcon} alt="heart" width={20} height={20} />
          </div>
          <CartIcon size={20} />
        </div>
      </MobileHeaderContainer>
    </div>
  );
};
export default MobileHeader;
