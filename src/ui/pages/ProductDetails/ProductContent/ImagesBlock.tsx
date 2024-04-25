import { ImagesWrapper } from "./ProductContentStyle";
import Image from "next/image";
import tvPicture from "../../../../assets/details-page/images/tv.png";
import tvPicture2 from "../../../../assets/details-page/images/tv2.png";
import tvPicture3 from "../../../../assets/details-page/images/tv3.png";
import tvPicture1 from "../../../../assets/details-page/images/tv1.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const IMAGES = [
  {
    id: 1,
    src: tvPicture,
  },
  {
    id: 2,
    src: tvPicture1,
  },
  {
    id: 3,
    src: tvPicture2,
  },
  {
    id: 4,
    src: tvPicture3,
  },
];
const ImagesBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [selectedImage, setSelectedImage] = useState(IMAGES[0].src);
  const handleImageClick = (id: number) => {
    const selectedImage = IMAGES.find((image) => image.id === id);
    if (selectedImage) {
      setSelectedImage(selectedImage.src);
    }
  };
  return (
    <ImagesWrapper>
      <div className="images">
        {isMobile ? (
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            slidesPerView={"auto"}
            speed={1000}
            scrollbar={{ draggable: true }}
            className="mySwiper"
          >
            {IMAGES.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className={`image ${
                    selectedImage === image.src ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(image.id)}
                >
                  <Image src={image.src} alt={"tv"} height={80} width={108} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {IMAGES.map((image) => (
              <div
                key={image.id}
                className={`image ${
                  selectedImage === image.src ? "active" : ""
                }`}
                onClick={() => handleImageClick(image.id)}
              >
                <Image src={image.src} alt={"tv"} height={80} width={108} />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="main-image">
        <Image src={selectedImage} alt={"tv"} layout="fill" />
        <p>*LG C2 42 (106cm) 4K Smart OLED evo TV</p>
      </div>
    </ImagesWrapper>
  );
};

export default ImagesBlock;
