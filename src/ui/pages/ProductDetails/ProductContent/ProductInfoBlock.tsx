import React, { useState } from "react";
import Image from "next/image";
import StarIcon from "../../../../assets/details-page/icons/st.svg";
import Button from "../../../details-page-components/Button";
import { ProductInfoWrapper } from "./ProductContentStyle";
import { useMediaQuery } from "react-responsive";

const SIZE = [
  {
    id: 1,
    size: "106 cm (42)",
  },
  {
    id: 2,
    size: "121 cm (48)",
  },
  {
    id: 3,
    size: "139 cm (55)",
  },
  {
    id: 4,
    size: "164 cm (65)",
  },
  {
    id: 5,
    size: "1196 cm (77)",
  },
  {
    id: 6,
    size: "210 cm (83)",
  },
];

const ProductInfoBlock = () => {
  const rate = 4;
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [selectedSize, setSelectedSize] = useState(SIZE[0].size);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (id: number) => {
    const selectedSize = SIZE.find((size) => size.id === id);
    if (selectedSize) {
      setSelectedSize(selectedSize.size);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ProductInfoWrapper>
      <div className="basic-info">
        <p>
          brand: <span className="name">LG</span>
        </p>
        <p>
          Model: <span className="name">OLED42C2PSA:</span>
        </p>
        <p>
          Availability: <span className="name">Only 2 in Stock:</span>
        </p>
      </div>
      <div className="main-info">
        <h2>LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</h2>
        <div className="rate">
          {[...Array(rate)].map((_, index) => (
            <Image
              key={index}
              src={StarIcon}
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </div>
        <ul>
          <li className="name">
            α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
          </li>
          <li className="name">
            Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
          </li>{" "}
          <li className="name">Hands-free Voice Control, Always Ready</li>{" "}
          <li className="name">
            Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
          </li>{" "}
          <li className="name">
            Eye Comfort Display: Low-Blue Light, Flicker-Free
          </li>
        </ul>
        <div className="size-wrapper">
          {SIZE.map((size) => (
            <React.Fragment key={size.id}>
              <Button
                look="default"
                type="button"
                className={`${selectedSize === size.size ? "active" : ""}`}
                onClick={() => handleSizeClick(size.id)}
              >
                {size.size}
              </Button>
            </React.Fragment>
          ))}
        </div>
        <div className="price-wrapper">
          <div className="flex">
            <div>
              <p className="price-info">USD(incl. of all taxes)</p>
              <div className="prices">
                <p className="price">$600.72</p>
                <p className="old-price">$800.00</p>
              </div>
            </div>
            <div className="quantity-wrapper">
              <div onClick={handleDecrease}>-</div>
              <div>{quantity}</div>
              <div onClick={handleIncrease}>+</div>
            </div>
          </div>
          <div className="flex">
            <Button look="primary" type="button">
              Buy now
            </Button>
            <Button look="secondary" type="button">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="mobile-price-info">
          <p className="price-info">USD(incl. of all taxes)</p>
          <div className="flex">
            <p className="price">$600.72</p>
            <p className="old-price">$800.00</p>
          </div>
          <div className="flex">
            <div className="quantity-wrapper">
              <div onClick={handleDecrease}>-</div>
              <div>{quantity}</div>
              <div onClick={handleIncrease}>+</div>
            </div>
            <div className="flex">
              <Button look="primary" type="button">
                Buy now
              </Button>
              <Button look="secondary" type="button">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </ProductInfoWrapper>
  );
};
export default ProductInfoBlock;
