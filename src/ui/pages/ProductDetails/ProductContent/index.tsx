import {
  ProductDetailsWrapper,
  InfoWrapper,
  ProductContentWrapper,
} from "./ProductContentStyle";
import React from "react";
import ImagesBlock from "./ImagesBlock";
import ProductInfoBlock from "./ProductInfoBlock";

const ProductContent = () => {
  return (
    <ProductDetailsWrapper>
      <InfoWrapper>
        <h1>TV Collection</h1>
        <p>Home / Product / Tv Collection</p>
      </InfoWrapper>
      <ProductContentWrapper>
        <div className="container">
          <div className="grid-wrapper">
            <ImagesBlock />
            <ProductInfoBlock />
          </div>
        </div>
      </ProductContentWrapper>
    </ProductDetailsWrapper>
  );
};
export default ProductContent;
