import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/landing-page/icons/arr.svg";
import styled from "styled-components";

const LinkWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.3px;

  cursor: pointer;
  transition: opacity 0.3s linear;
  color: #a06056;
  &:hover {
    opacity: 0.5;
  }
`;
interface TextLinkProps {
  text: string;
  href: string;
}

const TextLink = ({ text, href }: TextLinkProps) => {
  return (
    <Link href={href}>
      <LinkWrapper>
        {text}
        <Image
          src={Arrow.src}
          layout="fixed"
          alt="arrow"
          width={20}
          height={20}
        />
      </LinkWrapper>
    </Link>
  );
};
export default TextLink;
