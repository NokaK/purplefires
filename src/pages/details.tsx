import React from "react";
import dynamic from "next/dynamic";

const DynamicContent = dynamic(() => import("../ui/pages/ProductDetails"), {
  ssr: false,
});

const ProductDetailsPage: React.FC = () => {
  return <DynamicContent />;
};

export default ProductDetailsPage;
