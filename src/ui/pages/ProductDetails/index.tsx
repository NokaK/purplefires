import DesktopHeader from "./DesktopHeader";
import { ProductDetailsContainer } from "./ProductDetailsStyles";
import RootLayout from "../../../layouts/RootLayout";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import ProductContent from "./ProductContent";

const ProductDetails = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <RootLayout>
      <ProductDetailsContainer>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
        <ProductContent />
      </ProductDetailsContainer>
    </RootLayout>
  );
};

export default ProductDetails;
