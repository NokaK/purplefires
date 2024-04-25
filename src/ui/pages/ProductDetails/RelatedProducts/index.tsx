import { RelatedProductsWrapper, Tag } from "./RelatedProductsStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide2 from "../../../../assets/details-page/images/slider2.png";
import slide3 from "../../../../assets/details-page/images/slider3.png";
import slide1 from "../../../../assets/details-page/images/slider1.png";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Button from "../../../details-page-components/Button";
import CartIcon from "../../../../assets/details-page/icons/ct2.svg";
import Heart from "../../../../assets/details-page/icons/fh.svg";
const SLIDES = [
  {
    id: 1,
    src: slide1,
    tag: "new",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
    isFavorite: true,
  },
  {
    id: 2,
    src: slide2,
    tag: "sale",
    name: "TV Collection",
    price: "$200",
    salePercent: "- 20%",
  },
  {
    id: 3,
    src: slide3,
    tag: "hot",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
  },
  {
    id: 4,
    src: slide2,
    tag: "warranty",
    name: "TV Collection",
    price: "$200",
    warranty: "2 Years Warranty",
  },
  {
    id: 5,
    src: slide1,
    tag: "new",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
    isFavorite: true,
  },
  {
    id: 6,
    src: slide3,
    tag: "hot",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
    isFavorite: true,
  },
  {
    id: 7,
    src: slide3,
    tag: "new",
    name: "TV Collection",
    price: "$200",
  },
  {
    id: 8,
    src: slide2,
    tag: "sale",
    name: "TV Collection",
    price: "$200",
    oldPrice: "$300",
    salePercent: "- 10%",
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
                <Tag className={item.tag}>
                  {item.tag === "sale" && item.salePercent}
                  {item.tag === "warranty" && item.warranty}
                  {item.tag === "new" && "New"}
                  {item.tag === "hot" && "Hot"}
                </Tag>
                {item.isFavorite && (
                  <div className="favorite">
                    <Image
                      src={Heart.src}
                      layout="fixed"
                      alt="favorite"
                      width={30}
                      height={30}
                    />
                  </div>
                )}
                <div className="image">
                  <Image src={item.src} layout="fill" alt="slide" />
                </div>

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
