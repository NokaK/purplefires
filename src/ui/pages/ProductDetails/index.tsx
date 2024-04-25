import DesktopHeader from "./DesktopHeader";
import { ProductDetailsContainer } from "./ProductDetailsStyles";
import RootLayout from "../../../layouts/RootLayout";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import ProductContent from "./ProductContent";
import ProductsDescription from "./ProductsDescription";
import RelatedProducts from "./RelatedProducts";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const ProductDetails = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <RootLayout>
      <ProductDetailsContainer>
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
        <ProductContent />
        <ProductsDescription />
        <RelatedProducts />
        <Subscribe />
        <Footer />
      </ProductDetailsContainer>
    </RootLayout>
  );
};

export default ProductDetails;
