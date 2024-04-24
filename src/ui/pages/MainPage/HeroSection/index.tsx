import Navigation from "./Navigation";
import {
  HeroWrapper,
  BlockWrapper,
  ImageWrapper,
  HeaderWrapper,
  ChatIconWrapper,
  InfoWrapper,
  PrimaryTitle,
  SecondaryTitle,
  Paragraph,
  ScrollIconWrapper,
  TextWrapper,
  Title,
  TextContent,
} from "./HeroSectionStyles";
import Image from "next/image";
import HeroImage from "../../../../assets/images/hero-image.png";
import Contact from "../../../../assets/icons/contact.svg";
import ScrollDown from "../../../../assets/icons/scroll-down.svg";
import WhiteScrollDown from "../../../../assets/icons/White-Scroll-Down.svg";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import TextLink from "../../../../ui/landing-page-components/TextLink";
import TextBlock from "./TextBlock";
import React from "react";

const TEXT_CONTENT = [
  {
    id: 1,
    title: "Our Advices",
    content:
      "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.",
  },
  {
    id: 2,
    title: "Click and Collect",
    content:
      "Adapted and contactless. Free from € 200 of purchases in stores offering the service.",
  },
  {
    id: 3,
    title: "Conception Service",
    content:
      "Personalized service with an expert advisor for your interior and exterior decoration or layout projects.",
  },
  {
    id: 4,
    title: "Installation Service",
    content:
      "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.",
  },
];
const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <HeroWrapper>
      <div className="container">
        <BlockWrapper>
          <HeaderWrapper>
            <Link href="/" className="logo">
              antic
            </Link>
            <Navigation />
          </HeaderWrapper>
          <InfoWrapper>
            <SecondaryTitle>HOME DESIGN</SecondaryTitle>
            <PrimaryTitle>Elegance for Interiors & Exteriors</PrimaryTitle>
            <Paragraph>
              We provide everyone with modern, trendy, quality furniture
            </Paragraph>
            <ScrollIconWrapper onClick={handleScrollClick}>
              <Image
                src={isMobile ? WhiteScrollDown.src : ScrollDown.src}
                layout="fixed"
                alt="scroll-icon"
                height={50}
                width={50}
              />
            </ScrollIconWrapper>
          </InfoWrapper>
        </BlockWrapper>
        <ImageWrapper>
          <Image src={HeroImage.src} layout="fill" alt="hero-image" />
          <div className="overlay"></div>
          <ChatIconWrapper>
            <Image
              src={Contact.src}
              layout="fixed"
              alt="chat-icon"
              height={50}
              width={50}
            />
          </ChatIconWrapper>
        </ImageWrapper>

        <TextWrapper>
          <div>
            <Title>We stay by your side to design your projects</Title>
            <TextLink text="Find out more " href="/details" />
          </div>

          <TextContent>
            {TEXT_CONTENT.map((item) => (
              <React.Fragment key={item.id}>
                <TextBlock title={item.title} content={item.content} />
              </React.Fragment>
            ))}
          </TextContent>
        </TextWrapper>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
