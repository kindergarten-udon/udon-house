import React, { useRef, useState, useEffect } from "react";
import FirstMain from "components/Mains/FirstMain";
import SecondMain from "components/Mains/SecondMain";
import ThirdMain from "components/Mains/ThirdMain";
import gsap from "gsap";
import { FullPage, Slide } from "react-full-page/lib";
import "./main.css";
import Footer from "components/Footer/Footer";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Main = () => {
  const swiperRef = useRef(null);
  // gsap.to(
  //   ".test3", { x: 100, opacity: 1, duration: 1, stagger: 0.2 }
  // )
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex);
  };
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const slideTranslateX = swiperInstance.getTranslate(slideIndex);
    console.log(slideTranslateX);
    // if (slideIndex === 1 || 2) {
    //   gsap.to({ x: 100, opacity: 1, duration: 1, stagger: 0.2 });
    // }
  }, []);
  return (
    <>
      {/* <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <FirstMain />
        </Slide>
        <Slide>
          <SecondMain />
        </Slide>
        <Slide>
          <ThirdMain />
        </Slide>
      </FullPage> */}
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        className="h-screen"
        modules={[Navigation, Mousewheel, Pagination, Scrollbar, A11y]}
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        mousewheel
        keyboard={true}
        slidesPerView={1}
        speed={500}
        direction="vertical"
      >
        <SwiperSlide>
          <FirstMain />
        </SwiperSlide>
        <SwiperSlide>
          <SecondMain />
        </SwiperSlide>
        <SwiperSlide>
          <ThirdMain />
        </SwiperSlide>
        <Footer />
      </Swiper>
      <Footer />
    </>
  );
};

export default Main;
