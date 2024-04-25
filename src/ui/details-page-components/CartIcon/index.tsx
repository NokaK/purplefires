import styled from "styled-components";
import Cart from "../../../assets/details-page/icons/ct.svg";
import MobileCart from "../../../assets/details-page/icons/mc.svg";
import Image from "next/image";

const CartIconWrapper = styled.div`
  position: relative;
  &::after {
    content: "6";
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: #e23000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CartIcon = ({ size }: { size: number }) => {
  return (
    <CartIconWrapper>
      <Image
        src={size === 20 ? MobileCart : Cart}
        alt="cart"
        width={size}
        height={size}
        layout="fixed"
      />
    </CartIconWrapper>
  );
};
export default CartIcon;
