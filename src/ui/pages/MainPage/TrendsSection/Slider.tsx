import { SliderWrapper } from "./TrendsSectionStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import slide2 from "../../../../assets/landing-page/images/slider2.png";
import slide3 from "../../../../assets/landing-page/images/slider3.png";
import slide4 from "../../../../assets/landing-page/images/slider4.png";
import slide5 from "../../../../assets/landing-page/images/slider5.png";
import PrevIcon from "../../../../assets/landing-page/icons/pr.svg";
import NextIcon from "../../../../assets/landing-page/icons/nx.svg";

const SLIDES = [
  {
    id: 1,
    src: slide4,
  },
  {
    id: 2,
    src: slide2,
  },
  {
    id: 3,
    src: slide3,
  },
  {
    id: 4,
    src: slide4,
  },
  {
    id: 5,
    src: slide5,
  },
  {
    id: 6,
    src: slide3,
  },
  {
    id: 7,
    src: slide3,
  },
  {
    id: 8,
    src: slide2,
  },
];
const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        className="mySwiper"
      >
        {SLIDES.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.src} layout="fixed" alt="slide" width={250} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <div className="extra-content">
          <h3>Inspirations</h3>
          <p>
            Our experts are keen to stay on top of trends in order to offer you
            new inspirations for your interior and exterior every day. Remember
            that to inspire you we have to inspire ourselves and we want to
            share that with you.
          </p>
          <div>
            <div className="buttons">
              <div className="custom-prev">
                <Image src={PrevIcon} alt="prev" />
              </div>
              <div className="custom-next">
                <Image src={NextIcon} alt="next" />
              </div>
            </div>
            <div className="slider-length">01/0{SLIDES.length}</div>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
