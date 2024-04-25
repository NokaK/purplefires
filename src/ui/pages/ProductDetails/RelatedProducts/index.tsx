import { RelatedProductsWrapper } from "./RelatedProductsStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide2 from "../../../../assets/details-page/images/slider2.png";
import slide3 from "../../../../assets/details-page/images/slider3.png";
import slide1 from "../../../../assets/details-page/images/slider1.png";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Button from "../../../details-page-components/Button";
import CartIcon from "../../../../assets/details-page/icons/Cart2.svg";
const SLIDES = [
  {
    id: 1,
    src: slide1,
    tag: "New",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
  {
    id: 2,
    src: slide2,
    tag: "Sale",
    name: "TV Collection",
    price: "$200",
  },
  {
    id: 3,
    src: slide3,
    tag: "Hot",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
  {
    id: 4,
    src: slide2,
    tag: "Warranty",
    name: "TV Collection",
    price: "$200",
  },
  {
    id: 5,
    src: slide1,
    tag: "New",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
  {
    id: 6,
    src: slide3,
    tag: "Hot",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
  {
    id: 7,
    src: slide3,
    tag: "New",
    name: "TV Collection",
    price: "$200",
  },
  {
    id: 8,
    src: slide2,
    tag: "Sale",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
];
const RelatedProducts = () => {
  return (
    <RelatedProductsWrapper>
      <div className="container">
        {" "}
        <h2>Related Products</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          speed={1000}
          loop
          scrollbar={{ draggable: true }}
          className="swiper"
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {SLIDES.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <Image src={item.src} layout="fill" alt="slide" />
                <div className="button-wrapper">
                  <Button look="cart" type="button">
                    <Image
                      src={CartIcon.src}
                      layout="fixed"
                      alt="cart"
                      width={18}
                      height={18}
                    />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <h6>{item.name}</h6>
              <div className="price">
                <p>{item.price}</p>
                {item.oldPrice && <p className="old-price">{item.oldPrice}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </RelatedProductsWrapper>
  );
};

export default RelatedProducts;
