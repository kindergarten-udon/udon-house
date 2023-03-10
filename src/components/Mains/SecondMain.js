import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SecondMain = () => {
  const babyImg = [
    { src: "/baby1.jpg", alt: "애기사진" },
    { src: "/baby2.jpg", alt: "애기사진" },
    { src: "/baby3.jpg", alt: "애기사진" },
    { src: "/baby4.jpg", alt: "애기사진" },
    { src: "/baby5.jpg", alt: "애기사진" },
    { src: "/baby6.jpg", alt: "애기사진" },
    { src: "/baby7.jpg", alt: "애기사진" },
    { src: "/baby8.jpg", alt: "애기사진" },
  ];

  return (
    <div className="relative w-full h-screen snap-center">
      <div className="absolute bottom-1/4 left-0 right-0 w-full">
        <Swiper
          className="w-full rounded-md"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={5}
          spaceBetween={5}
          navigation={{ slidesPerView: 5 }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {babyImg.map((item) => {
            return (
              <SwiperSlide>
                <img className=" w-full h-80 object-cover rounded-3xl" src={item.src} alt={item.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SecondMain;
