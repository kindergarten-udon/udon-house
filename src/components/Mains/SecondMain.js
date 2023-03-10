import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full h-screen snap-center bg-light-yellow-color">
      <img className="absolute right-0" src="/main2.svg" />
      <h1 className="absolute top-40 pl-5 flex flex-col text-left font-bold lg:leading-loose lg:text-4xl leading-loose text-3xl">
        함께 나누고 <br />
        함께 성장하는 <span className="text-btn-green-color">우리 동네 어린이집</span>
        <p className=" lg:leading-loose lg:text-base leading-loose  text-sm">
          서울 내 수많은 어린이집 중 가깝고,확실한 정보를 제공하는 <span className="text-btn-green-color">우동집</span>에서 우리아이 어린이집을 찾아보세요
        </p>
      </h1>
      <div className="absolute bottom-20 left-0 right-0 w-full">
        <Swiper
          className="w-full rounded-md"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={4}
          spaceBetween={10}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {babyImg.map((item, index) => {
            return (
              <SwiperSlide key={index} className="[&:nth-child(1)]:pl-5 [&:nth-child(8)]:pr-5">
                <img className=" drop-shadow-lg hover:scale-105  w-full h-60 object-cover rounded-3xl" src={item.src} alt={item.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button ref={prevRef} className=" text-black text-3xl px-2" type="button">
          Prev
        </button>
        <button ref={nextRef} className="text-black text-3xl px-2" type="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondMain;
