import RootLayout from "../../../layouts/RootLayout";
import { MainPageWrapper } from "./MainPageStyles";
import HeroSection from "./HeroSection";
import TrendsSection from "./TrendsSection";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <RootLayout>
      <MainPageWrapper>
        <HeroSection />
        <TrendsSection />
        <Footer />
      </MainPageWrapper>
    </RootLayout>
  );
};
export default MainPage;
